import React from "react";

const JoinNewsletter2 = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[450px]">
      {/* Left Section - Join Our Team */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-gradient-to-r from-[rgba(120,60,150,0.6)] via-[rgba(100,50,180,0.6)] via-[rgba(80,40,210,0.6)] via-[rgba(70,60,230,0.6)] to-[rgba(60,80,250,0.6)]">
  <h2 className="text-4xl font-bold text-gray-900">Join Our Team</h2>
  <p className="text-gray-700 mt-3 max-w-md">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti.
  </p>
  <div className="mt-6">
    <button className="w-14 h-14 flex items-center justify-center rounded-full border border-purple-500 text-purple-600 hover:bg-purple-400 hover:text-white transition duration-300">
      ➝
    </button>
  </div>
</div>

      {/* Right Section - Our Newsletter */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-900">Our Newsletter</h2>
        <p className="text-gray-600 mt-3 max-w-md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudanti.
        </p>
        <div className="mt-6">
          <button className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-400 text-gray-500 hover:bg-gray-200 transition duration-300">
            ➝
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinNewsletter2;
