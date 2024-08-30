import React from "react";

import PersonLogo from "../assets/person.svg";

function OfferCard({ title, desc, views, logo }) {
  return (
    <div className="flex  max-w-72 h-max md:h-36 p-3 rounded-lg border-2 border-[rgba(55,20,0,1)]">
      <img height="104px" width="104px" src={logo} alt="Logo" />

      <div className="">
        <h1
          style={{ fontFamily: "FontSemi" }}
          className="text-[17px] font-semibold"
        >
          {title}
        </h1>
        <p className="text-[13px] font-sans">{desc}</p>
        <div className="flex items-center mt-2">
          <img className="w-6 h-6" src={PersonLogo} alt="Person Icon" />
          <p style={{ fontFamily: "FontSemi" }} className="text-sm">
            {views}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
