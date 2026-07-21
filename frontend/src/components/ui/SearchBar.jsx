import { Search } from 'lucide-react'
import { useState } from 'react'
import { getData } from '../../services/getData'

export const SearchBar = () => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className="flex justify-center items-center gap-4 mb-10 mt-10 w-full p-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <Search />
            <input className="bg-gray-200 rounded-lg w-full p-2"
                placeholder="Pesquise a informação de um usuário"
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    // getData(inputValue)
                }} />
        </div>
    )
}