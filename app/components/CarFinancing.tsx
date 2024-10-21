import React from "react";
import Image from "next/image";
import carFinancing from "../assets/CarFinancing/carFinancing.jpg";
import rightTick from "../assets/CarFinancing/rightTick.svg";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import { Button } from "./common/Button";

export const CarFinancing: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="flex md:flex-row flex-col-reverse gap-x-20 gap-y-4 max-w-[1440px] py-8 md:py-16 pl-4 md:pl-0 pr-4 md:pr-24">
        {/* Image */}
        <Image
          className="mt-0 md:mt-9 md:w-[63%] object-cover h-fit"
          alt="Car Financing"
          src={carFinancing}
        />

        {/* Content */}
        <div className="md:w-[37%]">
          <header className="mb-4">
            <Heading text="Car Financing" size="md" />
          </header>

          <h2 className="font-semibold text-lg md:text-2xl mb-[17px] md:mb-4">
            Dealer Inventory Loans
          </h2>

          <div className="mb-[29px] md:mb-[31px]">
            <Description
              text="OneLot’s working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours."
              size="md"
            />
          </div>

          {/* Features list */}
          <ul className="border-t border-b border-[#E5E7EB] py-[29px] md:py-[31px] mb-[29px] md:mb-[31px]">
            {[
              "Interest as low as 1.8% per month with daily calculation of interest",
              "Financing up to 70% of the vehicle purchase",
              "Financing period up to 90 days with a flexible repayment schedule at any point",
            ].map((feature, index) => (
              <li key={index} className="flex gap-x-2 mb-[11px] last:mb-0">
                <Image alt="Right Tick" src={rightTick} />
                <p className="font-semibold text-[14px]">{feature}</p>
              </li>
            ))}
          </ul>

          <div className="mb-[37px] md:mb-7">
            <Description
              text="Use OneLot's financing solution today, grow the number of cars in your lot, and increase your profits."
              size="md"
            />
          </div>

          {/* CTA */}
          <Button text="View Loans ->" />
        </div>
      </div>
    </section>
  );
};
