import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import image11 from "@/app/assets/Image (11).png";
import image12 from "@/app/assets/Image (12).png";
import image13 from "@/app/assets/Image (13).png"

type ImagesType = {
  image: StaticImageData;
  category: string;
  route: string
};

const CategoriesImages: React.FC = () => {
  const images: ImagesType[] = [
    {
      image: image11,
      category: "Men's",
      route: "/mens"
    },
    {
      image: image12,
      category: "Women's",
      route: "/womens"
    },
    {
      image: image13,
      category: "Shirts",
      route: "./mensShirt"
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
              <Link href={image.route}>
              <button
                className="font-medium hover:text-gray-700 transition-colors"
                aria-label={`View ${image.category} category`}
              >
                {image.category}
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesImages;
