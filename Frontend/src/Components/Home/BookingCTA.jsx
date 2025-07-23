import { motion } from 'framer-motion';

function BookingCTA() {
  return (
    <motion.section
      className="bg-purple-100 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Shine?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Book your appointment today and experience beauty like never before.
        </p>
        <motion.button
          className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Schedule Now
        </motion.button>
      </div>
    </motion.section>
  );
}

export default BookingCTA;