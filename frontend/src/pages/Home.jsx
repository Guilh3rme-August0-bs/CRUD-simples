import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { Table } from "../components/Table"
import { SearchBar } from "../components/ui/SearchBar"
import { getData, deleteUser } from "../services/userService"

export const Home = () => {

    const [usuarios, setUsuarios] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [selectedId, setSelectedId] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [action, setAction] = useState('')
    const [disabled, setDisabled] = useState(false)

    async function carregarDados(term) {
        const dados = await getData({ term })
        setUsuarios(dados)
    }

    useEffect(() => {
        carregarDados(inputValue)
    }, [inputValue])


    const deleteUserById = async (id) => {
        setIsEditing(false)
        let confirmDelete = window.confirm("Deseja excluir este usuário?")
        if (!confirmDelete) return

        const result = await deleteUser({ id: id })
        if (result) {
            await carregarDados(inputValue)
            alert("Usuário excluído com sucesso!")
        } else {
            alert("Erro ao excluir usuário!")
        }

    }

    useEffect(() => {
        if (selectedId) {
            const usuarioSelecionado = usuarios.find(usuario => usuario._id === selectedId)

            switch (action) {
                case "update":
                    setIsEditing(true)
                    setDisabled(true)
                    break
                case "delete":
                    deleteUserById(selectedId)
                    break
                default:
                    break
            }
            setSelectedUser(usuarioSelecionado)
            setAction('')

        }
    }, [selectedId, action, usuarios])

    const refreshUsers = async () => {
        await carregarDados(inputValue)
    }

    return (
        <div className="flex justify-center">
            <div className="min-w-100">
                <Form updateValueFunction={refreshUsers} 
                isEditing={isEditing} setIsEditing={setIsEditing} 
                setDisabled={setDisabled} selectedUser={selectedUser} 
                setSelectedId={setSelectedId}/>
                <SearchBar
                    searchTerm={inputValue}
                    inputChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                    inputDisabled={disabled}
                />
                <Table data={usuarios} selectedId={selectedId} setSelectedId={setSelectedId}
                    switchDelete={() => { setAction('delete') }}
                    switchEdit={() => { setAction('update') }} />
            </div>
        </div>
    )
}