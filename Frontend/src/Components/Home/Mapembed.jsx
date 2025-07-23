const MapEmbed = () => {
  return (
    <div className="w-full items-center h-96">
      <h1 className="text-5xl w-full text-center mb-10 font-semibold text-red-700">Map Location</h1>
      <div className="w-full flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57001.555133327536!2d83.28929384863284!3d26.75722730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145a80003edf7%3A0x7e42da0fae99ccd3!2sGrace%20Professional%20(%20Hair%20%26%20Beauty%20Salon%20)!5e0!3m2!1sen!2sin!4v1753238245807!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full ml-20 mr-20"></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
