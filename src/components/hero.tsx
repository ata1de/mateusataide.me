import { ArrowDown, ArrowUpRight, BookUser, Handshake } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
    const t = useTranslations('Home.Hero');
    const locale = useLocale()
    return (
       <div className="relative max-w-[1056px] mx-auto px-3 sm:px-10 flex flex-col justify-center py-12 gap-8 max-[940px]:items-center min-[940px]:flex-row ">
            <Image className="rounded-xl" src='/image_hero.png' width={340} height={290} alt='Hero'/>

            <div className="flex flex-col max-[940px]:items-center justify-center gap-5">
                <h1 className="text-2xl font-bold text-center md:text-left ">{t('introduction')} <span className="alternative2-gradient-text">{t('office')}</span></h1>
                <div className="md:text-left text-center">
                    <p className="text-base font-light text-zinc-600 mb-0.5">{t('passion')}</p>
                    <p className="flex md:justify-start items-center text-zinc-600 text-base font-light">
                        {t('role')}
                        <Link href='https://www.cin.ufpe.br/' className="flex justify-center items-center" target="_blank">
                            <span className="text-zinc-900 underline ml-1">Centro de Informática(UFPE)</span> <ArrowUpRight size={20}/>
                        </Link> 
                    </p>
                </div>
                <div className="gap-3 flex justify-start">  
                    <Link href='https://medium.com/@mateusataide05' target="_blank">
                        <Button className="bg-Green hover:bg-[#669b94] border-white text-yellow-50">{t('blog')} <BookUser className="ml-2" size={20}/></Button>
                    </Link>
                    <Link href='https://www.linkedin.com/in/mateus-ata%C3%ADde-7b1b3b1b1/' target="_blank">
                        <Button className="bg-Green hover:bg-[#669b94] border-white text-yellow-50">{t('meet')} <Handshake size={20} className="ml-2"/></Button>
                    </Link>
                </div>
            </div>

            <div className="absolute right-0 -bottom-10 flex flex-col justify-center items-center gap-10">
                <p className="rotate-90 text-sm font-light">{t('arrow')}</p>
                <ArrowDown className={`w-6 h-6 animate-bounce text-zinc-500 ${locale !== 'en' && 'mt-6'}`}/>
            </div>
       </div> 
    )

}