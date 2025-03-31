import { useState } from "react";
import image1 from "./../../assets/services1.jpg";
import ATCHAT from "./../../assets/Aichat.jpg";
import image2 from "./../../assets/services2.jpg";
import image3 from "./../../assets/services3.jpg";
import web from "./../../assets/Web2.jpg";

const sections = [
  {
    title: "Web & App Development",
    category: "Technology",
    description:
      "From concept to launch, we design and develop custom websites and mobile applications that align with your business goals. Our solutions prioritize user experience, performance, and scalability to drive growth.Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    points: ["User-Centric Design", "Scalable & High-Performance Solutions","Cross-Platform Compatibility","Secure & SEO-Optimized Development"],
    image: `${web}`,
    // tabs: ["Design", "Marketing", "Devs"],
  },
  {
    title: "Chatbots & Virtual Assistants",
    category: "Technology",
    description:
      "Enhance customer engagement with our AI-powered chatbots and virtual assistants. Designed for customer service, lead generation, and automation, our bots provide 24/7 support, personalized interactions, and seamless user experiences",
    points: ["24/7 Customer Support", "Personalized & Context-Aware Conversations","Automation for Lead Generation & Sales ","Seamless Integration with Multiple Platforms "],
    image:`${ATCHAT}`,
    // tabs: ["AI", "Cloud", "Cybersecurity"],
  },
  {
    title: "Data Crawling & Web Scraping",
    category: "Technology",
    description:
      "Gain a competitive edge with accurate and efficient data extraction. Our web crawling and scraping services help businesses with market analysis, price tracking, competitor research, and business intelligence, ensuring data-driven decision-making.",
    points: ["Market & Competitor Analysis", "Automated Price Tracking & Monitoring","Lead Generation & Customer Insights ","Scalable & Custom Data Extraction Solutions "],
    image: `${image3}`,
    // tabs: ["Growth", "Strategy", "Networking"],
  },
  {
    title: "Custom Software Development",
    category: "Technology",
    description:
      "We build tailor-made tech solutions to meet unique business challenges. Whether you need a bespoke enterprise application, automation tools, or AI-driven platforms, we deliver scalable, high-performance software that drives results.",
    points: ["Custom Enterprise Applications", "Advanced Automation Tools","AI-Driven Business Platforms","Scalable & Future-Ready Solutions"],
    image: `${image1}`,
    // tabs: ["Design", "Marketing", "Devs"],
  },
];

export default function TrustedByMany1() {
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <SectionComponent key={index} section={section} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}

function SectionComponent({ section, reverse }) {
  // const [activeTab, setActiveTab] = useState(section.tabs[0]);

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={section.image}
          alt={section.title}
          className="rounded-lg w-full  h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 px-5 py-5">
        <h5 className="text-gray-400 tracking-wide uppercase">{section.category}</h5>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">{section.title}</h2>


        <p className="text-gray-600 mt-4">{section.description}</p>

        <ul className="mt-4 text-gray-700">
          {section.points.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
