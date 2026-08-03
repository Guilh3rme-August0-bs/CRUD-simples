import { ArrowRight, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"

export const PageControl = ({ page, setPage, limit, setLimit, nextPageLength, disabledControls }) => {

    const [pageLength, setPageLength] = useState(limit)
    
    const enabledClass = "bg-[#1d7b4b] cursor-pointer mt-4 p-2 rounded-sm hover:bg-green-500 font-sans font-semibold text-white text-lg"
    const disabledClass = "bg-[#627b6e] mt-4 p-2 rounded-sm font-sans font-semibold text-white text-lg"

    async function checkNextPage() {
        const length = await nextPageLength();
        setPageLength(length)
    }

    useEffect(() => {
        checkNextPage()
    }, [limit, page])

    return (
        <div className="flex flex-row items-center gap-2">
            <button className={page <= 1 || disabledControls ? disabledClass : enabledClass}
                onClick={() => setPage(page - 1)}
                disabled={disabledControls? true : page <= 1}>
                <ArrowLeft />
            </button>
            <div className="text-center border border-gray-300 w-16 rounded-md p-2 mt-4">
                {page}
            </div>
            <button className={pageLength === 0 || disabledControls ? disabledClass : enabledClass}
                disabled={disabledControls}
                onClick={() => {
                    checkNextPage()
                    if (pageLength === 0) return;
                    setPage(page + 1);
                }}>
                <ArrowRight />
            </button>
            <select className="border border-gray-300 rounded-md p-2 mt-4"
                value={limit}
                disabled={disabledControls}
                onChange={(e) => setLimit(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}