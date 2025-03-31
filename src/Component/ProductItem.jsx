import React from 'react';
import P1 from "./../assets/Product1.png";
import P2 from "./../assets/Product2.png";
// import P3 from "./../assets/Product3.jpg";

const products = [
    {
        id: 1,
        image: `${P1}`,
        title: "TOAi Image",
        description: "Revolutionizing Product Imaging with AI",
        features: [
            "TOAi is a cutting-edge AI image generation tool designed to transform the way businesses create product visuals. Built specifically for e-commerce, fashion, and grocery industries, TOAi enables brands to generate high-quality, customizable, and scalable product images in real-time—all while significantly reducing the cost and time of traditional cataloging.",
            "High-Quality Product Images – Crisp, professional visuals tailored for online platforms.",
            "Cost & Time Efficiency – Eliminates the need for costly product photography and manual edits.",
            "Customizable & Scalable – Adaptable to different product categories and brand aesthetics.",
            "Real-Time Image Generation – AI-powered automation for instant, on-demand visuals.",
            "Text-to-Image Automation – Simply describe your product, and TOAi brings it to life.",
            "Seamless Integration – Compatible with e-commerce platforms like Shopify, WooCommerce, and Magento.",
            "AI-Enhanced Editing – Automatically enhances image quality and lighting conditions."
        ]
    },
    {
        id: 2,
        image: `${P2}`,
        title: "Detectron: AI & Blockchain-Powered Smart CCTV",
        description: "Enhancing traditional CCTV systems with AI-driven video analysis and blockchain security.",
        features: [
            "Real-Time Crime Detection – AI-powered surveillance instantly identifies threats like theft, violence, and unauthorized access.",
            "Minimized False Alarms – Intelligent analysis reduces errors and unnecessary law enforcement interventions.",
            "Tamper-Proof Data Security – Blockchain ensures secure, immutable, and decentralized CCTV footage storage.",
            "Faster Law Enforcement Response – Automated alerts enable quicker crime prevention and investigation.",
            "Scalable & Future-Ready – Designed for smart cities, Detectron adapts to evolving security needs efficiently.",
            "24/7 Monitoring – AI continuously analyzes video feeds to detect suspicious activities.",
            "Cloud & Edge Computing – Offers cloud-based storage and on-device processing for better efficiency."
        ]
    },
    {
        id: 3,
        image: "${P3}",
        title: "TOAi Chat",
        description: "AI-powered chatbot streamlining customer interactions.",
        features: [
            "Seamless Automation – Answers FAQs, collects responses, and provides instant quotes effortlessly.",
            "Multi-Platform Integration – Works across websites, WhatsApp, Messenger, and more.",
            "Smart AI & CRM Integration – Automates workflows and nurtures leads effectively.",
            "Secure & Scalable – Ensures data privacy with flexible customization options.",
            "Reliable Support – Fast deployment with dedicated 24/7 assistance.",
            "AI-Powered Analytics – Provides insights into customer interactions and engagement.",
            "Multilingual Support – Communicates with users in multiple languages for global reach."
        ]
    }
];

const ProductItem = () => {
    return (
        <section className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-6">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className={`flex flex-col md:flex-row items-center justify-center w-full mb-10 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Mobile Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-60 h-96 md:w-72 md:h-[500px] rounded-3xl shadow-lg overflow-hidden">
                            {/* <img
                                src={product.image}
                                alt="Mobile Display"
                                className="w-full h-full object-cover"
                            /> */}
                            <img
                                src={product.image}
                                alt="Mobile Display"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Feature Content */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left p-6">
                        <h3 className="text-sm uppercase tracking-widest mb-2">{product.title}</h3>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{product.description}</h2>
                        <ul className="text-lg space-y-2">
                            {product.features.map((feature, index) => (
                                <li key={index}>&#8226; {feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductItem;
