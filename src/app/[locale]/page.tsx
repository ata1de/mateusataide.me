'use client'
import SlideIn from "@/components/animations/slideInLeft";
import ArrowLink from "@/components/arrowLink";
import Hero from "@/components/hero";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home.Projects');
  const t2 = useTranslations('Home');

  return (
    <div className="w-full">
      <div className="">
        <div className="w-full min-h-[300px]">
          <Hero/>
        </div>

        <div className="mt-16 flex justify-start min-h-[400px] bg-[#f8f8f8] mb-8">
          <div className=" flex justify-between items-center max-w-[1056px] mx-auto px-3 sm:px-10 ">
            <SlideIn>
              <div className="flex items-start flex-col gap-1 pr-44">
                <p className="text-3xl font-semibold mb-4">{t('title')}.</p>
                <p className="text-sm font-light mb-2 ">{t('description')}</p>
                <ArrowLink text={t('link-projects')}/>
              </div>
            </SlideIn>

            <div className="grid grid-cols-4 gap-6  ">
              <div className="col-span-2 row-span-2 bg-[#669b94]  rounded-lg p-16">
                {/* <Image className="h-[280px] rounded-lg" src='/projects/ecommerce-store.png' width={280} height={280} alt='Hero'/> */}
              </div>
              <div className="col-span-1 row-span-1 bg-[#669b94] rounded-lg p-16">
              {/* <Image className="h-[128px] rounded-lg" src='/projects/libertas.png' width={128} height={128} alt='Hero'/> */}
              </div>
              <div className="col-span-1 row-span-1 bg-[#669b94] rounded-lg p-16">
                
              </div>
              <div className="col-span-2 row-span-1 bg-[#669b94] rounded-lg p-16">
              {/* <Image className="h-[128px] w-[280px] rounded-lg" src='/projects/libertas.png' width={280} height={128} alt='Hero'/> */}
              </div>
            </div>
              
          </div>
        </div>

        {/* <div className="mt-16 flex flex-col items-start min-[1500px]:items-center">
          <div className="max-w-[1056px] mx-auto px-3 sm:px-10 flex flex-col gap-9">
            <p className="font-bold text-[22px] leading-7 mb-8">{t('title')}</p>
            <div className="flex flex-wrap justify-center gap-5">
              {projectsListHome.map((project) => (
                <CardProject key={project.id} project={project}/>
              ))}
            </div>
          </div> 
        </div> */}
        </div>
    </div>
  );
}
