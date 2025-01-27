"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { productsTypes } from '@/app/types/product';
import { addToCart } from '@/app/redux/cartSlice';
import { Bounce, toast } from 'react-toastify';

interface AddToCartButtonProps {
    product: productsTypes;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // Notify user that product was added to the cart
        toast.success('Product added to cart!', {
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

        // Create the cart item to be added to the Redux store
        const cartItem = {
            id: product._id,
            productName: product.productName,
            price: product.price,
            quantity: 1, // Default quantity is 1
            image: product.imageUrl
        };

        // Dispatch the action to add the item to the cart in the Redux store
        dispatch(addToCart(cartItem));
    };

    return (
        <button
            onClick={handleAddToCart} // Correct function call
            className="bg-blue-500 text-white p-2 rounded"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
