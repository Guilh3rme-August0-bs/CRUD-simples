export const Table = ({ data = [], maxHeight = '50vh' }) => {
    const hasData = Array.isArray(data) && data.length > 0

    return (
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
                <div className="overflow-y-auto" style={{ maxHeight }}>
                    <table className="w-full text-left text-sm text-gray-500 border-collapse">
                        <thead className="sticky top-0 z-10 bg-[#1d7b4b] text-xs text-white font-semibold">
                            <tr>
                                <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Id</th>
                                <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Nome</th>
                                <th className="px-6 py-3 font-sans font-semibold text-white text-lg">E-mail</th>
                                <th className="px-6 py-3 font-sans font-semibold text-white text-lg">Idade</th>
                                <th className="px-6 py-3 font-sans font-semibold text-white text-lg">N° de Telefone</th>
                            </tr>
                        </thead>

                        <tbody>
                            {!hasData ? (
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td colSpan={5} className="px-6 py-4 text-base text-center">
                                        Sem dados
                                    </td>
                                </tr>
                            ) : (
                                data.map((usuario) => (
                                    <tr key={usuario._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-base">{usuario._id}</td>
                                        <td className="px-6 py-4 text-base">{usuario.name}</td>
                                        <td className="px-6 py-4 text-base">{usuario.email}</td>
                                        <td className="px-6 py-4 text-base">{usuario.age}</td>
                                        <td className="px-6 py-4 text-base">{usuario.phone}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
