"use client";

import React from "react";

interface ButtonProps {
  variant?: "transparent" | "default";
  text: string;
}

/**
 * The Button component renders a styled button with different variants.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @returns {JSX.Element} The rendered button.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  text,
}) => {
  return (
    <button
      className={`flex justify-center items-center rounded-lg font-medium text-[14px] px-5 py-3 h-[42px]
        ${
          variant === "transparent"
            ? "text-[#374151] bg-transparent"
            : "text-white bg-[#8364a9]"
        }`}
    >
      {text}
    </button>
  );
};
