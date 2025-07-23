import { motion } from 'framer-motion';
import Hero from '../Components/Home/Hero';
import ServiceCard from '../Components/Home/ServiceCard';
import BookingCTA from '../Components/Home/BookingCTA';
import TestimonialCard from '../Components/Home/TestimonialCard';
import Navbar from '../Components/Navbar/Navbar';
import MapEmbed from '../Components/Home/Mapembed';

const services = [
  {
    title: 'Hair Styling',
    description: 'Transform your look with our expert hair styling services.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/person-styling-hair-royalty-free-image-1608056805.?crop=0.66635xw:1xh;center,top&resize=980:*',
  },
  {
    title: 'Nail Art',
    description: 'Get stunning nail designs tailored to your style.',
    image: 'https://shraddhabridalstudio.com/wp-content/uploads/2024/05/B.jpeg',
  },
  {
    title: 'Spa Treatments',
    description: 'Relax and rejuvenate with our luxurious spa services.',
    image: 'https://content.jdmagicbox.com/v2/comp/ghazipur/m9/9999px548.x548.241226141426.m4m9/catalogue/gmnepaolumlf6vy-7gj2i1qu3o.jpg',
  },
];

const testimonials = [
  { name: 'Sarah M.', feedback: 'The best parlor experience I’ve ever had!' },
  { name: 'Emily R.', feedback: 'Loved the nail art, so creative and professional!' },
  { name: 'Lisa T.', feedback: 'The spa treatment was incredibly relaxing!' },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Location */}
      <div className='mb-50 w-full item-center'>
        <MapEmbed/>
      </div>

      {/* Booking CTA Section */}
      <BookingCTA />

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                feedback={testimonial.feedback}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Glamour Parlor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
