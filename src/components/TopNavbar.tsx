import Image from 'next/image';
import React from 'react';

function TopNavbar() {
    return (
        <div className="w-full flex items-center justify-between h-[36px] sm:px-5 px-[20px] bg-gray-200">
            <div className="navLogo">
                <Image src="/Vector.png" alt="vector" width={19.2} height={17.97} />
            </div>
            <div className="navMenu flex items-center text-sm sm:text-sm md:text-lg lg:text-base 2xl:text-xl gap-4">
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
