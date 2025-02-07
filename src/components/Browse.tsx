import Image from 'next/image'
import React from 'react'

const BrowseSection = () => {
  return (
    <div className="text-center py-12">
  {/* Title Section */}
  <h2 className="text-3xl font-bold mb-4">Browse The Range</h2>
  <p className="text-gray-500 mb-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  {/* Cards Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
    {/* Dining Card */}
    <div className="flex flex-col items-center">
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src={"/assets/img-26.png"}
          alt="dining"
          width={381}
          height={480}
          className="object-cover w-full h-auto"
        />
      </div>
      <span className="mt-4 text-xl font-semibold">Dining</span>
    </div>

    {/* Living Card */}
    <div className="flex flex-col items-center">
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src={"/assets/img-27.png"}
          alt="living"
          width={381}
          height={480}
          className="object-cover w-full h-auto"
        />
      </div>
      <span className="mt-4 text-xl font-semibold">Living</span>
    </div>

    {/* Bedroom Card */}
    <div className="flex flex-col items-center">
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src={"/assets/img-28.png"}
          alt="bedroom"
          width={381}
          height={480}
          className="object-cover w-full h-auto"
        />
      </div>
      <span className="mt-4 text-xl font-semibold">Bedroom</span>
    </div>
  </div>
</div>

  )
}

export default BrowseSection
