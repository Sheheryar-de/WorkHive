import ReactDOM from "react-dom";
import { useState } from "react";
import axios from "axios";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    category: "",
    quantity: "",
    date: "",
    time: "",
  });

  const [isQuantityDisabled, setIsQuantityDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "category") {
      handleQuantityInput(value);
    }
  };

  const handleQuantityInput = (selectedCategory) => {
    if (selectedCategory === "half-day" || selectedCategory === "full-day") {
      setIsQuantityDisabled(true);
      setFormData((prevData) => ({
        ...prevData,
        quantity: "",
      }));
    } else {
      setIsQuantityDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);
      alert("Response sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Error while sending the mail!");
    }
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
      category: "",
      quantity: "",
      date: "",
      time: "",
    });
    setIsQuantityDisabled(false); // Reset quantity disabled state
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg overflow-y-scroll shadow-lg h-[500px] md:h-max w-auto md:w-full md:max-w-3xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2
            style={{ fontFamily: "FontSemi" }}
            className={`text-xl md:text-[30px] font-semibold mb-4`}
          >
            Get In Touch
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
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
        <div className="p-4">
          <form
            onSubmit={handleSubmit}
            className={`space-y-8 mx-auto max-w-full p-10`}
          >
            <div className="mb-4 flex flex-col md:flex-row gap-10">
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
            <div className="mb-4 ">
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
            <div className="mb-4 flex flex-col md:flex-row gap-10">
              <select
                className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <optgroup label="Open Seat">
                  <option value="hot-Seat">Hot Seat</option>
                  <option value="dedicated-Seat">Dedicated Seat</option>
                </optgroup>
                <optgroup label="Dedicated Office">
                  <option value="6-persons">6 Persons</option>
                  <option value="9-persons">9 Persons</option>
                  <option value="12+-persons">12+ Persons</option>
                </optgroup>
                <optgroup label="Meeting Room">
                  <option value="half-day">Half Day</option>
                  <option value="full-day">Full Day</option>
                </optgroup>
              </select>
              <input
                className={`w-full px-3 py-2 border ${
                  isQuantityDisabled
                    ? "bg-gray-200 cursor-not-allowed"
                    : "border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)]"
                } font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]`}
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="Enter Quantity"
                min="1"
                disabled={isQuantityDisabled}
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-10">
              <input
                className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]"
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                className="w-full px-3 py-2 border border-[rgba(92,92,92,1)] placeholder:text-[rgba(55,20,0,1)] font-sans rounded focus:outline-none hover:placeholder:text-[rgba(254,190,16,1)] hover:border-[rgba(254,190,16,1)]"
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <button
                className="bg-[rgba(254,190,16,1)] text-[rgba(55,20,0,1)] py-2 px-4 rounded-lg font-semibold focus:outline-none w-full"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
