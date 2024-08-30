import React from "react";
import { Link } from "react-router-dom";

function OfferedServices({ title, desc1, desc2, desc3, desc4, image }) {
  return (
    <>
      <div className="mt-10 px-6 p-4 max-w-[1150px] mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="400"
          data-aos-once="true"
          style={{ fontFamily: "FontSemi" }}
          className="custom-shadow text-[25px] md:text-[64px] text-[rgba(55,20,0,1)] "
        >
          {title}
        </h1>
        <div className="md:mt-1 flex flex-col md:flex-row items-center justify-between">
          <h2
            data-aos="fade-right"
            data-aos-duration="1700"
            data-aos-delay="400"
            data-aos-once="true"
            className="text-[rgba(55,20,0,1)] max-w-[600px] font-sans text-[14px] md:text-[24px] md:leading-[28px] "
          >
            {desc1}
            <br />
            <br /> {desc2}
            <br />
            <br /> {desc3}
            <br />
            <br /> {desc4}
          </h2>
          <div className="relative mt-5 md:mt-0 h-max w-[350px] md:h-auto md:w-auto overflow-hidden">
            <img
              data-aos="fade-left"
              data-aos-duration="1700"
              data-aos-delay="400"
              data-aos-once="true"
              src={image}
              className="w-auto  md:w-[340px] md:h-[490px] rounded-xl object-cover"
              alt="Description"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <Link
                to="/plans"
                className="bg-[rgba(254,190,16,1)] text-black px-4 py-2 rounded font-medium"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferedServices;
