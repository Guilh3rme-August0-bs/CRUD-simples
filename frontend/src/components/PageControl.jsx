import { ArrowRight, ArrowLeft } from "lucide-react"

export const PageControl = ({ page, setPage, limit, setLimit, nextpageLength }) => {

    return (
        <div className="flex flex-row items-center gap-2">
            <button className="bg-[#1d7b4b] cursor-pointer mt-4 p-2 rounded-sm hover:bg-green-500 font-sans font-semibold text-white text-lg"
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}>
                <ArrowLeft />
            </button>
            <div className="text-center border border-gray-300 w-16 rounded-md p-2 mt-4">
                {page}
            </div>
            <button className="bg-[#1d7b4b] cursor-pointer mt-4 p-2 rounded-sm hover:bg-green-500 font-sans font-semibold text-white text-lg"
                onClick={async () => {
                    const length = await nextpageLength();
                    if (length === 0) return;
                    setPage(page + 1);
                }}>
                <ArrowRight />
            </button>
            <select className="border border-gray-300 rounded-md p-2 mt-4"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}