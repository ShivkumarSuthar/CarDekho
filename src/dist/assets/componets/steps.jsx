import React from "react";
import address from "./images/512x512.png";

function steps() {
  return (
    <section className="p-10 pt-10 pb-14 px-20">
      <h3 className="uppercase text-lg text-center font-thin font-hertical text-orange-500">
        How We work
      </h3>
      <h2 className="font-bold text-center pt-2 text-3xl font-hertical">
        Rent with <span>3</span> Easy steps
      </h2>

      <div className="flex justify-between pt-16 px-10">
        <div className="text-center pr-10">
          <span className="border-2 p-3 bg-slate-200 rounded-lg outline-none">
            <i className="fa-solid fa-location-dot text-[30px] text-orange-500"></i>
          </span>
          <h2 className="text-center font-Raleway font-semibold text-2xl py-3 pt-7">Choose A location</h2>
          <p className="text-center text-xl text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad minima assumenda sunt reprehenderit tempora, eum optio temporibus id iusto dolor commodi consequatur fuga ipsa quisquam.</p>
        </div>
        <div className="pr-10 text-center">
          <span className="border-2 px-4 py-3 bg-slate-200 rounded-lg outline-none">
            <i class="fa-solid fa-calendar-days text-[20px] text-orange-500"></i>
                     </span>
          <h2 className="text-center font-Raleway font-semibold text-2xl py-3 pt-7">Pick-up Date</h2>
          <p className="text-center text-xl text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad minima assumenda sunt reprehenderit tempora, eum optio temporibus id iusto dolor commodi consequatur fuga ipsa quisquam.</p>
        </div>
        <div className="text-center">
          <span className="border-2 py-3 px-4 bg-slate-200 rounded-lg outline-none">
            <i class="fa-solid fa-calendar-check text-[20px] text-orange-500"></i>
           </span>
          <h2 className="text-center font-Raleway font-semibold text-2xl py-3 pt-7">Book A Car</h2>
          <p className="text-center text-xl text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad minima assumenda sunt reprehenderit tempora, eum optio temporibus id iusto dolor commodi consequatur fuga ipsa quisquam.</p>
        </div>
      </div>
    </section>
  );
}

export default steps;
