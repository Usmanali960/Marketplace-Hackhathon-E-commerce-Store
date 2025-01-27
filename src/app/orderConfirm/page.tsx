import Link from 'next/link';
import React from 'react';

function OrderConfirm() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">Order Confirmed!</h2>
                <p className="mt-2 text-gray-600">Thank you for your purchase. Your order has been successfully confirmed.</p>
                <p className="mt-4 text-gray-600">We will send you a confirmation email with the details shortly.</p>
                <Link href={"/"}>
                <button
                    className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Continue Shopping
                </button>
                </Link>
            </div>
        </div>
    );
}

export default OrderConfirm;