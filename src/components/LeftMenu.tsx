"use client";
import { useState } from "react";

const Menu = () => {
  // Define the type for the keys
  type SectionKey = "categories" | "gender" | "kids" | "price";

  // Initialize the state
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    categories: true,
    gender: true,
    kids: false,
    price: false,
  });

  // Toggle function
  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-full p-4 space-y-6 border-r lg:max-w-max">
      {/* Categories */}
      <div className="border-b border-gray-100 pb-5">
        <ul className="mt-2 space-y-2 text-[17px]">
          <li className="cursor-pointer hover:text-blue-500">Shoes</li>
          <li className="cursor-pointer hover:text-blue-500">Sports Bras</li>
          <li className="cursor-pointer hover:text-blue-500">Tops & T-Shirts</li>
          <li className="cursor-pointer hover:text-blue-500">Jackets</li>
          <li className="cursor-pointer hover:text-blue-500">Accessories & Equipment</li>
          <li className="cursor-pointer hover:text-blue-500">Hoodies & Sweatshirts</li>
          <li className="cursor-pointer hover:text-blue-500">Jackets</li>
          <li className="cursor-pointer hover:text-blue-500">Shorts</li>
          <li className="cursor-pointer hover:text-blue-500">Tracksuits</li>
          <li className="cursor-pointer hover:text-blue-500">Jumpsuits & Rompers</li>
          <li className="cursor-pointer hover:text-blue-500">Skirts & Dresses</li>
          <li className="cursor-pointer hover:text-blue-500">Socks</li>
          <li className="cursor-pointer hover:text-blue-500">Accessories & Equipment</li>
        </ul>
      </div>

      {/* Gender */}
      <div className="border-b border-gray-100 pb-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("gender")}
        >
          <h2 className="font-medium text-[17px]">Gender</h2>
          <i
            className={`bx ${openSections.gender ? "bx-chevron-up" : "bx-chevron-down"} text-lg`}
          ></i>
        </div>
        {openSections.gender && (
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <input type="checkbox" id="men" className="mr-2" />
              <label htmlFor="men" className="cursor-pointer">Men</label>
            </li>
            <li className="flex items-center">
              <input type="checkbox" id="women" className="mr-2" />
              <label htmlFor="women" className="cursor-pointer">Women</label>
            </li>
            <li className="flex items-center">
              <input type="checkbox" id="unisex" className="mr-2" />
              <label htmlFor="unisex" className="cursor-pointer">Unisex</label>
            </li>
          </ul>
        )}
      </div>

      {/* Kids */}
      <div className="border-b border-gray-100 pb-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("kids")}
        >
          <h2 className="text-lg font-medium text-[17px]">Kids</h2>
          <i
            className={`bx ${openSections.kids ? "bx-chevron-up" : "bx-chevron-down"} text-lg`}
          ></i>
        </div>
        {openSections.kids && (
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <input type="checkbox" id="boys" className="mr-2" />
              <label htmlFor="boys" className="cursor-pointer">Boys</label>
            </li>
            <li className="flex items-center">
              <input type="checkbox" id="girls" className="mr-2" />
              <label htmlFor="girls" className="cursor-pointer">Girls</label>
            </li>
          </ul>
        )}
      </div>

      {/* Shop By Price */}
      <div className="border-b border-gray-100 pb-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h2 className="text-lg font-medium text-[17px]">Shop By Price</h2>
          <i
            className={`bx ${openSections.price ? "bx-chevron-up" : "bx-chevron-down"} text-lg`}
          ></i>
        </div>
        {openSections.price && (
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <input type="checkbox" id="under-2500" className="mr-2" />
              <label htmlFor="under-2500" className="cursor-pointer">Under ₹2,500</label>
            </li>
            <li className="flex items-center">
              <input type="checkbox" id="2500-5000" className="mr-2" />
              <label htmlFor="2500-5000" className="cursor-pointer">₹2,501 - ₹5,000</label>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Menu;
