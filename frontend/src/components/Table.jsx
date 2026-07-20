export const Table = () => {
    const provisoryData = [{id: "i6h5i75677jinijhn", name: "Exemplo", age: "00", email: "exemplo@email.com"}]

    return (
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-500 border-collapse">
                <thead className="bg-gray-50 text-xs text-gray-700 font-semibold border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-3">Id</th>
                        <th className="px-6 py-3">Nome</th>
                        <th className="px-6 py-3">E-mail</th>
                        <th className="px-6 py-3">Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {provisoryData.map((usuario) => (
                        <tr key={usuario.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">{usuario.id}</td>
                            <td className="px-6 py-4">{usuario.name}</td>
                            <td className="px-6 py-4">{usuario.email}</td>
                            <td className="px-6 py-4">{usuario.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
