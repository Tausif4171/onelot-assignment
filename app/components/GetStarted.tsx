import React from "react";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import { Button } from "./common/Button";

export const GetStarted = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-20">
      <div className=" mb-6">
        <Heading text="Get Started Today" size="md" />
      </div>
      <div className=" mb-6 max-w-[620px]">
        <Description
          text="We look forward to serving the needs of used car dealers across the
Philippines and helping them thrive in this dynamic market."
          size="lg"
        />
      </div>
      <Button text="Inquire Now" />
    </div>
  );
};
