import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft, FaRegHeart } from "react-icons/fa6";

const ProductSection = () => {
  const product = [
    // Product
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
      img: "img-5.png",
      sale: "-90%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-6.jpg",
      sale: "40%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img-7.jpg",
      sale: "-60%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
    {
      img: "img.1.png",
      sale: "45%",
      pName: "product",
      content: "Stylish cafe here",
      price: "Rp 2.500.000",
      disc: "Rp 3.500.000",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16">
        {product.map((item, i) => (
          <div
            key={i}
            className="w-64 bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-2xl transition relative group"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={`/assest/${item.img}`} /* Replace with your image path */
                alt="Luxury Sofa"
                width={192}
                height={192}
                className="w-full h-48 object-cover"
              />
              {/* Discount Badge */}
              {item.sale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-3 py-1 shadow-md">
                  {item.sale}
                </div>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href="/shop/product">
                <button
                  className="bg-white text-black font-semibold px-4 py-2 hover:bg-gray-200"
                  aria-label="Add to Cart"
                >
                  Add to Cart
                </button>
              </Link>
              {/* Share, Compare, Like Section */}
              <div className="flex justify-between items-center mt-4 gap-4">
                <button
                  className="flex items-center gap-1 bg-transparent text-white"
                  aria-label="Share"
                >
                  <IoMdShare />
                  <span>Share</span>
                </button>
                <button
                  className="flex items-center gap-1 bg-transparent text-white"
                  aria-label="Compare"
                >
                  <FaArrowRightArrowLeft />
                  <span>Compare</span>
                </button>
                <button
                  className="flex items-center gap-1 bg-transparent text-white"
                  aria-label="Like"
                >
                  <FaRegHeart />
                  <span>Like</span>
                </button>
              </div>
            </div>

            {/* Product Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{item.pName}</h2>
              <p className="text-gray-500 text-sm mb-2">{item.content}</p>
              {/* Price Section */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  {item.price}
                </span>
                {item.disc && (
                  <span className="text-gray-400 line-through text-sm">
                    {item.disc}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-14">
        <Button
          variant="outline"
          className="text-yellow-600 bg-pink-100 h-10 w-40"
        >
          Show More
        </Button>
      </div>
    </>
  );
};

export default ProductSection;
