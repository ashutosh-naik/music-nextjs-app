import React from "react";
import { WavyBackground } from "./ui/wavy-background";

function Instructors() {
  return (
    <div className="h-[40rem] relative overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">
          Meet Our Instructors
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal text-center">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className=""></div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
