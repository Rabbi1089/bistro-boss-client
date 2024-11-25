import React from "react";
import SectionTitle from "../../../components/section title/SectionTitle";

import featImg from "../../../assets/home/featured.jpg";
import './feature.css'


const Feature = () => {
  return (
    <section className="featured-item bg-fixed">
      <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---">
        {" "}
      </SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-20 bg-slate-600 opacity-60 text-white">
        <div className="">
          <img src={featImg} alt="" srcset="" />
        </div>
        <div className="md: ml-10 text-white">
          <p className="text-xs">March 20, 2023</p>
          <p className="text-xl uppercase">where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            ratione vitae, iure aliquam, inventore ea nisi, distinctio
            necessitatibus unde veritatis exercitationem. Qui error, unde
            dolorum, quae inventore aliquam minima quis fugiat aspernatur quo
            maxime officia eaque nemo quia sapiente optio facilis rerum labore
            iusto asperiores repellendus reprehenderit voluptates blanditiis
            veritatis.
          </p>
          <button className="btn btn-outline border-white text-white border-0 border-b-4">Default</button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
