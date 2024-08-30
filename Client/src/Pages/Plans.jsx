import BannerSec from "../Components/BannerSec.jsx";
import SubscriptionPlanCard from "../Components/SubscriptionPlanCard.jsx";
import bgImage from "../assets/images/PlanImage.jpg";
import LocationLogo from "../assets/locationLogo.svg";
import ChatLogo from "../assets/chatLogo.svg";
import { useState } from "react";
import Modal from "../Components/Modal";

function Plans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section>
        <BannerSec
          bgImage={bgImage}
          align="items-center"
          size="text-2xl md:text-[50px]"
          text="text-[rgba(255,255,255,1)]"
          title="Our Economical Packages"
        />

        <div className="container mx-auto">
          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {plans.map((plan) => (
              <SubscriptionPlanCard
                key={plan.id}
                plan={plan}
                features={features}
              />
            ))}
          </div>
        </div>
        {/* Speak with us Section */}
        <div className="relative mt-[70px] md:mt-[150px] h-auto md:min-h-[400px] p-6">
          <div className="absolute inset-x-0 bottom-0 h-[200px] md:h-[250px] bg-[#371400] z-0"></div>

          <div className="relative p-4 mx-auto max-w-[800px] shadow-3xl rounded-2xl h-max md:h-[280px] bg-white ">
            <h1
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              style={{ fontFamily: "FontSemi" }}
              className="custom-shadow text-[rgba(55,20,0,1)] text-center text-[25px] md:text-[36px]"
            >
              Speak with Us{" "}
            </h1>
            <div className="flex items-center justify-center gap-2 md:gap-20 mt-10">
              <a
                onClick={openModal}
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-delay="400"
                data-aos-once="true"
                className="w-[150px] h-[100px] md:w-[215px] md:h-[130px] shadow-2xl rounded-[9px] flex items-center justify-center flex-col hover:cursor-pointer"
              >
                <img src={LocationLogo} className="h-[50px] mb-2" alt="Logo" />
                <p className="text-center text-[rgba(254,190,16,1)] text-[13px] md:text-[23px] font-sans">
                  Book a tour
                </p>
              </a>

              <a
                data-aos="fade-left"
                data-aos-duration="1600"
                data-aos-delay="400"
                data-aos-once="true"
                className="w-[150px] h-[100px] md:w-[215px] md:h-[130px] shadow-2xl rounded-[9px] flex items-center justify-center flex-col cursor-pointer"
                href="https://wa.me/923164517106"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ChatLogo} className="h-[40px] mb-3" alt="Logo" />
                <p className="text-center text-[rgba(254,190,16,1)] text-[13px] md:text-[23px] font-sans ">
                  Get a Call Back
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Plans;

const plans = [
  {
    id: 1,
    name: "Open Seat",
    features: ["Hot Seat", "Dedicated Seat"],
  },
  {
    id: 2,
    name: "Dedicated Office",
    features: ["6 Persons", "9 Persons", "12+ Persons"],
  },
  {
    id: 3,
    name: "Meeting Room",
    features: ["Half Day", "Full Day"],
  },
];

const features = [
  {
    id: 1,
    planType: "Open Seat",
    name: "Hot Seat",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-12000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
  {
    id: 2,
    planType: "Open Seat",
    name: "Dedicated Seat",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-15000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
  {
    id: 1,
    planType: "Meeting Room",
    name: "Half Day",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-4000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
  {
    id: 2,
    planType: "Meeting Room",
    name: "Full Day",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-7000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
  {
    id: 1,
    planType: "Dedicated Office",
    name: "6 Persons",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-120,000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
  {
    id: 2,
    planType: "Dedicated Office",
    name: "9 Persons",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-150,000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
  {
    id: 3,
    planType: "Dedicated Office",
    name: "12+ Persons",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    price: "PKR-200,000",
    list: ["Air Conditional", "Power Backup", "High Speed Internet"],
  },
];
