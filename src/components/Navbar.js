import React from "react";
import {Logo} from "../icons/Icons"

const Navbar =() => {
  return (
    <div className= "text-white text-5xl flex items-center my-2 ">
      <div className ="w-full max-w-20xl mx-auto  bg-blue-300 h-14 ">
        <div className= "flex items-center font-bold gap-1 justify-left ">
         <Logo/>  

         <span className="text-orange-700 ">C</span>rypto<span className="text-orange-700">A</span>pp
        </div> 

      </div>
    </div>
  );
}

export default Navbar;
