import React from "react";

export default function hero() {
  return (
    <div className="flex justify-center items-center px-10">
      <div className="max-w-[1440px] flex gap-6 justify-center">
        
        </div>

        <div className=" flex items-center bg-[#2A254B] p-6 px-10">
          <div className="text-white flex flex-col justify-center space-y-5 sm:w[180px] md:w-[300px] lg:w-[900px] lg:h-[450px]">
            
            <h3 className="sm:text-2xl md:text-4xl lg:text-5xl  leading-snug gap-10"> The furniture brand for the </h3>
            <h3 className="sm:text-2xl md:text-4xl lg:text-5xl leading-snug pb-8"> future, with timeless designs
</h3>
            <button
            
            className=" bg-[#675ea5] hover:bg-[#3d318a] text-white font-bold py-2 px-4 my-2  flex items-center w-[152px] "
            >
                View Collection
                
            </button>
            <div className="relative h-64">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white w-[602px] h-[81px]"
              >A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</div>
            </div>
          </div>
          {/* Image */}
          <div className="ml-auto">
            <img src="../Image.png" className="transition duration-300 easein-out hover:bg-gray-200 hover:scale-110" alt="phone" />
          </div>
        </div>
      </div>
    
  );
}
