import { ArrowRight } from "lucide-react";

const GridLayout = () => {
  return (
    <div className="grid grid-cols-12 md:grid-rows-12 gap-4 md:max-h-[500px] w-full">
      <div className="col-span-12 md:col-span-5 md:row-span-12 bg-black relative rounded-3xl overflow-hidden">
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0  bg-opacity-75 text-white rounded-3xl">
          <h2 className="inline-block w-auto text-xl font-bold leading-tight bg-black p-3 rounded-tr-3xl">Top 5: Best Auctions</h2>
          <h2 className="inline-block w-auto text-xl font-bold leading-tight bg-black p-3 rounded-tr-3xl">Across Brisbane Last Weekend!</h2>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 md:row-span-8 bg-orange-500 text-black p-4 rounded-3xl">
        <h2 className="text-xl font-bold">Nene Valley Home In SA's South East Offering Beachfront For $500k</h2>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,</p>
        <button className="mt-4 bg-transparent border-2 border-black text-black py-2 px-4 rounded-3xl">How to Apply for It</button>
      </div>
      <div className="col-span-12 md:col-span-3 md:row-span-10 bg-slate-500 text-black rounded-3xl">
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover rounded-3xl " />
      </div>
      <div className="col-span-12 md:col-span-4 md:row-span-4 text-black rounded-3xl relative">
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover rounded-3xl" />
        <div className="absolute bottom-4 left-4">
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 md:row-span-2 bg-zinc-500 text-white rounded-3xl flex items-center justify-center">
        <button className="bg-zinc-500 p-10 text-black py-2 px-4 rounded-3xl flex justify-center items-center gap-3">View All Categories <ArrowRight size={30} className="animate-pulse"/></button>
      </div>
     
      {/* <div className="cols-span-12 md:col-span-3 md:row-span-4">
        <button className="bg-white text-black py-2 px-4 rounded-3xl">View All Categories</button>
      </div> */}
    </div>
  );
};

export default GridLayout;
