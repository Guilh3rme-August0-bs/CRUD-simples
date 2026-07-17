import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ora from 'ora';
import User from './User.js';

dotenv.config();

const PORT = 3000;
const app = express();

//middleware para tratar os dados como json
app.use(express.json());

const conectarBanco = async () => {
    try {

        //tratamento de loading com a biblioteca 'ora'
        const spinner = ora('Conectando ao banco...').start()

        //conectar ao banco pela url
        await mongoose.connect(process.env.DATABASE_URI)

        //encerrar loading
        spinner.succeed('Conectado ao banco!')

    } catch (error) { console.log(`Ocorreu um erro de conexão: ${error}`) }
};


app.get('/', (req, res) => {
    res.send('O servidor com mongoose está funcionando!')
});

//consultar banco
//url: /search?name={valor}
app.get('/search', async (req, res) => {

    /* remover caracteres que possam quebrar a busca, já que o método find usa regex 
    para encontrar correspondências parciais */
    const escapeRegex = (value) => { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }
    const term = escapeRegex(req.query.term || '')

    //filtrar resultados da busca pelo nome
    const search = User.find({
        //'$or' faz com que o valor buscado satisfaça pelo menos uma dos campos
        /* $options: 'i' (case-insensitive) desconsidera letras maiúsculas e minúsculas 
           como critérios de busca */
        $or: [
            { name: { $regex: term, $options: 'i' } },
            { email: { $regex: term, $options: 'i' } },
            { phone: { $regex: term, $options: 'i' } },
            { age: { $regex: term, $options: 'i' } }
        ]
    }, 'email name phone age')
    try {
        //disparar consulta no banco com o método "exec()"
        const results = await search.exec()
        results.length === 0
            ? res.send('nenhum resultado encontrado')
            : res.json(results)

    } catch (error) { `Erro ao buscar nome: ${error}` }

})

//criar usuário
app.post('/insert', async (req, res) => {

    //consulta para checar existência do email
    const checkEmail = User.find({ email: req.body.email })
    const emailExistente = await checkEmail.exec()
    try {

        //salvar inserção no banco
        if (emailExistente.length === 0) {
            //criar instância de um modelo com o método create()
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

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
    conectarBanco();
})