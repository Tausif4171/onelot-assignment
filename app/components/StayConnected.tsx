"use client";

import React from "react";
import Image from "next/image";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import facebook from "../assets/StayConnected/facebook.svg";
import instagram from "../assets/StayConnected/instagram.svg";
import postImage1 from "../assets/StayConnected/postImage1.jpeg";
import postImage2 from "../assets/StayConnected/postImage2.jpeg";
import postImage3 from "../assets/StayConnected/postImage3.jpeg";
import postImage4 from "../assets/StayConnected/postImage4.jpeg";
import postImage5 from "../assets/StayConnected/postImage5.jpeg";

/**
 * Props for the SocialButton component.
 */
interface SocialButtonProps {
  /** The image source for the button. */
  image: string;
  /** The alt text for the image. */
  alt: string;
  /** The text displayed on the button. */
  text: string;
}

/**
 * A button component for social media links.
 *
 * @param {SocialButtonProps} props - The props for the button component.
 * @returns {JSX.Element} The rendered button.
 */
const SocialButton: React.FC<SocialButtonProps> = ({ image, alt, text }) => (
  <button className="flex gap-x-2 items-center rounded-lg border border-black px-5 py-3">
    <Image src={image} alt={alt} />
    <h4 className="font-medium text-sm">{text}</h4>
  </button>
);

export const StayConnected: React.FC = () => {
  const posts = [
    postImage1,
    postImage2,
    postImage3,
    postImage4,
    postImage5,
    postImage1,
    postImage2,
    postImage3,
    postImage4,
    postImage5,
  ];

  return (
    <section className="mb-24">
      <div className="flex flex-col justify-center items-center mb-16">
        <Heading text="Stay Connected" size="md" />
        <div className="max-w-[456px] mt-4 mb-[34px] text-center">
          <Description
            text="Follow OneLot on Facebook and Instagram to stay up to date
                with our latest offers, updates, and new product features."
            size="sm"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-3 gap-y-4">
          <SocialButton
            image={facebook}
            alt="Facebook logo"
            text="Follow us on Facebook"
          />
          <SocialButton
            image={instagram}
            alt="Instagram logo"
            text="Follow us on Instagram"
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center w-max">
        {posts.map((src, index) => (
          <figure key={index} className="flex flex-col items-center">
            <Image
              className="rounded-md border border-[#ddd] w-[280px] h-[250px] md:w-[340px] md:h-[310px]"
              src={src}
              alt={`Social post ${index + 1}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
