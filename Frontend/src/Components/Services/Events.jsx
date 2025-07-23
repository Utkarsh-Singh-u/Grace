import "./events.css"
import React, { useState } from 'react';

const events = [
  {
    id: 1,
    heading: 'Party Makeup',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'Get a glamorous party look with premium makeup options',
    services: [
      {
        name: 'Krylon (No Lashes)',
        price: "₹2000",
        detail: 'Krylon base makeup ideal for parties, without lash extensions',
      },
      {
        name: 'Krylon HD (With lashes)',
        price: "₹2500",
        detail: 'HD Krylon makeup with lash extensions for a bold party look',
      },
      {
        name: 'Makeup Studio',
        price: "₹2500",
        detail: 'Studio-quality makeup for vibrant evening party appearances',
      },
      {
        name: 'Mac HD',
        price: "₹2000",
        detail: 'High-definition Mac makeup for clear and radiant party selfies',
      },
      {
        name: 'Mac (Airbrush)',
        price: "₹2500",
        detail: 'Airbrush Mac makeup for a flawless, lightweight party finish',
      },
      {
        name: 'Forever 52',
        price: "₹3000",
        detail: 'Forever 52 makeup for long-lasting party-ready beauty',
      },
      {
        name: 'Bobbi Brown Hd',
        price: "₹3000",
        detail: 'HD Bobbi Brown makeup for a sophisticated night party style',
      },
      {
        name: 'Bobbi Brown Hd (With Airbrush)',
        price: "₹5500",
        detail: 'Airbrush HD makeup by Bobbi Brown for an elite party appearance',
      },
    ],
  },
  {
    id: 2,
    heading: 'Engagement Makeup',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'Flawless makeup for unforgettable engagement ceremonies',
    services: [
      {
        name: 'Makeup Studio',
        price: "₹5000",
        detail: 'Soft glam studio makeup perfect for engagement photos',
      },
      {
        name: 'Mac HD',
        price: "₹5500",
        detail: 'HD finish with Mac products for a clean and radiant look',
      },
      {
        name: 'Forever 52 HD',
        price: "₹5000",
        detail: 'Vibrant Forever 52 HD makeup suited for engagement events',
      },
      {
        name: 'Mac (Airbrush)',
        price: "₹2500",
        detail: 'Light airbrush Mac makeup for smooth skin and elegance',
      },
      {
        name: 'Bobbi Brown HD',
        price: "₹6000",
        detail: 'Premium Bobbi Brown HD application for bridal-like glow',
      },
      {
        name: 'Bobbi Brown HD (With Airbrush)',
        price: "₹8000",
        detail: 'Airbrush Bobbi Brown for a graceful and luxurious engagement look',
      },
    ],
  },
  {
    id: 3,
    heading: 'Reception Makeup',
    image: 'https://tejaswinimakeupartist.com/wp-content/uploads/2021/06/Soft-Eye-Makeup-For-Indian-Engagement.jpg',
    detail: 'Elegant reception looks with professional-grade makeup',
    services: [
      {
        name: 'Mac HD',
        price: "₹6500",
        detail: 'Polished Mac HD makeup for reception-ready photos',
      },
      {
        name: 'Mackeup Studio (Airbrush)',
        price: "₹8000",
        detail: 'Airbrush studio makeup for long-lasting reception perfection',
      },
      {
        name: 'Forever 52 HD',
        price: "₹8000",
        detail: 'Bright and clear HD makeup with Forever 52 for receptions',
      },
      {
        name: 'Bobbi Brown HD',
        price: "₹10000",
        detail: 'Bold and classy Bobbi Brown HD makeup for reception glamour',
      },
      {
        name: 'Bobbi Brown HD (with Airbrush)',
        price: "₹12000",
        detail: 'Airbrush Bobbi Brown HD makeup for high-end reception looks',
      },
    ],
  },
  {
    id: 4,
    heading: 'Bride Makeup',
    image: 'https://news.azanahotel.com/wp-content/uploads/2023/10/Body-spa-manfaatnya-luar-biasa-scaled.jpg',
    detail: 'Stunning bridal looks with luxurious makeup options',
    services: [
      {
        name: 'Makeup Studio',
        price: "₹10000",
        detail: 'Full bridal makeover by top studio artists for your big day',
      },
      {
        name: 'Mac HD',
        price: "₹8000",
        detail: 'Elegant Mac HD makeup for classic bridal beauty',
      },
      {
        name: 'Mac HD (airbrush)',
        price: "₹10000",
        detail: 'Smooth, poreless bridal finish with Mac airbrush makeup',
      },
      {
        name: 'Forever 52 HD',
        price: "₹12000",
        detail: 'Flawless Forever 52 HD makeup to shine in wedding photos',
      },
      {
        name: 'Bobbi Brown HD',
        price: "₹12000",
        detail: 'Refined Bobbi Brown HD makeup for graceful bridal charm',
      },
      {
        name: 'Bobbi Brown Hd (With Honour)',
        price: "₹18000",
        detail: 'Elite bridal makeover using Bobbi Brown HD products with premium add-ons',
      },
    ],
  },
];

const EventCard = ({ event, setSelectedEvent }) => {
  return (
    <div
      className="event-card rounded-xl p-6 cursor-pointer"
      onClick={() => setSelectedEvent(event)}
    >
      <img
        src={event.image}
        alt={event.heading}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 font-['Playfair_Display']">
        {event.heading}
      </h3>
      <p className="text-gray-600 mt-2">{event.detail}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-[#d4a373] font-semibold">Explore Options</span>
        <button className="btn-hover bg-[#d4a373] text-white px-4 py-2 rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

const EventModal = ({ event, setSelectedEvent }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 modal-overlay flex items-center justify-center z-50">
      <div className="modal-content rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 font-['Playfair_Display']">
            {event.heading}
          </h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setSelectedEvent(null)}
          >
            ✕
          </button>
        </div>
        <img
          src={event.image}
          alt={event.heading}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-600 mb-4">{event.detail}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Makeup Options:</h3>
        <ul className="space-y-4">
          {event.services.map((service, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-800">{service.name}</span>
                <span className="text-[#d4a373]">{service.price}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{service.detail}</p>
            </li>
          ))}
        </ul>
        <button
          className="btn-hover w-full bg-[#d4a373] text-white py-3 rounded-md mt-6"
          onClick={() => setSelectedEvent(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 font-['Playfair_Display']">
        Event Makeup Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} setSelectedEvent={setSelectedEvent} />
        ))}
      </div>
      <EventModal event={selectedEvent} setSelectedEvent={setSelectedEvent} />
    </div>
  );
};

export default Events;

