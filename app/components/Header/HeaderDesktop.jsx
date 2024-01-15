import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { NAVIGATIONS } from "./Header";

const HeaderDesktop = () => {
  return (
    <header className="tw-hidden md:tw-flex tw-justify-between tw-items-center tw-px-8 tw-py-7 ">
      <div className="tw-flex tw-items-center tw-gap-x-10">
        <h1 className="tw-text-2xl tw-text-[#252B42] tw-font-bold">Inspire</h1>
        <nav className="tw-gap-x-4 tw-font-bold tw-text-sm tw-text-[#252B42]">
          {NAVIGATIONS.map((item) => (
            <Link key={item.title} href={item.href} className="tw-no-underline">
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="tw-flex tw-text-[#23A6F0] ">
        <div className="tw-flex">
          <User size={30} className="tw-pr-2" />
          <p className="tw-mt-[7px]">Login / Register</p>
        </div>

        <div className="tw-flex tw-gap-x-4 tw-pl-7">
          <Search />
          <ShoppingCart />1
          <Heart />1
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
