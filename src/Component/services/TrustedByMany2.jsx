import { useState } from "react";
import image1 from "./../../assets/services1.jpg";

export default function TrustedByMany2() {
  const [activeTab, setActiveTab] = useState("Design");

  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-16">
      {/* Right Side - Text and Tabs */}
      <div className="w-full md:w-1/2">
        <h5 className="text-gray-400 tracking-wide uppercase">Brands</h5>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Trusted and Supported by Many
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut
          aliquip ex ea commodo. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore.
        </p>

        {/* Bullet Points */}
        <ul className="mt-4 text-gray-700">
          <li>• Lorem ipsum dolor est.</li>
          <li>• Aliquam lorem ante.</li>
        </ul>
      </div>
        {/* Left Side - Image */}
       <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image1}
          alt="Meeting"
          className="rounded-lg w-full md:w-3/4 h-auto"
        />
      </div>
    </section>
    </>
  );
}
