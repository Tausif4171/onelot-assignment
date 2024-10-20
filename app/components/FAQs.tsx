"use client";
import React, { useState } from "react";
import { Heading } from "./common/Heading";
import Image from "next/image";
import questionMark from "../assets/FAQs/questionMark.svg";

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

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
        className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200 "
        onClick={toggleAccordion}
      >
        <div className="flex gap-x-2 items-center">
          <Image src={questionMark} alt="questionMark" />
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

export const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active index

  const faqs = [
    {
      question: "What is Flowbite?",
      answer:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      question: "Is there a Figma file available?",
      answer:
        "Flowbite is first conceptualized and designed using the Figma software, so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open-source under the MIT license, whereas Tailwind UI is a paid product.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-8 py-20 mb-20 bg-slate-50">
      <Heading text="Frequently Asked Questions" size="md" />
      <div className="mt-8">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index} // Pass index to AccordionItem
            activeIndex={activeIndex} // Pass active index
            setActiveIndex={setActiveIndex} // Pass function to set active index
          />
        ))}
      </div>
    </div>
  );
};
