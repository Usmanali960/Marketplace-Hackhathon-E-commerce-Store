"use client"
import React from 'react';
import { useDispatch } from 'react-redux';
import { productsTypes } from '@/app/types/product';
import { addToWishlist } from '@/app/redux/wishlistSlice';
import { Bounce, toast } from 'react-toastify';

interface AddToWishlistProps {
    product: productsTypes;
}

const WishListButton: React.FC<AddToWishlistProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = () => {
        toast.success('Product added to Wish List!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        const wishListItem = {
            id: product._id,
            name: product.productName,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: 1 // Ensure this matches the expected property name
        };
        dispatch(addToWishlist(wishListItem));
    };

    return (
        <div className='flex items-center justify-center'>
            <button className='bg-white p-2 flex items-center justify-center rounded-full'
                onClick={handleAddToWishlist}>
                <i className={`bx bx-heart`}></i>
            </button>
        </div>
    );
};

export default WishListButton;
