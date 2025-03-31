import React from "react";

const JoinNewsletter = () => {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Left Section - Join Our Team */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-3xl font-bold text-gray-900">Join Our Team</h2>
        <p className="text-gray-600 mt-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudanti.
        </p>
        <div className="mt-6">
          <button className="w-14 h-14 flex items-center justify-center rounded-full border border-blue-400 hover:bg-blue-200 transition duration-300">
            ➝
          </button>
        </div>
      </div>

      {/* Right Section - Our Newsletter */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900">Our Newsletter</h2>
        <p className="text-gray-600 mt-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudanti.
        </p>
        <div className="mt-6">
          <button className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-300 transition duration-300">
            ➝
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinNewsletter;