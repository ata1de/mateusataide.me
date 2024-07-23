'use client'
import CardProject from "@/components/cardProject";
import Hero from "@/components/hero";
import { projectsListHome } from "@/config/projects";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home.Projects');
  const t2 = useTranslations('Home');

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1056px] mx-auto px-10">
        <div className="">
          <Hero/>
        </div>

        {/* <div>
          <p className="font-bold text-[22px] leading-7 mb-8 pl-40">{t2('Tech')}</p>
          <CarouselLoop/>
        </div> */}

        <div className="mt-16 flex flex-col items-start min-[1500px]:items-center">
          <div className="flex flex-col gap-9">
            <p className="font-bold text-[22px] leading-7 mb-8">{t('title')}</p>
            <div className="flex flex-wrap justify-center gap-5">
              {projectsListHome.map((project) => (
                <CardProject key={project.id} project={project}/>
              ))}
            </div>
          </div> 
        </div>
        </div>
    </div>
  );
}
