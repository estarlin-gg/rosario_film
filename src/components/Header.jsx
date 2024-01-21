import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
  const [view, setView] = useState(false);

  const viewMenu = view ? "translate-x-0" : "translate-x-full";
  const colorMenuIcon = view ? "#000" : "#fff";
  return (
    <header className="w-full flex items-center justify-between py-6 px-3 relative  shadow-white   ">
      <div className="logo  h-full">
        <img
          src="../image/logo.png"
          alt=""
          className="h-full"
          width="110px"
        />
      </div>
      <nav
        className={`nav-links transition-all ease-in-out flex flex-col items-center py-20 gap-6 fixed z-40 bg-white inset-0 md:relative md:translate-x-0 md:flex-row md:p-0  md:bg-inherit  ${viewMenu}`}
      >
        <a href="" className="text-black md:text-white text-2xl font-medium">
          items
        </a>
        <a href="" className="text-black md:text-white text-2xl font-medium">
          items
        </a>
        <a href="" className="text-black md:text-white text-2xl font-medium">
          items
        </a>
        <a href="" className="text-black md:text-white text-2xl font-medium">
          items
        </a>
      </nav>
      <div className="burguer z-50 block md:hidden ">
        <IoMdMenu
          color={colorMenuIcon}
          size={55}
          onClick={() => setView(!view)}
        />
      </div>
    </header>
  );
};
