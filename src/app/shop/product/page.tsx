"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";

const Product = () => {
  const [count, setCount] = useState(1);
  const assetBasePath = "/assest";

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => count > 1 && setCount((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />
      {/* Breadcrumb */}
      <div className="py-8 px-6 lg:px-10 bg-pink-100 text-gray-500 text-xl flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          <span>Home</span>
          <SlArrowRight className="mx-4 text-black" />
          <span>Shop</span>
          <span className="text-black mx-4">|</span>
          <span className="text-black">Asgaard Sofa</span>
        </div>
        <LuSlidersHorizontal/>
      </div>

      {/* Product Section */}
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col lg:flex-row gap-8">
        {/* Product Images Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Category Thumbnails */}
          <div className="flex flex-wrap lg:flex-col gap-4">
            {[30, 31, 29, 33, 12, 11].map((item) => (
              <Image
                key={item}
                src={`/assest/img-${item}.png`}
                alt={`Sofa ${item}`}
                width={100}
                height={100}
                className="rounded-lg object-cover cursor-pointer bg-pink-100 hover:opacity-75"
                onClick={(event) => {
                  const target = event.target as HTMLImageElement;
                  console.log(target.src); // Access the image src safely
                }}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex-1">
            <Image
              src={`${assetBasePath}/img-29.png`}
              alt="Asgaard Sofa"
              width={481}
              height={500}
              className="rounded-lg w-full h-auto object-cover bg-pink-50"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
          <p className="text-yellow-600 text-2xl font-semibold">$28,000.00</p>
          <div className="flex items-center space-x-4 text-gray-500">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span>|</span>
            <span>5 Custom Reviews</span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Selector */}
          <div>
            <h2 className="text-xl text-gray-500">Size</h2>
            <div className="mt-4 flex space-x-4 ">
              {["L", "XL", "XS"].map((size) => (
                <Button
                  key={size}
                  className={`py-2 px-4 rounded-md ${
                    size === "L"
                      ? "bg-yellow-600 text-black"
                      : "bg-pink-100 text-black hover:bg-pink-400"
                  }`}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Color</h2>
            <div className="mt-4 flex space-x-4">
              {["yellow", "gray", "purple"].map((color) => (
                <Button
                  key={color}
                  className={`w-8 h-8 rounded-full border ${
                    color === "yellow"
                      ? "bg-yellow-500"
                      : color === "gray"
                      ? "bg-gray-500"
                      : "bg-purple-500"
                  }`}
                  aria-label={`Select color ${color}`}
                ></Button>
              ))}
            </div>
          </div>

          {/* Counter and Action Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Counter Section */}
            <div className="inline-flex items-center border  rounded-md">
              <Button
                onClick={decrement}
                className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50"
                disabled={count <= 1}
                aria-label="Decrease quantity"
              >
                -
              </Button>
              <span className="px-6 py-2 text-lg  bg-white">{count}</span>
              <Button
                onClick={increment}
                className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                +
              </Button>
            </div>

            {/* Add to Cart Button */}
            <Link href={"/shop/product/cart"} className="w-full md:w-auto">
              <Button className="w-full md:w-auto text-white px-6 py-2 rounded-md shadow hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400">
                Add to Cart
              </Button>
            </Link>

            {/* Compare Button */}
            <Link href={"/shop/product/product.1"} className="w-full md:w-auto">
              <Button className="w-full md:w-auto text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400">
                + Compare
              </Button>
            </Link>
          </div>

          {/* SKU, Category, Tags, and Share */}
          <ul className="space-y-4 pt-4 border-t">
            <li className="flex items-center">
              <span className="text-gray-600 w-28">SKU:</span>
              <span className="font-semibold">SS001</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 w-28">Category:</span>
              <span className="font-semibold">Sofas</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 w-28">Tags:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-600 w-28">Share:</span>
              <div className="flex space-x-4">
                {[FaFacebookSquare, FaLinkedin, FaTwitterSquare].map(
                  (Icon, index) => (
                    <Link
                      key={index} // Use index or a unique identifier
                      href="#"
                      className="text-lg text-blue-700 hover:text-blue-900"
                    >
                      <Icon />
                    </Link>
                  )
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

      //

      
      {/* Description */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Description
          <span className="text-gray-400 font-medium ml-4">
            Additional Information
          </span>
          <span className="text-gray-400 font-medium ml-4">Review [5]</span>
        </h2>
        <p className="text-gray-500 leading-relaxed mb-12">
          Embodying the raw, wayward spirit of rock roll, the Kilburn portable
          active stereo speaker takes the unmistakable look and sound of
          Marshall, unplugs the chords, and takes the show on the road...
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {[34, 35].map((item) => (
            <Image
              key={item}
              src={`${assetBasePath}/img-${item}.png`}
              alt="Additional Information Image"
              width={605}
              height={348}
              className="rounded-lg shadow-md bg-pink-100"
            />
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[13, 4, 15, 16].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="relative w-full h-72">
                {" "}
                {/* Wrapper to enforce consistent height */}
                <Image
                  src={`${assetBasePath}/img-${item}.png`}
                  alt="Luxury Sofa"
                  layout="fill" // Use fill to make the image fill the wrapper
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-gray-700 font-medium mt-2">Product </h3>
              <p className="text-yellow-600 font-bold mt-1">
                $9,000.00{" "}
                <span className="text-gray-400 line-through text-sm">
                  $9,000.00{" "}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Product;
