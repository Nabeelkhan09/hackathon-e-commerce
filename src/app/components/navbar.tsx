import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
export default function navbar() {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
      <div className="bg-white text-black py-2 text-sm flex justify-between items-center px-12 w-full">

      <IoIosSearch className="mr-0"/>
      
        <div className=" w-full h-[30px] text-xs">
        
          <p className="w-[65px] h-[30px] text-xl flex justify-center items-center m-auto">Avion</p>
          <hr className="w-full border-t border-gray-300"/>
          
        </div>

        <div className="flex items-center gap-[2px]">
          <div className="text-white text-sm font-normal leading-[21px]">
            English
          </div>
          <RiArrowDropDownLine className="text-white text-3xl" />
        </div>
      </div>

      <div className="flex justify-center items-center px-8 py-4">
        

        <nav className="hidden md:flex space-x-8 ">
          <a href="#" className="text-slate-600 flex justify-end items-end hover:text-black underline">
            Plant Pots
          </a>
          <a href="#" className="text-slate-600 hover:text-black ">
            Ceramics
          </a>
          <a href="#" className="text-slate-600 hover:text-black ">
            Tables
          </a>
          <a href="#" className="text-slate-600 hover:text-black ">
            Chairs
          </a>
          <a href="#" className="text-slate-600 hover:text-black gap-10">
            Crockery
            </a>
            <a href="#" className="text-slate-600 hover:text-black ">
            Tableware
          </a>
          <a href="#" className="text-slate-600 hover:text-black ">
            Cutlery
          </a>
          
        
        </nav>

       </div>
    </header>
  );
}
