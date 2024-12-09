import React from "react";
import { Products } from "@/data/ProductData";
import OtherProductCard from "./OtherProductCard";

const OtherProductList = () => {
    // Handle case where MainProducts might be undefined or empty
    const mainProducts = Products.MainProducts || [];

    return (
        <section className="w-full sm:w-3/4 p-4">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mainProducts.length > 0 ? (
                    mainProducts.map((product) => (
                        <OtherProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available.</p> // Fallback message in case no products are found
                )}
            </div>
        </section>
    );
};

export default OtherProductList;
