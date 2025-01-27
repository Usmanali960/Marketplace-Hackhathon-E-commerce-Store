import Image from 'next/image'
import React from 'react'
import mainImage from "@/app/assets/Image (1).png"

function ImageComponent() {
    return (
        <section className="relative mt-6">
            <p className='font-medium mb-2'>Featured</p>
            {/* Background Image */}
            <div className="relative">
                <Image
                    src={mainImage}
                    alt="Nike Air Max Pulse"
                    className="w-screen h-full object-cover"
                    width={300}
                    height={300}
                />
            </div>

            {/* Content */}
            <div className="text-center py-8 px-4">
                <h1 className="text-3xl md:text-5xl font-bold w-full">
                    STEP INTO WHAT FEELS GOOD
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                    Cause everyone should know the feeling of running in that perfect pair.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className=" bg-black text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-700">
                        find our shoe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ImageComponent
