import { motion } from "framer-motion";
import image1 from "../../assets/517650642_18077176975926436_3774793425769801787_n.webp";
import image2 from "../../assets/Screenshot 2025-07-22 124855.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-950 to-pink-500 text-white py-16 md:py-24 pt-23">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        {/* Text Section */}
        <div className="">
        <div className="text-center md:text-left flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <br />
            Grace Professional <br />
            Hair & Beauty Salon
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Your one-stop destination for beauty and relaxation.
          </motion.p>
          <motion.button
            className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
        </div>

        {/* Swiper Section */}
        <div className="flex-1 max-w-md md:max-w-lg w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="rounded-4xl shadow-lg"
          >
            {/* <SwiperSlide>
              <img src={image1} alt="Salon 1" className="rounded-lg object-bottom" />
            </SwiperSlide> */}
            <SwiperSlide>
              <img src={image2} alt="Salon 2" className="w-full rounded-lg object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
