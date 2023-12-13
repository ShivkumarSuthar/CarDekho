import React from 'react'

function footer() {
    const bgimg="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png";

    const girl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif";

    const redCar="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif";

    const keyf1={
        '@keyframes bike':{
            from:{left: '-25%'},
            to:{left:'100%'},
        },
    }
  return (
    <section className="px-0 py-10 bg-slate-300">

    <div className="flex justify-center px-20 ">
<div className="w-1/4 text-left">
    <span className="font-hertical text-xl font-extrabold">Car<span className="text-teal-500">Book</span></span>
    <p className="pt-5 text-[15px] font-libre font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto quas ad eaque nostrum praesentium?</p>

    <div className="flex pt-2">
    <span className="mx-2 text-2xl "><i className="fa-brands fa-facebook-f text-blue-600"></i></span>
    <span className="mx-2 text-2xl"><i className="fa-brands fa-instagram text-orange-500"></i></span>
    <span className="mx-2 text-2xl"><i className="fa-brands fa-twitter text-blue-600"></i></span>
    </div>
</div>

<div className="w-1/4 flex flex-col">
    <span className="font-hertical text-xl">Information</span>
    <span className=" pt-5 font-libre font-thin py-1"><a href="/">About</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Services</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Term and Conditions</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Best Price Guarantee</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Privacy & Cookies Policy</a></span>
</div>
<div className="w-1/4 flex flex-col">
    <span className="font-hertical text-xl">Customer Support</span>
    <span className="font-libre font-thin pt-5 py-1"><a href="/">FAQ</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Payment Option</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Booking Tips</a></span>
    <span className="font-libre font-thin py-1"><a href="/">How it works</a></span>
    <span className="font-libre font-thin py-1"><a href="/">Contact Us</a></span>
</div>
<div className=" flex flex-col text-[15px]">
    <span className="font-hertical text-xl">Have a Questions?</span>
    <div className=" font-libre font-thin pt-5 flex py-2"><span className="font-hertical px-3"><i class="fa-solid fa-location-dot"></i></span><span>203 Fake St. Mountain View, San Francisco, California, USA</span></div>
    <div className=" font-libre font-thin pt-4"><span className="font-hertical px-3"><i class="fa-solid fa-phone"></i></span><span>+2 392 3929 210</span></div>
    <div className="py-5 font-libre font-thin  flex"><span className="font-hertical px-3"><i class="fa-solid fa-at"></i></span><span>info@yourdomain.com</span></div>
</div>
</div>
<div className="bg w-screen"  style={{
          backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 0',
          backgroundSize:'100%',
          width: '100%',
          height: '280px',
          position: 'relative',
          bottom: '0%',
          marginTop:'-150px',
       overflow:'hidden',
        }}>
    <div className="bg-one"  style={{
            backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: '330px',
            height: '90px',
            backgroundSize: '100%',
            position: 'absolute',
            bottom: 0,
            left: '0%',
            animation: 'fadeIn 22s linear infinite',
        
          }}></div>
    <div className="bg-two" style={{
            backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: '88px',
            height: '100px',
            backgroundSize: '100%',
            bottom: 0,
            left: '0%',
            position: 'absolute',
            animation: 'fadeIn 30s linear infinite',
         
          }}></div>
</div>
    </section>
  )
}

export default footer