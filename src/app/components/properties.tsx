import React from 'react'
import { PiFireTruckLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { PiPlantThin } from "react-icons/pi";
export default function hero() {
    return (
        <div className="bg-white py-12">
  <div className="container mx-auto px-4 ">
    <h2 className="text-2xl mb-8 text-center">What makes our brand different</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 easein-out hover:bg-gray-200 hover:scale-110">
      <PiFireTruckLight className='m-2 text-2xl'/>
        <h3 className="text-lg mb-2">Next day as standard</h3>
        <p>Order before 3pm and get your order the next day.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 easein-out hover:bg-gray-200 hover:scale-110">
      <CiCircleCheck className='m-2 text-2xl'/>
        <h3 className="text-lg mb-2">Made by artisans</h3>
        <p>Handmade crafted goods with passion and perfection.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 easein-out hover:bg-gray-200 hover:scale-110">
      <RiBarChartBoxAiLine className='m-2 text-2xl'/>
        <h3 className="text-lg mb-2">Unbeatable prices</h3>
        <p>For your favorite quality products.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 easein-out hover:bg-gray-200 hover:scale-110">
      <PiPlantThin className='m-2 text-2xl'/>
        <h3 className="text-lg mb-2">Recycled packaging</h3>
        <p>We use 100% recycled packaging in our deliveries.</p>
      </div>
    </div>
  </div>
</div>


    )
}  