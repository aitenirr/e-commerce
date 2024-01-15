import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="tw-px-[47px] md:tw-px-[195px]">
      <div className="tw-flex-col tw-flex md:tw-justify-between tw-items-center tw-pb-12 tw-pt-20">
        <h2 className="tw-font-extrabold">Bandage</h2>
        <div className="tw-text-[#23A6F0]">
          <Facebook className="tw-pr-1" />
          <Instagram k className="tw-pr-2" />
          <Twitter />
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center md:tw-flex md:tw-flex-row tw-gap-x-[100px]">
        <div className="tw-flex-row">
          <h2>Company Info</h2>
          <p className="tw-text-[#737373] tw-font-bold"> About Us</p>
          <p className="tw-text-[#737373] tw-font-bold">Carrier</p>
          <p className="tw-text-[#737373] tw-font-bold">We are hiring</p>
          <p className="tw-text-[#737373] tw-font-bold">Blog</p>
        </div>

        <div className="tw-flex-row">
          <h2>Legal</h2>
          <p className="tw-text-[#737373] tw-font-bold">About Us</p>
          <p className="tw-text-[#737373] tw-font-bold">Carrier</p>
          <p className="tw-text-[#737373] tw-font-bold">We are hiring</p>
          <p className="tw-text-[#737373] tw-font-bold"> Blog</p>
        </div>

        <div className="">
          <h2>Features</h2>
          <p className="tw-text-[#737373] tw-font-bold">Business Marketing</p>
          <p className="tw-text-[#737373] tw-font-bold">User Analytic</p>
          <p className="tw-text-[#737373] tw-font-bold">Live Chat</p>
          <p className="tw-text-[#737373] tw-font-bold">Unlimited Support</p>
        </div>

        <div className="">
          <h2>Resources</h2>
          <p className="tw-text-[#737373] tw-font-bold">IOS & Android</p>
          <p className="tw-text-[#737373] tw-font-bold">Watch a Demo</p>
          <p className="tw-text-[#737373] tw-font-bold">Customers</p>
          <p className="tw-text-[#737373] tw-font-bold">API</p>
        </div>
        <div className="">
          <h2>Get In Touch</h2>
          <p> </p>

          <p className="tw-text-[#737373] tw-font-bold">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
