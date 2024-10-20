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
  buttonText: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  buttonText,
}) => {
  return (
    <div className="flex items-start gap-x-2 mb-9">
      <Image alt={title} src={imageSrc} />
      <div>
        <h2 className="font-bold text-lg md:text-xl mb-[18px] md:mb-4">
          {title}
        </h2>
        <h3 className="font-medium text-base text-[#7E3AF2] mb-5 md:mb-[19px]">
          {subtitle}
        </h3>
        <p className="font-normal text-sm md:text-lg text-[#6B7280] mb-[19px] md:mb-[21px]">
          {description}
        </p>
        <button className="font-medium text-base text-[#57009C]">
          {buttonText} {"->"}
        </button>
      </div>
    </div>
  );
};

export const BusinessGrowth = () => {
  const businessData = [
    {
      imageSrc: dollar,
      title: "Dealer Inventory Loans",
      subtitle: "Accelerate your growth with tailored loan solutions.",
      description:
        "Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.",
      buttonText: "Learn more",
    },
    {
      imageSrc: noise,
      title: "Dealer Inventory Loans",
      subtitle: "Accelerate your growth with tailored loan solutions.",
      description:
        "Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.",
      buttonText: "Learn more",
    },
  ];

  return (
    <div className=" flex justify-center pt-[66px] md:pt-[103px] pb-[67px] px-4 md:px-24 border-t border-[#E5E7EB]">
      <div className="grid md:grid-cols-2 gap-[27px] max-w-[1440px]">
        <div>
          <div className="mb-[19px] md:mb-[41px]">
            <Heading
              text="Everything You Need to Grow Your Business"
              size="md"
            />
          </div>
          <Description
            text=" OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealerships. We also offer digital tools for
            streamlined operations and growth of your dealership."
            size="md"
          />
        </div>
        <div>
          {businessData.map((data, index) => (
            <BusinessCard
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              buttonText={data.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
