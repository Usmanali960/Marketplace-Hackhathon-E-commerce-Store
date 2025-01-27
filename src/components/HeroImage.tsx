import React from 'react'
import Image from 'next/image'
import heroImage from "@/app/assets/Image (10).png"

function HeroImage() {
  return (
    <div>

      <div className='mt-10'>
        <Image src={heroImage} alt='hero image' className='lg:w-[1344] h-[300] ' width={1344} height={300} />
      </div>
      <div className="text-center py-8 px-4">
        <h1 className="text-3xl md:text-5xl font-bold w-full">
        FLIGHT ESSENTIALS
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className=" bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-800">
            Shop
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
