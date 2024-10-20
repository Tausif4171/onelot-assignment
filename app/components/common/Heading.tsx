import React from "react";

interface HeadingProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg"; // Define the possible sizes
}

export const Heading: React.FC<HeadingProps> = ({ text, size = "md" }) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "xs":
        return "text-2xl";
      case "sm":
        return "text-4xl";
      case "md":
        return "text-2xl md:text-4xl";
      case "lg":
        return "text-3xl md:text-5xl";
    }
  };

  return <h1 className={`font-bold ${getSizeClasses(size)}`}>{text}</h1>;
};
