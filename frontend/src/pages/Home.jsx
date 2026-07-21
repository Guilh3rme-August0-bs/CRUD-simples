import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { Table } from "../components/Table"
import { SearchBar } from "../components/ui/SearchBar"
import { getData } from "../services/getData"

export const Home = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function carregarDados() {
            const dados = await getData({ term: "" })
            setUsuarios(dados)
        }

        carregarDados()
    }, [])

    return (
        <div className="flex justify-center">
            <div>
                <Form />
                <SearchBar />
                <Table data={usuarios} />
            </div>
        </div>
    )
}