import React from "react";
import MensShirts from "@/app/mensShirt/page";
import MensShoes from "@/app/mens/page";
import WomensShoes from "@/app/womens/page";
import WomensShirts from "@/app/womensShirt/page";

const OtherProductCard = () => {
    return (
        <div className="flex flex-wrap gap-y-5 max-h-max w-[100vw] lg:w-[80vw]">
            <div className="overflow-x-auto">
                <MensShoes />
            </div>
            <WomensShoes />
            <WomensShirts />
            <MensShirts />
        </div>
    );
};

export default OtherProductCard;
