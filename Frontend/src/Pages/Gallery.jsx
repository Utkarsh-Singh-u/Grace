import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const galleryImages = [
  { id: 1, src: 'https://via.placeholder.com/600x400?text=Parlor+Service+1', alt: 'Hair Styling', size: 'large' },
  { id: 2, src: 'https://via.placeholder.com/600x600?text=Parlor+Service+2', alt: 'Manicure', size: 'medium' },
  { id: 3, src: 'https://via.placeholder.com/600x800?text=Parlor+Service+3', alt: 'Facial Treatment', size: 'tall' },
  { id: 4, src: 'https://via.placeholder.com/600x400?text=Parlor+Service+4', alt: 'Makeup', size: 'medium' },
  { id: 5, src: 'https://via.placeholder.com/600x600?text=Parlor+Service+5', alt: 'Pedicure', size: 'large' },
  { id: 6, src: 'https://via.placeholder.com/600x800?text=Parlor+Service+6', alt: 'Spa Treatment', size: 'tall' },
  { id: 7, src: 'https://via.placeholder.com/600x400?text=Parlor+Service+7', alt: 'Nail Art', size: 'medium' },
  { id: 8, src: 'https://via.placeholder.com/600x600?text=Parlor+Service+8', alt: 'Hair Coloring', size: 'large' },
];

// Shuffle function to randomize image order
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const GalleryPage = () => {
  // Shuffle images on component mount for random arrangement
  const shuffledImages = React.useMemo(() => shuffleArray([...galleryImages]), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 mt-10 py-16 px-4 sm:px-6 lg:px-8">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          Gallery
        </h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {shuffledImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl shadow-lg group break-inside-avoid ${
                image.size === 'large' ? 'h-96' : image.size === 'tall' ? 'h-[32rem]' : 'h-64'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <p className="text-white text-lg font-medium p-4 tracking-wide">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;