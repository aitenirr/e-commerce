"use client";
import { Button } from "@mui/material";
import Model from "@/app/assets/modelguy.png";
import Image from "next/image";

const VitaClassicDesk = () => {
  return (
    <div className="tw-hidden md:tw-flex tw-pt-[178px] tw-bg-[#23856D]  tw-justify-around">
      <div className="tw-flex tw-text-white tw-flex-col tw-gap-y-[30px] tw-text-center tw-justify-center ">
        <h5>SUMMER 2020</h5>
        <h1>Vita Classic Product</h1>
        <h4>
          We know how large objects will act, but things on a small scale.
        </h4>
        <div className="tw-flex tw-gap-x-3">
          <h5>$16.48</h5>
          <Button variant="contained" className="tw-bg-[#2DC071]">
            add to carts
          </Button>
        </div>
      </div>
      <div>
        <Image src={Model} alt="model" />
      </div>
    </div>
  );
};

export default VitaClassicDesk;
