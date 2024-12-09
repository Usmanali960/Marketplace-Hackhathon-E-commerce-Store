type productType = {
    id: string
    productImage: string,
    productName: string,
    productPrice: string,
    category: string
}

type productsType = {
    id: number
    image: string
    just: string
    name: string
    category: string
    color: string
    price: string
}


type mainType = {
    HomeProducts: productType[],
    GearUpProoducts: productType[],
    MainProducts: productsType[]
}

export const Products: mainType = {
    HomeProducts: [
        {
            id: "1",
            productImage: "/image (3).png",
            productName: "Nike Air Max Pulse",
            productPrice: "₹ 13 995",
            category: "Women's Shoes"
        },
        {
            id: "2",
            productImage: "/image (4).png",
            productName: "Nike Air Max Pulse",
            productPrice: "₹ 13 995",
            category: "Men's Shoes"
        },
        {
            id: "3",
            productImage: "/image (5).png",
            productName: "Nike Air Max 97 SE",
            productPrice: "₹ 16 995",
            category: "Men's Shoes"
        }
    ],

    GearUpProoducts: [
        {
            id: "1",
            productImage: "/image (6).png",
            productName: "Nike Dri-FIT ADV TechKnit Ultra",
            productPrice: "₹ 3 895",
            category: "Men's Short-Sleeve Running Top"
        },
        {
            id: "2",
            productImage: "/image (7).png",
            productName: "Nike Dri-FIT Challenger",
            productPrice: "₹ 2 495",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts"
        },
        {
            id: "3",
            productImage: "/image (8).png",
            productName: "Nike Dri-FIT ADV Run Division",
            productPrice: "₹ 5 295",
            category: "Women's Long-Sleeve Running Top"
        },
        {
            id: "4",
            productImage: "/image (9).png",
            productName: "Nike Fast",
            productPrice: "₹ 3 795",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets"
        }
    ],

    MainProducts: [
        {
            id: 1,
            image: "/Rectangle.png",
            just: "Just In",
            name: "Nike Air Force 1 Mid '07",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 10 795.00"
        },
        {
            id: 2,
            image: "/Rectangle (1).png",
            just: "Just In",
            name: "Nike Court Vision Low Next Nature",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 4 995.00"
        },
        {
            id: 3,
            image: "/Rectangle (2).png",
            just: "Just In",
            name: "Nike Air Force 1 PLT.AF.ORM",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 695.00"
        },
        {
            id: 4,
            image: "/Rectangle (3).png",
            just: "Just In",
            name: "Nike Air Force 1 React",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 13 295.00"
        },
        {
            id: 5,
            image: "/Rectangle (4).png",
            just: "Promo Exclusion",
            name: "Air Jordan 1 Elevate Low",
            category: "Women's shoes",
            color: "1 Colour",
            price: "MRP : ₹ 2 895.00"
        },
        {
            id: 6,
            image: "/Rectangle (5).png",
            just: "Just In",
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            color: "1 Colour",
            price: "MRP : ₹ 2 895.00"
        },
        {
            id: 7,
            image: "/Rectangle (6).png",
            just: "Promo Exclusion",
            name: "Nike Dunk Low Retro SE",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 9 695.00"
        },
        {
            id: 8,
            image: "/Rectangle (7).png",
            just: "Sustainable Materials",
            name: "Nike Dri-FIT UV Hyverse",
            category: "Men's Short-Sleeve Graphic Fitness Top",
            color: "1 Colour",
            price: "MRP : ₹ 2 495.00"
        },
        {
            id: 9,
            image: "/Rectangle (8).png",
            just: "Just In",
            name: "Nike Court Vision Low",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 5 695.00"
        },
      {
            id: 10,
            image: "/Rectangle (9).png",
            just: "Just In",
            name: "Nike Dri-FIT Ready",
            category: "Men's Short-Sleeve Fitness Top",
            color: "3 Colour",
            price: "MRP : ₹ 2 495.00"
        },
        {
            id: 11,
            image: "/Rectangle (10).png",
            just: "Just In",
            name: "Nike One Leak Protection: Period",
            category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
            color: "2 Colour",
            price: "MRP : ₹ 3 395.00"
        },
       {
            id: 12,
            image: "/Rectangle (11).png",
            just: "Just In",
            name: "Nike Air Force 1 LV8 3",
            category: "Older Kids' Shoe",
            color: "1 Colour",
            price: "MRP : ₹ 7 495.00"
        },
       {
            id: 13,
            image: "/Rectangle (12).png",
            just: "Just In",
            name: "Nike Blazer Low Platform",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 195.00"
        },
        {
            id: 14,
            image: "/Rectangle (13).png",
            just: "Just In",
            name: "Nike Air Force 1 '07",
            category: "Women's Shoes",
            color: "2 Colour",
            price: "MRP : ₹ 8 195.00"
        },
         {
            id: 15,
            image: "/Rectangle (14).png",
            just: "Just In",
            name: "Nike Pro Dri-FIT",
            category: "Men's Tight-Fit Sleeveless Top",
            color: "1 Colour",
            price: "MRP : ₹ 1 495.00"
        },
        {
            id: 16,
            image: "/Rectangle (15).png",
            just: "Just In",
            name: "Nike Dunk Low Retro",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 695.00"
        },
        {
            id: 17,
            image: "/Rectangle (16).png",
            just: "Just In",
            name: "Nike Air Max SC",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 5 995.00"
        },
        {
            id: 18,
            image: "/Rectangle (17).png",
            just: "Just In",
            name: "Nike Dri-FIT UV Miler",
            category: "Men's Short-Sleeve Running Top",
            color: "1 Colour",
            price: "MRP : ₹ 1 695.00"
        },
        {
            id: 19,
            image: "/Rectangle (18).png",
            just: "Just In",
            name: "Nike Air Max SYSTM",
            category: "Older Kids' Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 6 495.00"
        },
        {
            id: 20,
            image: "/Rectangle (19).png",
            just: "Just In",
            name: "Nike Alate All U",
            category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
            color: "1 Colour",
            price: "MRP : ₹ 2 195.00"
        },

         {
            id: 21,
            image: "/Rectangle (20).png",
            just: "Just In",
            name: "Nike Court Legacy Lift",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 7 495.00"
        },
        {
            id: 22,
            image: "/Rectangle (21).png",
            just: "Just In",
            name: "Nike Swoosh",
            category: "Women's Medium-support Padded Sports Bra Tank",
            color: "1 Colour",
            price: "MRP : ₹ 3 095.00"
        },
        {
            id: 23,
            image: "/Rectangle (22).png",
            just: "Just In",
            name: "Nike SB Zoom Janoski OG+",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 595.00"
        },
         {
            id: 24,
            image: "/Rectangle (23).png",
            just: "Just In",
            name: "Nike Dri-FIT Run Division Rise 365",
            category: "Men's Running Tank",
            color: "1 Colour",
            price: "MRP : ₹ 3 495.00"
        },
      {
            id: 25,
            image: "/Rectangle (24).png",
            just: "Just In",
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            color: "1 Colour",
            price: "MRP : ₹ 2 495.00"
        },
         {
            id: 26,
            image: "/Rectangle (25).png",
            just: "Just In",
            name: "Nike Blazer Low '77 Jumbo",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 595.00"
        },
        {
            id: 27,
            image: "/Rectangle (26).png",
            just: "Just In",
            name: "Nike SB Force 58",
            category: "Skate Shoe",
            color: "1 Colour",
            price: "MRP : ₹ 5 995.00"
        },
      {
            id: 28,
            image: "/Rectangle (27).png",
            just: "Just In",
            name: "Nike Sportswear Trend",
            category: "Older Kids' (Girls') High-waisted Woven Shorts",
            color: "1 Colour",
            price: "MRP : ₹ 2 495.00"
        },
        {
            id: 29,
            image: "/Rectangle (28).png",
            just: "Just In",
            name: "Nike Blazer Low '77 Jumbo",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 595.00"
        },
        {
            id: 30,
            image: "/Rectangle (29).png",
            just: "Just In",
            name: "Nike SB Force 58",
            category: "Skate Shoe",
            color: "1 Colour",
            price: "MRP : ₹ 5 995.00"
        }
    ]
}