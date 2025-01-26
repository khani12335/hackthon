import React from 'react'
import { GrTrophy } from "react-icons/gr";
import { FiAlertOctagon } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
const InfoSection = () => {
  return (
     
    <div className="mt-10 bg-pink-100 py-10 px-4">
        {/* fOOTER INFO SECTION */}
      <div className="flex flex-wrap justify-around items-center gap-6 md:gap-8 lg:gap-10">
        {/* High Quality */}
        <div className="flex flex-col items-center text-center w-60">
          <GrTrophy className="h-14 w-14 text-gray-700 mb-3" />
          <span className="font-sans font-bold text-black text-lg">High Quality</span>
          <span className="text-gray-400 text-sm">Crafted from top materials</span>
        </div>
    
        {/* Warranty Protection */}
        <div className="flex flex-col items-center text-center w-60">
          <FiAlertOctagon className="h-14 w-14 text-gray-700 mb-3" />
          <span className="font-sans font-bold text-black text-lg">Warranty Protection</span>
          <span className="text-gray-400 text-sm">Over 2 years warranty</span>
        </div>
    
        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center w-60">
          <LiaShippingFastSolid className="h-14 w-14 text-gray-700 mb-3" />
          <span className="font-sans font-bold text-black text-lg">Free Shipping</span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>
    
        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center w-60">
          <MdOutlineSupportAgent className="h-14 w-14 text-gray-700 mb-3" />
          <span className="font-sans font-bold text-black text-lg">24/7 Support</span>
          <span className="text-gray-400 text-sm">Dedicated support team</span>
        </div>
      </div>
    </div>
    
  )
}

export default InfoSection

