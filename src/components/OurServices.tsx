import React from 'react';

type ServicesType = {
  heading: string;
  firstS: string;
  secondS: string;
  thirdS: string;
  fourthS: string;
};

function OurServices() {
  const services: ServicesType[] = [
    {
      heading: "Icons",
      firstS: "Air Force 1",
      secondS: "Huarache",
      thirdS: "Air Max 90",
      fourthS: "Air Max 95",
    },
    {
      heading: "Shoes",
      firstS: "All Shoes",
      secondS: "Custom Shoes",
      thirdS: "Jordan Shoes",
      fourthS: "Running Shoes",
    },
    {
      heading: "Clothing",
      firstS: "All Clothing",
      secondS: "Modest Wear",
      thirdS: "Hoodies & Pullovers",
      fourthS: "Shirts & Tops",
    },
    {
      heading: "Kid's",
      firstS: "Infant & Toddler Shoes",
      secondS: "Kid's Shoes",
      thirdS: "Kid's Jordan Shoes",
      fourthS: "Kid's Basketball Shoes",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 lg:px-32 sm:px-5 xs:px-5 max-h-max sm:py-5 xs:py-5 lg:py-10 gap-6">
      {services.map(({ heading, firstS, secondS, thirdS, fourthS }, index) => (
        <div key={index} className="serviceCard mt-5">
          <h2 className="font-medium text-lg">{heading}</h2>
          <ul className="flex flex-col text-[#757575] mt-4 gap-y-2">
            <li>{firstS}</li>
            <li>{secondS}</li>
            <li>{thirdS}</li>
            <li>{fourthS}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OurServices;
