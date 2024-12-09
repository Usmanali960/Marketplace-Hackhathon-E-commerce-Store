import Image from 'next/image';
import React from 'react';

type ImagesType = {
  image: string;
  category: string;
};

const CategoriesImages: React.FC = () => {
  const images: ImagesType[] = [
    {
      image: '/image (11).png',
      category: "Men's",
    },
    {
      image: '/image (12).png',
      category: "Women's",
    },
    {
      image: '/image (13).png',
      category: "Kids's",
    },
  ];

  return (
    <div>
      <h1 className="font-medium mb-2 text-lg">The Essentials</h1>
      <div className="relative flex flex-wrap lg:flex-row lg:flex-nowrap sm:flex-col w-full gap-3 items-center">
        {images.map((image) => (
          <div key={image.category} className="relative">
            {/* Optimized Image with proper layout */}
            <Image
              src={image.image}
              alt={`${image.category} category`}
              width={440}
              height={540}
              className="rounded-lg object-cover"
              priority
            />
            {/* Category Button */}
            <div className="absolute bottom-10 left-16 bg-white text-black rounded-full px-4 py-2 border border-gray-200 shadow-md">
              <button
                className="font-medium hover:text-gray-700 transition-colors"
                aria-label={`View ${image.category} category`}
              >
                {image.category}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesImages;
