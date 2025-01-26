
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { CiSliderHorizontal } from "react-icons/ci";
import React from "react";
import ProductCard from "@/components/ProductCard";
import InfoSection from "@/components/Info";
import Footer from "@/components/Footer";


const Shop = () => {
  const product = [
    // Product data (you can update these with real data)
    {
      img: "img.1.png",
      sale: "-30%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 4.500.000",
    },
    {
      img: "img-2.png",
      sale: "-50%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 5.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-3.jpg",
      sale: "-76%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 3.000.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-4.png",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    // More products as needed
  ];

  return (
    <div className="h-screen w-full bg-slate-30">
      
      {/* Background Image */}
      <div className="relative w-full h-80">
        <Image
          src="/assest/img-18.jpg"
          alt="shop"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black bg-pink-50 bg-opacity-50">
          <Image
            src="/assest/logo.png" // Replace with the actual path to your image
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
        <div className="flex items-center gap-8">
          <span>
            <CiSliderHorizontal className="h-6 w-6" />
          </span>
          <span className="font-semibold text-gray-700">Filter:</span>
          <span>
            <HiViewGrid className="h-6 w-6" />
          </span>
          <span>
            <TbLayoutDistributeHorizontal className="h-6 w-6" />
          </span>
          <span className="text-black">|</span>
          <span>Showing 1-16 of result 32</span>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="font-semibold text-gray-700">Show</span>
          <div className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm focus:outline-none">
            <p>16</p>
          </div>
          <span className="font-semibold text-gray-700">Sort by</span>
          <div className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm focus:outline-none">
            <p>Default</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-10 px-4 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      </div>

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
      {/* Info */}
      <InfoSection/>
      {/* Footer */}
      <Footer/>
     
    </div>
  );
};

export default Shop;
