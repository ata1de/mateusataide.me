'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    const t = useTranslations("NotFound");
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex justify-center items-center w-[900px] max-w-[1093px] h-[550px] shadow-md rounded-3xl border-2 border-LightBlue text-gray-200 px-5 max-[690px]:flex-col max-[690px]:gap-6 mx-3">
                <Image className="bg-[##efeccd] max-[690px]:w-[300px]" priority src="/404/john-travolta.gif" alt="404" width={400} height={400} />

                <div className="flex flex-col items-start gap-2 max-w-[500px] max-[690px]:mb-4">
                    <p className="text-4xl font-extrabold text-[#95BFB8]">Oops!</p>
                    <p className="text-lg font-medium text-zinc-400">{t('subtitle')}</p>
                    <Link href='/'>
                        <Button className='mt-3 bg-MediumBlue p-4 rounded-full bg-[#95BFB8] text-gray-200'><ArrowLeft size={20} className="mr-1"/>{t('button')}</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}