import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-25 px-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Section */}
      <div>
        <h2 className="text-3xl font-light">TOSS Consultancy Services</h2>
        <p className="mt-4"><b>Address:</b><p className='text-gray-400'>First Floor, Shiv Hari Complex, next to Gulzar Hotel, Jabalpur, Madhya Pradesh 482003</p></p>
        <p><b>Phone:</b><p className='text-gray-400'>078285 46070</p></p>
        <p>E: qi@example.com</p>
        <p>T: 99 8 76 54 321</p>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Main Menu</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="/" className="hover:text-white">MAIN HOME</a></li>
            <li><a href="/contact" className="hover:text-white">CONTACT</a></li>
            <li><a href="/services" className="hover:text-white">SERVICES</a></li>
            <li><a href="/" className="hover:text-white">LANDING</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">About</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="/about" className="hover:text-white">ABOUT US</a></li>
            <li><a href="/aboutCompany" className="hover:text-white">ABOUT ME</a></li>
            <li><a href="/ourProcess" className="hover:text-white">OUR PROCESS</a></li>
            <li><a href="/ourTeam" className="hover:text-white">OUR TEAM</a></li>
            <li><a href="#" className="hover:text-white">PRICING PLANS</a></li>
          </ul>
        </div>
      </div>

      {/* Right Section - Newsletter */}
      <div>
        <h3 className="text-xl font-semibold">Our Newsletter</h3>
        <input 
          type="email" 
          placeholder="Your email" 
          className="mt-3 w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-gray-300 py-2"
        />
        <button className="mt-4 text-sm font-semibold uppercase border-b-2 border-gray-400 hover:border-white transition-all">
          Subscribe
        </button>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 text-center text-gray-500 text-sm">
      © 2025 Qode Interactive, All Rights Reserved
    </div>
  </footer>
  )
}

export default Footer