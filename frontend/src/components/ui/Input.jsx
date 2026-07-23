export const Input = ({ inputName, inputValue, inputType, inputChange }) => {
    return (

        <div className="flex flex-col p-6">
            <label htmlFor={inputName}>{inputName}</label>
            <input name={inputName} type={inputType} value={inputValue}
                onChange={inputChange}
                className="bg-gray-200 p-2 text-base text-gray-800 font-semibold border-b border-[#1d7b4b]"
            />
        </div>
    )
}