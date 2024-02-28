"use client";

import Distribute from "@/components/distribute";
import Image from "next/image";
import NitroFaucet from "../../public/nitroXFaucet.svg";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full">
      <div className="mt-32 mx-5">
        {/* <h2 className="text-neutral-400 text-lg md:text-2xl text-center w-full whitespace-nowrap md:mb-2">
          Welcome to the
        </h2> */}
        {/* <h1 className="text-white  text-3xl md:text-5xl lg:text-6xl text-center font-[1000] w-full">
          Nitro Faucet
        </h1> */}
        <Image
          src={NitroFaucet}
          alt="Get Your Test Tokens"
          className="w-[40rem]"
        />
      </div>
      <div className="flex flex-col items-center">
        <Distribute />
      </div>
    </main>
  );
}
