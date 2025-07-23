import "./prePack.css"
import React, { useState } from 'react';

//Prepackages
const prePackages = [
  {
    id: 1,
    heading: '7 DAYS / ₹8999',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'A full week of complete beauty care and pampering for ultimate rejuvenation.',
    TotalPrice: '12320',
    AfterDiscount: '8999',
    services: [
      {
        name: 'THREADING + FORHEAD + UPPER LIP',
        price: "₹70",
        detail: 'Quick facial hair removal for a neat and clean look.',
      },
      {
        name: 'MANICURE',
        price: "₹350",
        detail: 'Nail grooming with hand massage for soft and polished hands.',
      },
      {
        name: 'PEDICURE',
        price: "₹400",
        detail: 'Foot care with exfoliation and massage to refresh tired feet.',
      },
      {
        name: 'O3+CLEANUP (POWER MASK)',
        price: "₹1500",
        detail: 'Deep cleansing facial treatment with power mask for glowing skin.',
      },
      {
        name: 'O3+ (OILY / DRY / WHITENING FACIAL)',
        price: "₹3000",
        detail: 'Targeted facial for different skin types to improve tone and clarity.',
      },
      {
        name: 'O3+ BLEACH / D. TAN',
        price: "₹500",
        detail: 'Skin lightening and tan removal using professional-grade bleach.',
      },
      {
        name: 'FULL BODY WAX (RICA)',
        price: "₹3000",
        detail: 'Painless and smooth full-body waxing with Rica products.',
      },
      {
        name: 'BODY POLISHING (FRUIT)',
        price: "₹2000",
        detail: 'Fruit-based body exfoliation treatment to restore skin brightness.',
      },
      {
        name: 'HAIR CUT (WITH WASH)',
        price: "₹400",
        detail: 'Fresh haircut with shampoo and conditioning for a complete style.',
      },
      {
        name: 'HAIR SPA (LOREAL)',
        price: "₹1100",
        detail: 'Hair repair treatment with L’Oreal products for shine and strength.',
      },
    ],
  },
  {
    id: 2,
    heading: '1-3 DAYS / ₹8999',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'Intense beauty care package for a quick glam-up in 1 to 3 days.',
    TotalPrice: '12320',
    AfterDiscount: '8999',
    services: [
      {
        name: 'THREADING + FORHEAD + UPPER LIP',
        price: "₹70",
        detail: 'Define your brows and upper lip with quick threading services.',
      },
      {
        name: 'MANICURE',
        price: "₹300",
        detail: 'Quick nail shaping and cuticle care for groomed hands.',
      },
      {
        name: 'PEDICURE',
        price: "₹400",
        detail: 'Revitalize your feet with soaking, scrubbing, and nail care.',
      },
      {
        name: 'FULL BODY WAX',
        price: "₹2000",
        detail: 'Silky smooth skin achieved through expert full-body waxing.',
      },
      {
        name: 'HAIR SPA (LOREAL)',
        price: "₹1100",
        detail: 'Nourishing treatment to repair and hydrate hair deeply.',
      },
      {
        name: 'LOTUS GOLD/DIAMOND FACIAL',
        price: "₹2500",
        detail: 'Luxurious facial to brighten and firm skin using premium ingredients.',
      },
      {
        name: 'D-TAN / BLEECH',
        price: "₹350",
        detail: 'Effective removal of tan and dullness for radiant skin.',
      },
      {
        name: 'HAIR CUT',
        price: "₹400",
        detail: 'Style update with a professional haircut.',
      },
    ],
  },
  {
    id: 3,
    heading: '30 DAYS / ₹14999',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'A full month of luxurious beauty and skincare essentials.',
    TotalPrice: '19100',
    AfterDiscount: '14999',
    services: [
      {
        name: 'BLEACH/D-TAN',
        price: "₹100",
        detail: 'Boost glow and remove sun tan in one session.',
      },
      {
        name: 'LOTUS FACIAL (GLOW FACIAL)',
        price: "₹350",
        detail: 'Hydrating facial to enhance natural radiance.',
      },
      {
        name: 'TEMPORARY NAIL EXTENSION ART / BIKINI WAX',
        price: "",
        detail: 'Add glam with nail art or opt for intimate waxing service.',
      },
      {
        name: 'O3+ CLEANEUP WITH POWER MASK',
        price: "₹1500",
        detail: 'Rejuvenate your skin with deep pore cleansing.',
      },
      {
        name: 'CRYSTAL MANICURE',
        price: "₹800",
        detail: 'Shiny and polished nails with crystal finish.',
      },
      {
        name: 'CRYSTAL PEDICURE',
        price: "₹1000",
        detail: 'Soothe your feet with a sparkle-enhanced pedicure.',
      },
      {
        name: 'AROMA OIL BODY MASSAGE',
        price: "₹1800",
        detail: 'Full-body aromatic massage to relieve stress and detox.',
      },
      {
        name: 'BODY POLISHING (SPA)',
        price: "₹3500",
        detail: 'Smooth, glowing skin with luxurious spa exfoliation.',
      },
      {
        name: 'FULL BODY WAXING (RICA)',
        price: "₹3000",
        detail: 'Premium waxing solution for long-lasting smoothness.',
      },
      {
        name: 'HAIR CUT (WITH WASH)',
        price: "₹400",
        detail: 'A refreshing haircut with shampoo & blow-dry.',
      },
      {
        name: 'HAIR SPA (LOREAL)',
        price: "₹1100",
        detail: 'Deep conditioning for stronger, shinier hair.',
      },
      {
        name: 'O3+ BLEACH / D-TAN',
        price: "₹500",
        detail: 'Quick glow with professional tan removal.',
      },
      {
        name: 'O3+ BRIDAL FACIAL',
        price: "₹3500",
        detail: 'Intensive facial treatment for bridal-level glow.',
      },
    ],
  },
  {
    id: 4,
    heading: '60 DAYS / ₹14999',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'Two months of complete self-care for long-term glow and wellness.',
    TotalPrice: '26550',
    AfterDiscount: '14999',
    services: [
      {
        name: 'FULL FACE THREADING',
        price: "₹150",
        detail: 'Complete facial hair shaping for a clean look.',
      },
      {
        name: 'O3+ CLEANUP WITH POWER MASK',
        price: "₹1500",
        detail: 'Advanced cleansing with skin renewal benefits.',
      },
      {
        name: 'O3+ BLEACH / D-TAN',
        price: "₹500",
        detail: 'Instant brightness with premium bleach products.',
      },
      {
        name: 'LOTUS FACIAL (GLOW FACIAL)',
        price: "₹1500",
        detail: 'Soothing treatment with lotus essence for deep glow.',
      },
      {
        name: 'TEMPORARY NAIL EXTENSION ART / BIKINI WAX',
        price: "",
        detail: 'Nail fashion upgrade or precision waxing in sensitive areas.',
      },
      {
        name: 'FRENCH MANICURE',
        price: "₹400",
        detail: 'Classic nail look with white tips and natural shine.',
      },
      {
        name: 'FRENCH PEDICURE',
        price: "₹500",
        detail: 'Elegant and clean nail finish for your feet.',
      },
      {
        name: 'HAIR SPA (LOREAL)',
        price: "₹1100",
        detail: 'Restore hydration and volume to your hair strands.',
      },
      {
        name: 'O3+ (OILY/DRY/WHITENING FACIAL)',
        price: "₹2000",
        detail: 'Custom facial for any skin concern using O3+ therapy.',
      },
      {
        name: 'TEMPORARY NAIL EXTENSION ART',
        price: "",
        detail: 'Trendy nail designs for a glam touch.',
      },
      {
        name: 'HAIR CUT (WITH WASH)',
        price: "₹400",
        detail: 'New hairstyle with refreshing wash and blow-dry.',
      },
      {
        name: 'AROMA OIL BODY MASSAGE (WITH STEAM)',
        price: "₹1800",
        detail: 'Steam-enhanced massage for detox and relaxation.',
      },
      {
        name: 'BODY POLISHING (SPA)',
        price: "₹3500",
        detail: 'Spa-grade exfoliation to remove dull skin and improve texture.',
      },
      {
        name: 'FULL BODY WAXING (RICA)',
        price: "₹3000",
        detail: 'Smooth and soft skin using gentle Rica wax.',
      },
      {
        name: 'CRYSTAL MANICURE',
        price: "₹2000",
        detail: 'Shimmer and shine with a premium nail finish.',
      },
      {
        name: 'CRYSTAL PEDICURE',
        price: "₹1000",
        detail: 'Pamper your feet with glow-enhancing care.',
      },
      {
        name: 'FACE WAX',
        price: "₹1500",
        detail: 'Gentle wax for removing facial hair and smoothing skin.',
      },
      {
        name: 'O3+ BRIDAL FACIAL',
        price: "₹3500",
        detail: 'Radiant and glowing skin prep for special occasions.',
      },
    ],
  },
];

const PackageCard = ({ pkg, setSelectedPackage }) => {
  return (
    <div
      className="package-card rounded-xl p-6 cursor-pointer"
      onClick={() => setSelectedPackage(pkg)}
    >
      <img
        src={pkg.image}
        alt={pkg.heading}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 font-['Playfair_Display']">
        {pkg.heading}
      </h3>
      <p className="text-gray-600 mt-2">{pkg.detail}</p>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-gray-500 line-through">₹{pkg.TotalPrice}</span>
          <span className="text-[#d4a373] font-semibold ml-2">₹{pkg.AfterDiscount}</span>
        </div>
        <button className="btn-hover bg-[#d4a373] text-white px-4 py-2 rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

const PackageModal = ({ pkg, setSelectedPackage }) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50">
      <div className="modal-content rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 font-['Playfair_Display']">
            {pkg.heading}
          </h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setSelectedPackage(null)}
          >
            ✕
          </button>
        </div>
        <img
          src={pkg.image}
          alt={pkg.heading}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-600 mb-4">{pkg.detail}</p>
        <div className="flex justify-between mb-4">
          <span className="text-gray-500 line-through">Total: ₹{pkg.TotalPrice}</span>
          <span className="text-[#d4a373] font-semibold">Discounted: ₹{pkg.AfterDiscount}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Services Included:</h3>
        <ul className="space-y-4">
          {pkg.services.map((service, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800">{service.name}</span>
                <span className="text-[#d4a373]">{service.price || 'Included'}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{service.detail}</p>
            </li>
          ))}
        </ul>
        <button
          className="btn-hover w-full bg-[#d4a373] text-white py-3 rounded-md mt-6"
          onClick={() => setSelectedPackage(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const PrePack = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 font-['Playfair_Display']">
        Our Exclusive Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {prePackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} setSelectedPackage={setSelectedPackage} />
        ))}
      </div>
      <PackageModal pkg={selectedPackage} setSelectedPackage={setSelectedPackage} />
    </div>
  );
};

export default PrePack;