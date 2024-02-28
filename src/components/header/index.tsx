import Link from "next/link";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import VoyagerLogo from "@/assets/voyagerLogo.svg";
import Image from "next/image";
const Header = () => {
  return (
    <div className="fixed top-0 w-full px-3 sm:px-6 md:px-8 py-4 md:py-2 border-b border-b-neutral-800 flex items-center justify-between backdrop-blur-sm">
      <Link href={"/"}>
        <Image
          src={VoyagerLogo}
          alt="voyagerLogo"
          className="md:ml-6 w-28 md:w-[208px] md:h-[85px] min-h-[54px]"
        />
      </Link>
      <ConnectButton />
    </div>
  );
};

export default Header;
