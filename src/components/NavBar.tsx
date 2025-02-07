"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
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
        <Link href={"/comperison"}>
          <span className="text-gray-600 text-xl hover:text-yellow-600">
            <FaRegHeart />
          </span>
        </Link>
        <Link href="/cart" className="text-gray-600 text-xl hover:text-yellow-600">
          <AiOutlineShoppingCart />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between gap-3">
        <Link href={"/cart"}>
          <AiOutlineShoppingCart />
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          aria-label="Toggle menu"
          className="text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden flex flex-col space-y-4 p-4 items-center transition-transform transform duration-300 ease-in-out translate-x-0">
          <Link href={"/"} className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href={"/shop"} className="hover:text-gray-500 transition">
            Shop
          </Link>
          <Link href={"/blog"} className="hover:text-gray-500 transition">
            Blog
          </Link>
          <Link href={"/contact"} className="hover:text-gray-500 transition">
            Contact
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;