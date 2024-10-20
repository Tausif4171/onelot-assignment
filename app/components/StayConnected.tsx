import React from "react";
import { Heading } from "./common/Heading";
import { Description } from "./common/Description";
import Image from "next/image";
import facebook from "../assets/StayConnected/facebook.svg";
import instagram from "../assets/StayConnected/instagram.svg";

export const StayConnected = () => {
  return (
    <div className=" flex flex-col justify-center items-center mb-32">
      <Heading text="Stay Connected" size="md" />
      <div className=" max-w-[456px] mt-4 mb-[34px] text-center">
        <Description
          text="Follow OneLot on Facebook and Instagram to stay up to date
with our latest offers, updates, and new product features."
          size="sm"
        />
      </div>
      <div className=" flex flex-col sm:flex-row gap-x-3 gap-y-4">
        <button className="flex gap-x-2 items-center rounded-lg border border-[#000000] px-5 py-3">
          <Image src={facebook} alt="facebook" />
          <h4 className=" font-medium text-sm">Follow us on Facebook</h4>
        </button>
        <button className="flex gap-x-2 items-center rounded-lg border border-[#000000] px-5 py-3">
          <Image src={instagram} alt="instagram" />
          <h4 className=" font-medium text-sm">Follow us on Instagram</h4>
        </button>
      </div>
    </div>
  );
};
