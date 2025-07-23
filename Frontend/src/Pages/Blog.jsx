// BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const blogs = [
  {
    id: 1,
    title: "IPL and Facial Treatments: The Beauty Combination to Radiance",
    description:
      "Modern cosmetic dermatology has seen the combination of science and technology, offering consumers a selection of beauty options to help them attain softer and more radiant skin. One of...",
    image: "https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-posing-face_23-2149171219.jpg",
    date: "07",
    month: "AUG",
  },
  {
    id: 2,
    title:
      "Choosing the Most Flattering Eyebrow Embroidery for Different Face Shapes",
    description:
      "Your eyebrows are more than just facial features — they're powerful tools for framing your face and accentuating your natural beauty. But with so many eyebrow embroidery options available...",
    image: "https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-touch-her-face-perfect-skin_23-2149171214.jpg",
    date: "29",
    month: "JUL",
  },
];

const BlogPage = () => {
  return (
    <div className="px-4 pt-25 md:px-24 py-12">
      <Navbar/>
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">BLOG</h1>
      <p className="text-sm text-gray-500 mb-10">Home / Blog</p>
      <div className="space-y-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border-b pb-4 md:flex md:space-x-6"
          >
            <div className="md:w-2/5 mb-4 md:mb-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-3/5">
              <div className="flex space-x-4 mb-2 text-gray-700">
                <div className="text-3xl font-bold leading-none">{blog.date}</div>
                <div className="flex flex-col uppercase text-xs tracking-widest justify-center">
                  <span>{blog.month}</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>
              <Link to={`/blog/${blog.id}`}>
                <button className="px-4 py-2 text-xs font-semibold border border-black hover:bg-black hover:text-white transition">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
