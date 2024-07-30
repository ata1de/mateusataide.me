'use client'
import SlideIn from "@/components/animations/slideInLeft";
import GridLayout from "@/components/gridLayout";
import Hero from "@/components/hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations('Home.Projects');
  const t2 = useTranslations('Home');

  useEffect(() => {
    Aos.init({ duration: 1200 });
    Aos.refresh();
  }, []);

  return (
    <div className="w-full">
      <div className="">
        <div className="relative w-full min-h-[100px]">
          <Hero/>
        </div>

        <div className="mt-16 flex justify-start min-h-[400px] bg-[#f8f8f8] pb-8">
          <div className=" flex flex-col gap-5  w-11/12 items-center max-w-[1056px] mx-auto px-3 py-6  sm:px-10 ">
            <div className="w-full flex justify-between items-center">
              <SlideIn>
                  <p className="text-sm text-[#669b94] font-semibold ">{t('subtitle')}</p>  
                  <p className="text-4xl mt-2 font-semibold mb-4 max-w-[300px]">{t('title')}.</p>
              </SlideIn>

              <div>
                <p className="text-sm font-light mb-2 max-w-[500px] text-right ">{t('description')}</p>
              </div>
            </div>
            

            <GridLayout/>
          </div>
        </div>
        </div>
    </div>
  );
}
