import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Modal from "../Components/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("about")) {
      setActiveTab("about");
    } else if (path.includes("services")) {
      setActiveTab("services");
    } else if (path.includes("plans")) {
      setActiveTab("plans");
    } else if (path.includes("contact")) {
      setActiveTab("contact");
    } else {
      setActiveTab("home");
    }
  }, [location.pathname]); // Update activeTab whenever the path changes

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-[rgba(173,173,173,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-[74px]">
          <div className="h-[auto] w-[150px] lg:w-auto">
            <img className="" src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md lg:text-[20px] font-semibold transform transition-transform duration-300 ease-in-out ${
                activeTab === "home"
                  ? "text-[rgba(55,20,0,1)]"
                  : "text-[rgba(77,77,77,1)] hover:text-[rgba(55,20,0,1)]"
              } hover:translate-y-[-2px]`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md lg:text-[20px] font-semibold transform transition-transform duration-300 ease-in-out ${
                activeTab === "about"
                  ? "text-[rgba(55,20,0,1)]"
                  : "text-[rgba(77,77,77,1)] hover:text-[rgba(55,20,0,1)]"
              } hover:translate-y-[-2px]`}
              onClick={() => setActiveTab("about")}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md lg:text-[20px] font-semibold transform transition-transform duration-300 ease-in-out ${
                activeTab === "services"
                  ? "text-[rgba(55,20,0,1)]"
                  : "text-[rgba(77,77,77,1)] hover:text-[rgba(55,20,0,1)]"
              } hover:translate-y-[-2px]`}
              onClick={() => setActiveTab("services")}
            >
              Services
            </Link>
            <Link
              to="/plans"
              className={`px-3 py-2 rounded-md lg:text-[20px] font-semibold transform transition-transform duration-300 ease-in-out ${
                activeTab === "plans"
                  ? "text-[rgba(55,20,0,1)]"
                  : "text-[rgba(77,77,77,1)] hover:text-[rgba(55,20,0,1)]"
              } hover:translate-y-[-2px]`}
              onClick={() => setActiveTab("plans")}
            >
              Plans
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md lg:text-[20px] font-semibold transform transition-transform duration-300 ease-in-out ${
                activeTab === "contact"
                  ? "text-[rgba(55,20,0,1)]"
                  : "text-[rgba(77,77,77,1)] hover:text-[rgba(55,20,0,1)]"
              } hover:translate-y-[-2px]`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex">
            <button
              onClick={openModal}
              href="#book"
              className="font-sans bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] px-4 py-2 rounded lg:text-[18px] font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(55,20,0,1)] hover:text-[rgba(254,190,16,1)]"
            >
              Book a Tour
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-[rgba(173,173,173,1)] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-black">
          <img className="h-8 w-auto" src={Logo} alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            <span className="sr-only">Close main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-700 border-b border-black hover:text-gray-900 block px-3 py-2 text-[20px] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="text-gray-700 border-b border-black hover:text-gray-900 block px-3 py-2 text-[20px] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="services"
            className="text-gray-700 border-b border-black hover:text-gray-900 block px-3 py-2 text-[20px] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="plans"
            className="text-gray-700 border-b border-black hover:text-gray-900 block px-3 py-2 text-[20px] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Plans
          </Link>
          <Link
            to="contact"
            className="text-gray-700 border-b border-black hover:text-gray-900 block px-3 py-2 text-[20px] font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <button
            onClick={openModal}
            href="#book"
            className="mt-2 bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] w-full px-4 py-2 rounded text-[18px] font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(55,20,0,1)] hover:text-[rgba(254,190,16,1)]"
          >
            Book a Tour
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
