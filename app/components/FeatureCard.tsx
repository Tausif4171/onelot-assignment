import React from "react";
import Image from "next/image";
import { Description } from "./common/Description";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

/**
 * FeatureCard displays a feature's icon, title, and description.
 * @param {FeatureCardProps} props - The props for the FeatureCard component.
 * @returns {JSX.Element} A card with an image, title, and description.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => (
  <div className="flex flex-col justify-center items-center text-center pt-6 py-11 px-4 border border-[#E5E7EB] rounded-lg">
    <Image className="mb-3 w-12 h-12" alt={title} src={image} />
    <h3 className="mb-1 font-semibold text-lg">{title}</h3>
    <Description text={description} size="sm" />
  </div>
);
