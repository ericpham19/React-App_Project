import React from "react";
import {Logo} from "../icons/Icons"

function Navbar() {
  return (
    <div className= "text-white text-5xl flex items-center my-2">
      <div className ="w-full warpper-container bg-blue-300">
        <div className= "flex items-center font-bold">
         <Logo/>  <span className="text-orange-700">C</span>rypto<span className="text-orange-700">A</span>pp
        </div>

      </div>
    </div>
  );
}

export default Navbar;
