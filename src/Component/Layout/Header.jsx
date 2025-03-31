import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header with background
        setIsVisible(true);
        setIsScrolled(scrollTop > 50);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 py-[30px] left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"}`}
    >
      <h1 className="text-lg font-bold transition-all duration-300">TOSS Consultancy Services</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {[
          { name: "HOME", path: "/" },
          { name: "ABOUT", path: "/about" },
          { name: "OUR SERVICES", path: "/services" },
          { name: "OUR PRODUCT", path: "/product" },
          { name: "CONTACT US", path: "/contact" },
        ].map((item) => (
          <a
            key={item.path}
            href={item.path}
            onClick={() => handleNavClick(item.path)}
            className={`font-semibold transition duration-300 ${
              activeLink === item.path
                ? "text-blue-400"
                : isScrolled
                ? "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
                : "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        <div className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-white"} mb-1`}></div>
        <div className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-white"} mb-1`}></div>
        <div className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-white"}`}></div>
      </div>

      {/* Mobile Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex items-center justify-center transition-transform transform md:hidden">
          <div className="bg-white w-4/5 max-w-sm p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-6 text-center text-lg">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "OUR SERVICES", path: "/services" },
                { name: "OUR PRODUCT", path: "/product" },
                { name: "CONTACT US", path: "/contact" },
              ].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-semibold ${
                    activeLink === item.path
                      ? "text-blue-700"
                      : "text-black hover:text-transparent hover:bg-gradient-to-r from-[rgba(120,45,150,0.8)] via-[rgba(90,30,180,0.8)] via-[rgba(50,20,200,0.8)] via-[rgba(30,40,220,0.8)] to-[rgba(20,60,250,0.8)] bg-clip-text"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
