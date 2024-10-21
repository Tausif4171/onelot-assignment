import React from "react";
import Image, { StaticImageData } from "next/image";
import { Heading } from "./common/Heading";

interface CarouselItemProps {
  imageSrc: StaticImageData;
  alt: string;
  testimonial: string;
  name: string;
  position: string;
}

/**
 * CarouselItem represents a testimonial with an image, title, and description.
 * @param {CarouselItemProps} props - The props for the CarouselItem component.
 * @returns {JSX.Element} A testimonial card.
 */
export const CarouselItem: React.FC<CarouselItemProps> = ({
  imageSrc,
  alt,
  testimonial,
  name,
  position,
}) => (
  <div className="flex flex-col text-center justify-center items-center">
    <Heading text="Testimonials" size="md" />
    <Image className="w-20 h-20 my-6" src={imageSrc} alt={alt} />
    <p className="font-medium text-base md:text-xl mb-8 max-w-[651px]">
      {testimonial}
    </p>
    <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 items-center">
      <h4 className="font-bold text-xl">{name}</h4>
      <h4 className="font-light text-base">{position}</h4>
    </div>
  </div>
);
