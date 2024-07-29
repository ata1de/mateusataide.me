
const GridComponent = () => {
  return (
    <div className="grid grid-cols-12  gap-4 p-4">
      <div className="col-span-12 md:col-span-7 bg-black relative rounded-3xl overflow-hidden">
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0  bg-opacity-75 text-white rounded-xl">
          <h2 className="inline-block w-auto text-2xl font-bold leading-tight bg-black p-3 rounded-tr-3xl">Top 5: Best Auctions</h2>
          <h2 className="inline-block w-auto text-2xl font-bold leading-tight bg-black p-3 rounded-tr-3xl">Across Brisbane Last Weekend!</h2>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 bg-orange-500 text-black p-4 rounded-3xl">
        <h2 className="text-xl font-bold">Nene Valley Home In SA's South East Offering Beachfront For $500k</h2>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,</p>
        <button className="mt-4 bg-transparent border-2 border-black text-black py-2 px-4 rounded-3xl">How to Apply for It</button>
      </div>
      <div className="col-span-12 md:col-span-5 bg-white text-black p-4 rounded-3xl">
        <h2 className="text-rounded-3xl font-bold">6 Ways To Take The Stress Out Of Building Your First Home</h2>
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover rounded-3xl mt-2" />
      </div>
      <div className="col-span-12 md:col-span-7 bg-white text-black p-4 rounded-3xl relative">
        <img src="https://via.placeholder.com/150" alt="Building" className="w-full h-full object-cover rounded-3xl" />
        <div className="absolute bottom-4 left-4">
          <span className="block text-sm">6 Min</span>
          <h2 className="text-xl font-bold">The Block 2023 episode 18 recap: Leah takes her anti Steph campaign to Scott Cam</h2>
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 md:row bg-black text-white rounded-3xl flex items-center justify-center">
        <button className="bg-white text-black py-2 px-4 rounded-3xl">View All Categories</button>
      </div>
    </div>
  );
};

export default GridComponent;
