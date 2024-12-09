"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)


    const handleTheMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    function closeMenu() {
        setMobileMenu(false);
    }

    return (
        <div className='w-screen sticky top-0 left-0 flex z-50 bg-white border-gray-300'>
            <div>
                <nav className='flex items-center w-screen md:px-20 xs:px-5 h-[12vh] justify-between'>
                    <div className="logo">
                        <Image src="/Vector (1).png" alt='logo' width={52} height={25} />
                    </div>
                    <div className="navMenus flex items-center gap-5 xs:hidden md:flex">
                        <ul className='flex font-medium items-center gap-5'>
                            <li><Link href="/" className="">Home</Link></li>
                            <li><Link href="./featured" className="">Explore</Link></li>
                            <li><Link href="./mens" className="">Add to Cart</Link></li>
                            <li><Link href="./signin" className="">Sign In</Link></li>
                            <li><Link href="./member" className="">Join us</Link></li>
                            <li><Link href="./payments" className="">Contact</Link></li>
                            <li><Link href="./checkout" className="">Checkout</Link></li>
                        </ul>
                    </div>
                    <div className="extra relative flex items-center gap-3 text-3xl">
                        <div className="search xs:hidden md:flex bg-gray-100 text-xl px-4 py-2 justify-center flex items-center rounded-full">
                            <i className='bx bx-search text-2xl'></i>
                            <input type="text" className='outline-none bg-gray-100 placeholder:text-black/40 placeholder:text-base' placeholder='Search...' />
                        </div>
                        <i className='bx bx-heart'></i>
                        <Link href="/cart"><i className='bx bx-cart-alt'></i></Link>
                        <div className="hamberger md:hidden xs:flex">
                            <i onClick={handleTheMenu} className='bx bx-menu'></i>
                        </div>
                    </div>
                </nav>
                {mobileMenu &&
                    (<div className="navMenus top-0 left-0 absolute block h-screen w-screen bg-[#F5F5F5] text-2xl">
                        <i onClick={closeMenu} className='bx bx-x ml-4 absolute top-4 right-6 text-4xl'></i>
                        <ul className='block font-medium gap-5 ml-4 mt-16'>
                            <li onClick={closeMenu} className='mb-6'><Link href="/" className="border-b border-gray-200 ">Home</Link></li>
                            <li onClick={closeMenu} className='mb-6'><Link href="./featured" className="border-b border-gray-200">Explore</Link></li>
                            <li onClick={closeMenu} className='mb-6'><Link href="./mens" className="border-b border-gray-200">Add to Cart</Link></li>
                            <li onClick={closeMenu} className='mb-6'><Link href="./signin" className="border-b border-gray-200">Sign In</Link></li>
                            <li onClick={closeMenu} className='mb-6'><Link href="./member" className="border-b border-gray-200 ">Join us</Link></li>
                            <li onClick={closeMenu} className='mb-6'><Link href="./payments" className="border-b border-gray-200">Contact</Link></li>
                            <li onClick={closeMenu} className='mb-6'><Link href="./checkout" className="border-b border-gray-200">Checkout</Link></li>
                        </ul>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Navbar
