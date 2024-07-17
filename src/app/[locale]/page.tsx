'use client'
import CardProject from "@/components/cardProject";
import { CarouselLoop } from "@/components/carousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { projectsListHome } from "@/config/projects";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home.Projects');
  const t2 = useTranslations('Home');

  return (
    <>

      <div className="min-h-[550px]">
        <Header/>

        <Hero/>
      </div>

      <div>
        <p className="font-bold text-[22px] leading-7 mb-8 pl-40">{t2('Tech')}</p>
        <CarouselLoop/>
      </div>

      <div className="px-40 mt-16 flex flex-col items-start min-[1500px]:items-center">
        <div className="flex flex-col gap-9">
          <p className="font-bold text-[22px] leading-7 mb-8">{t('title')}</p>
          {projectsListHome.map((project) => (
            <CardProject key={project.id} project={project}/>
          ))}
        </div> 
      </div>

      <Footer/>
    </>
  );
}
