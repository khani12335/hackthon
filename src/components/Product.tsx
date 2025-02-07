"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
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

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsToShow, setItemsToShow] = useState<number>(8); // Controls number of products displayed

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const displayedProducts = products.slice(0, itemsToShow);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16">
        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
            {Array(8).fill(0).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg p-5 shadow-md animate-pulse"
              >
                <div className="w-full h-56 bg-gray-300 mb-4 rounded-lg"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
            {displayedProducts.map((product) => (
              <div
                key={product._id}
                className="bg-gray-50 rounded-lg p-5 shadow-md"
              >
                <Image
                  src={product.image_url || "/placeholder.png"}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover mb-4 rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <span className="text-xl font-semibold text-gray-600">
                    Rp {product.price.toLocaleString()}
                  </span>
                  <Link href={`/shop/product/${product._id}`} passHref>
                    <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all">
                      View Product Detail
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Show More Button */}
      {!loading && displayedProducts.length < products.length && (
        <div className="flex justify-center mt-14">
          <Button
            variant="outline"
            className="text-yellow-600 bg-pink-100 h-10 w-40"
            onClick={() => setItemsToShow((prev) => prev + 8)}
          >
            Show More
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductSection;
