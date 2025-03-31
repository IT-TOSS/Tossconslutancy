import React, { useEffect, useState } from "react";
import myimage from "./../assets/Networkd.png";
import { motion } from "framer-motion";

const NetworkStructureDesign = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50 min-h-screen">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
        <h4 className="text-gray-500 uppercase tracking-wide text-sm md:text-base">Who We Are</h4>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Network <br /> Structure <br /> Design
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus sapien nulla ut metus varius laoreet.
          Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
        </p>
        <p className="text-gray-600 text-base md:text-lg">
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Maecenas nec odio et ante tincidunt tempus vitae.
        </p>
      </div>

      {/* Right Section - Phone Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <motion.div
          className="relative w-full max-w-xs md:max-w-md h-auto"
          animate={{ y: (scrollY % 40) - 20 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <img
            src={myimage}
            alt="Network Design"
            className="rounded-xl  w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkStructureDesign