import React from "react";
import Image from "next/image";
import { BusinessCard } from "../BusinessCard"; // Adjust the path as needed
import dollar from "../assets/BusinessGrowth/dollar.svg";
import noise from "../assets/BusinessGrowth/noise.svg";
import { Heading } from "../common/Heading";
import { Description } from "../common/Description";

/**
 * BusinessGrowth component displays information about growing the business with financing solutions.
 */
export const BusinessGrowth: React.FC = () => {
  const businessData = [
    {
      imageSrc: dollar,
      title: "Dealer Inventory Loans",
      subtitle: "Accelerate your growth with tailored loan solutions.",
      description:
        "Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.",
    },
    {
      imageSrc: noise,
      title: "Dealer Inventory Loans",
      subtitle: "Accelerate your growth with tailored loan solutions.",
      description:
        "Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.",
    },
  ];

  return (
    <div className="flex justify-center pt-[66px] pb-[67px] px-4 md:px-24 border-t border-[#E5E7EB]">
      <div className="grid md:grid-cols-2 gap-[27px] md:gap-14 max-w-[1440px]">
        <div>
          <div className="mb-[19px] md:mb-3 ">
            <Heading
              text="Everything You Need to Grow Your Business"
              size="md"
            />
          </div>
          <Description
            text="OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealerships. We also offer digital tools for
            streamlined operations and growth of your dealership."
            size="md"
          />
          <button className="font-medium text-base text-[#57009C] mt-2">
            Learn more {"->"}
          </button>
        </div>
        <div>
          {businessData.map((data, index) => (
            <BusinessCard
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              isFirst={index === 0} // Pass `isFirst` based on index
            />
          ))}
        </div>
      </div>
    </div>
  );
};
