import Image from "next/image";
import React from "react";

type ProductCardProps = {
    product: {
        id: number
        image: string;
        just: string;
        name: string;
        category: string;
        color: string;
        price: string;
    };
};

const OtherProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <>
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition duration-300 w-full sm:w-[250px]">
                <div className="w-full">
                    <Image src={product.image} alt="iamge" width={348} height={348} />
                </div>
                <div className="mt-3">
                    <span className="text-[#9E3500] font-medium text-sm block mb-1">
                        {product.just}
                    </span>
                    <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                    <p className="text-gray-500 text-sm mb-3">{product.color}</p>
                    <span className="font-bold text-gray-800">{product.price}</span>
                </div>
            </div>
            
        </>
    );
};

export default OtherProductCard;
