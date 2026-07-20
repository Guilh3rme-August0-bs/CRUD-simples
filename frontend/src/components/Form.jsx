import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"

export const Form = () => {
    return (
        <div className="flex justify-center items-center gap-4 mb-10 mt-10 w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <Input Name="Nome" />
            <Input Name="E-mail" />
            <Input Name="Idade" />
            <Button>Criar</Button>
        </div>
    )
} 