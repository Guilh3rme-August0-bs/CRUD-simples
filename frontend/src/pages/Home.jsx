import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { Table } from "../components/Table"
import { SearchBar } from "../components/ui/SearchBar"
import { getData } from "../services/userService"

export const Home = () => {
    const [usuarios, setUsuarios] = useState([])
    const [inputValue, setInputValue] = useState('')

    async function carregarDados(term) {
        const dados = await getData({ term })
        setUsuarios(dados)
    }

    useEffect(() => {
        carregarDados(inputValue)
    }, [inputValue])

    const refreshUsers = async () => {
        await carregarDados(inputValue)
    }

    return (
        <div className="flex justify-center">
            <div>
                <Form updateValueFunction={refreshUsers} />
                <SearchBar
                    searchTerm={inputValue}
                    inputChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                />
                <Table data={usuarios} />
            </div>
        </div>
    )
}