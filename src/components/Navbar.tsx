"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'; // Import the Sheet components
import Search from './Search';
import Authentication from './Authentication';
import nike from "@/app/assets/nike.jpg"

function Navbar() {
    const [menu, setMenu] = useState(true)
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    const menuHandler = () => {
        setMenu(false)
    }

    return (
        <>
            <div className='w-screen sticky top-0 left-0 flex z-50 bg-white border-gray-300'>
                <div>
                    <nav className='flex items-center w-screen md:px-20 xs:px-5 h-[12vh] justify-between'>
                        <Link href={"/"}>
                            <Image src={nike} alt='logo' width={100} height={35} />
                        </Link>
                        <div className="navMenus flex items-center gap-5 xs:hidden md:flex">
                            <ul className='flex font-medium items-center gap-5'>
                                <li><Link href="/" className="">Home</Link></li>
                                <li><Link href="./featured" className="">Products</Link></li>
                                <li><Link href="./payments" className="">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="extra relative flex items-center gap-3 text-3xl">
                            <div className='sm:flex hidden'>
                                <Search />
                            </div>
                            <Link href="/wishList" className="flex relative items-center justify-center">
                                {wishlistItems.length > 0 && (
                                    <p className='absolute bg-red-600 text-base text-white rounded-full -right-2.5 -top-2 px-1.5'>{wishlistItems.length}</p>
                                )}
                                <i className='bx bx-heart'></i>
                            </Link>
                            <Link href="/cart" className='flex relative items-center justify-center'>
                                {cartItems.length > 0 && (
                                    <p className='absolute bg-red-600 text-base text-white rounded-full -right-2.5 -top-2 px-1.5'>{cartItems.length}</p>
                                )}
                                <i className='bx bx-cart-alt'></i>
                            </Link>
                            <div className='flex items-center justify-center -mt-1.3'>

                            <Authentication />
                            </div>

                            {/* Sheet Trigger for Mobile Menu */}
                            <div className='xs:flex sm:hidden'>
                                <Sheet>
                                    <SheetTrigger>
                                        <i className='bx bx-menu text-2xl sm:hidden xs:flex'></i>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Menu</SheetTitle>
                                            <SheetDescription></SheetDescription>
                                        </SheetHeader>
                                        <ul className='block font-medium gap-5 ml-4'>
                                            <li><Link onClick={menuHandler} href="/" className="border-b border-gray-200 ">Home</Link></li>
                                            <li><Link onClick={menuHandler} href="./featured" className="border-b border-gray-200">Products</Link></li>
                                            <li><Link onClick={menuHandler} href="./payments" className="border-b border-gray-200">Contact</Link></li>
                                            {menu}
                                        </ul>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="sm:hidden flex items-center justify-center px-5 my-3">
                <Search />
            </div>
        </>
    )
}

export default Navbar
