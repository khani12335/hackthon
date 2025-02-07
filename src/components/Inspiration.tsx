import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const InspirationSection = () => {
  return (
    <div className="bg-pink-50 py-16 px-6 md:px-12 lg:px-20 mt-10">
    {/* Container */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center text-center lg:text-left mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our designer already made a lot of beautiful prototypes of rooms
          that inspire you.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 w-32 rounded-md font-semibold transition">
            Explore More
          </Button>
        </div>
      </div>
  
      {/* Right Image Slider */}
      <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center">
        {/* Image 1 */}
        <div className="relative flex-shrink-0 w-full lg:max-w-sm h-80">
          <Image
            src="/assets/img-8.png"
            alt="Room 1"
            width={400}
            height={500}
            className="w-full h-full object-cover rounded-md"
          />
          {/* Image Content */}
          <div className="absolute bottom-4 left-4 bg-white px-4 py-3 shadow-lg rounded-md">
            <span className="text-gray-400 text-xs">01 — Bed Room</span>
            <p className="text-gray-800 font-bold text-sm">Inner Peace</p>
  
            <div className="absolute bottom-0 right-0 bg-yellow-500 p-2 rounded-bl-md rounded-tr-md">
              <span className="text-white text-lg">→</span>
            </div>
          </div>
        </div>
  
        {/* Image 2 */}
        <div className="relative flex-shrink-0 w-52 lg:max-w-xs h-72 lg:mt-6 overflow-hidden">
          <Image
            src="/assets/img-9.png" // Ensure the path is correct
            alt="Room 2"
            width={372}
            height={486}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  
    {/* Pagination */}
    <div className="flex justify-center space-x-2 mt-10">
      <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
      <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
      <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
    </div>
  </div>
  

  )
}

export default InspirationSection
