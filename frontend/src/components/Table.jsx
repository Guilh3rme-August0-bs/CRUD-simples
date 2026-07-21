export const Table = ({ data = [] }) => {
    if (!data || data.length === 0) {
        return (
            <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm text-gray-500 border-collapse">
                    <thead className="bg-[#1d7b4b] text-xs text-white font-semibold border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Id</th>
                            <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Nome</th>
                            <th className="px-6 py-3 font-sans font-semibold text-white text-lg">E-mail</th>
                            <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-base">Sem dados</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-500 border-collapse">
                <thead className="bg-[#1d7b4b] text-xs text-white font-semibold border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Id</th>
                        <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Nome</th>
                        <th className="px-6 py-3 font-sans font-semibold text-white text-lg">E-mail</th>
                        <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((usuario) => (
                        <tr key={usuario._id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-base">{usuario._id}</td>
                            <td className="px-6 py-4 text-base">{usuario.name}</td>
                            <td className="px-6 py-4 text-base">{usuario.email}</td>
                            <td className="px-6 py-4 text-base">{usuario.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
