import Image from "next/image";
import React from "react";
import dealerOperations from "../assets/DealerOperations/dealerOperations.svg";
import rightTick from "../assets/CarFinancing/rightTick.svg";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import { Button } from "./common/Button";

export const DealerOperations: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] flex justify-end mb-[33px] md:mb-[97px]">
      <div className="flex flex-col md:flex-row gap-x-20 gap-y-4 max-w-[1440px] py-8 md:py-16 pr-4 md:pr-0 pl-4 md:pl-24">
        {/* Content */}
        <div className="md:w-[37%]">
          <header className="mb-4">
            <Heading text="Dealership Management System" size="md" />
          </header>

          <div className="mb-[29px] md:mb-[31px]">
            <Description
              text="OneLot’s digital platform is built with a single goal: to help used car dealers operate their business more efficiently."
              size="md"
            />
          </div>

          {/* Features list */}
          <div className="border-t border-b border-[#E5E7EB] py-[29px] md:py-[31px] mb-[29px] md:mb-7">
            <ul className="space-y-4">
              <li className="flex items-start gap-x-2">
                <Image alt="rightTick" src={rightTick} />
                <p className="font-semibold text-[14px]">
                  <strong>Inventory Management:</strong> Track all details about
                  your cars and sales in one place - from car details to buyers.
                  All you need to know in one place.
                </p>
              </li>
              <li className="flex items-start gap-x-2">
                <Image alt="rightTick" src={rightTick} />
                <p className="font-semibold text-[14px]">
                  <strong>Marketing Tools:</strong> Promote your cars across all
                  platforms. Write a marketing text and upload on Facebook
                  Marketplace, Groups, Pages, and Instagram with a single click.
                </p>
              </li>
              <li className="flex items-start gap-x-2">
                <Image alt="rightTick" src={rightTick} />
                <p className="font-semibold text-[14px]">
                  <strong>Marketing Insights (Coming Soon):</strong> Get
                  insights on prices and volumes for all cars in the market. We
                  provide you with all the data by combining information from
                  various sources with a single click.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-[37px] md:mb-7">
            <Description
              text="Sign up for OneLot's dealer platform today, and make managing your cars easier."
              size="md"
            />
          </div>

          {/* CTA */}
          <Button text="Explore Now ->" />
        </div>

        {/* Image */}
        <Image
          className="mt-0 md:mt-9 md:w-[63%] object-cover h-fit"
          alt="Dealer Operations Platform"
          src={dealerOperations}
        />
      </div>
    </section>
  );
};
