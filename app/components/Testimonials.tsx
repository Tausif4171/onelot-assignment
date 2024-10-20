"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import john from "../assets/Testimonials/john.png";
import easy from "../assets/WhyChooseUs/easy.svg";
import { Heading } from "./common/Heading";

interface CarouselItem {
  id: number;
  imageSrc: StaticImageData;
  alt: string;
}

const carouselItems: CarouselItem[] = [
  { id: 1, imageSrc: john, alt: "John" },
  { id: 2, imageSrc: easy, alt: "Easy" },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    console.log("Previous clicked");
    const prevIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleNext = () => {
    console.log("Next clicked");
    const nextIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  // Auto-scroll every 2 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 200000000);

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <div
      id="default-carousel"
      className="relative w-full mb-24 px-4 md:px-0 pt-20 pb-32 bg-slate-50"
    >
      {/* Carousel wrapper */}
      <div className="">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`duration-700 ease-in-out ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <div className=" flex flex-col text-center justify-center items-center">
              <Heading text="Testimonials" size="xs" />
              <Image
                className="w-20 h-20 my-4 "
                src={item.imageSrc}
                alt={item.alt}
              />
              <p className=" font-medium text-base md:text-xl mb-4 max-w-[651px]">
                “The service of OneLot is top-notch. They act fast and can
                provide dealers with the funds they need, when they need it.”
              </p>
              <div className=" flex flex-col md:flex-row gap-x-4 gap-y-2 items-center">
                <h4 className=" font-bold text-xl">Mark Vergel de Dios</h4>
                <h4 className=" font-light text-base">Owner, MVD Auto Works</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-[70px] left-1/2 space-x-3">
        <button type="button" onClick={handlePrev}>
          <span className="inline-flex items-center justify-center w-10 h-10 ">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button type="button" onClick={handleNext}>
          <span className="inline-flex items-center justify-center w-10 h-10 ">
            <svg
              className="w-4 h-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};
