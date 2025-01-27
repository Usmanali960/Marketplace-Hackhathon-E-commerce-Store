"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { removeFromWishlist } from "@/app/redux/wishlistSlice";
import { Bounce, toast } from "react-toastify";
import Image from "next/image";

const WishlistPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleRemove = (id: string) => {
    toast.error('product deleted from Wish List !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="container xs:w-[100vw] p-4">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-700">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 w-[90vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg  rounded-lg flex flex-col"
            >
              <div className="flex items-center justify-center w-full">
              <Image
                className="object-cover w-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                src={item.imageUrl}
                alt={item.name}
                width={160}
                height={40}
                />
                </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">Rs. {item.price}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
