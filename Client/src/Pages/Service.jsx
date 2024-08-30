import React from "react";
import BannerSec from "../Components/BannerSec";
import bgImage from "../assets/images/ServiceImage.jpg";
import ServiceImg1 from "../assets/images/serviceImg.png";
import ServiceImg2 from "../assets/images/serviceImg1.png";
import ServiceImg3 from "../assets/images/serviceImg2.jpg";
import OfferedServices from "../Components/OfferedServices";

function Service() {
  return (
    <section>
      <BannerSec
        bgImage={bgImage}
        align="items-center"
        size="text-4xl md:text-[96px]"
        text="text-[rgba(255,255,255,1)]"
        title="Services"
        overlayOpacity={0.4}
      />
      <div className="container mx-auto  mb-10">
        {arr.map((data) => (
          <OfferedServices
            key={data.id}
            title={data.title}
            desc1={data.desc1}
            desc2={data.desc2}
            desc3={data.desc3}
            desc4={data.desc4}
            image={data.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Service;

const arr = [
  {
    id: 1,
    title: "Hot Seat",
    desc1:
      "Workhive provides its members with premium coworking halls, perfect for collaborative work. Whether you need a place to work for the day or a dedicated seat to establish a productive routine- We've got you covered. We prize flexibility. That’s why we make sure our coworking space can account for your rapidly growing team.",
    desc2:
      "Situating your business within a large inclusive network of professionals from diverse industries- coworking offers novel learning opportunities that accelerates growth and help scale your business.A hub of creativity and disruption, coworking places you at the heart of the startup ecosystem, sparking conversation, new partnerships and ventures.",
    desc3: "Become a part of a community that never stops growing.",
    img: ServiceImg1,
  },
  {
    id: 2,
    title: "Dedicated Office",
    desc1:
      "Workhive provides its members with premium coworking halls, perfect for collaborative work. Whether you need a place to work for the day or a dedicated seat to establish a productive routine- We've got you covered.",
    desc2:
      "We prize flexibility. That’s why we make sure our coworking space can account for your rapidly growing team.",
    desc3:
      " Situating your business within a large inclusive network of professionals from diverse industries- coworking offers novel learning opportunities that accelerates growth and help scale your business.A hub of creativity and disruption, coworking places you at the heart of the startup ecosystem, sparking conversation, new partnerships and ventures. ",
    desc4: "Become a part of a community that never stops growing.",
    img: ServiceImg2,
  },
  {
    id: 3,
    title: "Meeting Room",
    desc1:
      "Workhive provides its members with premium coworking halls, perfect for collaborative work. Whether you need a place to work for the day or a dedicated seat to establish a productive routine- We've got you covered.",
    desc2:
      "We prize flexibility. That’s why we make sure our coworking space can account for your rapidly growing team. ",
    desc3:
      "Situating your business within a large inclusive network of professionals from diverse industries- coworking offers novel learning opportunities that accelerates growth and help scale your business.A hub of creativity and disruption, coworking places you at the heart of the startup ecosystem, sparking conversation, new partnerships and ventures",
    desc4: "Become a part of a community that never stops growing",
    img: ServiceImg3,
  },
];
