// Sponsors.tsx
import React from "react";
import logo from "../assests/atharva2.png";

const sponsors = [
  { name: "Sponsor 1", logo: "../assests/atharva2.png" },
  { name: "Sponsor 2", logo: "../assests/atharva2.png" },
  { name: "Sponsor 3", logo: "../assests/atharva2.png" },
  { name: "Sponsor 4", logo: "../assests/atharva2.png" },
  { name: "Sponsor 5", logo: "../assests/atharva2.png" },
  // Add more sponsors as needed
];

export default function Sponsors() {
  return (
    <section className="py-16 bg-[#191919] text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Our Sponsors</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-[#181818] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={logo}
                alt={sponsor.name}
                className="w-full h-18 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
