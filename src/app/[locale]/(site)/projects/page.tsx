'use client'

import SlideIn from "@/components/animations/slideInLeft";
import CardProject from "@/components/cardProject";
import { Separator } from "@/components/ui/separator";
import { projectsListHome } from "@/config/projects";
import { useTranslations } from "next-intl";

export default function StackPage() {
    const t = useTranslations("Projects");

    return (
        <div className="w-full flex justify-center items-center mt-9 mb-8">
            <div className="max-w-[1056px] mx-4 min-[426px]:mx-auto min-[426px]:px-3 min-[426px]:sm:px-10">
                <div className="flex-col gap-2 flex mb-2">
                    <SlideIn>
                        <p className="text-4xl font-semibold pb-2">{t('title')}</p>
                    </SlideIn>
                    <SlideIn delay={0.5}>
                        <p className="text-lg text-wrap text-[rgb(109,109,109)] pb-2 flex justify-start">{t('description')}</p>
                    </SlideIn>
                </div>

                <Separator className="bg-zinc-500"/>

                
                <div className="mt-7">
                    <div>
                        <p className="text-2xl font-semibold pb-2">Front-end</p>
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            {
                                projectsListHome.filter((project) => project.category === "front-end").length > 0 
                                ? projectsListHome.filter((project) => project.category === "front-end").map((project) => (
                                    <CardProject key={project.id} project={project} />
                                ))
                                : <p className="text-lg text-[rgb(109,109,109)] pb-2 text-center">Nothing here</p>
                            }
                        </div>
                    </div>

                    <div className="mt-7">
                        <p className="text-2xl font-semibold pb-2">Back-end</p>
                        <div className="flex flex-wrap justify-center items-center gap-5">
                            {
                                projectsListHome.filter((project) => project.category === "back-end").length > 0 
                                ? projectsListHome.filter((project) => project.category === "back-end").map((project) => (
                                    <CardProject key={project.id} project={project} />
                                ))
                                : <p className="text-lg text-[rgb(109,109,109)] pb-2 text-center">Nothing here</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}