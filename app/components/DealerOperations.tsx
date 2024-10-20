import Image from "next/image";
import React from "react";
import dealerOperations from "../assets/DealerOperations/dealerOperations.svg";
import rightTick from "../assets/CarFinancing/rightTick.svg";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import { Button } from "./common/Button";

export const DealerOperations = () => {
  return (
    <div className="bg-[#F9FAFB] flex justify-end">
      <div className="flex flex-col md:flex-row gap-x-20 gap-y-4 max-w-[1440px] py-8 md:py-16 pr-4 md:pr-0 pl-4 md:pl-24">
        <div className="md:w-[37%]">
          <div className=" mb-8">
            <Heading text="Dealership Management System" size="md" />
          </div>

          <div className=" mb-[29px] md:mb-[31px]">
            <Description
              text="OneLot’s digital platform is built with a single goal: to help
used car dealers operate their business more efficiently."
              size="md"
            />
          </div>
          <div className=" border-t border-b border-[#E5E7EB] py-[29px] md:py-[31px] mb-[29px] md:mb-[31px]">
            <div className="flex gap-x-2 mb-[11px] last:mb-0">
              <Image alt="rightTick" src={rightTick} />
              <p>
                <b>Inventory Management:</b> Track all details about your cars
                and sales in one place - from car details to buyers. All you
                need to know in one place.
              </p>
            </div>
            <div className="flex gap-x-2 mb-[11px] last:mb-0">
              <Image alt="rightTick" src={rightTick} />
              <p>
                <b>Marketing Tools:</b> Promote your cars across all platforms.
                Write a marketing text and upload on Facebook Marketplace,
                Groups, Pages, and Instagram with a single click.
              </p>
            </div>
            <div className="flex gap-x-2 mb-[11px] last:mb-0">
              <Image alt="rightTick" src={rightTick} />
              <p>
                <b>Marketing Insights (Coming Soon):</b> Get insights on prices
                and volumes for all cars in the market. We provide you with all
                the data by combining information from various sources with a
                single click.
              </p>
            </div>
          </div>

          <div className=" mb-[37px] md:mb-[27px]">
            <Description
              text="Sign up for OneLot's dealer platform today, and make
managing your cars easier."
              size="md"
            />
          </div>

          <Button text="Explore Now ->" />
        </div>
        <Image
          // className=" w-[214px] h-[175px] md:w-[800px] md:h-[652px]"
          className=" w-[60%] md:w-[63%] object-cover h-fit"
          alt="carFinancing"
          src={dealerOperations}
        />
      </div>
    </div>
  );
};
