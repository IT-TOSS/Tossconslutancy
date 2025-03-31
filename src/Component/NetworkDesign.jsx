import React from "react";
import { motion } from "framer-motion";
import myImage from "./../assets/Portfolio-img1.jpg";

const NetworkDesign = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-100 p-6 md:p-10 relative">
      {/* Left Section - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={myImage}
          alt="Person using a tablet"
          className="rounded-2xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Right Section - Text Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left px-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-500 uppercase tracking-widest text-sm">
          How It Works
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-2 leading-snug">
          Network <br /> Infrastructure Design
        </h1>

        {/* Features List */}
        <div className="mt-6 space-y-4">
          {["Fast And Easy", "Safe Online Service", "Modern Look", "Reliable Usage"].map(
            (item, index) => (
              <motion.p
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer hover:underline"
              >
                {item}
              </motion.p>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default NetworkDesign;