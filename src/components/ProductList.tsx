"use client";
import React from 'react';
import ImageComponent from './ImageComponent';
import MensShoes from '@/app/mens/page';
import WomensShoes from '@/app/womens/page';
import WomensShirts from '@/app/womensShirt/page';
import MensShirts from '@/app/mensShirt/page';

function ProductList() {
    return (
        <section>
            <h1 className="font-medium mb-6 text-center sm:text-left">Mens Shoes</h1>
            <div className="overflow-x-auto scroll-smooth">
                <div className="flex gap-5">
                    <MensShoes />
                </div>
            </div>

            <ImageComponent />

            <h1 className="font-medium mb-6 text-center sm:text-left">Womens Shoes</h1>
            <div className="flex overflow-x-auto space-x-4 py-4 px-2 lg:px-4">
                <WomensShoes />
            </div>

            <h1 className="font-medium mb-6 text-center sm:text-left">Mens Shirt</h1>
            <div className="flex overflow-x-auto space-x-4 py-4 px-2 lg:px-4">
                <MensShirts />
            </div>

            <h1 className="font-medium mb-6 text-center sm:text-left">Womens Shirt</h1>
            <div className="flex overflow-x-auto space-x-4 py-4 px-2 lg:px-4">
                <WomensShirts />
            </div>
        </section>
    );
}

export default ProductList;
