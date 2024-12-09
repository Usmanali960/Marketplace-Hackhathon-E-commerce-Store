import React from 'react';
import { Products } from '@/data/ProductData';
import ProductCard from './ProductCard';
import ImageComponent from './ImageComponent';
import GearUpProducts from './GearUpProducts';

function ProductList() {
    return (
        <section>
            <h1 className="font-medium mb-6 text-center sm:text-left">Best of Air Max</h1>
            
            {/* Home Products List */}
            <div className="overflow-x-auto scroll-smooth">
                <div className="flex gap-5">
                    {Products.HomeProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <ImageComponent />

            <h1 className="font-medium mb-6 text-center sm:text-left">Best of Gear Up</h1>

            {/* Gear Up Products List */}
            <div className="overflow-x-auto scrollbar-hidden">
                <div className="flex py-5 gap-5">
                    {Products.GearUpProoducts.map((product) => (
                        <div key={product.id} className="w-[250px] sm:w-[300px] lg:w-[350px] flex-shrink-0">
                            <GearUpProducts product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductList;
