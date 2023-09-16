"use client";

import { useState } from "react";
import { logoFran } from "../public/assets";
import navLinks from "../constants/navLinks";
import Image from "next/image";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav className="flex items-center px-4 justify-between">
        <div>
          <Image
            src={logoFran}
            alt="Logo"
            className="h-52 max-sm:w-36 max-sm:h-36 w-52"
            height={"200"}
            width={"150"}
          />
        </div>
        <ul
          className={`flex justify-center items-center gap-16 max-lg:hidden  text-white underline decoration-secondary font-poppins font-bold `}
        >
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-primary transition-all duration-300 ease-in-out"
            >
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>

        <div className="relative">
          <label className="btn btn-circle swap swap-rotate lg:hidden mb-1">
            <input type="checkbox" className="hidden" onClick={handleClick} />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <div className={`absolute right-0 ${open ? "block" : "hidden"}`}>
            <ul
              className={`flex flex-col justify-center items-center gap-6 p-4  max-w-fit  border border-primary bg-black rounded-md text-white underline decoration-secondary font-poppins font-bold `}
            >
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:text-primary transition-all duration-300 ease-in-out"
                >
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
