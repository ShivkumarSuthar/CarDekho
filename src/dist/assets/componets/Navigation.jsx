import React from "react";
import logo from "./images/logo.png";
export default function Navigation() {
  return (
    <nav className="container py-5 px-16 w-screen h-24 bg-transparent md:flex md:justify-between md:items-center font-hertical md:text-xl">
      <div className="logo_div flex justify-start w-24">
        <a href="/">
          <span className="font-hertical text-2xl">
            car<span className="text-teal-500">book</span>
          </span>
        </a>
      </div>
      <div className="justify-center">
        <ul className="flex item-center md:justify-end justify-between pointer-events-auto text-slate-700">
          <a
            href="/"
            className="active:text-orange-500 hover:text-orange-500 hover:font-extrabold"
          >
            <li className="mx-3 font-black uppercase"> Home</li>
          </a>
          <a
            href="/"
            className="active:text-orange-500 hover:text-orange-500 hover:font-extrabold"
          >
            <li className="mx-3 font-black uppercase"> About</li>
          </a>
          <a
            href="/"
            className="active:text-orange-500 hover:text-orange-500 hover:font-extrabold"
          >
            <li className=" mx-3  font-black uppercase"> Services</li>
          </a>
          <a
            href="/"
            className="active:text-orange-500 hover:text-orange-500 hover:font-extrabold"
          >
            <li className="mx-3 font-black uppercase"> Contact us</li>
          </a>
          <a
            href="/"
            className="active:text-orange-500 hover:text-orange-500 hover:font-extrabold"
          >
            <li className="mx-3 font-black uppercase"> Rides</li>
          </a>
          <a
            href="/"
            className="active:text-orange-500 hover:text-orange-500 hover:font-extrabold"
          >
            <li className="mx-3 font-black uppercase"> Help</li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-start text-slate-400 mr-16">
        <ul className="flex items-center">
          <button className="mr-3"> Sign up</button>
          <button className="lowercase border-2 my-3 rounded-full p-3 bg-orange-500 text-white font-xl font-thin border-orange-300">
            Log in
          </button>
        </ul>
      </div>
    </nav>
  );
}
