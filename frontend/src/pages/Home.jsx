import { Form } from "../components/Form"
import { Table } from "../components/Table"

export const Home = () => {
    return (
        <div className="flex justify-center ">
            <div>
                <Form />
                <Table />
            </div>
        </div>
    )
}