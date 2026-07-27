import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { Table } from "../components/Table"
import { SearchBar } from "../components/ui/SearchBar"
import { getData } from "../services/userService"

export const Home = () => {
    const [usuarios, setUsuarios] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [selectedId, setSelectedId] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    async function carregarDados(term) {
        const dados = await getData({ term })
        setUsuarios(dados)
    }

    useEffect(() => {
        carregarDados(inputValue)
    }, [inputValue])

    useEffect(() => {
        if (selectedId) {
            const usuarioSelecionado = usuarios.find(usuario => usuario._id === selectedId)
            setIsEditing(true)
            setSelectedUser(usuarioSelecionado)
            //console.log(usuarioSelecionado)
        }
    }, [selectedId])

    const refreshUsers = async () => {
        await carregarDados(inputValue)
    }

    return (
        <div className="flex justify-center">
            <div className="min-w-20">
                <Form updateValueFunction={refreshUsers} isEditing={isEditing} setIsEditing={setIsEditing} selectedUser={selectedUser} />
                <SearchBar
                    searchTerm={inputValue}
                    inputChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                />
                <Table data={usuarios} selectedId={selectedId} setSelectedId={setSelectedId} />
            </div>
        </div>
    )
}