"use client";
import Image from "next/image";
import foto from "../assets/hero1.png";
import { Button } from "@mui/material";

const MainOneMobile = () => {
  return (
    <div className="tw-flex md:tw-hidden ">
      <div className="tw-bg-[image:var(--image-url)] tw-flex tw-flex-col">
        <Image
          src={foto}
          alt="Picture of the author"
          priority
          className="tw-w-full "
        />

        <div className="tw-mt-[-500px] tw-flex tw-flex-col tw-text-center tw-items-center tw-justify-center tw-text-[#fff] tw-m-0 tw-p-0 tw-gap-y-9">
          <h6 className="tw-text-sm tw-font-bold tw-m-0 tw-p-0 ">
            SUMMER 2020
          </h6>
          <h6 className="tw-text-[40px] tw-font-bold tw-m-0 tw-p-0 ">NEW</h6>
          <h6 className="tw-text-[40px] tw-font-bold tw-m-0 tw-p-0 ">
            COLLECTION
          </h6>
          <p>
            We know how large objects <br /> will act, but things on a <br />
            small scale.
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

export default MainOneMobile;
