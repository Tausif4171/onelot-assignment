import React from "react";
import { Button } from "./common/Button";
import hero from "../assets/Home/hero.jpg";
import trusted from "../assets/Home/trusted.svg";
import Image from "next/image";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-14">
      <div className=" px-5 lg:px-0 flex flex-col items-center">
        <div className="max-w-[1210px] mb-[18px] md:mb-7">
          <Heading
            text="Grow your dealership with working capital loans and digital tools from OneLot"
            size="lg"
          />
        </div>

        <div className="mb-[26px] max-w-[702px]">
          <Description
            text=" We enable dealers to buy more cars through our inventory loan
          solutions and sell cars more efficiently through our Dealership
          Management System with its inventory management, marketing solutions
          and market insights"
            size="lg"
          />
        </div>
      </div>

      <div className=" mb-5">
        <Button text="Inquire now" />
      </div>

      <Image className=" mb-8" alt="hero" src={hero} />

      <div>
        <h5 className=" font-normal text-base text-[#6B7280]">Regulated by</h5>
        <Image alt="hero" src={trusted} />
      </div>
    </div>
  );
};
