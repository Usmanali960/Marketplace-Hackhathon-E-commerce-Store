import Image from 'next/image';
import React from 'react';
import nike from "@/app/assets/nike.jpg"

function TopNavbar() {
    return (
        <div className="w-full flex items-center justify-between h-[36px] sm:px-5 px-[20px] bg-gray-200">
            <div className="navLogo">
                <Image src={nike} className='mix-blend-multiply' alt="vector" width={30} height={17.97} />
            </div>
            <div className="navMenu flex items-center text-xs sm:text-sm md:text-lg lg:text-base 2xl:text-xl gap-4">
                <ul className="flex items-center gap-3">
                    <li><p>Find a Store</p></li>
                    <li><p>|</p></li>
                    <li><p>Help</p></li>
                    <li><p>|</p></li>
                    <li><p>Join Us</p></li>
                    <li><p>|</p></li>
                    <li><p>Sign In</p></li>
                </ul>
            </div>
        </div>
    );
}

export default TopNavbar;
