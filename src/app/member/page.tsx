import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div className='flex flex-col items-center xs:px-5 justify-center max-w-max mx-auto pt-10 pb-20'>
            <div className='flex items-center justify-center flex-col'>
                <Image src="/Vector (1).png" alt='logo' height={8} width={44} />
                <h1 className='text-[18px] mt-3 text-center font-medium'>BECOME A NIKE MEMBER</h1>
                <p className='text-[14px] text-center text-[#8D8D8D] mt-2 w-full sm:w-[279.31px]'>
                    Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
                </p>
            </div>
            <form className='flex flex-col items-center'>
                <input type="email" className='w-full sm:w-[324px] h-[16px] border border-gray-300 py-5 px-2 mt-3 rounded' placeholder='Email address' />
                <input type="password" className='w-full sm:w-[324px] h-[16px] border border-gray-300 py-5 px-2 mt-3 rounded' placeholder='Password' />
                <input type="text" className='w-full sm:w-[324px] h-[16px] border border-gray-300 py-5 px-2 mt-3 rounded' placeholder='First Name' />
                <input type="text" className='w-full sm:w-[324px] h-[16px] border border-gray-300 py-5 px-2 mt-3 rounded' placeholder='Last Name' />
                <input type="date" className='w-full sm:w-[324px] h-[16px] border border-gray-300 py-5 px-2 mt-3 rounded' placeholder='Date of birth' />
                <p className='text-[11px] text-[#8D8D8D] mt-2 w-full sm:w-[279px]'>
                    Get a Nike Member Reward every year on your Birthday.
                </p>
                <select name="" id="" className='w-full sm:w-[324px] h-[16px] border border-gray-300 py-5 px-2 mt-3 rounded'>
                    <option value="">Pakistan</option>
                    <option value="">India</option>
                    <option value="">America</option>
                </select>
                <div className="confirmbtns flex items-center gap-3 mt-3 w-full">
                    <button className='bg-transparent border border-gray-300 hover:bg-gray-300 text-[#8D8D8D] w-full px-2 py-3 rounded'>
                        Male
                    </button>
                    <button className='bg-transparent border border-gray-300 hover:bg-gray-300 text-[#8D8D8D] w-full px-2 py-3 rounded'>
                        Female
                    </button>
                </div>

                <div className="loginDeatils flex items-center gap-3 justify-between mt-5 w-full sm:w-[324px]">
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <p className='text-[#8D8D8D] text-[12px]'>
                            Sign up for emails to get updates from Nike on products, offers, and your Member benefits
                        </p>
                    </div>
                </div>

                <div className="terms flex items-center justify-center text-center mt-3 w-full sm:w-[279.31px]">
                    <p className='text-[12px] text-[#8D8D8D] mt-2'>
                        By creating an account, you agree to Nikes Privacy Policy and Terms of Use.
                    </p>
                </div>
                <button className='w-full sm:w-[324px] bg-black text-white py-2 mt-3 rounded'>
                    Join us
                </button>
            </form>
            <p className='text-[12px] text-[#BCBCBC] mt-2'>
                Not a Member? <Link href="/signin" className='text-black font-medium underline'>log in</Link>
            </p>
        </div>
    )
}

export default Page
