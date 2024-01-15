import Image from "next/image";
import Pic1 from "@/app/assets/filter.png";
import Pic2 from "@/app/assets/filter2.png";

import Pic3 from "@/app/assets/filter3.png";

import Pic4 from "@/app/assets/filter4.png";

const EditorsPickMob = () => {
  return (
    <div className="tw-flex tw-flex-col tw-px-[41px] tw-text-center tw-justify-center md:tw-hidden">
      <div>
        <h1 className="tw-text-[#252B42]">EDITOR&quot;S PICK</h1>
        <p className="tw-text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-y-[110px]">
        <div className="tw-flex tw-flex-col">
          <Image src={Pic1} alt="pictures" />
          <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[70px] tw-ml-[50px]">
            men
          </span>
        </div>
        <div className="tw-flex tw-flex-col">
          <Image src={Pic2} alt="pictures" />
          <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[70px] tw-ml-[50px]">
            women
          </span>
        </div>
        <div className="tw-flex tw-flex-col">
          <Image src={Pic3} alt="pictures" />

          <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[110px] tw-ml-[50px]">
            accessories
          </span>
        </div>
        <div className="tw-flex tw-flex-col">
          <Image src={Pic4} alt="pictures" />
          <span className="tw-text-[#252B42] tw-mt-[-80px] tw-text-center tw-uppercase tw-font-bold tw-bg-white tw-px-3 tw-py-1 tw-rounded tw-w-[70px] tw-ml-[50px]">
            kids
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditorsPickMob;
