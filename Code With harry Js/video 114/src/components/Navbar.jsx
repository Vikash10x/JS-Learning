import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between text-white py-3.5  bg-purple-300">
        <div className="logo">
          <span className=" font-bold text-xl mx-10">Tasks</span>
        </div>
        <ul className="flex gap-4 mx-10">
          <li className="cursor-pointer hover:font-bold transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all">
            Tasks
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
