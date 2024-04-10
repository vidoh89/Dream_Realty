"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { FiX, FiMenu } from "react-icons/fi";

function MyNavbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PROPERTIES", link: "properties" },
    { name: "ABOUT", link: "about" },
    { name: "CONTACT", link: "contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen); // Directly toggle state
  };

  return (
    <nav className="navContainer w-full h-25 text-white">
      <div className="flex justify-between  items-center w-full h-full px-4 2xl:px-16 mx-auto">
        <Link href="/">
          <Image
            src="/DreamRealty.png"
            alt="Logo image"
            width={160}
            height={160}
            className="logo cursor-pointer p-0  w-20 relative right-4 sm:w-36 sm:right-8"
          />
        </Link>
        <div className="routesContainer sm:text-sm lg:text-lg">
          <ul className="hidden sm:flex">
            <Link href="home">
              <li className="home ml-10">Home</li>
            </Link>
            <Link href="about">
              <li className="about ml-10">About Us</li>
            </Link>
            <Link href="properties">
              <li className="properties ml-10">Properties</li>
            </Link>
            <Link href="contactUs">
              <li className="contactUs mx-10">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          {menuOpen ? (
            <FiX size={26} className="menuItems cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 sm:hidden" />
          ) : (
            <FiMenu size={26} className="menuItems cursor-pointer sm:hidden" />
          )}
        </div>
      </div>
      <div
        className={`${
          menuOpen
            ? "fixed mt-[50px] left-0 top-0 w-[100%] h-full  bg-[#181F1C] bg-opacity-90 p-10 ease-in duration-500 z-50 text-center"
            : "fixed left-[100%] top-0 p-10 ease-in duration-500 sm:hidden"
        }`}
      >
        <ul className="mobileMenu space-y-15 flex flex-col gap-5 mr-56 relative bottom-0">
            <Link href="home">
              <li className="home">Home</li>
            </Link>
            <Link href="about">
              <li className="about">About Us</li>
            </Link>
            <Link href="properties">
              <li className="properties">Properties</li>
            </Link>
            <Link href="contactUs">
              <li className="contactUs">Contact Us</li>
            </Link>
        </ul>
      
      </div>
    </nav>
  );
}

export default MyNavbar;