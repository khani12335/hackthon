import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className="bg-white border-t py-10 px-4 sm:px-8 lg:px-20">
  <div className="flex flex-col lg:flex-row justify-between gap-8">
    {/* Company Info */}
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Funiro.</h2>
      <p className="text-gray-500 text-sm leading-6 mb-6">
        400 University Drive Suite 200 Coral Gables, <br />
        FL 33134 USA
      </p>
    </div>

    {/* Links */}
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800 mb-4">Links</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-gray-600 hover:text-gray-900">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="text-gray-600 hover:text-gray-900">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* Help */}
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800 mb-4">Help</h3>
      <ul className="space-y-2">
        <li>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Payment Options
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Returns
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Privacy Policies
          </Link>
        </li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
      <form className="flex items-center">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full py-2 px-3 text-sm text-gray-600 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
        <Button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-r-md"
        >
          SUBSCRIBE
        </Button>
      </form>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-gray-500 text-sm mt-10">
    2023 Funiro. All rights reserved
  </div>
</div>

  )
}

export default Footer
