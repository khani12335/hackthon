"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { FaRegHeart } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b bg-white">
  {/* Logo Section */}
  <div className="flex items-center">
    <Image src="/assest/logo.png" alt="logo" width={40} height={40} />
    <h1 className="text-xl md:text-2xl font-bold ml-2">Furniro</h1>
  </div>

  {/* Desktop Navigation */}
  <div className="hidden md:flex space-x-8">
    <Link href="/" className="hover:text-yellow-600 text-gray-600">
      Home
    </Link>
    <Link href="/shop" className="hover:text-yellow-600 text-gray-600">
      Shop
    </Link>
    <Link href="/blogs" className="hover:text-yellow-600 text-gray-600">
      Blog
    </Link>
    <Link href="/contact" className="hover:text-yellow-600 text-gray-600">
      Contact
    </Link>
  </div>

  {/* Icons Section */}
  <div className="hidden md:flex space-x-6">
  <Link href="/contact" className="text-gray-600 text-xl hover:text-yellow-600">
          <RiContactsLine />
        </Link>
    <span className="text-gray-600 text-xl hover:text-yellow-600">
      <IoSearch />
    </span>
    <Link href={"/shop/product/product.1"}>
    <span className="text-gray-600 text-xl hover:text-yellow-600">
      <FaRegHeart />
    </span>
    </Link>
    <Link href="/shop/product/cart" className="text-gray-600 text-xl hover:text-yellow-600">
          <AiOutlineShoppingCart />
        </Link>
  </div>

  {/* Mobile Menu Toggle */}
  <div className="md:hidden flex items-center">
    <Button
      className="text-gray-600 bg-white hover:bg-white text-2xl focus:outline-none"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <HiOutlineMenu />
    </Button>
  </div>

  {/* Mobile Dropdown Menu */}
  {isMobileMenuOpen && (
    <div className="absolute top-16 left-0 w-full bg-white border-t md:hidden">
      <div className="flex flex-col space-y-4 p-4">
        <Link href="/" className="hover:text-yellow-600 text-gray-600">
          Home
        </Link>
        <Link href="/shop" className="hover:text-yellow-600 text-gray-600">
          Shop
        </Link>
        <Link href="/blogs" className="hover:text-yellow-600 text-gray-600">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-yellow-600 text-gray-600">
          Contact
        </Link>
      </div>
      <div className="flex justify-evenly border-t pt-4 space-x-6">
        <span className="text-gray-600 text-xl hover:text-yellow-600">
          <RiContactsLine />
        </span>
        <span className="text-gray-600 text-xl hover:text-yellow-600">
          <IoSearch />
        </span>
        <span className="text-gray-600 text-xl hover:text-yellow-600">
          <FaRegHeart />
          
        </span>
        
        <Link href="" className="text-gray-600 text-xl hover:text-yellow-600">
          <AiOutlineShoppingCart />
        </Link>
        
      </div>
    </div>
  )}
</div>

  )
}

export default NavBar
