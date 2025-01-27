import { productsTypes } from '@/app/types/product';
import AddToCartButton from '@/components/CartButton';
import WishListButton from '@/components/WishListButton';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';

interface Props {
    params: Promise<{
        slug: string; // No need to use Promise here
    }>;
}

const getDynamicData = async (slug: string): Promise<productsTypes> => {
    return client.fetch(groq`*[_type == "product" && slug.current == $slug][0]{
                    description,
                    inventory,
                    colors[0],
                    price,
                    _id,
                    "imageUrl":image.asset->url,
                    status,
                    productName,
                    category,
                    "slug":slug.current
                }`, { slug })
}

async function Page({ params }: Props) {
    // Destructure slug directly from params
    const { slug } = await params;

    // Fetch product data using dynamic slug
    const product = await getDynamicData(slug)

    // Handle product not found case
    if (!product) {
        return <div className="container mx-auto text-center py-16">Product not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Section: Product Image */}
                <div className="w-full lg:w-1/2">
                    <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={product.imageUrl || "/placeholder.svg"}
                            alt={product.productName}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.productName}</h1>
                    <p className="text-2xl md:text-3xl font-semibold text-green-600">Rs. {product.price.toLocaleString()}</p>

                    <div className="prose max-w-none">
                        <p className="text-gray-700 text-lg">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                        <div>
                            <span className="font-semibold text-gray-700">Category:</span>
                            <p className="text-gray-600">{product.category}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Status:</span>
                            <p className="text-gray-600">{product.status}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700">Inventory:</span>
                            <p className="text-gray-600">{product.inventory} in stock</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-700 mb-2">Available Colors:</p>
                        <div className="flex flex-wrap gap-3">
                            <div
                                className={`w-8 h-8 bg-${product.colors} rounded-full border-2 border-gray-300 cursor-pointer transition-transform hover:scale-110`}></div>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center gap-4 pt-4'>
                        <AddToCartButton product={product} />
                        <div className='border border-gray-300 rounded-full p-2 text-2xl hover:bg-gray-100 transition-colors'>
                            <WishListButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
