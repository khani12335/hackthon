import Footer from "@/components/Footer";
import InfoSection from "@/components/Info";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { SlArrowRight } from "react-icons/sl";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { FaCalendar, FaTag } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogPost = [
    {
      img: "img-19.jpg",
      admin: " Admin",
      date: "14 Oct 2022",
      categori: "Wood",
      h2: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mauris ultrices lacus ut lectus",
      more: "Read more",
    },
    {
      img: "img-24.jpg",
      admin: " Admin",
      date: "14 Oct 2022",
      categori: "Wood",
      h2: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mauris ultrices lacus ut lectus",
      more: "Read more",
    },
    {
      img: "img-21.jpg",
      admin: " Admin",
      date: "14 Oct 2022",
      categori: "Wood",
      h2: "Going all-in with millennial design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mauris ultrices lacus ut lectus",
      more: "Read more",
    },
  ];
  const recentPost = [
    {
      img: "img-22.jpg",
      content: "Going all-in with",
      date: "12 Aug 2024",
    },
    {
      img: "img-23.jpg",
      content: "Going all-in with",
      date: "12 Aug 2024",
    },
    {
      img: "img-24.jpg",
      content: "Going all-in with",
      date: "12 Aug 2024",
    },
    {
      img: "img-25.jpg",
      content: "Going all-in with",
      date: "12 Aug 2024",
    },
    {
      img: "img-21.jpg",
      content: "Going all-in with",
      date: "12 Aug 2024",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <NavBar />

      {/* Header Section */}
      <div className="relative w-full h-80">
        <Image
          src="/assest/img-18.jpg"
          alt="shop"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-200 bg-opacity-40">
          <Image
            src="/assest/logo.png" // Replace with the actual path to your image
            alt="Logo"
            width={77}
            height={77}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="flex gap-4 mt-3">
            <span className="text-black font-bold text-2xl">Home</span>
            <SlArrowRight className="mt-2" />
            <span className="text-xl">Blog</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-20 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="md:col-span-2 space-y-8">
          {/* Blog Post 1 */}
          {blogPost.map((item, i) => (
            <div key={i} className="shadow-md rounded-lg overflow-hidden">
              <Image
                src={`/assest/${item.img}`}
                alt="Blog Post"
                width={820}
                height={500}
                className="object-cover" // Ensure image scales properly
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-xl space-x-7 mb-3">
                  <span className="flex gap-3 items-center">
                    <PiUserCircleDashedFill />
                    {item.admin}
                  </span>
                  <span className="flex gap-3 items-center">
                    <FaCalendar /> {item.date}
                  </span>
                  <span className="flex gap-3 items-center">
                    <FaTag /> {item.categori}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.h2}
                </h2>
                <p className="text-gray-600 mb-4">{item.content} </p>
                <Link
                  href="#"
                  className="underline underline-offset-8 font-bold"
                >
                  {item.more}
                </Link>
              </div>
            </div>
          ))}
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
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-lg p-6">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full px-4 py-2 text-xl border rounded-lg focus:outline-none focus:ring-black"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-7 space-x-4">
              Categories
            </h3>
            {/* Category List */}
            <ul className="space-y-10">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex justify-between"
                >
                  <span>Craft</span>
                  <span>(2)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex justify-between"
                >
                  <span>Design</span>
                  <span>(8)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex justify-between"
                >
                  <span>Handmade</span>
                  <span>(1)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex justify-between"
                >
                  <span>Interior</span>
                  <span>(6)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 flex justify-between"
                >
                  <span>Wood</span>
                  <span>(5)</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Recent Posts
            </h3>
            <ul className="space-y-9">
              {/* Ensures vertical spacing between items */}
              {recentPost.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  {/* Individual list item */}
                  <Link
                    href="#"
                    className="flex items-center gap-4 hover:text-gray-800"
                  >
                    <Image
                      src={`/assest/${item.img}`}
                      alt="Recent Post"
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                    <div>
                      <span className="font-medium">{item.content}</span>
                      <p className="text-gray-500">{item.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Blog;
