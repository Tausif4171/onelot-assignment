"use client";

import React, { useState } from "react";
import { Heading } from "./common/Heading";
import AccordionItem from "./AccordionItem";

export const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active index

  const faqs = [
    {
      question: "What is OneLot?",
      answer:
        "OneLot is a digital auto financier providing short-term loans for used car dealers in the Philippines. Our vision is to empower dealers to expand their inventory, increase sales, and facilitate smoother business operations through tailored financial solutions.",
    },
    {
      question: "What kind of financing does OneLot do?",
      answer:
        "OneLot offers collateralized short term loans to used car dealers, allowing them to leverage their inventory for growth. We differ from services such as AsiaLink and Global Dominion, since our financing options are for car dealers themselves, not the customers of car dealers.",
    },
    {
      question: "How are interest rates determined?",
      answer:
        "OneLot offers monthly interest rates starting at 1.8% which is applied for all your loan applications. OneLot utilizes daily accrual calculations on all loans to ensure our customers only pay the interest for the time the loan is outstanding.",
    },
    {
      question: "Is OneLot a bank?",
      answer:
        "No, OneLot is not a traditional bank. We are a dedicated financial institution that understands the unique requirements of used car dealers and offers short-term collateralized lending solutions to address their working capital needs. OneLot Financing Corporation is a duly registered corporate entity and is regulated by the Securities and Exchange Commission (SEC).",
    },
    {
      question: "What is the eligibility criteria for availing a loan?",
      answer:
        "Any used car dealer located in Greater Metro Manila operating for more than a year can apply to OneLot.",
    },
    {
      question: "What documents are required for the application process?",
      answer:
        "Get started by signing up via our website and prepare your 2 valid IDs. Ready to get started? [Click here](https://www.onelot.ph/app/signup/dealer)",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-8 py-20 mb-20 bg-slate-50">
      <Heading text="Frequently Asked Questions" size="md" />
      <div className="mt-8 max-w-[740px]">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};
