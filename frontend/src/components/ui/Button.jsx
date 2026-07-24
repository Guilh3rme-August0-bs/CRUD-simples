export const Button = ({ children, buttonClick }) => {
    return (
        <div className="flex flex-col p-8 max-[599px]:p-2">
            <button className="bg-[#1d7b4b] cursor-pointer mt-8 w-40 p-2 rounded-sm hover:bg-green-500 font-sans font-semibold text-white text-lg max-[599px]:mt-2 mb-2"
            onClick={buttonClick}>{children}</button>
        </div>
    )
}