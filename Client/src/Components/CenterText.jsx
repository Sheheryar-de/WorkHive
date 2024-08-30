import React from "react";

function CenterText({ title, desc, text }) {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="400"
        data-aos-once="true"
        className="max-w-[1000px] flex flex-col items-center justify-center mx-auto mt-10"
      >
        <h2
          style={{ fontFamily: "FontSemi" }}
          className="custom-shadow text-3xl font-bold text-[rgba(55,20,0,1)] md:text-[36px]"
        >
          {title}
        </h2>
        <p
          className={`p-4 ${text} text-center md:leading-7 text-[rgba(254,190,16,1)] font-sans `}
        >
          {desc}
        </p>
      </div>
    </>
  );
}

export default CenterText;
