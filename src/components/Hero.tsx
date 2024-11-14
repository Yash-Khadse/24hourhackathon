import React from "react";
import { useNavigate } from "react-router-dom";
import { Timer, MapPin, Calendar } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#191919]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#ff7f40 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#ff7f40] to-[#f25a3c] text-transparent bg-clip-text">
          STRATUM
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          24-Hour Innovation Challenge
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#ff7f40]" />
            <span>November 27-28</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#ff7f40]" />
            <span>Malla Reddy Engineering College</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="w-6 h-6 text-[#ff7f40]" />
            <span>24 Hours</span>
          </div>
        </div>

        <CountdownTimer targetDate="2024-11-27T10:00:00" />

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 bg-gradient-to-r from-[#ff7f40] to-[#f25a3c] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Register Now
          </button>
          {/* <button
            className="px-8 py-3 border-2 border-[#ff7f40] rounded-full text-white font-semibold hover:bg-[#ff7f40]/10 transition-colors"
          >
            Learn More
          </button> */}
        </div>

        {/* <div className="mt-12 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
          <p className="text-lg text-[#ff7f40] font-semibold">Early Bird Offer!</p>
          <p className="text-sm">Register now at ₹1,249 per team (Regular: ₹1,499)</p>
        </div> */}
      </div>
    </div>
  );
}
