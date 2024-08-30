import BannerSec from "../Components/BannerSec";
import bgImage from "../assets/images/HeroImage.png";
import workImg from "../assets/images/WorkImg.png";
import OfferCard from "../Components/OfferCard";
import Services from "../Components/Services";
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.svg";
import service4 from "../assets/service4.svg";
import service5 from "../assets/service5.svg";
import service6 from "../assets/service6.svg";
import service7 from "../assets/service7.svg";
import service8 from "../assets/service8.svg";
import service9 from "../assets/service9.svg";
import service10 from "../assets/service10.svg";
import service11 from "../assets/service11.svg";
import service12 from "../assets/service12.svg";
import ContactForm from "../Components/ContactForm";
import contactImg from "../assets/images/ContactImg.jpg";
import Img1 from "../assets/serviceLogo1.svg";
import Img2 from "../assets/serviceLogo2.svg";
import Img3 from "../assets/serviceLogo3.svg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <BannerSec
        bgImage={bgImage}
        size="text-[25px] font-bold md:text-4xl"
        align="text-center md:text-start"
        text="pl-0 md:pl-14 text-[rgba(55,20,0,1)] "
        title="Economical Co-Working Space"
        desc="Affordable Spaces for Your Big Ideas"
        isHome={true}
        space="mb-20"
        overlayOpacity={0.3}
      />

      {/* Why work with us section */}
      <div className="container mx-auto">
        <div className="container mx-auto p-6">
          <div className="bg-white h-auto lg:h-[710px] flex items-center justify-center my-10">
            <div className="w-full md:max-w-[1031px] relative h-max lg:h-[610px]">
              <img
                className="w-full md:max-w-[915px] absolute lg:right-0 lg:top-0 h-auto z-0"
                src={workImg}
                alt="Office Image"
              />
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
                className="bg-[rgba(0,0,0,0.75)] h-auto max-w-[300px] md:max-w-[505px] relative mx-auto lg:mx-0 lg:absolute top-[20px] lg:top-[150px] z-10 p-4 rounded-3xl transition-all duration-1000 ease-in-out transform"
              >
                <h2 className="text-xl md:text-5xl font-semibold text-[rgba(254,190,16,1)]">
                  Why WorkHive?
                </h2>
                <p className="text-[12px] md:text-[20px] text-white leading-6 mt-5">
                  Our co-working spaces are designed to provide a perfect blend
                  of affordability and functionality, making it easier for
                  start-ups, freelancers, and small businesses to thrive. With
                  state-of-the-art facilities, high-speed internet, and a
                  community of like-minded professionals, Workhive offers an
                  environment that fosters collaboration and innovation. Enjoy
                  flexible membership plans, access to meeting rooms, and a
                  vibrant community that supports your journey to success.
                  Choose Workhive for an economical solution that doesn’t
                  compromise on quality, and take your business to the next
                  level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* offers section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="400"
          data-aos-once="true"
          className="h-max lg:h-[450px] max-w-[1050px] mx-auto p-12"
        >
          <h2 className="custom-shadow text-center text-[36px] font-semibold text-[rgba(55,20,0,1)]">
            Our Offering
          </h2>
          <p
            style={{ fontFamily: "FontSemi" }}
            className="text-md md:text-[27px] text-[rgba(254,190,16,1)] flex items-center flex-col md:flex-row text-center md:text-start gap-2 md:gap-0 mt-4 md:mt-8 md:ml-12 "
          >
            Select the Perfect Workspace Plan for Your Team{" "}
            <Link
              to="plans"
              className="bg-[rgba(55,20,0,1)] hover:bg-[rgba(254,190,16,1)] text-[rgba(254,190,16,1)] hover:text-[rgba(55,20,0,1)] text-xs pl-3 py-1 rounded-md w-max flex items-center md:ml-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              View Our Plans
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 icon icon-hover"
              >
                <path d="M11.6667 8.16671L17.5 14L11.6667 19.8334L11.6667 8.16671Z" />
              </svg>
            </Link>
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-delay="400"
            data-aos-once="true"
            className="flex items-center justify-evenly flex-col lg:flex-row gap-5 lg:gap-0 mb-12 md:mb-0 mt-14"
          >
            {arr.map((data) => (
              <OfferCard
                key={data.id}
                title={data.title}
                desc={data.desc}
                views={data.view}
                logo={data.img}
              />
            ))}
          </div>
        </div>

        {/* comprehensive services section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="400"
          data-aos-once="true"
          className="h-auto md:h-[590px]"
        >
          <h1
            style={{ fontFamily: "FontSemi" }}
            className="custom-shadow text-[rgba(254,190,16,1)] text-xl md:text-4xl text-center"
          >
            Comprehensive Services
          </h1>
          <h3
            style={{ fontFamily: "FontSemi" }}
            className="text-[rgba(55,20,0,1)] text-center text-[15px] md:text-[27px] mt-4 md:mt-10"
          >
            "Maximize Your Day with Our Comprehensive Amenities"
          </h3>
          <div className="flex items-center justify-center flex-wrap gap-20 mt-10">
            {arr1.map((data) => (
              <Services key={data.id} logo={data.Logo} title={data.title} />
            ))}
          </div>
        </div>

        {/* map section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="400"
          data-aos-once="true"
          className="h-auto md:h-[540px] my-20 md:mt-[250px] xl:mt-[0px] p-3"
        >
          <h1
            style={{ fontFamily: "FontSemi" }}
            className="text-2xl md:text-4xl text-center text-[rgba(55,20,0,1)]"
          >
            Location Map
          </h1>
          <div className="max-w-[1100px] px-4 h-auto md:h-[428px] mx-auto mt-10 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8822986976147!2d74.3037348!3d31.472423799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a7b7696ab1%3A0x223b314c6f65da93!2sWORKHIVE%20%7C%20Coworking%20Space%20-%20Faisal%20Town%20Lahore!5e0!3m2!1sen!2s!4v1723279581467!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            ></iframe>
          </div>
        </div>

        {/* contact form section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="400"
          data-aos-once="true"
          className="flex items-center justify-evenly flex-col md:flex-row mb-5 p-6"
        >
          <ContactForm
            title="Get In Touch"
            desc="
        Ready to elevate your workspace experience? Contact us today and let's
        start building the perfect environment for your success."
          />
          <img
            className="h-[500px] w-[460px] rounded-3xl shadow-custom"
            src={contactImg}
            alt="Office Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

const arr = [
  {
    id: 1,
    title: "Meeting Room",
    desc: "We offer an ambient environment, perfect for various meetings.",
    view: "7-9",
    img: Img1,
  },
  {
    id: 2,
    title: "Hot Seat",
    desc: "Our Hot Desk solution provides the perfect blend of flexibility and comfort.",
    view: "1",
    img: Img2,
  },
  {
    id: 3,
    title: "Dedicated Office",
    desc: "Ready to move-in, fully furnished and serviced offices.",
    view: "6,9 & more",
    img: Img3,
  },
];

const arr1 = [
  {
    id: 1,
    Logo: service1,
    title: "High Speed Wifi",
  },
  {
    id: 2,
    Logo: service2,
    title: "Backup Generator ",
  },
  {
    id: 3,
    Logo: service3,
    title: "CCTV Surveillance",
  },
  {
    id: 4,
    Logo: service4,
    title: "Namaz Area",
  },
  {
    id: 5,
    Logo: service5,
    title: "Tea",
  },
  {
    id: 6,
    Logo: service6,
    title: "Fully Air Conditioned",
  },
  {
    id: 7,
    Logo: service7,
    title: "Mail & Package Handling",
  },
  {
    id: 8,
    Logo: service8,
    title: "Printing & Scanning",
  },
  {
    id: 9,
    Logo: service9,
    title: "Maintenance",
  },
  {
    id: 10,
    Logo: service10,
    title: "Dining Area",
  },
  {
    id: 11,
    Logo: service11,
    title: "Meeting Room",
  },
  {
    id: 12,
    Logo: service12,
    title: "Parking",
  },
];
