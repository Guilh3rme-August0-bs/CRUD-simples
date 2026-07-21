export const Input = ({ Name }) => {
    return (

        <div className="flex flex-col p-8">
            <label htmlFor={Name}>{Name}</label>
            <input name={Name} type="text" className="bg-gray-200 p-2 text-base text-gray-800 font-semibold border-b border-[#1d7b4b]" />
        </div>
    )
}