"use client"
import { useState, useEffect, useMemo, useCallback } from "react"
import type { productsTypes } from "@/app/types/product"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
import Image from "next/image"

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState<productsTypes[]>([])
    const [click, setClick] = useState(false)

    const checkTheClick = () => {
        setClick(true)
        setSearchQuery("")
    }

    useEffect(() => {
        const getProductData = async () => {
            try {
                const data = `*[_type == "product"]{
                    description,
                    inventory,
                    colors[0],
                    price,
                    _id,
                    "imageUrl": image.asset->url,
                    status,
                    productName,
                    category,
                    "slug": slug.current
                }`
                const fetchedProducts = await client.fetch(data)
                setProducts(fetchedProducts)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        getProductData()
    }, [])

    const filteredProducts = useMemo(() => {
        const query = searchQuery.toLowerCase()
        return products.filter((product) => product.productName.toLowerCase().startsWith(query))
    }, [searchQuery, products])

    const handleSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }, [])

    return (
        <div className="relative w-full max-w-md">
            <div className="relative flex items-center w-full text-base xs:pl-2 md:pl-6 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent justify-center">
            <i className='bx bx-search text-xl text-gray-600'></i>
                <input
                    type="search"
                    placeholder="Search Products..."
                    value={searchQuery}
                    onChange={handleSearchInput}
                    className="bg-transparent outline-none text-base"
                    aria-label="Search products"
                />
            </div>
            {searchQuery.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                        <ul className="py-1">
                            {filteredProducts.map((product) => (
                                <li key={product._id} className="px-4 py-2 hover:bg-gray-100">
                                    <Link onClick={checkTheClick} href={`/product/${product.slug}`} className="flex items-center gap-3">
                                        <div>
                                            <Image src={product.imageUrl} alt={product.imageUrl} height={30} width={30} />
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-900">{product.productName}</h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="px-4 py-2 text-sm text-gray-500">No products found</p>
                    )}
                </div>
            )}
            <div className="hidden">
                {click}
            </div>
        </div>
    )
}

