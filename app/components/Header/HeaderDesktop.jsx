import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { NAVIGATIONS } from "./Header";

const HeaderDesktop = () => {
  return (
    <header className="tw-hidden md:tw-flex tw-justify-between tw-items-center tw-px-8 tw-py-7 ">
      <div className="tw-flex tw-items-center tw-gap-x-10">
        <h1 className="tw-text-2xl tw-text-[#252B42] tw-font-bold">Inspire</h1>
        <nav className="tw-flex tw-justify-between tw-no-underline hover:tw-cursor">
          {NAVIGATIONS.map((item) => (
            <Link
              className="tw-text-[#737373] hover:tw-text-[#424242]"
              key={item.title}
              href={item.href.toLowerCase()}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="tw-flex">
        <div className="tw-flex tw-items-center">
          <User size={30} className="tw-pr-2" />
          <p>Login / Register</p>
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
