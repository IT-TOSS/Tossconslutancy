import React from 'react'
import TrustedByMany1 from '../Component/services/TrustedByMany1'
import TrustedByMany2 from '../Component/services/TrustedByMany2'

const services = () => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-[250px] bg-white text-center px-6 md:px-12 py-12 pt-[177px]">
                {/* Section Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Our Services
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed py-9">
                    At <span className="font-semibold text-gray-800">TOSS Consultancy Services</span>, we bring cutting-edge
                    <span className="text-blue-500 font-medium"> AI, automation,</span> and
                    <span className="text-blue-500 font-medium"> software development</span> to businesses looking for smart,
                    scalable, and efficient solutions. Our expertise spans across multiple domains, ensuring you stay ahead in
                    the digital revolution.
                </p>
            </div>
            <TrustedByMany1 />
            {/* <TrustedByMany2/> */}

            <div className="relative flex flex-col items-center justify-center min-h-[250px] bg-white text-center px-6 md:px-12 py-12">
                <h1 className="text-lg md:text-xl text-black-600 max-w-3xl leading-relaxed py-9 font-bold" >Innovate. Automate. Elevate." – Partner with TOSS Consultancy
                Services for the future of tech.</h1>
            </div>

        </>
    )
}

export default services