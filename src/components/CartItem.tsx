import Image from 'next/image';
import { FC } from 'react';

interface CartItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
  size: string;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ image, title, description, price, size, quantity }) => {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      {/* Image component optimized for production */}
      <div className="w-20 h-20 relative">
        <Image
          src={image}
          alt={title}
          layout="fill" // Ensures responsiveness
          objectFit="cover" // Maintains aspect ratio
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h3 className="font-medium text-base">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm">Size: <span className="font-semibold">{size}</span></p>
        <p className="text-sm">Quantity: <span className="font-semibold">{quantity}</span></p>
      </div>

      {/* Price and Delete Button */}
      <div className="text-right">
        <p className="font-semibold text-lg">{price}</p>
        <button
          className="text-red-500 mt-2 hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <i className="bx bx-trash text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
