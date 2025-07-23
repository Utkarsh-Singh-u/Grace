import { useState } from "react";
import { motion } from "framer-motion";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex justify-center items-center px-4 py-16">
      <motion.div
        className="bg-white/30 backdrop-blur-lg shadow-lg p-8 rounded-3xl max-w-lg w-full border border-white/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-6 font-serif">
          Book Your Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
          >
            <option value="">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Facial">Facial</option>
            <option value="Manicure">Manicure</option>
            <option value="Massage">Massage</option>
            <option value="Full Body Spa">Full Body Spa</option>
          </select>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AppointmentPage;
