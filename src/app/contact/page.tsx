import Footer from "@/components/Footer";
import InfoSection from "@/components/Info";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { SlArrowRight } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-pink-200 bg-opacity-40">
          <Image
            src="/assest/logo.png" // Replace with the actual path to your image
            alt="Logo"
            width={77}
            height={77}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold ">Contact</h1>
          <p className="flex gap-4 mt-3 ">
            <span className="text-2xl font-bold">Home</span>
            <SlArrowRight className="mt-2" />
            <span className="text-xl mt-1">Contact</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center py-16">
        {/* Introduction */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 mt-2">
            For More Information About Our Products & Services, Please Feel Free
            to Drop Us An Email.
            <br /> Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-wrap bg-white p-16 w-full max-w-6xl">
          {/* Left Section */}
          <div className="flex-1 space-y-12 border-r border-gray-200 pr-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p>23 5th St Avenue, New York NY10004, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="text-2xl">
                <IoCallSharp />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>
                  Mobile: (+84) 546-6778 <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <div className="text-2xl">
                <GoClockFill />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p>
                  Monday-Friday: 9:00 – 22:00 <br />
                  Saturday-Sunday: 9:00 – 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 pl-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Alex"
                  className="mt-1 block py-6 w-full rounded-md border-gray-300  border"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="mt-1 block py-6 w-full  border rounded-md shadow-sm "
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="mt-1 block py-6 w-full rounded-md  border"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Hi! I'd like to ask about..."
                  className="mt-1 block py-6 w-full rounded-md  border"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-48 bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-600"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Contact;
