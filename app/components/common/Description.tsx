"use client";

import React from "react";

interface DescriptionProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg";
}

/**
 * The Description component renders a paragraph of text with varying sizes.
 *
 * @param {DescriptionProps} props - The properties for the Description component.
 * @returns {JSX.Element} The rendered description.
 */
export const Description: React.FC<DescriptionProps> = ({
  text,
  size = "md",
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "xs":
        return "text-sm";
      case "sm":
        return "text-base";
      case "md":
        return "text-sm md:text-lg";
      case "lg":
        return "text-base md:text-xl";
      default:
        return "text-base";
    }
  };

  return (
    <p className={`font-light text-[#6B7280] ${getSizeClasses(size)}`}>
      {text}
    </p>
  );
};
