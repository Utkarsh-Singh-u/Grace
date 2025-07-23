import React, { useState } from 'react';
import "./servicePage.css"

// Sample services data with updated structure
const servicesData = [
  {
    id: 1,
    heading: 'Body Spa',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'Indulgent body spa treatments for relaxation and rejuvenation',
    services: [
      {
        name: 'Body Spa',
        price: "₹1500",
        detail: 'A luxurious full-body spa experience to soothe muscles and relax the mind',
      },
      {
        name: 'Body Steam Massage',
        price: "₹2000",
        detail: 'A therapeutic steam massage to relieve tension and improve circulation',
      },
      {
        name: 'Organic Body Massage',
        price: "₹2000",
        detail: 'A nourishing massage using organic oils for deep relaxation',
      }
    ],
  },
  {
    id: 2,
    heading: 'Body Polishing',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pgzFAo_o3PsaMB1TjooV7SgoUzMEkOsCnQ&s',
    detail: 'Exfoliating treatments to leave your skin smooth and radiant',
    services: [
      {
        name: 'Body Polishing (Fruit)',
        price: "₹2000",
        detail: 'A fruit-based body polishing treatment for a natural glow',
      },
      {
        name: 'Body Polishing (Chocolate)',
        price: "₹2500",
        detail: 'A decadent chocolate-infused polishing treatment for soft, hydrated skin',
      },
    ],
  },
  {
    id: 3,
    heading: 'Spa Services',
    image: 'https://www.lakelawnresort.com/wp-content/uploads/2020/11/CalladoraBodyTreatments-768x432.jpg',
    detail: 'Revitalizing spa treatments for skin and body wellness',
    services: [
      {
        name: 'O3+',
        price: "₹400",
        detail: 'A deep-cleansing facial using O3+ products for radiant skin',
      },
      {
        name: 'Sara',
        price: "₹300",
        detail: 'A relaxing 60-minute full-body massage with Sara products',
      },
      {
        name: 'Organic',
        price: "₹300",
        detail: 'A 60-minute organic full-body massage for natural relaxation',
      },
      {
        name: 'Casmara',
        price: "₹700",
        detail: 'A premium 60-minute full-body massage with Casmara products',
      },
    ],
  },
  {
    id: 4,
    heading: 'Reception Makeup',
    image: 'https://tejaswinimakeupartist.com/wp-content/uploads/2021/06/Soft-Eye-Makeup-For-Indian-Engagement.jpg',
    detail: 'Professional makeup services for a stunning look at any event',
    services: [
      {
        name: 'Mac HD',
        price: "₹6500",
        detail: 'High-definition makeup application using Mac products for a flawless finish',
      },
      {
        name: 'Mackeup Studio (Airbrush)',
        price: "₹8000",
        detail: 'Airbrush makeup for a seamless, long-lasting event look',
      },
      {
        name: 'Forever 52 HD',
        price: "₹8000",
        detail: 'High-definition makeup with Forever 52 products for vibrant results',
      },
      {
        name: 'Bobbi Brown HD',
        price: "₹10000",
        detail: 'Premium Bobbi Brown makeup application for a sophisticated look',
      },
      {
        name: 'Bobbi Brown HD (with Airbrush)',
        price: "₹12000",
        detail: 'Airbrush-enhanced Bobbi Brown makeup for a perfect, radiant finish',
      },
    ],
  },
  {
    id: 5,
    heading: 'Manicure/Pedicure',
    image: 'https://static.wixstatic.com/media/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg',
    detail: 'Expert nail care for beautifully polished hands and feet',
    services: [
      {
        name: 'Normal Manicure',
        price: "₹300",
        detail: 'A classic manicure with nail shaping and polish application',
      },
      {
        name: 'Normal Pedicure',
        price: "₹400",
        detail: 'A relaxing pedicure with exfoliation and polish for smooth feet',
      },
      {
        name: 'Lotus Manicure',
        price: "₹500",
        detail: 'A luxurious Lotus manicure with enhanced hydration and polish',
      },
      {
        name: 'Lotus Pedicure',
        price: "₹700",
        detail: 'A premium Lotus pedicure for soft, rejuvenated feet',
      },
      {
        name: 'O3+ Manicure',
        price: "₹600",
        detail: 'A rejuvenating O3+ manicure with nourishing products',
      },
      {
        name: 'O3+ Pedicure',
        price: "₹800",
        detail: 'A revitalizing O3+ pedicure for smooth, polished feet',
      },
      {
        name: 'Glownick Manicure',
        price: "₹400",
        detail: 'A Glownick manicure for vibrant, well-groomed nails',
      },
      {
        name: 'Glownick Pedicure',
        price: "₹500",
        detail: 'A Glownick pedicure for hydrated, beautifully polished feet',
      },
    ],
  },
  {
    id: 6,
    heading: 'Head Massage',
    image: 'https://cdn.shopify.com/s/files/1/0520/4983/8237/files/Exfoliates_Cleanses_the_Scalp.webp?v=1683122809',
    detail: 'Soothing head massages to relieve stress and nourish hair',
    services: [
      {
        name: 'Cooling Oil',
        price: "₹200",
        detail: 'A refreshing head massage with cooling oil to relax the scalp',
      },
      {
        name: 'Olive Oil',
        price: "₹150",
        detail: 'A nourishing olive oil head massage for healthy hair',
      },
      {
        name: 'Almond Oil',
        price: "₹200",
        detail: 'A hydrating almond oil head massage to strengthen hair',
      },
      {
        name: 'Coconut Oil',
        price: "₹150",
        detail: 'A traditional coconut oil head massage for scalp nourishment',
      },
      {
        name: 'Body Spa Oil',
        price: "₹1500",
        detail: 'A premium body spa oil head massage for deep relaxation',
      },
      {
        name: 'Body Polishing',
        price: "₹2000",
        detail: 'A luxurious head massage with body polishing oils for radiant skin',
      },
      {
        name: 'Body Chocolate',
        price: "₹2500",
        detail: 'A decadent chocolate-based head massage for ultimate relaxation',
      },
    ],
  },
  {
    id: 7,
    heading: 'Bleach + D-Tan',
    image: 'https://ningen.com/cdn/shop/articles/How-Effective-is-De-tan-Bleach-for-your-Skin_597aea62-e4d8-4e24-ad8c-d3d84c44d182.jpg?v=1669635433',
    detail: 'Brightening and de-tanning treatments for a radiant complexion',
    services: [
      {
        name: 'O3+ Bleach',
        price: "₹300",
        detail: 'A brightening O3+ bleach treatment for even skin tone',
      },
      {
        name: 'Body Care',
        price: "₹200",
        detail: 'A body care bleach treatment for smooth, glowing skin',
      },
      {
        name: 'Oxy Bleach',
        price: "₹200",
        detail: 'An oxygen-based bleach treatment for a radiant complexion',
      },
      {
        name: 'Normal',
        price: "₹150",
        detail: 'A standard bleach treatment for subtle brightening',
      },
      {
        name: 'Protein Pack',
        price: "₹200",
        detail: 'A nourishing protein pack for skin rejuvenation',
      },
      {
        name: 'Raga D-Tan',
        price: "₹150",
        detail: 'A Raga D-Tan treatment to remove tan and restore glow',
      },
      {
        name: 'O3+ D-Tan',
        price: "₹300",
        detail: 'A premium O3+ D-Tan treatment for brighter, even-toned skin',
      },
      {
        name: 'Ozone',
        price: "₹200",
        detail: 'An ozone-based treatment for refreshed, glowing skin',
      },
    ],
  },
  {
    id: 8,
    heading: 'Nail Extensions',
    image: 'https://static.wixstatic.com/media/cd4898_4b144d03709d4d528cec07f551de73c7~mv2.webp/v1/fill/w_504,h_504,al_c,lg_1,q_80,enc_avif,quality_auto/cd4898_4b144d03709d4d528cec07f551de73c7~mv2.webp',
    detail: 'Long-lasting nail extensions for a glamorous look',
    services: [
      {
        name: 'Acrylic Nails Extensions',
        price: "₹1500",
        detail: 'Durable acrylic nail extensions for a bold, stylish look',
      },
      {
        name: 'Silicon Nails Extensions',
        price: "₹1000",
        detail: 'Flexible silicon nail extensions for a natural feel',
      },
      {
        name: 'Builder Gel Nails Extensions',
        price: "₹1500",
        detail: 'Strong builder gel nail extensions for lasting durability',
      },
      {
        name: 'Pally Gel Extensions',
        price: "₹1000",
        detail: 'Lightweight Pally gel extensions for a sleek finish',
      },
      {
        name: 'Nail Art Extensions',
        price: "₹500",
        detail: 'Custom nail art extensions for a unique, creative look',
      },
    ],
  },
  {
    id: 9,
    heading: 'Ear',
    image: 'https://i.pinimg.com/736x/73/7a/2d/737a2d616baba60aab617f7633b48bbf.jpg',
    detail: 'Professional ear piercing and lobbing services',
    services: [
      {
        name: 'Ear Piercing',
        price: "₹1000",
        detail: 'Safe and precise ear piercing for a stylish look',
      },
      {
        name: 'Ear Lobbing',
        price: "₹1000",
        detail: 'Professional ear lobbing for comfortable and aesthetic results',
      },
    ],
  },
  {
    id: 10,
    heading: 'Hair Cut',
    image: 'https://i-media.vyaparify.com/vcards/blogs/89922/female-hair-cut.jpg',
    detail: 'Precision haircuts tailored to your style',
    services: [
      {
        name: 'Baby Hair Cut',
        price: "₹250",
        detail: 'A gentle haircut for kids with a neat finish',
      },
      {
        name: 'Hair Trimming',
        price: "₹150",
        detail: 'A quick trim to maintain healthy hair ends',
      },
      {
        name: 'Hair Cut Advance',
        price: "₹300",
        detail: 'An advanced haircut with personalized styling',
      },
      {
        name: 'Hair Wash',
        price: "₹100+200",
        detail: 'A refreshing hair wash with optional conditioning',
      },
      {
        name: 'Chemical Hair Wash',
        price: "₹400",
        detail: 'A deep-cleansing chemical hair wash for vibrant hair',
      },
      {
        name: 'Shampoo with Blowdry',
        price: "₹400",
        detail: 'A shampoo and blowdry for a polished, voluminous look',
      },
    ],
  },
  {
    id: 11,
    heading: 'Hair Spa',
    image: 'https://envi.in/wp-content/uploads/2022/10/hair-spa-treatment.webp',
    detail: 'Nourishing hair spa treatments for healthy, shiny hair',
    services: [
      {
        name: 'Anti Dandruff',
        price: "₹1500",
        detail: 'An anti-dandruff hair spa to soothe and cleanse the scalp',
      },
      {
        name: 'Anti Hair Fall',
        price: "₹1500",
        detail: 'A strengthening hair spa to reduce hair fall',
      },
      {
        name: 'Normal Hair Spa',
        price: "₹700",
        detail: 'A standard hair spa for hydration and shine',
      },
      {
        name: 'Protein Spa',
        price: "₹1000",
        detail: 'A protein-rich hair spa for stronger, healthier hair',
      },
      {
        name: 'Nourishing Hair Spa Loreal',
        price: "₹1200",
        detail: 'A premium Loreal hair spa for deep nourishment',
      },
    ],
  },
  {
    id: 12,
    heading: 'Hair Colour',
    image: 'https://vurvesalon.com/wp-content/uploads/2023/04/Hair-Colouring.png',
    detail: 'Vibrant hair coloring services for a bold or subtle look',
    services: [
      {
        name: 'Root Touch Up',
        price: "₹700",
        detail: 'A root touch-up for seamless hair color maintenance',
      },
      {
        name: 'Global Colour',
        price: "₹2500 length according",
        detail: 'Full hair coloring tailored to hair length for a vibrant look',
      },
      {
        name: 'High Light',
        price: "₹250/stick",
        detail: 'Stylish highlights for added dimension and vibrancy',
      },
    ],
  },
  {
    id: 13,
    heading: 'Clean Up',
    image: 'https://5.imimg.com/data5/PB/IX/GLADMIN-27086017/women-face-clean-up-services.jpg',
    detail: 'Gentle facial clean-up treatments for a refreshed complexion',
    services: [
      {
        name: 'Natures',
        price: "₹400",
        detail: 'A natural clean-up treatment for a glowing complexion',
      },
      {
        name: 'Normal Fruit',
        price: "₹300",
        detail: 'A fruit-based clean-up for refreshed, hydrated skin',
      },
      {
        name: 'Anway Fruit',
        price: "₹400",
        detail: 'A premium fruit-based clean-up for radiant skin',
      },
      {
        name: 'Lotus',
        price: "₹1000",
        detail: 'A luxurious Lotus clean-up for a polished look',
      },
      {
        name: 'Aroma',
        price: "₹700",
        detail: 'An aromatic clean-up treatment for skin rejuvenation',
      },
      {
        name: 'Anti Tan (Oxylife)',
        price: "₹700",
        detail: 'An Oxylife anti-tan clean-up for brighter skin',
      },  
      {
        name: 'O3+ Whitening',
        price: "₹1000",
        detail: 'A whitening clean-up with O3+ for a radiant complexion',
      },
      {
        name: 'Biotec',
        price: "₹550",
        detail: 'A Biotec clean-up for smooth, refreshed skin',
      },
      {
        name: 'Organic',
        price: "₹700",
        detail: 'An organic clean-up treatment for natural glow',
      },
      {
        name: 'Body Care',
        price: "₹500",
        detail: 'A body care clean-up for even-toned skin',
      },
      {
        name: 'Sahnaj Pro',
        price: "₹500",
        detail: 'A professional Sahnaj clean-up for a refreshed look',
      },
      {
        name: 'VLCC',
        price: "₹500",
        detail: 'A VLCC clean-up for smooth, radiant skin',
      },
      {
        name: 'White Glow',
        price: "₹900",
        detail: 'A white glow clean-up for a brighter complexion',
      },
    ],
  },
  {
    id: 14,
    heading: 'Facial Treatment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPz0xWoLIMa9tckc5iUgACml2Xvl3zX6tQQ&s',
    detail: 'Specialized facial treatments for targeted skin concerns',
    services: [
      {
        name: 'Anti Acne Treatment',
        price: "₹1200",
        detail: 'A targeted anti-acne facial to reduce breakouts and clear skin',
      },
      {
        name: 'O3+ Medicated Facial',
        price: "₹2000",
        detail: 'A medicated O3+ facial for deep cleansing and skin clarity',
      },
      {
        name: 'White Glow',
        price: "₹1800",
        detail: 'A white glow facial for a radiant, even-toned complexion',
      },
      {
        name: 'Anti Aging',
        price: "₹2000",
        detail: 'An anti-aging facial to reduce fine lines and rejuvenate skin',
      },
    ],
  },
  {
    id: 15,
    heading: 'Hair',
    image: 'https://www.styleseat.com/blog/wp-content/uploads/2022/04/how-much-does-keratin-treatment-cost-hero-scaled-1-1140x850.jpg',
    detail: 'Advanced hair treatments for smoothness and strength',
    services: [
      {
        name: 'G.K. Keratine',
        price: "₹3500 length according",
        detail: 'A G.K. keratin treatment for smooth, frizz-free hair',
      },
      {
        name: 'Keratine',
        price: "₹3000 length according",
        detail: 'A keratin treatment for silky, manageable hair',
      },
      {
        name: 'Smoothing',
        price: "₹3000 length according",
        detail: 'A smoothing treatment for sleek, shiny hair',
      },
      {
        name: 'Rebonding',
        price: "₹4000 length according",
        detail: 'A rebonding treatment for straight, polished hair',
      },
      {
        name: 'Botox',
        price: "₹3000 length according",
        detail: 'A hair botox treatment for deep nourishment and repair',
      },
    ],
  },
  {
    id: 16,
    heading: 'Hair Treatment',
    image: 'https://prokare.in/cdn/shop/products/da51c8204b21e69c0e4c294ff0161256.jpg?v=1652447555',
    detail: 'Specialized treatments to repair and strengthen hair',
    services: [
      {
        name: 'Smart Bond',
        price: "₹1500 onwards",
        detail: 'A Smart Bond treatment to protect and strengthen hair',
      },
      {
        name: 'Power Mix',
        price: "₹1500 onwards",
        detail: 'A Power Mix treatment for deep hair repair and nourishment',
      },
    ],
  },
  {
    id: 17,
    heading: 'Brazilian Wax',
    image: 'https://bookwell.imgix.net/salon_images/waxing-hair-removal.jpeg?&w=1260&h=840&fm=jpg&auto=compress&fit=crop',
    detail: 'Smooth and precise waxing services for hair removal',
    services: [
      {
        name: 'Upper Lips',
        price: "₹50",
        detail: 'Precise Brazilian waxing for the upper lip area',
      },
      {
        name: 'Forehead',
        price: "₹30",
        detail: 'Gentle Brazilian waxing for the forehead',
      },
      {
        name: 'Chin Lock',
        price: "₹50",
        detail: 'Brazilian waxing for the chin area for smooth skin',
      },
      {
        name: 'Side Lock',
        price: "₹50",
        detail: 'Brazilian waxing for the side lock area for a clean look',
      },
      {
        name: 'Nose',
        price: "₹50",
        detail: 'Precise Brazilian waxing for the nose area',
      },
      {
        name: 'Full Face',
        price: "₹250",
        detail: 'Complete Brazilian waxing for the entire face',
      },
    ],
  },
];

// Service Card Component
const ServiceCard = ({ service, onClick }) =>{
  const [isHovered, setIsHovered] = useState(null);
  return(
    <div
      className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-[#f8d7da] hover:bg-[#fff0f3]"
      onClick={() => onClick(service)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative cursor-pointer overflow-hidden'>
        
        <img
          src={service.image}
          alt={service.heading}
          className={`w-full relative h-60 object-cover rounded-xl mb-3 transition-transform duration-500 ${isHovered ? "scale-105" : ""}`}
        />
        {/* Hover Text */}
        {/* <div
          className={`absolute bg-pink-900 bottom-0 left-0 right-0 p-1 -mb-1 w-auto text-xl font-semibold text-center text-white transition-all duration-500 ease-in-out transform ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >Click For Details</div> */}
        <div
          className={`product-detail-hint bg-pink-900 mt-2 ${isHovered ? "visible" : " "}`}
        >
          Click for details
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[#800040] mb-2">{service.heading}</h3>
      <p className="text-gray-700">
        {service.detail.substring(0, 50)}...
      </p>
    </div>
  )
};

// Service Detail Component
const ServiceDetail = ({ service, onClose }) => (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
    <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl relative flex overflow-hidden border border-[#f8d7da]">
      
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-4xl z-10"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Image (Right Side, Fixed) */}
      <div className="p-6 pr-1 w-1/2 flex flex-col items-center justify-center mb-20">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-[#800040] mb-2 border-b pb-2 hover:text-[#d6336c] transition duration-300">
          {service.heading}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 italic mb-6 hover:text-gray-800 transition duration-300">
          {service.detail}
        </p>
        <div className="relative w-full max-h-[90vh] aspect-[4/3] overflow-hidden rounded-2xl">
          <img
            src={service.image}
            alt={service.heading}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded-2xl"
          />
        </div>
      </div>


      {/* Content (Left Side, Scrollable) */}
      <div className="w-1/2 p-6 overflow-y-auto max-h-[90vh] scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-[#d6336c] transition-all duration-30">
        

        {/* Services List */}
        <div className="space-y-6">
          {service.services.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-[#fff0f3] rounded-lg shadow-sm hover:shadow-lg hover:bg-[#ffe0eb] transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-[#d6336c] mb-1 hover:underline">
                {item.name}
              </h4>
              <p className="text-gray-700 mb-2">{item.detail}</p>
              <p className="text-lg font-bold text-green-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);





// Main Services Page Component
const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#ffe6e9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#800040] mb-12">
          
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={handleCardClick}
            />
          ))}
        </div>
        {selectedService && (
          <ServiceDetail
            service={selectedService}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </div>
  );
};

export default ServicesPage;