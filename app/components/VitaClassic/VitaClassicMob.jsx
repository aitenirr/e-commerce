"use client";
import { Button } from "@mui/material";
import ModelGuy from "@/app/assets/modelguy.png";
import Image from "next/image";
const VitaClassicMob = () => {
  return (
    <div className="tw-flex tw-flex-col md:tw-hidden  tw-pt-[208px] tw-bg-[#23856D] tw-justify-center">
      <div className="tw-flex tw-text-white tw-flex-col tw-gap-y-[35px] tw-text-center tw-justify-center ">
        <h5>SUMMER 2020</h5>
        <h1>Vita Classic Product</h1>
        <h4>
          We know how large objects will act, but things on a small scale.
        </h4>
        <h5>$16.48</h5>
        <Button variant="contained" className="tw-bg-[#2DC071]">
          add to cart
        </Button>
      </div>
      <Image src={ModelGuy} alt="model" />
    </div>
  );
};

export default VitaClassicMob;
