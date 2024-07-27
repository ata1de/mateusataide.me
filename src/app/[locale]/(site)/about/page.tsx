'use client'

import ExperienceDetails from "@/components/about/experienceDetails";
import SlideIn from "@/components/animations/slideInLeft";
import { experiencesList } from "@/config/experiences";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    const role = useTranslations("About.introduction");
    const intro = useTranslations("About.description");
    const academic = useTranslations("About.description.Academic");
    const interests = useTranslations("About.description.Interests");
    const experiences = useTranslations("About.experiences");

    return (
        <div className="w-full flex justify-center items-center mb-5">
            <div className="max-w-[1056px] mx-auto px-10">
                <div className="flex flex-col py-7 gap-3">
                    <SlideIn>
                        <div className="flex gap-4">
                            <Image className="rounded-full" src="/avatar.jpeg" alt="Personal foto" height={128} width={128}/>
                            <div className="flex flex-col justify-center items-start">
                                <p className="font-bold text-lg">Mateus Ataide</p>
                                <p className="font-regular text-base text-Brown">{role("role")}</p>
                                <p className="font-regular text-base text-Brown">Pernambuco, 🇧🇷</p>
                            </div>
                        </div>
                    </SlideIn>

                    <SlideIn>
                        <p className="font-regular text-base">{intro("intro")} <Link target="_blank" href={"https://portal.cin.ufpe.br/"}><span className="underline text-[#669B94] font-semibold">CIN (Centro de Informática da UFPE).</span></Link></p>
                    </SlideIn>

                    <SlideIn>
                        <p className="font-regular text-base">{intro("intro_description")}</p>
                    </SlideIn>

                    <div className="mt-9">
                        <SlideIn>
                            <p className="font-bold text-lg my-3"> {academic("title")}</p>
                        </SlideIn>

                        <SlideIn>
                            <p>{academic("description")}  <Link target="_blank" href={"https://github.com/ata1de/AtomiKingdom"}><span className="underline text-[#669B94] font-semibold">Lequeleto</span></Link></p>
                        </SlideIn>

                        <div className="flex justify-center items-center gap-8 max-[730px]:flex-col my-4 ">  
                            <Image className="h-[350px] w-[350px]" src="/about/cin.png" alt="CIN logo" height={350} width={350}/>
                            <Image className="h-[350px]" src="/about/letoleto.png" alt="Game lequeleto" height={300} width={300}/>
                        </div>
                    </div>

                    <div className="mt-9">
                        <SlideIn>
                            <p className="font-bold text-lg my-3">{interests("title")}</p>
                        </SlideIn>

                        <SlideIn>
                            <p className="">{interests("description")}</p>
                        </SlideIn>

                    </div>
                </div>

                <div>
                    <SlideIn>
                        <p className="font-bold text-lg">
                        {experiences('title')}
                        </p>
                    </SlideIn>

                    <SlideIn>
                        <div className="border-l-2 border-zinc-500 pl-5">
                        {experiencesList.map((experience) => (
                            <ExperienceDetails key={experience.id} {...experience} />
                        ))}
                        </div>
                    </SlideIn>
                </div>
            </div>
        </div>
    );
}
