import React from "react";
import BannerSec from "../Components/BannerSec";
import bgImage from "../assets/images/ContactImage.png";
import CenterText from "../Components/CenterText.jsx";
import Image from "../assets/images/getStarted.jpg";
import Email from "../assets/emailLogo.svg";
import Location from "../assets/locationLogo.svg";
import Message from "../assets/chatLogo.svg";
import ContactForm from "../Components/ContactForm.jsx";

function Contact() {
  return (
    <section>
      <BannerSec
        bgImage={bgImage}
        align="items-center"
        size="text-2xl md:text-[48px]"
        text="text-white"
        title="Vibe with the Right Tribe!s"
        overlayOpacity={0.3}
      />
      <div className="container mx-auto flex flex-col items-center justify-center">
        <CenterText
          text="text-lg md:text-[31px]"
          desc="will fit your business requirement and goals, whether you need a space for a day, month, or a whole year. Whether it's small, medium, or large space requirements, COWO allows you to customize your office the way you want it. COWO offers cost-effective adjustable workplace solutions that result in a productive office environment for startups!"
        />

        {/* lets get started */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:mt-20">
          <div
            data-aos="fade-right"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <img
              src={Image}
              alt="Company Office"
              className="h-[350px] w-[330px] object-cover shadow-custom md:h-[460px] md:w-[427px] rounded-xl "
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-once="true"
            className="w-max px-4"
          >
            <div className="bg-white p-6 space-y-10 md:mt-10">
              <h2
                style={{ fontFamily: "FontSemi" }}
                className="text-2xl md:text-3xl text-center text-[rgba(55,20,0,1)] font-bold mb-4"
              >
                Let's Get Started
              </h2>
              <div className="mb-4 flex items-cente space-x-4">
                <img src={Location} className="h-[43px] w-[41]" alt="Logo" />
                <p className="w-full text-[rgba(55,20,0,1)] text-lg md:text-3xl font-sans font-normal border-b-2 border-[rgba(0,0,0,1)] pb-2">
                  123 Main Street
                </p>
              </div>
              <div className="mb-4 flex items-center space-x-4">
                <img src={Message} className="h-[43px] w-[41]" alt="Logo" />
                <p className="w-full text-[rgba(55,20,0,1)] text-lg md:text-3xl font-sans font-normal border-b-2 border-[rgba(0,0,0,1)] pb-2">
                  +1 (234) 567-890
                </p>
              </div>
              <div className="mb-4 flex items-center space-x-4">
                <img src={Email} className="h-[43px] w-[41]" alt="Logo" />
                <p className="w-full text-[rgba(55,20,0,1)] text-lg md:text-3xl font-sans font-normal border-b-2 border-[rgba(0,0,0,1)] pb-2">
                  contact@company.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="400"
          data-aos-once="true"
          className="mt-16"
        >
          <ContactForm title="We’d love to hear from you!" align="mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
