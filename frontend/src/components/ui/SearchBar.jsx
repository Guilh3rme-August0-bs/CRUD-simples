import { Search } from 'lucide-react'
import { Button } from './Button'

export const SearchBar = ({ searchTerm, inputChange, event, click }) => {

    return (
        <div className="flex justify-center items-center gap-4 mb-10 mt-10 w-full p-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <input className="bg-gray-200 rounded-lg w-full p-2"
                placeholder="Pesquise a informação de um usuário"
                type="text"
                value={searchTerm}
                onChange={inputChange}
                onKeyDown={event}
            />
            <button className="bg-[#1d7b4b] cursor-pointer p-2 rounded-sm hover:bg-green-500"
                onClick={click}>
                <Search color="#ffffff"/>
            </button>
        </div>
    )
}