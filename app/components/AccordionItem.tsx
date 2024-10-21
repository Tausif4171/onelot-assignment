"use client";

import React from "react";
import Image from "next/image";
import questionMark from "../assets/FAQs/questionMark.svg";

/**
 * Props for the AccordionItem component.
 */
interface AccordionItemProps {
  /** The question to be displayed in the accordion item. */
  question: string;
  /** The answer to be displayed when the accordion item is opened. */
  answer: string;
  /** The index of the accordion item. */
  index: number;
  /** The currently active index. */
  activeIndex: number | null;
  /** Function to set the active index. */
  setActiveIndex: (index: number | null) => void;
}

/**
 * AccordionItem component displays a single question-answer pair in an accordion style.
 *
 * @param {AccordionItemProps} props - The props for the AccordionItem component.
 * @returns {JSX.Element} The rendered accordion item.
 */
const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isOpen = activeIndex === index; // Determine if the current item is open

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index); // Close if open, else set to current index
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200"
        onClick={toggleAccordion}
      >
        <div className="flex gap-x-2 items-center">
          <Image src={questionMark} alt="Question Mark" />
          <span>{question}</span>
        </div>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="py-5">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
