import { motion } from 'framer-motion';

function TestimonialCard({ name, feedback }) {
  return (
    <motion.div
      className="bg-gray-100 rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-600 italic">"{feedback}"</p>
      <p className="mt-4 font-semibold text-gray-800">{name}</p>
    </motion.div>
  );
}

export default TestimonialCard;