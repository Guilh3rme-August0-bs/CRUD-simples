import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { Table } from "../components/Table"
import { SearchBar } from "../components/ui/SearchBar"
import { getData } from "../services/userService"

export const Home = () => {
    const [usuarios, setUsuarios] = useState([])
    const [inputValue, setInputValue] = useState('')

    async function carregarDados(term) {
        const dados = await getData({ term: term })
        setUsuarios(dados)
    }
    useEffect(() => {
        carregarDados("")
    }, [])

    return (
        <div className="flex justify-center">
            <div>
                <Form />
                <SearchBar
                    searchTerm={inputValue}
                    inputChange={(e) => {
                        setInputValue(e.target.value)   
                    }}
                    event={(e) => {
                        if (e.key === 'Enter') {
                           carregarDados(inputValue)
                        }
                    }}
                    click={() => carregarDados(inputValue)}
                />
                <Table data={usuarios} />
            </div>
        </div>
    )
}