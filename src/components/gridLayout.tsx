import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const GridLayout = () => {
  const t = useTranslations('Home.Projects.grid');
  return (
    <div className="grid grid-cols-12 md:grid-rows-12 gap-4 md:max-h-[500px] w-full">
      <div className="col-span-12 md:col-span-5 md:row-span-12 bg-black relative rounded-3xl overflow-hidden">
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0  bg-opacity-75 text-Black rounded-3xl">
          <h2 className="inline-block w-auto text-xl font-bold leading-tight bg-[#b9d6d1] p-3 rounded-tr-3xl">Top 5: Best Auctions</h2>
          <h2 className="inline-block w-auto text-xl font-bold leading-tight bg-[#b9d6d1] p-3 rounded-tr-3xl">Across Brisbane Last Weekend!</h2>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 md:row-span-8 flex flex-col justify-between bg-[#669b94] text-black p-4 rounded-3xl">
        <div>
          <h2 className="text-2xl font-bold leading-9">{t('title')}</h2>
          <p className="my-2 text-sm text-zinc-900">{t('description')}</p>
        </div>
        <Separator className="bg-zinc-900 " />
        <Button className="mt-4 bg-transparent text-black py-2 px-4 rounded-3xl hover:bg-[#95bfb8]">{t('button')} <ArrowRight className="ml-auto" size={30}/></Button>
      </div>
      <div className="col-span-12 md:col-span-3 md:row-span-10 bg-slate-500 text-black rounded-3xl">
        {/* <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover rounded-3xl " /> */}
        <Image src="/projects/libertas-home.png" width={214} height={400} alt="Building" className="w-full h-full object-cover rounded-3xl" />
      </div>
      <div className="col-span-12 md:col-span-4 md:row-span-4 text-black rounded-3xl relative">
        <Image src="/projects/ecommerce-home.png" width={315} height={167} alt="Building" className="w-full h-full object-cover rounded-3xl" />
      </div>
      <div className="col-span-12 p-2 md:col-span-3 md:row-span-2 bg-[#325350]  text-white rounded-3xl flex items-center justify-center">
        <button className="bg-[#325350] hover:underline p-10 text-white py-2 px-4 rounded-3xl flex justify-center items-center gap-3">{t('buttonCategory')} <ArrowRight size={30} className="animate-pulse"/></button>
      </div>
     
      {/* <div className="cols-span-12 md:col-span-3 md:row-span-4">
        <button className="bg-white text-black py-2 px-4 rounded-3xl">View All Categories</button>
      </div> */}
    </div>
  );
};

export default GridLayout;
