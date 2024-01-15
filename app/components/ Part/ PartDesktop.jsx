"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Models from "@/app/assets/asianModels.png";

const PartDesktop = () => {
  return (
    <div className="tw-hidden md:tw-flex tw-px-[120px] tw-mb-[80px]">
      <div className="tw-flex tw-justify-between">
        <Image src={Models} alt="Woman and Man" />
        <div className="tw-flex tw-flex-col tw-gap-y-[30px] tw-text-center tw-justify-center">
          <h5 className="tw-text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="tw-text-[#252B42]">Part of the Neural Universe</h1>
          <h4 className="tw-text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="tw-flex  tw-justify-center tw-items-center tw-gap-x-[30px]">
            <Button
              variant="contained"
              className="tw-w-[130px] tw-bg-[#2DC071]"
            >
              buy now
            </Button>
            <Button
              variant="outlined"
              className="tw-w-[130px] tw-text-[#2DC071]"
            >
              read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartDesktop;
