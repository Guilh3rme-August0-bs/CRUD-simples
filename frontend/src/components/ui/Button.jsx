export const Button = ({ children }) => {
    return (
        <div className="flex flex-col p-8">
            <button className="bg-[#1d7b4b] cursor-pointer mt-6 w-40 p-2 rounded-sm hover:bg-green-500 font-sans font-semibold text-white text-lg">{children}</button>
        </div>
    )
}