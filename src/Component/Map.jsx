import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    number: "01",
    title: "Manage your data efficiently",
    description:
      "Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa.",
  },
  {
    id: 2,
    number: "02",
    title: "Built with neat utility features",
    description:
      "Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa.",
  },
  {
    id: 3,
    number: "03",
    title: "Futuristic interactive designs",
    description:
      "Lorem ipsum dolor sit amet ridiculus consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Montes est massa.",
  },
];

const FeatureSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="relative bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Large Faded Number in Background */}
            <h1 className="absolute top-2 left-5 text-7xl font-bold text-gray-200">
              {feature.number}
            </h1>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 relative">
              {feature.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-3 text-sm">{feature.description}</p>

            {/* View More Link */}
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 font-semibold uppercase text-sm tracking-wide hover:underline"
            >
              View More
            </a>
          </motion.div>
        ))}
      </div>

      {/* Back to Top Button */}
      {/* <motion.div
        className="fixed right-5 bottom-10 rotate-90 text-xs uppercase text-gray-500 cursor-pointer tracking-widest hover:text-black transition"
        whileHover={{ scale: 1.1 }}
      >
        Back to Top
      </motion.div> */}
    </div>
  );
};

export default FeatureSection;
