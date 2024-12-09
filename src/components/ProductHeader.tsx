import React from 'react';
import LeftMenu from './LeftMenu';
import OtherProductList from './OtherProducList';

function ProductHeader() {
    return (
        <section>
            <div className="flex items-center justify-between px-5">
                <div>New (500)</div>
                <div className="flex items-center gap-3">
                    <div className="filter flex items-center gap-2">
                        <p>Hide filters</p>
                        <i className="bx bx-filter" aria-label="Filter Icon"></i>
                    </div>
                    <div className="sort flex items-center gap-2">
                        <p>Sort By</p>
                        <i className="bx bx-chevron-down" aria-label="Sort Icon"></i>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col">
                <LeftMenu />
                <OtherProductList />
            </div>

            <div className="lg:ml-64 ml-5 mt-5 lg:mt-10 border-t border-gray-100">
                <h2 className="font-medium mt-5">Related Categories</h2>
                <div className="flex flex-wrap items-center justify-center">
                    <ul className="flex flex-wrap gap-3 mt-2 mb-2 text-[12px]">
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">Best Selling Products</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">Best Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">New Basketball Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">New Mens Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">New Running Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">Best Mens Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">New Jordan Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">Best Womens Shoes</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">Best Training & Gym</li>
                        <li className="bg-transparent border border-gray-100 rounded-full px-2 py-2">Best Selling Products</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ProductHeader;
