"use client";

import React from "react";
import logo from "../assets/common/logo.svg";
import dropdown from "../assets/common/dropdown.svg";
import facebook from "../assets/StayConnected/facebook.svg";
import instagram from "../assets/StayConnected/instagram.svg";
import americaFlag from "../assets/Footer/americaFlag.png";

import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="mx-4 md:mx-10 mb-20">
      <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between pb-6 border-b border-[#E5E7EB] mb-6">
        <Image src={logo} alt="OneLot Logo" />
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:items-center mb-8 md:mb-5">
            <li className="font-normal text-base text-[#6B7280]">Home</li>
            <li className="font-normal text-base text-[#6B7280]">Features</li>
            <li className="font-normal text-base text-[#6B7280]">About</li>
            <li className="font-normal text-base text-[#6B7280]">Contact</li>
          </ul>
          <div className="flex gap-x-3 items-center md:float-end">
            <h5 className="font-semibold text-sm">ENG</h5>
            <div className="flex gap-x-1">
              <Image
                src={americaFlag}
                alt="American flag"
                className="w-5 h-5"
              />
              <Image src={dropdown} alt="Dropdown menu" />
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end">
        <div>
          <h5 className="font-light text-[#6B7280] text-base mb-4">
            © 2024 OneLot Technologies Incorporated Pte. Ltd. All Rights
            Reserved.
          </h5>
          <h5 className="font-light text-[#6B7280] text-base">
            © 2024 OneLot Financing Corporation. All Rights Reserved.
          </h5>
        </div>
        <div className="flex gap-x-4 items-center">
          <Image src={instagram} alt="Instagram" />
          <Image src={facebook} alt="Facebook" />
        </div>
      </div>
    </footer>
  );
};
