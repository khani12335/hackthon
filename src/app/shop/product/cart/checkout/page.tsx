"use client";
import Footer from "@/components/Footer";
import InfoSection from "@/components/Info";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import React, { useState } from "react";

const CheckOut = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <NavBar />
      <div className="relative w-full h-80">
        <Image
          src="/assest/img-18.jpg"
          alt="shop"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-200 bg-opacity-50">
          <Image
            src="/assest/logo.png" // Replace with the actual path to your image
            alt="Logo"
            width={77}
            height={77}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold ">Checkout</h1>
          <p className="flex gap-4 mt-3">
            <span className="text-2xl font-bold">Home</span>
            <SlArrowRight className="mt-2" />
            <span className="text-xl mt-1">Checkout</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-10 flex flex-col lg:flex-row gap-8">
        {/* Billing Details */}
        <div className="flex-1 bg-white p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-6">Billing details</h2>
          <form className="flex flex-col gap-4">
            {/* First Name and Last Name */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border rounded-md p-2 mt-4"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border rounded-md p-2 mt-4"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-bold">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="border rounded-md p-2 mt-4"
                placeholder="Company Name"
              />
            </div>

            {/* Country / Region */}
            <div className="flex flex-col">
              <label htmlFor="country" className="text-sm font-bold">
                Country / Region
              </label>
              <select id="country" className="border rounded-md p-2 mt-4">
                <option>Sri Lanka</option>
                <option>India</option>
                <option>United States</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-bold">
                Street address
              </label>
              <input
                type="text"
                id="address"
                className="border rounded-md p-2 mt-4"
                placeholder="Street address"
              />
            </div>

            {/* Town / City */}
            <div className="flex flex-col">
              <label htmlFor="city" className="text-sm font-bold">
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="border rounded-md p-2 mt-4"
                placeholder="Town / City"
              />
            </div>

            {/* Province */}
            <div className="flex flex-col">
              <label htmlFor="province" className="text-sm font-bold">
                Province
              </label>
              <select id="province" className="border rounded-md p-2 mt-4">
                <option>Western Province</option>
                <option>Central Province</option>
                <option>Southern Province</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div className="flex flex-col">
              <label htmlFor="zip" className="text-sm font-bold">
                ZIP code
              </label>
              <input
                type="text"
                id="zip"
                className="border rounded-md p-2 mt-4"
                placeholder="ZIP code"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-bold">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="border rounded-md p-2 mt-4"
                placeholder="Phone"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-bold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md p-2 mt-4"
                placeholder="Email address"
              />
            </div>

            {/* Additional Information */}
            <div className="flex flex-col">
              <label htmlFor="additional" className="text-sm font-bold">
                Additional Information
              </label>
              <textarea
                id="additional"
                rows={4}
                className="border rounded-md p-2 mt-4"
                placeholder="Additional information"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col bg-white p-6 rounded-md flex-1 max-w-md">
          <h2 className="text-2xl font-bold mb-6">Product</h2>
          <div className="flex flex-col gap-4">
            {/* Subtotal */}
            <div className="flex justify-between">
              <span>Asgaard Sofa × 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            {/* Total */}
            <div className="flex justify-between font-bold text-lg border-b pb-4">
              <span>Total</span>
              <span className="text-yellow-600">Rs. 250,000.00</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Cash on Delivery Option */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                className="accent-black"
                onChange={() => setSelectedOption("cod")}
                checked={selectedOption === "cod"}
              />
              Direct Bank Transfer
            </label>
            {selectedOption === "cod" && (
              <p className="text-sm text-gray-600">
                You have chosen Direct Bank Transfer. Please transfer the amount
                to the provided bank details.
              </p>
            )}

            {/* Another Payment Option Example */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                className="accent-black"
                onChange={() => setSelectedOption("bankTransfer")}
                checked={selectedOption === "bankTransfer"}
              />
              Cash on Delivery
            </label>
            {selectedOption === "bankTransfer" && (
              <p className="text-sm text-gray-600">
                You have chosen Cash on Delivery. Please have the exact amount
                ready.
              </p>
            )}
            <p className="text-sm">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-yellow-500">
                privacy policy
              </a>
              .
            </p>
          </div>

          {/* Place Order Button */}
          <div className="mt-6">
            <Button className="w-full text-white py-3 rounded-md hover:bg-yellow-600">
              Place order
            </Button>
          </div>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default CheckOut;
