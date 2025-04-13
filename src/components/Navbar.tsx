"use client";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuElements = () => {
    return (
      <>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#projects">Contact</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 py-4 backdrop-blur-md shadow-md z-50 text-white">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 mr-1 rounded-full object-cover"
          />
          <span className="text-base font-semibold text-white">
            Subhankar Rajbanshi
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <ul className="hidden md:flex items-center space-x-4">
          <MenuElements />
        </ul>
      </nav>
      <div
        className={`fixed top-16 right-0 w-64 h-full bg-black opacity-90 text-white transition-transform transform z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="m-10 space-y-4 text-lg font-semibold">
          <MenuElements />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
