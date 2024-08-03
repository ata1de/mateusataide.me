'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#efeccd]">
            <div className="flex justify-center items-center w-[900px] max-w-[1093px] h-[550px] shadow-md rounded-3xl border-2 border-LightBlue text-gray-200 px-5 max-[690px]:flex-col-reverse max-[690px]:gap-6 mx-3">
                <Image src="/gif-404.gif" alt="404" width={400} height={400} />

                <div className="flex flex-col items-start gap-2 max-w-[500px]">
                    <p className="text-3xl font-bold text-[#95BFB8]">404 ERROR</p>
                    <p className="text-lg font-bold text-[#95BFB8]">Parece que a página que você procura não foi encontrada!</p>
                    <p className="text-md text-[#000000]">Que tal aproveitar nossas dicas de segurança enquanto explora outras páginas do nosso site de seguros?</p>

                    <Link href='/'>
                        <Button className='mt-5 bg-MediumBlue w-[240px] rounded-full bg-[#95BFB8] text-gray-200'>Voltar a Home</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}