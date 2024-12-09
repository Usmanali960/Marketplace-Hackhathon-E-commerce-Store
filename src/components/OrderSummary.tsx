import Image from "next/image";

const OrderSummary = () => {
    return (
        <div className="w-full md:w-1/3  p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
                <span>Delivery/Shipping</span>
                <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Total</span>
                <span>₹ 20,890.00</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">
                (The total reflects the price of your order, including all taxes.)
            </div>
            <div className="flex items-center mb-4">
                <Image
                    src="/Rectangle (7).png"
                    alt="Nike Shirt"
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                    width={16}
                    height={16}
                />
                <div className="text-sm">
                    <p>Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                    <p>Qty 1 | ₹ 3,895.00</p>
                </div>
            </div>
            <div className="flex items-center">
                <Image
                    src="/Rectangle (2).png"
                    alt="Nike Shoes"
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                    width={64}
                    height={64}
                />
                <div className="text-sm">
                    <p>Nike Air Max 97 SE Mens Shoes</p>
                    <p>Qty 1 | ₹ 16,995.00</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
