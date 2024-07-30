import CardProject from "@/components/cardProject";
import { Separator } from "@/components/ui/separator";
import { projectsListHome } from "@/config/projects";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StackPage() {
    const t = useTranslations("Projects");

    return (
        <div className="w-full flex justify-center items-center mt-9 mb-8">
            <div className="max-w-[1056px] mx-auto px-3 sm:px-10">
                <div className="flex-col gap-2 flex mb-2">
                    <p className="text-4xl font-semibold pb-2">{t('title')}</p>
                    <p className="text-lg text-wrap text-[rgb(109,109,109)] pb-2 flex justify-start">{t('description')}<span className="text-Green underline flex justify-center items-center ml-1">Github <ArrowUpRight size={20} /></span></p>
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