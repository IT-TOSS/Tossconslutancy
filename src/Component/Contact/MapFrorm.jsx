import React, { useRef, useState } from "react";

const MapForm = () => {
  const mapRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (mapRef.current.requestFullscreen) {
        mapRef.current.requestFullscreen();
      } else if (mapRef.current.mozRequestFullScreen) {
        mapRef.current.mozRequestFullScreen();
      } else if (mapRef.current.webkitRequestFullscreen) {
        mapRef.current.webkitRequestFullscreen();
      } else if (mapRef.current.msRequestFullscreen) {
        mapRef.current.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full h-full p-6 md:p-12 gap-6 my-40">
      {/* Map Section */}
      <div className="w-full md:w-1/2 h-96 relative" ref={mapRef}>
        <iframe
          title="Google Map"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.402922275358!2d79.92351887499515!3d23.155489979080784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b236ffffffff%3A0x849a51b436db151d!2sTOSS%20Solutions!5e0!3m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button
          onClick={handleFullScreen}
          className="absolute top-2 right-2 bg-white px-4 py-2 text-black font-semibold rounded shadow-md hover:bg-gray-200"
        >
          {isFullScreen ? "Exit Full Screen" : "Full Screen"}
        </button>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <form onSubmit={(e) =>{ // here now we not make a veriable for onSubmit
                e.preventDefault()
                alert('Form submitted!')

        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="p-3 border rounded w-full"
            />
            <input
              type="email"
              placeholder="Your email"
              className="p-3 border rounded w-full"
            />
          </div>
          <textarea
            placeholder="Your message"
            className="p-3 border rounded w-full h-32 mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapForm;