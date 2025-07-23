import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`nav z-10 fixed top-0 left-0 w-full  ${
        scrolled
          ? "bg-gradient-to-r from-pink-950/90 to-pink-500/40  backdrop-blur-xs backdrop-brightness-60"
          : "backdrop-brightness-80 bg-gradient-to-r from-pink-950/40 to-pink-500/40"
      }  pl-5 pr-5 `}
    >

      <div className={`nav-logo `}>
        <a href="/">
          <div className="flex">
            <img className="w-20 h-20 mr-2 " src={logo}/>
            <div>
              <div className="-mb-3">
                <span style={{ fontFamily:'"Fondamento"'}} className="text-4xl">Grace </span>
                <span style={{fontFamily: "Great Vibes"}} className="text-3xl">Professional</span>
              </div>
              <div style={{fontFamily: "Allura"}} className="text-2xl text-center">Unisex Salon</div>
            </div>
          </div>
        </a>

      </div>
      <ul className="nav-menu">
        <li
          className={` hover:pb-2 cursor-pointer font-serif  transition-all duration-200 relative group hidden lg:block  `}
        >
          <a href="/">About Us</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block  `}
        >
          <a href="/services" className="group inline-flex items-center">
          Services
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180 ml-1">keyboard_arrow_down</span>
          </a>

          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={`font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block`}
        >
          <a href="/blog">Blog</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={` font-serif hover:pb-2 cursor-pointer  transition-all duration-200 relative group hidden lg:block  `}
        >
          <a href="/gallery">Gallery</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200  bg-white`}
          ></div>
        </li>
        <li
          className={` font-serif hover:pb-2 cursor-pointer transition-all duration-200 relative group hidden lg:block`}
        >
          <a href="/contact">Contact Us</a>
          <div
            className={`absolute bottom-0 w-full h-1 hidden group-hover:block  transition-all duration-200 bg-white`}
          ></div>
        </li>

        {/* Language Selector */}
        {/* <li className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-black px-1 py-2 rounded-lg transition hover:bg-gray-400 focus:ring focus:ring-gray-300"
          >
            <Globe size={22} className="mr-1 text-gray-700" />
          </button>

          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-gray-600 border border-gray-300 shadow-lg rounded-lg overflow-hidden animate-fadeIn">
              <li
                onClick={() => handleLanguageChange("en")}
                className="flex items-center p-3 cursor-pointer hover:bg-gray-400 transition"
              >
                🇬🇧 <span className="ml-2">English</span>
              </li>
              <li
                onClick={() => handleLanguageChange("hi")}
                className="flex items-center p-3 cursor-pointer hover:bg-gray-400 transition"
              >
                🇮🇳 <span className="ml-2">हिंदी</span>
              </li>
              <li
                onClick={() => handleLanguageChange("mni")}
                className="flex items-center p-3 cursor-pointer hover:bg-gray-400 transition"
              >
                🇲🇲 <span className="ml-2">ꯃꯤꯇꯩꯂꯣꯟ</span>
              </li>
            </ul>
          )}
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
