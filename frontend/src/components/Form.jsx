import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { createUser } from "../services/userService"
import { useState } from "react"

export const Form = ({ updateValueFunction }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')

    const formatPhone = (value) => {
        const digits = value.replace(/\D/g, '').slice(0, 11)

        if (digits.length <= 2) return digits
        if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
        if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    }

    const handlePhoneChange = (e) => {
        setPhone(formatPhone(e.target.value))
    }

    const saveUser = async () => {
        const created = await createUser({
            name,
            email,
            age,
            phone: phone.replace(/\D/g, '')
        })

        if (!created) return

        setName('')
        setEmail('')
        setAge('')
        setPhone('')

        if (updateValueFunction) {
            await updateValueFunction()
        }
    }

    return (
        <div className="flex max-[800px]:flex-col mb-1 mt-1 min-[700px]:flex-row justify-center items-center gap-1 mb-10 mt-10 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <Input inputName="Nome" inputType="text" inputValue={name} inputChange={(e) => setName(e.target.value)} />
            <Input inputName="E-mail" inputType="text" inputValue={email} inputChange={(e) => setEmail(e.target.value)} />
            <Input inputName="Idade" inputType="number" inputValue={age} inputChange={(e) => setAge(e.target.value)} />
            <Input inputName="N° de telefone" inputType="tel" inputValue={phone} inputChange={handlePhoneChange} />
            <Button buttonClick={saveUser}>Criar</Button>
        </div>
    )
}