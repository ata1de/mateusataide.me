'use client'
import CardProject from "@/components/cardProject";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { projectsListHome } from "@/config/projects";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home.Projects');

  return (
    <>

      <div className="min-h-screen">
        <Header/>

        <Hero/>
      </div>

      <div className="px-40">
        <p className="font-bold text-[22px] leading-7 mb-8">{t('title')}</p>

        <div className="flex flex-col gap-9">
          {projectsListHome.map((project) => (
            <CardProject key={project.id} project={project}/>
          ))}
        </div> 
      </div>

      <Footer/>
    </>
  );
}
