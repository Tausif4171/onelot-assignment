import React from "react";
import { Heading } from "./common/Heading";
import { FeatureCard } from "./FeatureCard";
import trust from "../assets/WhyChooseUs/trust.svg";
import easy from "../assets/WhyChooseUs/easy.svg";
import fast from "../assets/WhyChooseUs/fast.svg";
import flexible from "../assets/WhyChooseUs/flexible.svg";
import highAmount from "../assets/WhyChooseUs/highAmount.svg";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      image: trust,
      title: "Trust",
      description:
        "Regulated by Securities and Exchange Commission (SEC) Philippines",
    },
    {
      image: easy,
      title: "Easy",
      description:
        "Run through an easy process and get your first loans within days",
    },
    {
      image: highAmount,
      title: "High Amount",
      description:
        "Get the highest loan amounts compared to other banks and lenders",
    },
    {
      image: fast,
      title: "Fast",
      description: "Get the money within a few hours on the same day",
    },
    {
      image: flexible,
      title: "Flexible",
      description: "Loans are tailored to your needs",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-[1440px] px-4 md:px-20 mb-[33px] md:mb-[97px]">
      <Heading text="Why OneLot?" size="sm" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};
