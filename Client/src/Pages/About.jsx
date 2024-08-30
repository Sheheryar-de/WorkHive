import BannerSec from "../Components/BannerSec";
import CenterText from "../Components/CenterText";
import bgImage from "../assets/images/AboutImage.png";
import GalleryImage1 from "../assets/images/galleryImg1.png";
import GalleryImage2 from "../assets/images/galleryImg2.png";
import GalleryImage3 from "../assets/images/galleryImg3.png";
import GalleryImage4 from "../assets/images/galleryImg4.png";
import GalleryImage5 from "../assets/images/galleryImg5.png";
import GalleryImage6 from "../assets/images/galleryImg6.png";
import GalleryImage7 from "../assets/images/galleryImg7.png";
import GalleryImage8 from "../assets/images/galleryImg8.png";
import Bulb from "../assets/BulbLogo.svg";
import Rocket from "../assets/RocketLogo.svg";
import Sign from "../assets/QuestionLogo.svg";
import Img from "../assets/images/AboutusImg.jpg";
import FAQ from "../Components/FAQ";

function About() {
  return (
    <section>
      <BannerSec
        bgImage={bgImage}
        align="text-center"
        size="text-2xl md:text-[50px]"
        text="pl-0 md:pl-14 text-[rgba(255,255,255,1)]"
        title="About Our Workspace"
        overlayOpacity={0.3}
      />
      <div className="container mx-auto">
        {/* who we are section*/}
        <CenterText
          title="Who are we?"
          text="text-md md:text-[24px] md:mt-2"
          desc="WorkHive is so economical for startups, SMEs, freelancers, and
          remote workers, offering flexible membership plans and affordable
          pricing without compromising on quality. Our prime locations and
          state-of-the-art facilities ensure that you get great value for money,
          with spaces designed for creativity, collaboration, and growth.
          Whether you need a productive environment for your team or a quiet
          workspace for individual projects, WorkHive provides the perfect
          solution to meet your needs and budget."
        />

        {/* gallery section */}
        <div className="flex  items-center justify-center gap-2 lg:justify-evenly my-10 flex-wrap">
          <div className="relative">
            <img
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="400"
              data-aos-once="true"
              src={Bulb}
              className="absolute -top-20"
              alt=""
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              src={GalleryImage1}
              alt="Gallery"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5 md:mt-0">
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              className="w-[226px] h-[227] md:w-auto md:h-auto"
              src={GalleryImage2}
              alt="Gallery"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              className="w-[226px] h-[227] md:w-auto md:h-auto"
              src={GalleryImage3}
              alt="Gallery"
            />
          </div>
          <div className="relative flex flex-col gap-5 mt-5 md:mt-0 ">
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              className="w-[226px] h-[227] md:w-auto md:h-auto"
              src={GalleryImage4}
              alt="Gallery"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-delay="400"
              data-aos-once="true"
              src={Rocket}
              className="absolute top-[200px] -left-10"
              alt="Logo"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              className="w-[226px] h-[227] md:w-auto md:h-auto"
              src={GalleryImage5}
              alt="Gallery"
            />
          </div>
          <div className="relative flex flex-col gap-5 my-5 md:my-0">
            <img
              data-aos="fade-down"
              data-aos-duration="1800"
              data-aos-delay="400"
              data-aos-once="true"
              src={Sign}
              className="absolute -top-12"
              alt="Logo"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              className="w-[226px] h-[227] md:w-auto md:h-auto"
              src={GalleryImage6}
              alt="Gallery"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              className="w-[226px] h-[227] md:w-auto md:h-auto"
              src={GalleryImage7}
              alt="Gallery"
            />
          </div>
          <div>
            <img
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
              data-aos-once="true"
              src={GalleryImage8}
              alt="Gallery"
            />
          </div>
        </div>

        {/* about us section */}
        <div className="h-auto md:h-[556px] mt-[120px] flex items-center md:items-start justify-evenly flex-col md:flex-row p-6">
          <img
            data-aos="fade-right"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-once="true"
            src={Img}
            alt="About image"
            className="h-[450px] w-[420px] object-cover shadow-custom rounded-lg "
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1600"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <h2
              style={{ fontFamily: "FontSemi" }}
              className="custom-shadow text-center text-xl md:text-[36px] text-[rgba(254,190,16,1)] mt-10 md:mt-0"
            >
              Know about us{" "}
            </h2>
            <p className="font-sans text-md md:text-[24px] p-8 leading-[28px] text-center md:text-start max-w-[640px] text-[rgba(55,20,0,1)]">
              We're passionate crafters of an environment that carries vibes of
              both creativity and connectivity. We are well equipped and
              stationed in the heart of the city Liberty Market Gulberg. Our
              central location gives you convenient access to hospitals, public
              transportation, entertainment, and famous restaurants, among other
              things. COWO is becoming a landmark co-working space in Liberty
              Market and its surroundings. It is just not only a co-working
              space but a fun place to spend time. At Cowo, we understand that a
              well-designed workspace can significantly impact your productivity
              and work-life balance.
            </p>
          </div>
        </div>

        {/* FAQ section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <FAQ />
        </div>
      </div>
    </section>
  );
}

export default About;
