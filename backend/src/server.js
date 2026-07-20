import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ora from 'ora';
import User from './models/User.js';

dotenv.config();

const PORT = 3000;
const app = express();

app.use(express.json());

const conectarBanco = async () => {

    try {
        const spinner = ora('Conectando ao banco...').start()
        await mongoose.connect(process.env.DATABASE_URI)
        spinner.succeed('Conectado ao banco!')

    } catch (error) { console.log(`Ocorreu um erro de conexão: ${error}`) }
};


app.get('/', (req, res) => {
    res.send('O servidor com mongoose está funcionando!')
});

app.get('/search', async (req, res) => {

    const escapeRegex = (value) => { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }
    const term = escapeRegex(req.query.term || '')

    const search = User.find({
        //'$or' faz com que o valor buscado satisfaça pelo menos uma dos campos
        $or: [
            { name: { $regex: term, $options: 'i' } },
            { email: { $regex: term, $options: 'i' } },
            { phone: { $regex: term, $options: 'i' } },
            { age: { $regex: term, $options: 'i' } }
        ]
    }, 'email name phone age')
    try {
        const results = await search.exec()
        results.length === 0
            ? res.send('nenhum resultado encontrado')
            : res.json(results)

    } catch (error) { `Erro ao buscar nome: ${error}` }

})

app.post('/insert', async (req, res) => {

    const checkEmail = User.find({ email: req.body.email })
    const emailExistente = await checkEmail.exec()

    try {
        if (emailExistente.length === 0) {

            const newUser = await User.create(req.body)
            await newUser.save()
            res.json(`Usuario ${req.body.name} cadastrado!`)
        } else {
            throw new Error('E-mail já cadastrado!')
        }

    } catch (error) {
        res.send(`Erro ao criar novo usuário: ${error.message}`)
    }
});

app.patch('/update', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.body.id, req.body.data);
        res.send('Alterações feitas!')
    } catch (error) {
        res.send(`Erro ao atualizar: ${error}`)
    }
})

app.delete('/delete', async (req, res) => {

    const idsArray = req.body.ids;
    const namesQuery = User.find({ _id: { $in: idsArray } }).select('name -_id');
    const namesArray = await namesQuery.exec()

    try {
        await User.deleteMany({ _id: { $in: idsArray } })
        const message = () => {
            let completeLog = { "deleted": [] };
            for (let i = 0; i < idsArray.length; i++) {
                let line = namesArray[i].name
                completeLog.deleted.push(line)
            }
            return completeLog
        }

        res.send(message())

    } catch (error) {
        res.send(`Erro ao deletar usuários: ${error}`)
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    conectarBanco();
})
