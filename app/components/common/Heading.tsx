"use client";

import React from "react";

interface HeadingProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg";
}

/**
 * The Heading component renders a heading with varying sizes.
 *
 * @param {HeadingProps} props - The properties for the Heading component.
 * @returns {JSX.Element} The rendered heading.
 */
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
      default:
        return "text-2xl";
    }
  };

  const HeadingTag =
    size === "lg" ? "h1" : size === "md" ? "h2" : size === "sm" ? "h3" : "h4";

  return (
    <HeadingTag className={`font-bold ${getSizeClasses(size)}`}>
      {text}
    </HeadingTag>
  );
};
