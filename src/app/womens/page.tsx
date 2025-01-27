"use client"
import { productsTypes } from '@/app/types/product';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import eye from "@/app/assets/eye.png";
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import WishListButton from '@/components/WishListButton';

const WomensS = () => {
    const [data, setData] = useState<productsTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Add loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = `*[_type == "product" && category == "Women's Shoes"]{
                    description,
                    inventory,
                    colors[0],
                    price,
                    _id,
                    "imageUrl":image.asset->url,
                    status,
                    productName,
                    category,
                    "slug":slug.current
                }`;
                const data = await client.fetch(query);
                setData(data);
                setLoading(false); // Data loaded, set loading to false
            } catch (error) {
                console.error(`Error fetching products for Men's Shoes:`, error);
                setLoading(false); // Handle loading state in case of an error
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display loading indicator
    }

    return (
        <div className="flex gap-5 overflow-x-auto px-2">
            {data.map((product) => (
                <div key={product._id} className="card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-[280px] flex-shrink-0">
                    {/* Product Image */}
                    <div className="relative w-full aspect-square">
                        <Image
                            src={product.imageUrl || '/placeholder-image.jpg'} // Fallback image
                            alt={product.productName || 'Product Image'}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                            className="object-cover"
                        />
                        <div className=" flex items-center gap-y-2 justify-center flex-col absolute top-2 right-2 cursor-pointer p-1 rounded-full">
                            <Link href={`product/${product.slug}`} className='bg-white  p-2 rounded-full'>
                                <Image className='group' src={eye} alt="Details image" width={18} height={19} />
                            </Link>
                            <p className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                details
                            </p>
                            <div className=''>
                                <WishListButton product={product} />
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="detail flex flex-col p-4">
                        <p className='truncate text-[#9E3500] font-semibold text-sm'>{product.status}</p>
                        <div className="productDetail flex items-center justify-between">
                            <p className="truncate font-semibold text-sm">
                                {product.productName || 'Unnamed Product'}
                            </p>
                            <p className="text-xs text-gray-700">
                                {product.price ? `Rs.${product.price.toFixed(2)}` : 'Price Not Available'}
                            </p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {product.category || 'Uncategorized'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WomensS;
