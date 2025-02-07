"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SlArrowRight } from "react-icons/sl";
import { client } from "@/sanity/lib/client";

// Product Type Definition
export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    tags?: string[];
    image_url: string;
}

// Fetch Products Function
const getProducts = async (): Promise<Product[]> => {
    return await client.fetch(
        `*[_type=="product"]{
      _id,
      title,
      description,
      price,
      tags,
      "image_url": image.asset->url
    }`
    );
};

const ProductComparison = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [, setLoading] = useState<boolean>(true);
    const [itemsToShow, ] = useState<number>(2); // Limit initial displayed products

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    const displayedProducts = products.slice(0, itemsToShow);

    return (
        <>
            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 mb-12 mt-20">
                <Image
                    src="/assets/img-18.jpg"
                    alt="shop"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-200 bg-opacity-40 text-center">
                    <Image src="/assets/logo.png" alt="Logo" width={77} height={77} className="mx-auto" />
                    <h1 className="text-2xl md:text-4xl font-bold">Product Comparison</h1>
                    <p className="flex gap-2 md:gap-4 mt-3 items-center">
                        <span className="text-black font-bold text-lg md:text-2xl">Home</span>
                        <SlArrowRight className="text-sm md:mt-1" />
                        <span className="text-sm md:text-xl">Comparison</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
                {/* Products Section */}
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Header Section */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-xl md:text-2xl font-bold mb-2">
                                Go to Product page for more Products
                            </h1>
                            <Link href="/shop">
                                <span className="text-yellow-600 hover:underline cursor-pointer">View More</span>
                            </Link>
                        </div>

                        {/* Product Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {displayedProducts.map((product) => (
                                <div key={product._id} className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg">
                                    <Image
                                        src={product.image_url || "/placeholder.png"}
                                        alt={product.title}
                                        width={260}
                                        height={160}
                                        className="object-cover bg-pink-100 h-[160px] rounded-md"
                                    />
                                    <div className="text-center mt-4">
                                        <h2 className="text-lg font-bold">{product.title}</h2>
                                        <p className="text-gray-600">Rs. {product.price.toLocaleString()}</p>

                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-500">
                                        <span>4.7</span>
                                        <span className="text-yellow-600 text-lg">★★★★★</span>
                                        <span>|</span>
                                        <span>204 veiw</span>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Product Section */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <h1 className="text-xl md:text-2xl font-bold">Add a Product</h1>
                            <Link href="/shop">
                                <button className="bg-yellow-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400">
                                    Choose a Product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="space-y-6 border-t border-gray-500 pt-6">
                    {[
                        { title: "General", details: ["Sales Package", "Model Number", "Secondary Material", "Configuration", "Upholstery Material", "Upholstery Color"] },
                        { title: "Product", details: ["Filling Material", "Finish Type", "Adjustable Headrest", "Maximum Load Capacity"] },
                        { title: "Dimension", details: ["Width", "Height", "Depth", "Weight"] },
                        { title: "Warranty", details: ["Warranty summary", "Finish Type", "Adjustable Headrest", "Maximum Load Capacity"] },
                    ].map((section, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Section Title */}
                            <div className="space-y-2 border-b md:border-b-0 md:border-r border-gray-400 pb-4 md:pb-0 pr-4">
                                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                                {section.details.map((text, index) => (
                                    <p key={index} className="text-gray-600">{text}</p>
                                ))}
                            </div>

                            {displayedProducts.map((product, index) => (
                                <div key={index} className={`space-y-2 ${index === 0 ? "border-b md:border-b-0 md:border-r border-gray-400 pb-4 md:pb-0 pr-4" : ""}`}>
                                    <h3 className="text-lg font-bold mb-4 invisible">Details</h3>
                                    {section.details.map((_, idx) => (
                                        <p key={idx} className="text-gray-800">Sample Value</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Buttons Section */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <Button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                        Add to Cart
                    </Button>
                    <Button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                        Add to Wishlist
                    </Button>
                </div>
            </div>

        </>
    );
};

export default ProductComparison;
