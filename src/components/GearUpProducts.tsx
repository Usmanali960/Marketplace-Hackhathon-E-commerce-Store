import Image from 'next/image';
import React from 'react';

type ProductCardProps = {
  product: {
    productImage: string;
    productName: string;
    productPrice: string;
    category: string;
  };
};

const GearUpProducts: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] p-4">
      <div className="card w-full bg-white rounded-lg overflow-hidden transition-shadow">
        <Image
          src={product.productImage}
          alt={product.productName}
          width={300}
          height={300}
          className="object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] transition-all duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="detail flex flex-col mt-2 px-2">
          <div className="productDetail font-medium text-sm flex items-center justify-between">
            <p className="text-[12px] xs:text-[8px] sm:text-[12px] md:text-[12px] truncate">{product.productName}</p>
            <p className="text-[12px] xs:text-[8px] sm:text-[12px] md:text-[12px]">{product.productPrice}</p>
          </div>
          <p className="text-[12px] xs:text-[8px] sm:text-[12px] md:text-[12px] text-[#757575] mt-1 truncate">{product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default GearUpProducts;
