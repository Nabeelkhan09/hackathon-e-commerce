import React from "react";

export default function product() {
  return (
    <div className="py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl mb-8">New Ceramics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <img src="../Photo1.png" alt="The Dandy Chair" className="w-full h-auto mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
        <h3 className="text-lg mb-2">The Dandy Chair</h3>
        <p className="text-gray-600">£250</p>
      </div>
      <div>
        <img src="../Photo2.png" alt="Rustic Vases" className="w-full h-auto mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
        <h3 className="text-lg mb-2">Rustic Vases</h3>
        <p className="text-gray-600">£185</p>
      </div>
      <div>
        <img src="../Photo3.png" alt="Silky Vase" className="w-full h-auto mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
        <h3 className="text-lg mb-2">Silky Vase</h3>
        <p className="text-gray-600">£195</p>
      </div>
      <div>
        <img src="../Photo4.png" alt="Lucy Lamp" className="w-full h-auto mb-4 transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" />
        <h3 className="text-lg mb-2">Lucy Lamp</h3>
        <p className="text-gray-600">£295</p>
      </div>
      <div className="ml-[550px]">
      <button className="w-[170px] h-[56px] transition duration-300 easein-out hover:bg-gray-200 hover:scale-110">View Collection</button>
      </div>

    </div>
  </div>
</div>

  )
}