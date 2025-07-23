import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import image1 from "../assets/517650642_18077176975926436_3774793425769801787_n.webp"
import ServicesPage from "../Components/Services/ServicePage";

// Sample services data
const services = [
  {
    id: 1,
    title: "Haircut & Styling",
    description: "Precision haircuts and trendy styling to suit your personality.",
    price: "$30 - $60",
    image: "https://cdn0.weddingwire.in/article/6132/original/1280/jpg/122316-hairstyles-for-women-shikha-vardhans-instagram-2.jpeg",
  },
  {
    id: 2,
    title: "Hair Coloring",
    description: "Vibrant colors and highlights using premium products.",
    price: "$50 - $120",
    image: "https://www.fmsskin.com/blog/wp-content/uploads/2022/05/Hair-Coloring-Tips.jpg",
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our luxurious nail services.",
    price: "$25 - $45",
    image: "https://media.istockphoto.com/id/1384893122/photo/pedicurist-applying-nail-polish-on-woman-toenails-in-beauty-salon.jpg?s=612x612&w=0&k=20&c=kGmIUMEUp7QIV_f3fFWq6UBPzLWDaPn52f4v32AdfPk=",
  },
  {
    id: 4,
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial therapies.",
    price: "$40 - $80",
    image: "https://media.self.com/photos/5e335a92fc821b000895c089/4:3/w_2560%2Cc_limit/GettyImages-963030250.jpg",
  },
];

// Animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white py-16">
      <Navbar></Navbar>
      <div className="container mx-auto px-4 pt-8">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span style={{ fontFamily:'"Fondamento"'}} className="font-semibold text-6xl">Our Services</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-10 ml-20 mr-20 mb-10">
          {/* Text Content */}
          <div
            className="text-2xl md:text-3xl leading-relaxed md:w-1/2 font-light"
            style={{ fontFamily: "Vibur, cursive" }}
          >
            At Grace Professional Unisex Salon, we offer everything from hair coloring services
            and highlights to straightening and texturizing, and even up-dos and facial waxing —
            all at a fantastic value. Every service begins with our fantastic consultation.
          </div>

          {/* Image Section */}
          <div className="md:w-2/5 w-full">
            <img
              src={image1}
              alt="Salon"
              className="w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>


        {/* Services Grid */}
        <ServicesPage/>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            Ready to pamper yourself? Book your appointment today!
          </p>
          <a
            href="#booking"
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-300"
          >
            Schedule Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;