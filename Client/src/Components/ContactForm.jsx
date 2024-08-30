import React, { useState } from "react";
import axios from "axios";

function ContactForm({ title, desc, align }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);
      alert("Response send successfully!");
    } catch (error) {
      console.error(error);
      alert("Error while sending the mail!");
    }
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="w-auto p-6 bg-white space-y-5">
      <div>
        <h2
          style={{ fontFamily: "FontSemi" }}
          className={`text-xl md:text-[30px] font-semibold mb-4`}
        >
          {title}
        </h2>
        <p className="max-w-[375px] font-sans font-medium text-[13px] md:text-[15px] leading-5 text-[rgba(55,20,0,1)]">
          {desc}
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${align} space-y-8 max-w-[375px]`}
      >
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]"
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Mobile Number"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
          ></textarea>
        </div>
        <div className="">
          <button
            className="bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] py-2 px-4 rounded-lg font-semibold focus:outline-none hover:text-[rgba(254,190,16,1)] hover:bg-[rgba(55,20,0,1)] transition-transform duration-300 ease-in-out transform hover:scale-105"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
