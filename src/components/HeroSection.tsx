import Image from "next/image";
import React from "react";
import image from "@/app/assets/Image.png"

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative">
        <Image
          src={image}
          alt="Nike Air Max Pulse"
          className="w-screen h-full object-cover"
          width={300}
          height={300}
        />
      </div>

      {/* Content */}
      <div className="text-center py-8 px-4">
        <p className="font-medium mb-3">First Look</p>
        <h1 className="text-3xl md:text-5xl font-bold w-full">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className=" bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-700">
            Notify Me
          </button>
          <button className=" bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-800">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
