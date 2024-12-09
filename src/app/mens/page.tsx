import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <div className='flex items-center gap-10 lg:flex-row flex-col lg:py-20 py-10 justify-between lg:px-10 px-5'>
            <div className="left">
                <Image
                    src="/Rectangle (30).png"
                    className='w-full h-auto lg:w-[653px] lg:h-[653px] object-cover'
                    alt='product detail'
                    height={653}
                    width={653}
                />
            </div>
            <div className="right lg:text-left text-center lg:w-[40vw]">
                <h1 className='font-medium leading-10 xs:text-[34px] sm:text-[48px] w-full mb-4'>
                    Nike Air Force 1 PLT.AF.ORM
                </h1>
                <p className='sm:text-[15px] xs:text-[13px] w-full lg:w-[374px] mb-6'>
                    Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside-out inspired construction,
                    including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
                    Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials
                    and aged midsole aesthetic give this release an artisan finish.
                </p>
                <p className='text-[36px] font-medium mt-10 mb-4 '>₹ 8 695.00</p>
                <button className='flex px-4 xs:mx-auto lg:mx-0 justify-center py-3 rounded-full gap-2 items-center bg-black text-white mt-2'>
                    <i className='bx text-3xl bx-cart-alt'></i> Add To Cart
                </button>
            </div>
        </div>
    )
}

export default Page
