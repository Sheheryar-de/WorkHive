import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import FacebookLogo from "../assets/facebook.svg";
import InstagramLogo from "../assets/instagram.svg";
import LinkedinLogo from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="bg-[rgba(173,173,173,1)] mt-0 ">
      <div className="max-w-4xl h-auto md:h-[260px] mx-auto p-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex items-center md:items-start justify-between flex-col md:flex-row h-auto md:h-[170px] w-full">
          <div className="space-y-4 max-w-[270px]">
            <img src={Logo} alt="Logo" className="mx-auto md:mx-0" />
            <p className="text-[14px] font-semibold leading-[20px] md:text-start text-center">
              A comfortable co-working place for creative, freelancers, and
              start-ups located in the heart of the city.
            </p>
            <div className="flex gap-5 items-center md:items-start justify-center md:justify-start">
              <a
                href="https://www.facebook.com/share/BkEKyJp6dW4kvQML/?mibextid=qi2Omg"
                target="_blank"
                className="w-[40px] h-[40px] rounded-md bg-[rgba(55,20,0,1)] flex items-center justify-center"
              >
                <img
                  src={FacebookLogo}
                  className="w-[25px] h-[25px]"
                  alt="Facebook Icon"
                />
              </a>
              <a
                href="https://www.instagram.com/work.hive?igsh=MW40cnRuZXV5ejFvNA=="
                target="_blank"
                className="w-[40px] h-[40px] rounded-md bg-[rgba(55,20,0,1)] flex items-center justify-center"
              >
                <img src={InstagramLogo} alt="Instagram Icon" />
              </a>
              {/* <div className="w-[40px] h-[40px] rounded-md bg-[rgba(55,20,0,1)] flex items-center justify-center">
                <img src={LinkedinLogo} alt="Linkedin Icon" />
              </div> */}
            </div>
          </div>
          <div className="mt-10 md:mt-0 ">
            <h2 className="text-[16px] font-semibold uppercase text-[rgba(55,20,0,1)] mb-6">
              Navigation
            </h2>
            <div className="flex flex-col space-y-3">
              <Link
                className="text-[14px] font-sans font-normal text-center md:text-start"
                to="about"
              >
                About Us
              </Link>
              <Link
                className="text-[14px] font-sans font-normal text-center md:text-start"
                to="service"
              >
                Services
              </Link>
              <Link
                className="text-[14px] font-sans font-normal text-center md:text-start"
                to="plans"
              >
                Plans
              </Link>
              <Link
                className="text-[14px] font-sans font-normal text-center md:text-start"
                to="contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="text-[16px] font-semibold uppercase text-[rgba(55,20,0,1)] mb-4 text-center md:text-start">
              Address
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8822986976147!2d74.3037348!3d31.472423799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a7b7696ab1%3A0x223b314c6f65da93!2sWORKHIVE%20%7C%20Coworking%20Space%20-%20Faisal%20Town%20Lahore!5e0!3m2!1sen!2s!4v1723279581467!5m2!1sen!2s"
              width="220px"
              height="130px"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md "
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
