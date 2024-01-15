"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Models from "@/app/assets/asianModels.png";
const PartMobile = () => {
  return (
    <div className="tw-flex md:tw-hidden tw-mt-[120px]">
      <div className="tw-flex tw-flex-col tw-gap-y-[30px] tw-justify-center">
        <div className="tw-flex tw-flex-col tw-gap-y-[30px] tw-text-center tw-justify-center">
          <h5 className="tw-text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="tw-text-[#252B42]">Part of the Neural Universe</h1>
          <h4 className="tw-text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-[20px]">
            <Button variant="contained" className="tw-w-[130px]">
              buy now
            </Button>
            <Button variant="outlined" className="tw-w-[130px]">
              learn more
            </Button>
          </div>
        </div>
        <Image src={Models} alt="Woman and Man" />
      </div>
    </div>
  );
};

export default PartMobile;
