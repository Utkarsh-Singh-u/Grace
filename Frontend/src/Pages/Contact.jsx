import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";
import MapEmbed from "../Components/Home/Mapembed";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", mobile: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white pt-25 px-4 py-12 md:px-16">
      <Navbar/>
      <h1 style={{fontFamily:"Bitter"}} className="w-full text-center text-8xl font-semibold text-gray-800 mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Contact Info */}
        <div className="space-y-10">
          {/* Office */}
          <div className="border-b pb-6">
            <div className="flex items-center gap-4 mb-2">
              <FaMapMarkerAlt className="text-black text-xl" />
              <h2 className="text-xl font-semibold text-black">Office</h2>
            </div>
            <p className="text-gray-700">
              1. P9PC+WX4, Mahuesugharpur, Daudpur, Gorakhpur, Uttar Pradesh 273001
            </p>
            <p className="text-gray-700">
              2. opposite Khanna logde, Purdilpur, Shahpur, Gorakhpur, Uttar Pradesh 273001
            </p>
          </div>

          {/* Call */}
          <div className="border-b pb-6">
            <div className="flex items-center gap-4 mb-2">
              <FaPhoneAlt className="text-black text-xl" />
              <h2 className="text-xl font-semibold text-black">Call</h2>
            </div>
            <p className="text-gray-700">+91-9999727274</p>
            <p className="text-gray-700">+91-9999696974</p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <FaEnvelope className="text-black text-xl" />
              <h2 className="text-xl font-semibold text-black">Email</h2>
            </div>
            <p className="text-gray-700">info@kmorgatonics.com</p>
            <p className="text-gray-700">kmorgatonics@gmail.com</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="bg-gray-100 p-8 rounded-md shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Request Info</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 mb-60">
      < MapEmbed/>
      </div>
    </div>
  );
};

export default ContactPage;
