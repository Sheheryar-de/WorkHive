import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Modal from "../Components/Modal.jsx";

const SubscriptionPlanCard = ({ plan, features }) => {
  const [flip, setFlip] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setFlip(true);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div className="mx-auto z-0 flex items-start h-[410px] w-[300px] md:w-[340px] bg-white border-4 border-[rgba(0,0,0,1)] mt-10 md:mt-0">
        <div className="p-5">
          <h2 className="text-lg md:text-2xl text-[rgba(55,20,0,1)] font-semibold mb-3">
            {plan.name}
          </h2>

          <p className="text-[rgba(55,20,0,1)] text-sm md:text-lg font-medium leading-[20px] font-sans mb-4 p-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <ul className="flex flex-col items-center justify-center gap-4 mt-8">
            {plan.features.map((feature, index) => (
              <button
                onClick={() =>
                  handleFeatureClick(
                    features.find(
                      (f) => f.name === feature && f.planType === plan.name
                    )
                  )
                }
                key={index}
                className="w-max font-sans bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] px-4 py-2 rounded lg:text-[18px] font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(55,20,0,1)] hover:text-[rgba(254,190,16,1)]"
              >
                {feature}
              </button>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto z-0 flex items-center h-auto w-[300px] md:w-[340px] bg-white border-4 border-[rgba(0,0,0,1)] mt-10 md:mt-0">
        <div className="p-5">
          <div className="flex items-start justify-between">
            <h2 className="text-lg md:text-2xl font-semibold mb-3">
              {selectedFeature?.name}
            </h2>
            <button
              className="w-max font-sans bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] px-4 py-0 rounded lg:text-[18px] font-medium hover:bg-[rgba(55,20,0,1)] hover:text-[rgba(254,190,16,1)]"
              onClick={() => setFlip(false)}
            >
              Back
            </button>
          </div>
          <p className="text-[rgba(55,20,0,1)] text-sm md:text-lg font-medium font-sans mb-4 p-2">
            {selectedFeature?.desc}
          </p>
          <p className="text-[rgba(55,20,0,1)] text-3xl md:text-5xl text-center font-medium leading-[20px] font-sans my-10 ">
            {selectedFeature?.price}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {selectedFeature?.list.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-[rgba(55,20,0,1)] font-semibold text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-600 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.293 6.293a1 1 0 00-1.414 0L9 14.586 5.121 10.707a1 1 0 00-1.414 1.414l4.5 4.5a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-6">
            <button
              onClick={openModal}
              className="w-max font-sans bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] px-4 py-2 rounded lg:text-[18px] font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgba(55,20,0,1)] hover:text-[rgba(254,190,16,1)]"
            >
              Inquire More
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </ReactCardFlip>
  );
};

export default SubscriptionPlanCard;
