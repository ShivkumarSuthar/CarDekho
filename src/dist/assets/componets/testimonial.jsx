import React from "react";
import rev1 from "./images/rev1.jpg";
import rev2 from "./images/rev2.jpg";
import rev3 from "./images/rev3.jpg";

function testimonial() {
  return (
    <section className="px-20 pb-10 pt-10">
      <h3 className="text-center font-hertical text-xl pb-1">Reviews</h3>
      <h2 className="text-[40px] text-center font-Kalnia font-extrabold">
        What Our customers Say
      </h2>
      <div className="flex justify-between border-1 items-center pt-10 mx-10 px-5">

      {/* textimonial 1*/}

        <div className="flex items-center flex-col px-3 border-2 pt-5 pb-5 py-5 bg-slate-200 rounded-sm">
          <img
            src={rev1}
            alt=""
            className="w-24 rounded-full aspect-square text-center bg-orange-500 p-[1.4px]"
          />

          <h3 className="text-center text-2xl pb-1 pt-3 font-libre font-extrabold text-slate-700">Someone Name</h3>
          <div className="flex text-xl pb-3 text-orange-500 tracking-widest">
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-regular fa-star-half-stroke"></i></span>
            <span><i className="fa-regular fa-star"></i></span>
            
          </div>
          <p className="text-center text-md text-slate-400 font-libre font-thin italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autemit
            soluta minima illum nihil, dolor quam, sed molestias aliquam
            repudiandae cum eos mollitia, iure facilis explicabo.
          </p>
        </div>


      {/* textimonial 2*/}
      <div className="flex items-center flex-col px-3 border-2 pt-5 pb-5 py-10 bg-slate-200 rounded-sm mx-10">
          <img
            src={rev3}
            alt=""
            className="w-24 rounded-full aspect-square text-center bg-orange-500 p-[1.4px]"
          />

          <h3 className="text-center text-2xl pb-1 pt-3 font-libre font-extrabold text-slate-700">Someone Name</h3>
          <div className="flex text-xl text-orange-500 pb-3 tracking-widest">
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
          
            
          </div>
          <p className="text-center text-md text-slate-400 font-libre font-thin italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autemit
            soluta minima illum nihil, dolor quam, sed molestias aliquam
            repudiandae cum eos mollitia, iure facilis explicabo.
          </p>
        </div>

        
      {/* textimonial 3*/}
      <div className="flex items-center flex-col px-3 border-2 pt-5 pb-5 py-5 bg-slate-200 rounded-sm">
          <img
            src={rev2}
            alt=""
            className="w-24 rounded-full aspect-square text-center bg-orange-500 p-[1.4px]"
          />

          <h3 className="text-center text-2xl pb-1 pt-3 font-libre font-extrabold text-slate-700">Someone Name</h3>
          <div className="flex text-xl pb-3 text-orange-500 tracking-widest">
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-solid fa-star"></i></span>
            <span><i className="fa-regular fa-star"></i></span>
            
          </div>
          <p className="text-center text-md text-slate-400 font-libre font-thin italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autemit
            soluta minima illum nihil, dolor quam, sed molestias aliquam
            repudiandae cum eos mollitia, iure facilis explicabo.
          </p>
        </div>
      </div>
<div className="flex justify-center items-center text-xl py-5 cursor-pointer text-orange-500 ">
    <span className="text-center items-center flex justify-center"><i className="fa-solid fa-circle-dot"></i></span>
    <span className="text-center items-center flex justify-center mx-5"><i className="fa-solid fa-circle-dot"></i></span>
    <span className="text-center items-center flex justify-center"><i className="fa-solid fa-circle-dot"></i></span>
</div>
    </section>
  );
}

export default testimonial;
