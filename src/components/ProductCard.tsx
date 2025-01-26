import React from "react";
import Image from "next/image";
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft, FaRegHeart } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductCard = ({
  item,
}: {
  item: {
    img: string;
    sale?: string;
    pName: string;
    content: string;
    price: string;
    disc?: string;
  };
}) => {
  return (
    <div className="relative group w-full bg-white rounded-lg shadow-md overflow-hidden">
  {/* Product Image */}
  <div className="relative">
    <Image
      src={`/assest/${item.img}`}
      alt={`${item.pName} image`}
      width={1024}
      height={1024}
      className="object-cover w-full h-64"
    />
    {/* Sale Badge */}
    {item.sale && (
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow">
        {item.sale}
      </div>
    )}
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Link href="/shop/product">
      <Button
        className="bg-white text-black font-semibold px-4 py-2 hover:bg-gray-200"
        aria-label="Add to Cart"
      >
        Add to Cart
      </Button>
    </Link>
    {/* Share, Compare, Like Section */}
    <div className="flex justify-between items-center mt-4 gap-4">
      <Button
        className="flex items-center gap-1 bg-transparent text-white"
        aria-label="Share"
      >
        <IoMdShare />
        <span>Share</span>
      </Button>
      <Button
        className="flex items-center gap-1 bg-transparent text-white"
        aria-label="Compare"
      >
        <FaArrowRightArrowLeft />
        <span>Compare</span>
      </Button>
      <Button
        className="flex items-center gap-1 bg-transparent text-white"
        aria-label="Like"
      >
        <FaRegHeart />
        <span>Like</span>
      </Button>
    </div>
  </div>

  {/* Product Details */}
  <div className="px-4 py-2 text-center">
    <h3 className="font-bold text-lg text-gray-800">{item.pName}</h3>
    <p className="text-gray-500 text-sm">{item.content}</p>
    {/* Price Section */}
    <div className="flex items-center justify-center space-x-2">
      <span className="text-lg font-bold text-gray-900">{item.price}</span>
      {item.disc && (
        <span className="text-gray-400 line-through text-sm">
          {item.disc}
        </span>
      )}
    </div>
  </div>
</div>

  );
};

export default ProductCard;
