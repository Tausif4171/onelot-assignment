import Image from "next/image";
import React from "react";
import carFinancing from "../assets/CarFinancing/carFinancing.jpg";
import rightTick from "../assets/CarFinancing/rightTick.svg";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import { Button } from "./common/Button";

export const CarFinancing = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-x-20 gap-y-4 max-w-[1440px] py-8 md:py-16 px-4 md:px-0">
      <Image
        // className=" w-[214px] h-[175px] md:w-[800px] md:h-[652px]"
        className=" flex-shrink-0"
        alt="carFinancing"
        src={carFinancing}
      />
      <div className=" ">
        <div className=" mb-8">
          <Heading text="Car Financing" size="md" />
        </div>
        <h3 className=" font-semibold text-lg md:text-2xl mb-[17px] md:mb-[19px]">
          Dealer Inventory Loans
        </h3>
        <div className=" mb-[29px] md:mb-[31px]">
          <Description
            text="OneLot’s working capital loans allow car dealers to buy
more cars and capitalize on opportunities you would
otherwise have missed. We transfer the money to your
account within 6 hours."
            size="md"
          />
        </div>
        <div className=" border-t border-b border-[#E5E7EB] py-[29px] md:py-[31px] mb-[29px] md:mb-[31px]">
          <div className="flex gap-x-2 mb-[11px] last:mb-0">
            <Image alt="rightTick" src={rightTick} />
            <p>
              Interest as low as 1.8% per month with daily calculation of
              interest
            </p>
          </div>
          <div className="flex gap-x-2 mb-[11px] last:mb-0">
            <Image alt="rightTick" src={rightTick} />
            <p>Financing up to 70% of the vehicle purchase</p>
          </div>
          <div className="flex gap-x-2 mb-[11px] last:mb-0">
            <Image alt="rightTick" src={rightTick} />
            <p>
              Financing period up to 90 days with a flexible repayment schedule
              at any point
            </p>
          </div>
        </div>

        <div className=" mb-[37px] md:mb-[27px]">
          <Description
            text="Use OneLot's financing solution today, grow the number
of cars in your lot, and increase your profits."
            size="md"
          />
        </div>

        <Button text="View Loans ->" />
      </div>
    </div>
  );
};
