import Image from 'next/image'
import React from 'react'

type ProductCardProps = {
    product: {
        productImage: string;
        productName: string;
        productPrice: string;
        category: string;
    };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="card w-full scrollbar-hide bg-white rounded-lg overflow-hidden">
            <Image
                src={product.productImage}
                alt={product.productName}
                width={441.36}
                height={441.36}
            />
            <div className="detail flex flex-col mt-2 px-2">
                <div className="productDetail font-medium text-[12px] xs:text-[8px] sm:text-[12px] md:text-[12px]  flex items-center justify-between">
                    <p className="truncate">{product.productName}</p>
                    <p className='text-[12px] xs:text-[8px] sm:text-[12px] md:text-[12px]'>{product.productPrice}</p>
                </div>
                <p className='text-[#757575]  xs:text-[8px] sm:text-[12px] md:text-[12px] text-[12px]'>{product.category}</p>
            </div>
        </div>
    )
}

export default ProductCard;
