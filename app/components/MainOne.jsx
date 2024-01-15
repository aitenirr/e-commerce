"use client";
import { Button } from "@mui/material";
import foto from "../assets/hero1.png";
import Image from "next/image";
const MainOne = () => {
  return (
    <div className=" tw-h-[753px] tw-hidden md:tw-block">
      <div className="bg-[image:var(--image-url)] tw-flex tw-flex-col">
        <Image
          src={foto}
          alt="Picture of the author"
          priority
          className="tw-w-full tw-h-full"
        />
        <div className="tw-mt-[-500px] tw-text-[#ffff] tw-pl-[150px] tw-m-0  tw-p-0">
          <h6 className="tw-text-[18px] tw-font-bold tw-m-0 tw-p-0  tw-pb-9 tw-pt-28">
            SUMMER 2020
          </h6>
          <h6 className="tw-text-[80px] tw-font-bold tw-m-0 tw-p-0 tw-pb-9">
            NEW COLLECTION
          </h6>
          <p className="tw-text-[20px] tw-font-normal tw-w-[370px]  tw-pb-9 tw-m-0 tw-p-0 ">
            We know how large objects will act, but things on a small scale.
          </p>
          <Button
            variant="contained"
            disableElevation
            className="tw-bg-[#2DC071]"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MainOne;
