import React from "react";

export default function features() {
  return (
    <div className=" bg-[#ffffff] text-white py-12">
         
      <div className=" container mx-auto px-4">
     
        <p className="mb-6  font-normal mt-4 text-2xl text-[#2A254B]">
          From a studio in London to a global brand with over 400 outlets.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        
          <div className="  font-normal text-base">
          
            <p className="bottom-24 gap-40 mb-10 text-[#505977] leading-[21px]">
              When we started Avion, the single-make high-quality, affordable
              and stylish furniture and homeware for the mass market.
            </p>
            <p className="bottom-4 gap-20 pb-20 text-[#505977]">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <button className="text-black mt-40 w-[150px] h-[56px] bg-gray-300 transition duration-300 easein-out hover:bg-gray-500 hover:scale-110">Get in touch</button>
          </div>
          <img src="../features.png" alt="Feature Image" />
         </div>
      </div>
    </div>
  );
}
