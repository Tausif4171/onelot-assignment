import React from "react";
import { Button } from "./common/Button";
import Image from "next/image";
import logo from "../assets/common/logo.svg";
import dropdown from "../assets/common/dropdown.svg";
import toggle from "../assets/Header/toggle.svg";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-[10px] px-2 md:px-4 mb-[91px]">
      <div className="flex gap-7 items-center">
        {/* Logo */}
        <Image alt="OneLot Logo" src={logo} />

        {/* Navigation */}
        <nav className="hidden md:flex gap-x-8 items-center">
          <a href="/" className="text-[#3600D1] font-medium text-[14px]">
            Home
          </a>
          <div className="flex gap-x-1 items-center">
            <a
              href="/products"
              className="text-[#374151] font-medium text-[14px]"
            >
              Products
            </a>
            <Image alt="Dropdown Icon" src={dropdown} />
          </div>
          <a href="/about" className="text-[#374151] font-medium text-[14px]">
            About
          </a>
          <a href="/contact" className="text-[#374151] font-medium text-[14px]">
            Contact
          </a>
        </nav>
      </div>

      <div className="hidden md:flex">
        <Button variant="transparent" text="Log In" />
        <Button text="Inquire Now" />
      </div>

      {/* Mobile menu toggle */}
      <button aria-label="Toggle Mobile Menu" className="md:hidden">
        <Image alt="Menu Toggle" src={toggle} />
      </button>
    </header>
  );
};
