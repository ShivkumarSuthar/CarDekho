import React from 'react'

function experience() {
  return (
    <section className="flex justify-between">
        <div className="bg-orange-400 w-1/2  flex justify-center items-center py-20">
            <span className="text-orange-600 font-hertical text-[50px] pr-3">60</span>
            <p className="text-[15px] font-libre  font-extralight">Year<br/>Experienced</p>
        </div>
        <div className="flex justify-center w-full items-center ">
        <div className="w-1/2  flex justify-center items-center py-20">
            <span className="text-orange-600 font-hertical text-[50px] pr-3">1,260</span>
            <p className="text-[15px] font-libre  font-extralight">Total<br/>Cars</p>
        </div>
        <div className="w-1/2  flex justify-start items-center py-20">
            <span className="text-orange-600 font-hertical text-[50px] pr-3">2,360</span>
            <p className="text-[15px] font-libre font-extralight">Happy<br/>Customers</p>
        </div>
        <div className="w-1/2 flex justify-start items-center py-20">
            <span className="text-orange-600 font-hertical text-[50px] pr-3">35</span>
            <p className="text-[15px] font-libre font-extralight">Total<br/>Branches</p>
        </div>
        </div>
    </section>
  )
}

export default experience