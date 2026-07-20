export const Button = ({ children }) => {
    return (
        <div className="flex flex-col p-8">
            <button className="bg-blue-500 mt-6 w-40 border-2 border-black-600">{children}</button>
        </div>
    )
}