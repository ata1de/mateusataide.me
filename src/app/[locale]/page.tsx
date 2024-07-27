'use client'
import SlideIn from "@/components/animations/slideInLeft";
import ArrowLink from "@/components/arrowLink";
import Hero from "@/components/hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
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

        <div className="mt-16 flex justify-start min-h-[400px] bg-[#f8f8f8]  pb-8">
          <div className=" flex justify-between  w-11/12 items-center max-w-[1056px] mx-auto px-3 sm:px-10 ">
            <SlideIn>
              <div className="flex items-start flex-col gap-1 ">
                <p className="text-3xl font-semibold mb-4">{t('title')}.</p>
                <p className="text-sm font-light mb-2 ">{t('description')}</p>
                <ArrowLink text={t('link-projects')}/>
              </div>
            </SlideIn>

            <div className="grid w-[600px] h-[300px] grid-cols-4 gap-3 ">
              <div data-aos='flip-left' data-aos-duration='1500' className="col-span-2 row-span-2 rounded-lg">
                {/* <Image className="rounded-lg object-contain" src='/projects/onebitflix3.png' width={294} height={300} alt='Hero'/> */}
              </div>
              <div data-aos='flip-left' data-aos-duration='1500' className="col-span-1 row-span-1 bg-[#669b94] rounded-lg">
                <Image className="rounded-lg" src='/projects/ecommerce-store.png' width={128} height={128} alt='Hero'/>
              </div>
              <div data-aos='flip-left' data-aos-duration='1500' className="col-span-1 row-span-1 bg-[#669b94] rounded-lg">
                {/* <Image className="h-[128px] rounded-lg" src='/projects/arkan-seguro.png' width={128} height={128} alt='Hero'/> */}
              </div>
              <div data-aos='flip-left' data-aos-duration='1500' className="col-span-2 row-span-1 bg-[#669b94] rounded-lg">
                {/* <Image className="object-contain rounded-lg" src='/projects/arkan2.png' width={294} height={134} alt='Hero'/> */}
              </div>
            </div>
              
          </div>
        </div>

        </div>
    </div>
  );
}
