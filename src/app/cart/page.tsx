"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { RiDeleteBinLine } from 'react-icons/ri';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { SlArrowRight } from 'react-icons/sl';

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function CartPage() {
  const [sanityData, setSanityData] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  useEffect(() => {
    const savedCart: string[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const items = savedCart.map((id) => {
      const product = sanityData.find((p) => p._id === id);
      return product ? { product, quantity: 1 } : null; // Initialize quantity to 1
    }).filter(Boolean) as CartItem[];

    setCartItems(items);
  }, [sanityData]);

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter(item => item.product._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart.map(item => item.product._id)));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
  

  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <div>
        <div className="relative w-full h-80 mt-20">
          <Image
            src="/assets/img-18.jpg"
            alt="shop"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-200 bg-opacity-40">
            <Image
              src="/assets/logo.png" // Replace with the actual path to your image
              alt="Logo"
              width={77}
              height={77}
              className="mx-auto"
            />
            <h1 className="text-4xl font-bold">Cart</h1>
            <p className="flex gap-4 mt-3">
              <span className="text-black font-bold text-2xl">Home</span>
              <SlArrowRight className="mt-2" />
              <span className="text-xl">Cart</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Cart Layout */}
        <div className="flex flex-col lg:flex-row gap-8 py-10">
          {/* Cart Table */}
          <div className="flex-1 bg-white rounded-lg p-4">
            {/* Table Header */}
            <div className="hidden lg:flex justify-end bg-pink-100 text-gray-600 font-semibold py-4 px-2 space-x-24">
              <div className='mx-auto'>Product</div>
              <div className="text-center ">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Subtotal</div>
              <div className="mx-10">Action</div>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={`${item.product._id}-${index}`} className="w-full lg:w-[817px] h-auto flex flex-col md:flex-row justify-between items-center pr-[30px] gap-4 lg:gap-0 py-4">
                  {/* Product Info */}
                  <div className="flex justify-start items-center gap-3 w-full md:w-[30%]">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      width={90}
                      height={50}
                      className="rounded-lg bg-pink-100 mt-5"
                    />
                    <span className="text-gray-700 text-left">{item.product.title}</span>
                  </div>

                  {/* Price */}
                  <div className="text-center w-full md:w-[20%]">
                    <h1 className="font-[500] text-[16px] leading-6 text-[#9F9F9F]">Rs. {item.product.price}</h1>
                  </div>

                  {/* Quantity */}
                  <div className="text-center w-full md:w-[20%]">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.product._id, parseInt(e.target.value) || 1)}
                      className="w-[60px] h-[30px] text-center border border-gray-300 px-3 py-6 rounded"
                    />
                  </div>

                  {/* Subtotal */}
                  <div className="text-center w-full md:w-[20%]">
                    <h1 className="font-[500] text-[16px] leading-6 text-[#9F9F9F]">Rs. {totalPrice}</h1>
                  </div>

                  {/* Action */}
                  <div className="text-center w-full md:w-[10%]">
                    <button onClick={() => removeFromCart(item.product._id)}>
                      <RiDeleteBinLine className="text-[#B88E2F] scale-150 hover:text-red-700 duration-300 ease-in-out hover:scale-[2]" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center w-full h-64 bg-[#F9F1E7] rounded-lg border-2 border-dashed border-[#B88E2F] mt-20 mb-24 shadow-lg">
                <RiDeleteBinLine className="text-[#B88E2F] scale-150 mb-4" />
                <h1 className="font-semibold text-3xl text-[#B88E2F]">Your Cart is Empty</h1>
                <p className="text-center text-[#9F9F9F] mt-3">It appears you haven&#39;t added anything to your cart yet. Explore our collection and find what you love!</p>
                <Link href="/shop" className="mt-6 px-8 py-3 border-2 border-[#B88E2F] text-[#B88E2F] rounded-full font-medium text-lg hover:bg-[#B88E2F] hover:text-white transition-all duration-300 ease-in-out">
                  Start Shopping
                </Link>
              </div>

            )}
          </div>

          <div className="w-full lg:w-[393px] h-[450px] bg-[#F9F1E7] rounded-lg px-[20px] lg:px-[75px] py-3 flex flex-col justify-start items-center">
            <h1 className="font-[600] text-[32px] leading-[48px] text-black text-center">Cart Totals</h1>
            <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[56px] w-full">
              <h1 className="font-[500] text-[16px] text-black">Subtotal</h1>
              <h1 className="font-[500] text-[16px] text-[#9F9F9F]">Rs. {totalPrice}</h1>
            </div>
            <div className="flex justify-between items-center gap-[20px] lg:gap-[50px] mt-[26px] w-full">
              <h1 className="font-[500] text-[16px] text-black">Total</h1>
              <h1 className="font-[500] text-[20px] text-[#B88E2F]">Rs. {totalPrice}</h1>
            </div>
            <Link href="/checkout">
              <button className="w-[222px] h-[58.95px] border border-black rounded-[15px] mt-[50px] hover:bg-black hover:text-white ease-in-out duration-300">
                Check Out
              </button>
            </Link>
            <button onClick={clearCart} className="w-[222px] h-[58.95px] border border-red-500 rounded-[15px] mt-[10px] text-red-500 hover:bg-red-500 hover:text-white ease-in-out duration-300">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}