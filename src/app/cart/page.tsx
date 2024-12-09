import CartItem from '@/components/CartItem';

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full">
                <div className="p-6">
                    <h1 className="text-lg font-semibold">Bag</h1>
                    <CartItem
                        image="/Rectangle (7).png"
                        title="Nike Dri-FIT ADV TechKnit Ultra"
                        description="Men's Short-Sleeve Running Top"
                        price="₹ 3,895.00"
                        size="L"
                        quantity={1}
                    />
                    <CartItem
                        image="/Rectangle (22).png"
                        title="Nike Air Max 97 SE"
                        description="Men's Shoes"
                        price="₹ 16,995.00"
                        size="8"
                        quantity={1}
                    />
                </div>

                <div className="border-t p-6">
                    <h2 className="text-lg font-semibold">Summary</h2>
                    <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>₹ 20,890.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Estimated Delivery & Handling</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>₹ 20,890.00</span>
                    </div>
                    <button className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold">
                        Member Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
