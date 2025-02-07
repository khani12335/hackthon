import Image from 'next/image'
import React from 'react'

const Setup = () => {
  return (
    <div className="py-16 px-4 md:px-16 lg:px-20">
  <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    Share your setup with <span className="text-gray-900">#FuniroFurniture</span>
  </h2>

  {/* Image Grid */}
  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
    {/* Image 1 */}
    <div className=" md:w-48 lg:w-56 flex-shrink-0">
      <Image
        src="/assets/img-17.png" /* Replace with your image paths */
        alt="Furniture 1"
        width={275}
        height={382}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 2 */}
    <div className="md:w-56 lg:w-64 flex-shrink-0">
      <Image
        src="/assets/img-11.png"
        alt="Furniture 2"
        width={274}
        height={382}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 3 */}
    <div className="md:w-64 lg:w-72 flex-shrink-0">
      <Image
        src="/assets/img-12.png"
        alt="Furniture 3"
        width={295}
        height={392}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 4 */}
    <div className=" md:w-56 lg:w-64 flex-shrink-0">
      <Image
        src="/assets/img-13.png"
        alt="Furniture 4"
        width={295}
        height={392}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 5 */}
    <div className="md:w-48 lg:w-56 flex-shrink-0">
      <Image
        src="/assets/img-14.png"
        alt="Furniture 5"
        width={295}
        height={392}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 6 */}
    <div className="md:w-56 lg:w-64 flex-shrink-0">
      <Image
        src="/assets/img-15.png"
        alt="Furniture 6"
        width={295}
        height={392}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 7 */}
    <div className="md:w-64 lg:w-72 flex-shrink-0">
      <Image
        src="/assets/img-16.png"
        alt="Furniture 7"
        width={295}
        height={392}
        className="object-cover rounded-md"
      />
    </div>

    {/* Image 8 */}
    <div className="md:w-56 lg:w-64 flex-shrink-0">
      <Image
        src="/assets/img-17.png"
        alt="Furniture 8"
        width={295}
        height={392}
        className="object-cover rounded-md"
      />
    </div>
  </div>
</div>


  )
}

export default Setup
