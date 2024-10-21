"use client";
import React, { useState, useEffect, useRef } from "react";
import { CarouselItem } from "./CarouselItem";
import Mark from "../assets/Testimonials/Mark.png";
import Felipe from "../assets/Testimonials/Felipe.jpeg";
import { StaticImageData } from "next/image";

interface TestimonialData {
  id: number;
  imageSrc: StaticImageData;
  alt: string;
  testimonial: string;
  name: string;
  position: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    imageSrc: Mark,
    alt: "Mark",
    testimonial:
      "The service of OneLot is top-notch. They act fast and can provide dealers with the funds they need, when they need it.",
    name: "Mark Vergel de Dios",
    position: "Owner, MVD Auto Works",
  },
  {
    id: 2,
    imageSrc: Felipe,
    alt: "Felipe",
    testimonial:
      "OnelLot's robust technology and appraisal system is providing a boost to used car dealers in NCR. They offer a new way for dealers to buy cars, increase their profits,...",
    name: "Felipe Estrella",
    position: "CFO, AC Industrials (Ayala)",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? testimonialData.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <section
      id="default-carousel"
      className="relative w-full mb-24 px-4 md:px-0 pt-20 pb-32 bg-slate-50"
    >
      {/* Carousel wrapper */}
      <div>
        {testimonialData.map((item, index) => (
          <div
            key={item.id}
            className={`duration-700 ease-in-out ${
              currentIndex === index ? "block" : "hidden"
            }`}
          >
            <CarouselItem
              imageSrc={item.imageSrc}
              alt={item.alt}
              testimonial={item.testimonial}
              name={item.name}
              position={item.position}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <div className="absolute z-30 flex gap-x-4 -translate-x-1/2 bottom-[70px] left-1/2">
        <button type="button" onClick={handlePrev} aria-label="Previous slide">
          <span className="inline-flex items-center justify-center text-3xl">
            {"<-"}
          </span>
        </button>

        <button type="button" onClick={handleNext} aria-label="Next slide">
          <span className="inline-flex items-center justify-center text-3xl">
            {"->"}
          </span>
        </button>
      </div>
    </section>
  );
};
