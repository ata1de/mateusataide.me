import { ArrowUpRight, BookUser, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    const t = useTranslations('Home.Hero');
    return (
       <div className="flex flex-col justify-center py-12 gap-8 md:flex-row max-[768px]:items-center ">
            <Image className="rounded-xl" src='/image_hero.png' width={440} height={390} alt='Hero'/>

            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-2xl font-bold ">{t('introduction')} <span className="alternative2-gradient-text">{t('office')}</span></h1>
                <div>
                    <p className="text-base font-light text-zinc-600 mb-0.5">{t('passion')}</p>
                    <p className="flex justify-start items-center text-zinc-600 text-base font-light">
                        {t('role')}
                        <Link href='https://www.cin.ufpe.br/' className="flex justify-center items-center" target="_blank">
                            <span className="text-zinc-900 underline ml-1">Centro de Informática(UFPE)</span> <ArrowUpRight size={20}/>
                        </Link> 
                    </p>
                </div>
                <div className="gap-3 flex justify-start items-center">
                    <Link href='https://medium.com/@mateusataide05' target="_blank">
                        <Button className="bg-Green hover:bg-[#669b94] border-white text-yellow-50">Conheça meu blog <BookUser className="ml-2" size={20}/></Button>
                    </Link>
                    <Link href='https://www.linkedin.com/in/mateus-ata%C3%ADde-7b1b3b1b1/' target="_blank">
                        <Button className="bg-Green hover:bg-[#669b94] border-white text-yellow-50">Vamos nos conectar <Handshake size={20} className="ml-2"/></Button>
                    </Link>
                </div>
            </div>
       </div> 
    )

}