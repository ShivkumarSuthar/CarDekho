import React from 'react';
import intro from "./images/about.png";

function about() {
  return (
    <section className="px-20 pb-3 pt-10">
        <h2 className="text-center pb-2 font-hertical text-xl text-orange-500">About us</h2>
        <h2 className="text-center pb-5 font-hertical text-3xl font-extrabold">Best Customer Experience</h2>
        <div className="wraper flex justify-between pt-10">
            <div className="w-1/2">
                <img src={intro} alt="" />
            </div>
            <div className="flex flex-col items-start w-1/2 pl-3 pr-5">
<h2 className="text-right font-hertical text-2xl pb-2">About us</h2>
<p className="text-xl font-century font-Nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deserunt ut a harum autem illum excepturi eum, itaque pariatur officia nulla ullam quae voluptatem doloremque provident mollitia quo, atque dolorum rem esse dolores iusto explicabo debitis! Error voluptate unde voluptates quibusdam, explicabo voluptas tempora sapiente pariatur tenetur molestiae, deserunt incidunt! <br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quos distinctio optio accusantium ab architecto tempore! Maxime hic ipsa excepturi enim illo quam doloribus in.</p>

<button className="bg-orange-500 text-xl text-white text-center py-3 px-4 mt-3 rounded-full font-century tracking-widest">Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default about