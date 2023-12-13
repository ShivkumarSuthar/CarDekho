import React from "react";
import Navigation from "./Navigation";
import android from "./images/512x512.png";
import ios from "./images/ios.png";

function home() {
  return (
    <section className="home-wrapper cont h-screen">
      <Navigation />
      <div className="main w-100 mt-5 flex pl-20 flex-col">
        <div className="float-left">
          <h1 className="text-[60px] font-hertical font-extrabold pt-20 tracking-wider leading-snug pb-2">
            <span className="text-orange-500">Looking</span> for <br /> Rent a
            car
          </h1>
          <p className="text-left font-libre text-2xl tracking-widest pb-2">
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit veritatis Sequi,
            <br /> Lorem ipsum dolor sit amet.
          </p>

          <div className="flex">
            <img src={android} alt="" className="w-40 mr-4 mt-3" />
            <img src={ios} alt="" className="w-40 mr-4 mt-3" />
          </div>
        </div>
        <div className="bg-slate-200 h-32 mt-8 flex justify-start items-center px-10 pb-20 pt-20 rounded-3xl" style={{
          width:'1050px'
        }}>
          <div className="flex flex-col items-start">
            <label
              htmlFor="location"
              className="text-xl font-libre pb-2 text-slate-600"
            >
              Location
            </label>
            <input
              className="w-[250px] px-4 py-4 rounded-m placeholder:font-hertical text-[15px]"
              type="text"
              name="location"
              id="input-location"
              placeholder="Search Places"
            />
          </div>
          <div className="flex flex-col mx-4">
            <label
              htmlFor="location"
              className="font-libre pb-2 text-slate-600 text-[19px]"
            >
              Pick-up Date
            </label>
            <input
              className="w-[250px] px-4 py-4 text-slate-400 font-hertical"
              type="date"
              name="location"
              id="input-location"
              placeholder="Search Places"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="location"
              className="font-libre pb-2 text-slate-600 text-[19px]"
            >
              Return Date
            </label>
            <input
              className="w-[250px] px-4 py-4 text-slate-400 font-hertical"
              type="date"
              name="location"
              id="input-location"
              placeholder="Search Places"
            />
          </div>
          <div className="ml-5 mt-8">
            <button className="bg-blue-500 text-white px-5 text-xl font-hertical py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default home;
