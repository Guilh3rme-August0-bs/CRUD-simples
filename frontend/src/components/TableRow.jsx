import { SquarePen, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const TableRow = ({ usuario, rowClick, selectedId }) => {

    return (
        <tr className={selectedId === usuario._id ? "bg-[#17b14f] text-[#ffffff]" : "hover:bg-gray-50 text-[#000000]"}>
            <td className="px-6 py-4 text-base">{usuario._id}</td>
            <td className="px-6 py-4 text-base">{usuario.name}</td>
            <td className="px-6 py-4 text-base">{usuario.email}</td>
            <td className="px-6 py-4 text-base">{usuario.age}</td>
            <td className="px-6 py-4 text-base">{usuario.phone}</td>
            <td className="px-6 py-4 text-base cursor-pointer"
                onClick={rowClick}>
                <SquarePen />
            </td>
            <td className="px-6 py-4 text-base cursor-pointer">
                <Trash2 color="#f24a4a" />
            </td>
        </tr>
    )
}