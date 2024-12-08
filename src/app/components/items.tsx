import React from "react";

export default function items() {
  return (
    <div className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl  mb-8">Our Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="w-[550px] h-[462px]">
          <img src="../Large.png" alt="Product 1" className="w-[630px] h-[375px] mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
          <h3 className="text-lg  mb-2">The Elegant Sofa</h3>
          <p className="text-gray-600">£1200</p>
        </div>
        <div className="w-[280px] h-[462px] ml-36">
          <img src="../itemchair.png" alt="Product 2" className="w-[305px] h-[375px] mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
          <h3 className="text-lg  mb-2">Modern Chair</h3>
          <p className="text-gray-600">£250</p>
        </div>
        <div className="w-[280px] h-[462px] ml-[18px]">
          <img src="../itemchair2.png" alt="Product 3" className="w-[305px] h-[375px] mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
          <h3 className="text-lg mb-2">The Classic Table</h3>
          <p className="text-gray-600">£850</p>
        </div>
        <div className="ml-[550px]">
      <button className="w-[170px] h-[56px] transition duration-300 easein-out hover:bg-gray-200 hover:scale-110">View Collection</button>
      </div>

      </div>
    </div>
  </div>
  
  
  


  )
}