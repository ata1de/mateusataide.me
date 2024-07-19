import { useTranslations } from "next-intl";
import Image from "next/image";
import InputHero from "./inputHero";

export default function Hero() {
    const t = useTranslations('Home.Hero');
    return (
       <div className="flex flex-col justify-center py-12 gap-8 md:flex-row max-[768px]:items-center ">
            <Image className="rounded-xl" src='/image_hero.png' width={440} height={390} alt='Hero'/>

            <div className="flex flex-col justify-center gap-5">
                <h1 className="text-2xl font-bold ">{t('introduction')} <span className="alternative2-gradient-text">{t('office')}</span></h1>
                <p className="text-base font-light text-zinc-600">{t('passion')}</p>
                <InputHero/>
            </div>
       </div> 
    )

}