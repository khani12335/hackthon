"use client";
import { Button } from "@/components/ui/button";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { FaCheckCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


interface Product {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}

const CheckOut = () => {

    const [sanityData, setSanityData] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    // Fetch data from Sanity
    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type=="product"]{
        _id,
        title,
        price,
        "imageUrl": image.asset->url
      }`;

            const data: Product[] = await client.fetch(query);
            setSanityData(data);
        };

        fetchData();
    }, []);

    // Load cart items from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]") as string[]; // Assuming _id is string
        const items = savedCart.map((id) => sanityData.find((p) => p._id === id)).filter(Boolean) as Product[];
        setCartItems(items);
    }, [sanityData]);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const [isLoading, setIsLoading] = useState(false);
    const [orderStatus, setOrderStatus] = useState("");
    const [showSuccess, setShowSuccess] = useState(false); // To control success animation
    const [selectedOption, setSelectedOption] = useState("");

    const clearCart = () => {
        setIsLoading(true);
        setOrderStatus("");
        setShowSuccess(false); // Hide success animation initially

        // Simulate order placement with a delay (e.g., API request)
        setTimeout(() => {
            setIsLoading(false);
            setCartItems([]); // Clear cart
            localStorage.removeItem("cart");
            setOrderStatus("Your order is being processed...");
            setShowSuccess(true); // Show success animation

            // Additional actions: Redirect or show more details
        }, 2000);
    };
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="relative w-full h-80 mt-20">
                <Image
                    src="/assets/img-18.jpg"
                    alt="shop"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-200 bg-opacity-50">
                    <Image
                        src="/assets/logo.png" // Replace with the actual path to your image
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

                <div className="w-full xl:w-[533px] h-full lg:h-[616px] flex flex-col justify-start items-start gap-6 lg:mt-[60px] mt-0">
                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[500] text-[24px] leading-[36px] text-black">Product</h1>
                        <h1 className="font-[500] text-[24px] leading-[36px] text-black">Subtotal</h1>

                    </div>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={`cart-item-${item._id}-${index}`}> {/* Ensure unique key by combining _id and index */}
                                <div className="w-full lg:w-[533px] flex justify-between items-center">
                                    {/* Product Image */}
                                    <div className="flex justify-center items-center gap-2">
                                        <div className="flex justify-center items-center bg-[#F9F1E7] size-[80px] rounded-[10px]">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                width={90}
                                                height={50}
                                                className="rounded-lg object-scale-down w-full h-full"
                                            />
                                        </div>
                                        <h1 className="font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">{item.title}</h1>
                                    </div>

                                    {/* Product Price */}
                                    <h1 className="font-[400] text-[16px] leading-[24px] text-black">
                                        Rs. {item.price}
                                    </h1>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items in the cart</p>
                    )}



                    <div className="w-full lg:w-[533px] flex justify-between items-center">
                        <h1 className="font-[400] text-[16px] leading-[24px] text-[black]">Total</h1>
                        <h1 className="font-[700] text-[24px] leading-[38px] text-[#B88E2F]">Rs. {totalPrice}</h1>
                    </div>

                    <hr className='w-full lg:w-[533px]' />

                    <div className="flex flex-col justify-start items-start gap-[20px]">
                        <h1 className="font-[400] text-[16px] leading-6 text-black flex justify-center items-center gap-4"><span><GoDotFill className='scale-[2]' /></span>Direct Bank Transfer</h1>
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

                        <div className="flex justify-center items-center w-full lg:w-[533px] mb-5 lg:mb-0 mt-[19px]">
                            <button
                                onClick={clearCart}
                                className="w-full lg:w-[318px] h-[64px] rounded-[15px] border-[1px] border-black font-[400] text-[20px] leading-[30px] hover:text-white hover:bg-black duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex justify-center items-center">
                                        <div className="animate-spin border-t-4 border-b-4 border-gray-400 rounded-full w-6 h-6 mr-2"></div>
                                        Placing your order...
                                    </div>
                                ) : (
                                    "Place order"
                                )}
                            </button>

                            {/* Full-screen loader */}
                            {isLoading && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                    <div className="text-white text-2xl font-bold animate-pulse">
                                        <div className='flex items-center justify-center'>
                                            <div className="animate-spin border-t-4 border-b-4 border-white rounded-full w-12 h-12"></div>
                                        </div>
                                        <p className="mt-4">Placing your order...</p>
                                    </div>
                                </div>
                            )}

                            {/* Success animation and message */}
                            {showSuccess && !isLoading && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                    <div className="text-white text-2xl font-bold text-center">
                                        <div className='flex items-center justify-center'>
                                            <FaCheckCircle className="text-6xl mb-4" />
                                        </div>
                                        <p className="mt-4">Your order has been successfully placed!</p>
                                        <Button
                                            onClick={() => setShowSuccess(false)}
                                            className="mt-6 px-4 py-2 bg-white text-gray-900 rounded-lg"
                                        >
                                            Okay
                                        </Button>
                                    </div>

                                </div>
                            )}

                            {/* Order Status */}
                            {orderStatus && !isLoading && (
                                <p className="mt-4 text-center text-green-600">{orderStatus}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
