import React from "react";
import { Button } from "./common/Button";
import logo from "../assets/images/logo.svg";
import dropdown from "../assets/icons/dropdown.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className=" flex justify-between items-center">
      <div className=" flex gap-7 items-center">
        <Image alt="logo" src={logo} />
        <div className=" flex gap-x-8 items-center">
          <h3 className=" text-[#3600D1] font-medium text-[14px]">Home</h3>
          <div className=" flex gap-x-1 items-center">
            <h3 className=" text-[#374151] font-medium text-[14px]">
              Products
            </h3>
            <Image alt="logo" src={dropdown} />
          </div>
          <h3 className=" text-[#374151] font-medium text-[14px]">About</h3>
          <h3 className=" text-[#374151] font-medium text-[14px]">Contact</h3>
        </div>
      </div>
      <div className="flex">
        <Button variant="transparent" text="Login" />
        <Button text="Get Started" />
      </div>
    </div>
  );
};
