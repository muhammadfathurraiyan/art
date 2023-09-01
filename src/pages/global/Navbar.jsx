import React, { useState } from "react";
import { GiSharkBite } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="px-24 py-5 flex items-center justify-between border-b border-zinc-500 max-sm:px-8">
        <div className="flex items-baseline">
          <h1 className="text-xl font-medium">Shark</h1>
          <GiSharkBite />
        </div>
        <div
          className={`${
            toggle
              ? "absolute flex-col gap-2 px-4 w-48 py-14 bg-zinc-950 rounded-lg right-5 top-4"
              : "gap-8 max-sm:w-0 max-sm:hidden"
          } flex`}
        >
          <a href="">Home</a>
          <a href="">Portofolio</a>
          <a href="">Contact</a>
        </div>
        <div onClick={handleToggle} className="hidden relative max-sm:block">
          {toggle ? <FaTimes /> : <FaBarsStaggered />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
