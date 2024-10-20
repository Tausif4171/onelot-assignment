import React from "react";
import Image from "next/image";
import dollar from "../assets/BusinessGrowth/dollar.svg";
import noise from "../assets/BusinessGrowth/noise.svg";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";

interface BusinessCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  isFirst: boolean; // New prop to indicate if it's the first card
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  isFirst, // Use this to determine the text color
}) => {
  return (
    <div className="flex items-start gap-x-2 mb-9">
      <Image alt={title} src={imageSrc} />
      <div>
        <h2 className="font-bold text-lg md:text-xl mb-[18px] md:mb-[10px]">
          {title}
        </h2>
        <h3
          className={`font-medium text-base ${
            isFirst ? "text-[#3acaf2]" : "text-[#7E3AF2]"
          } mb-5 md:mb-[6px]`}
        >
          {subtitle}
        </h3>
        <p className="font-normal text-sm md:text-lg text-[#6B7280]">
          {description}
        </p>
      </div>
    </div>
  );
};

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
              key={index} // Only pass the key here, not as a prop
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
