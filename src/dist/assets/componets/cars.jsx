import React from "react";
import Car1 from "./images/car1.jpg";
import Car2 from "./images/car2.jpg";
import Car3 from "./images/car3.jpg";

function cars() {
  return (
    <section className="px-20 py-10">
      <h3 className="text-orange-500 text-center font-hertical pb-3 text-xl">
        Cars for Rent
      </h3>
      <h2 className="text-center font-hertical text-3xl leading-10 ">
        Explore Out top deals
        <br /> from top rated Dealers
      </h2>
      <div className="cars flex justify-between flex-wrap">
        <div className="border-2 rounded-2xl px-4 h-full mt-10 pt-5 pb-5 flex flex-col w-[32%]">
          <img src={Car1} alt="" className="rounded-3xl h-fit" />
          <h2 className="mt-4">
            <span className="border-2 border-slate-950 px-3 py-1 rounded-full text-xl font-hertical text-sky-950">
              2017
            </span>
          </h2>
          <h3 className="mt-3 py-2">
            <span className="font-hertical font-extralight text-xl">
              2018 Honda Civic
            </span>
          </h3>
          <h3 className="text-orange-500 font-hertical">
            $59000 | $359 <span className="text-black">/ Month</span>
          </h3>
          <div className="flex">
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Rent Now
          </button>
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Details
          </button>
          </div>
        </div>

        {/* car section 2 */}
        <div className="border-2 rounded-2xl px-4 h-full mt-10 pt-5 pb-5 flex flex-col w-[32%]">
          <img src={Car1} alt="" className="rounded-3xl h-fit" />
          <h2 className="mt-4">
            <span className="border-2 border-slate-950 px-3 py-1 rounded-full text-xl font-hertical text-sky-950">
              2017
            </span>
          </h2>
          <h3 className="mt-3 py-2">
            <span className="font-hertical font-extralight text-xl">
              2018 Honda Civic
            </span>
          </h3>
          <h3 className="text-orange-500 font-hertical">
            $59000 | $359 <span className="text-black">/ Month</span>
          </h3>
          <div className="flex">
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Rent Now
          </button>
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Details
          </button>
          </div>
        </div>

         {/* car section 3 */}
        <div className="border-2 rounded-2xl px-4 h-full mt-10 pt-5 pb-5 flex flex-col w-[32%]">
          <img src={Car1} alt="" className="rounded-3xl h-fit" />
          <h2 className="mt-4">
            <span className="border-2 border-slate-950 px-3 py-1 rounded-full text-xl font-hertical text-sky-950">
              2017
            </span>
          </h2>
          <h3 className="mt-3 py-2">
            <span className="font-hertical font-extralight text-xl">
              2018 Honda Civic
            </span>
          </h3>
          <h3 className="text-orange-500 font-hertical">
            $59000 | $359 <span className="text-black">/ Month</span>
          </h3>
          <div className="flex">
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Rent Now
          </button>
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Details
          </button>
          </div>
         
        </div>

         {/* car section 4 */}
        <div className="border-2 rounded-2xl px-4 h-full mt-10 py-5 flex flex-col w-[32%]">
          <img src={Car1} alt="" className="rounded-3xl h-fit" />
          <h2 className="mt-4">
            <span className="border-2 border-slate-950 px-3 py-1 rounded-full text-xl font-hertical text-sky-950">
              2017
            </span>
          </h2>
          <h3 className="mt-3 py-2">
            <span className="font-hertical font-extralight text-xl">
              2018 Honda Civic
            </span>
          </h3>
          <h3 className="text-orange-500 font-hertical">
            $59000 | $359 <span className="text-black">/ Month</span>
          </h3>
          <div className="flex">
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Rent Now
          </button>
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Details
          </button>
          </div>
        </div>

 {/* car section 5 */}
        <div className="border-2 rounded-2xl px-4 h-full mt-10 py-5 flex flex-col w-[32%]">
          <img src={Car1} alt="" className="rounded-3xl h-fit" />
          <h2 className="mt-4">
            <span className="border-2 border-slate-950 px-3 py-1 rounded-full text-xl font-hertical text-sky-950">
              2017
            </span>
          </h2>
          <h3 className="mt-3 py-2">
            <span className="font-hertical font-extralight text-xl">
              2018 Honda Civic
            </span>
          </h3>
          <h3 className="text-orange-500 font-hertical">
            $59000 | $359 <span className="text-black">/ Month</span>
          </h3>
          <div className="flex">
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Rent Now
          </button>
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Details
          </button>
          </div>
        </div>

       {/* car section 6 */}
        <div className="border-2 rounded-2xl px-4 h-full mt-10 py-5 flex flex-col w-[32%] ">
          <img src={Car1} alt="" className="rounded-3xl h-fit" />
          <h2 className="mt-4">
            <span className="border-2 border-slate-950 px-3 py-1 rounded-full text-xl font-hertical text-sky-950">
              2017
            </span>
          </h2>
          <h3 className="mt-3 py-2">
            <span className="font-hertical font-extralight text-xl">
              2018 Honda Civic
            </span>
          </h3>
          <h3 className="text-orange-500 font-hertical">
            $59000 | $359 <span className="text-black">/ Month</span>
          </h3>
          <div className="flex">
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Rent Now
          </button>
          <button className="bg-blue-500 h-12 mt-3 mr-4 text-white font-hertical text-md rounded-sm px-5">
            Details
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default cars;
