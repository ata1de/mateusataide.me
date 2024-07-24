import { TabsCategory } from "@/components/stack/tabs";

export default function StackPage() {
    return (
        <div className="w-full flex justify-center items-center mt-4">
            <div className="max-w-[1056px] mx-auto px-10">
                <div className="flex-col flex">
                    <p className="text-2xl font-semibold pb-2">Stack</p>
                    <p className="text-lg text-[#6d6d6d] pb-2">Aqui estão algumas das minhas ferramentas utilizadas para promover o melhor resultados nos meus projetos</p>
                </div>

                <TabsCategory />
            </div>
        </div>
    )
}