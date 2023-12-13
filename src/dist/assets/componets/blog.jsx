import React from "react";
import bimg from "./images/car4.jpg";
import bimg2 from "./images/car5.jpg";
import bimg3 from "./images/car6.jpg";

function blog() {
  return (
    <section className="pt-10 px-28 pb-10">
      <h2 className="text-center text-orange-500 text-md font-hertical">
        BLOG
      </h2>
      <h1 className="font-libre text-center text-3xl py-4">Recent Blog</h1>
      <div className="pt-5 flex justify-between items-center">
        <div className="mx-5">
          <img src={bimg} alt="" className="mb-3" />
         <span className="text-left pb-3 font-hertical text-orange-500 tracking-widest">
            oct 19, 2019 Admin <span>
              <i className="fa-solid fa-message"></i>
            </span><sub className="text-[10px]">3</sub>
          </span>
          <h2 className="text-left pb-5 font-libre text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, dicta?
          </h2>
          <button className="text-white text-xl font-libre">Read More</button>
        </div>
        {/*BLog 2 */}
        <div className="mx-5">
          <img src={bimg2} alt="" className="mb-3" />
          <span className="text-left pb-3 font-hertical text-orange-500 tracking-widest">
            oct 19, 2019 Admin <span>
              <i className="fa-solid fa-message"></i>
            </span><sub className="text-[10px]">3</sub>
          </span>
          <h2 className="text-left pb-5 font-libre text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, dicta?
          </h2>
          <button className="text-white text-xl font-libre">Read More</button>
        </div>

        {/*BLog 3 */}
        <div className="mx-5">
          <img src={bimg3} alt="" className="mb-3" />
          <span className="text-left pb-3 font-hertical text-orange-500 tracking-widest">
            oct 19, 2019 Admin <span>
              <i className="fa-solid fa-message"></i>
            </span><sub className="text-[10px]">3</sub>
          </span>
          <h2 className="text-left pb-5 font-libre text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, dicta?
          </h2>
          <button className="text-white text-xl font-libre">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default blog;
