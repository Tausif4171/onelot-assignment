import React from "react";
import Image from "next/image";

/**
 * Props for the BusinessCard component.
 * @property {string} imageSrc - The source of the image to display.
 * @property {string} title - The title of the business card.
 * @property {string} subtitle - The subtitle text for the business card.
 * @property {string} description - The description text for the business card.
 * @property {boolean} isFirst - Determines the text color based on if it's the first card.
 */
interface BusinessCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  isFirst: boolean;
}

/**
 * BusinessCard component displays a card with an image, title, subtitle, and description.
 * @param {BusinessCardProps} props - The props for the BusinessCard component.
 * @returns {JSX.Element} The BusinessCard component.
 */
export const BusinessCard: React.FC<BusinessCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  isFirst,
}) => {
  return (
    <section className="flex items-start gap-x-2 mb-9">
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
    </section>
  );
};
