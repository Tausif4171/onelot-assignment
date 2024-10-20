import React from "react";

interface DescriptionProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg"; // Define the possible sizes
}

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
    }
  };

  return (
    <p className={`font-light text-[#6B7280] ${getSizeClasses(size)}`}>
      {text}
    </p>
  );
};
