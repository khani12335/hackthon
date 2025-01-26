import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";
import InfoSection from "@/components/Info";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { SlArrowRight } from "react-icons/sl";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div>
      <NavBar />

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
          <h1 className="text-4xl font-bold">Cart</h1>
          <p className="flex gap-4 mt-5">
            <span className="text-black font-bold text-2xl">Home</span>
            <span className="mt-2">
              <SlArrowRight />
            </span>
            <span className="text-black text-xl mt-1">Cart</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        {/* Cart Layout */}
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          {/* Cart Table */}
          <div className="flex-1 bg-white rounded-lg p-4">
            {/* Table Header */}
            <div className="hidden lg:grid grid-cols-5 bg-pink-100 text-gray-600 font-semibold py-4 px-6">
              <div>Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Subtotal</div>
              <div></div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col lg:flex-row items-center justify-between py-4 border-b">
                {/* Product Image and Name */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/assest/img-29.png"
                    alt="Asgaard Sofa"
                    width={100}
                    height={100}
                    className="rounded-lg bg-pink-100"
                  />
                  <span className="text-gray-700 text-center lg:text-left">
                    Asgaard Sofa
                  </span>
                </div>

                {/* Price */}
                <div className="text-gray-700 text-center mt-2 lg:mt-0 lg:w-1/5">
                  Rs. 250,000.00
                </div>

                {/* Quantity */}
                <div className="mt-2 lg:mt-0">
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="w-16 border rounded-md text-center"
                  />
                </div>

                {/* Subtotal */}
                <div className="text-gray-700 text-center mt-2 lg:mt-0 lg:w-1/5">
                  Rs. 250,000.00
                </div>

                {/* Remove Button */}
                <div className="mt-2 lg:mt-0">
                  <Button className="text-yellow-500 bg-white hover:bg-gray-100">
                    <AiFillDelete />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-pink-100 rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-6">Cart Totals</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-700">
                Rs. 250,000.00
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span>Total</span>
              <span className="font-bold text-yellow-600">Rs. 250,000.00</span>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Link href={"/shop/product/cart/checkout"}>
                <Button className="w-36 h-14 bg-pink-100 text-black font-semibold py-2 border border-black rounded-md hover:bg-pink-200">
                  Check Out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
      <Footer />
    </div>
  );
};

export default Cart;
