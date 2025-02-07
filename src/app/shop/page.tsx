"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { CiSliderHorizontal } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Product Type Definition
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags?: string[];
  image_url: string;
}

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

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<"default" | "low-high" | "high-low">("default");
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  const filterProducts = (category: string) => {
    setFilteredProducts(
      category === "all" ? products : products.filter((p) => p.tags?.includes(category))
    );
    setCurrentPage(1);
  };

  const sortProducts = (sortType: "default" | "low-high" | "high-low") => {
    const sorted = [...filteredProducts];
    if (sortType === "low-high") sorted.sort((a, b) => a.price - b.price);
    else if (sortType === "high-low") sorted.sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
    setSortBy(sortType);
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <> 
      {/* Background Image */}
      <div className="relative w-full h-80 mt-20">
        <Image
          src="/assets/img-18.jpg"
          alt="shop"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black bg-pink-50 bg-opacity-50">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={77}
            height={77}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="flex gap-4 mt-5">
            <span className="text-black font-bold text-2xl">Home</span>
            <span className="mt-2">
              <SlArrowRight />
            </span>
            <span className="text-black text-xl mt-1">Shop</span>
          </p>
        </div>
      </div>

      {/* Filter and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-pink-100 shadow-md rounded-md py-4 px-6 mb-8">
        <div className="flex items-center gap-4">
          <CiSliderHorizontal className="h-6 w-6" />
          <span className="font-semibold text-gray-700">Filter:</span>
          {["all", "electronics", "fashion", "home"].map((category) => (
            <button key={category} className="px-3 py-1 bg-gray-200 rounded-md" onClick={() => filterProducts(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="font-semibold text-gray-700">Show</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm"
          >
            {[8, 16, 32].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <span className="font-semibold text-gray-700">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => sortProducts(e.target.value as "default" | "low-high" | "high-low")}
            className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm"
          >
            <option value="default">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
          {Array(8).fill(0).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-5 shadow-md animate-pulse">
              <div className="w-full h-56 bg-gray-300 mb-4 rounded-lg"></div>
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5">
          {displayedProducts.map((product) => (
            <div key={product._id} className="bg-gray-50 rounded-lg p-5 shadow-md">
              <Image src={product.image_url || "/placeholder.png"} alt={product.title} width={400} height={400} className="w-full h-56 object-cover mb-4 rounded-lg" />
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
                <span className="text-xl font-semibold text-gray-600">Rp {product.price.toLocaleString()}</span>
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-8">
        <Button className="h-10 w-10 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">
          1
        </Button>
        <Button className="h-10 w-10 rounded-md bg-pink-200 text-gray-600 mx-2 hover:bg-pink-400">
          2
        </Button>
        <Button className="h-10 w-10 rounded-md bg-pink-200 text-gray-600 mx-2 hover:bg-pink-400">
          3
        </Button>
        <Button className="h-10 w-10 rounded-md bg-pink-200 text-gray-600 hover:bg-pink-400">
          Next
        </Button>
      </div>
    </>
  );
};

export default Shop;
