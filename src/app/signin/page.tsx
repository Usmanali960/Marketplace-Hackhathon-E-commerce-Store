import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Page() {
    return (
        <div className="flex flex-col xs:px-5  items-center justify-center max-w-md mx-auto py-10">
            {/* Logo and Heading */}
            <div className="flex items-center flex-col text-center">
                <Image src="/Vector (1).png" alt="logo" height={8} width={44} />
                <h1 className="text-xl md:text-2xl mt-3 font-medium leading-relaxed">
                    YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
                </h1>
            </div>

            {/* Form */}
            <form className="flex flex-col items-center w-full mt-6">
                <input
                    type="email"
                    className="w-full md:w-[324px] h-12 border border-gray-300 py-2 px-3 mt-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Email address"
                />
                <input
                    type="password"
                    className="w-full md:w-[324px] h-12 border border-gray-300 py-2 px-3 mt-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Password"
                />
                <div className="loginDetails flex items-center justify-between w-full md:w-[324px] mt-5">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <p className="text-xs md:text-sm text-gray-500">
                            Keep me logged in
                        </p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 cursor-pointer">
                        Forgot your password?
                    </p>
                </div>
                <div className="terms flex items-center justify-center text-center mt-4 w-full md:w-[324px]">
                    <p className="text-xs md:text-sm text-gray-500">
                        By logging in, you agree to Nikes Privacy Policy and{' '}
                        <span className="underline">Terms of Use.</span>
                    </p>
                </div>
                <button
                    className="w-full md:w-[324px] bg-black text-white py-2 mt-5 rounded font-medium hover:bg-gray-800 transition"
                >
                    Sign in
                </button>
            </form>

            {/* Join Us Section */}
            <p className="text-xs md:text-sm text-gray-400 mt-4">
                Not a Member?{' '}
                <Link href="/member" className="text-black font-medium underline">
                    Join Us.
                </Link>
            </p>
        </div>
    );
}

export default Page;
