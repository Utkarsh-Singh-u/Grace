// BlogDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const blogData = {
  1: {
    title: "IPL and Facial Treatments: The Beauty Combination to Radiance",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-posing-face_23-2149171219.jpg",
    content: `Modern cosmetic dermatology has revolutionized skincare by combining advanced IPL (Intense Pulsed Light) and facial treatments. These procedures not only enhance skin clarity and brightness but also promote collagen production, reduce pigmentation, and combat signs of aging. IPL targets multiple skin issues like sunspots, rosacea, and broken capillaries, while professional facials help cleanse and nourish the skin deeply. When combined, they offer a comprehensive solution for those seeking radiant, youthful skin. Consult your dermatologist to know how this combo can be tailored to your skin type.`,
  },
  2: {
    title:
      "Choosing the Most Flattering Eyebrow Embroidery for Different Face Shapes",
    image:
      "https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-touch-her-face-perfect-skin_23-2149171214.jpg",
    content: `Eyebrow embroidery is a semi-permanent makeup technique that enhances the natural appearance of eyebrows. Depending on your face shape, certain eyebrow styles can better define your features. For round faces, high arches add length; for square faces, softly curved brows balance strong jawlines; and for heart-shaped faces, rounded brows soften a pointed chin. A trained technician can help you choose the style, pigment, and stroke thickness that suits you best. Maintenance and touch-ups are essential for long-lasting beauty.`
  }
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="p-10 text-center text-gray-600">Blog not found.</div>
    );
  }

  return (
    <div className="px-4 md:px-24 py-12 max-w-5xl mx-auto">
      <Navbar/>
      <Link to="/blog" className="text-sm text-gray-500 mb-6 inline-block">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetailPage;
