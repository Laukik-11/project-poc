"use client";

import Image from "next/image";
import NitroFaucet from "../../public/nitroXFaucet.svg";
import Dropdown from "@/components/dropdown";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full">
      <div className="flex flex-col gap-4 mt-28 mx-5">
        <div className="w-[360px] border-2 border-white bg-black h-16">

        </div>
        <div className="flex flex-col gap-7 px-4 py-8 w-[360px] border-2 border-[white] bg-black">
          <Dropdown />
          <Dropdown />
          <input
            type="string"
            placeholder="Amount"
            className="flex justify-center items-center w-full px-4 py-4 text-base font-normal text-white bg-black border-2 border-white rounded-[4px] placeholder:text-white"
          />
          <div className="flex w-full align-center gap-4 justify-center">
            <button className="py-1 w-[48%] border-white border-2 rounded-[4px] font-light text-[32px] bg-white text-black">
              swaP
            </button>
            <button className="py-1 w-[48%] border-white border-2 font-light rounded-[4px]">
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
