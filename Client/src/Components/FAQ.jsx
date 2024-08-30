import React, { useState } from "react";

const FAQ = () => {
  // Set the first question as open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should I choose WORKHIVE?",
      answer:
        "We offer the same (if not more) amenities as other co-working spaces in town at very economic prices. Moreover, WORKHIVE is located in the center of Lahore, making it more accessible from all over the city.",
    },
    {
      question: "Can I get an office for more than 12-person team?",
      answer:
        "Yes absolutely, we offer custom spaces for more than 12-person team. Kindly contact us on WhatsApp at 0316-4517106 or drop an email at info@workhive.com.pk to get in touch.",
    },
    {
      question: "Can I visit the place before booking any package?",
      answer:
        "We encourage you to get a feel for the space before booking any package. This would ensure a proper tour of the place which will lead to your satisfaction. For a more whole experience, you should check out our day and week passes.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold  text-[rgba(55,20,0,1)] mb-8">
        WORKHIVE FAQ’s
      </h1>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-bold p-4 bg-[rgba(55,20,0,1)] text-[rgba(254,190,16,1)] rounded-lg focus:outline-none"
            >
              {item.question}
              <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-[rgba(55,20,0,1)] text-white text-[15px] font-[400] rounded-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
