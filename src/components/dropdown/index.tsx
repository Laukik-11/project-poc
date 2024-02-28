import React, { useState } from 'react'
import ArrowDown from "@/assets/ArrowDown.svg";
import Image from 'next/image';
import { CrossIcon } from 'lucide-react';
import ChainLogo from "@/assets/polygon.svg"

const Dropdown = () => {

    const chains = ["Polygon", "Georli"];
    const tokens = ["usdt","matic"];
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };
  return (
    <>
          <div className="relative w-full inline-block text-left">
              <div>
                  <button
                      type="button"
                      className="flex justify-between items-center w-full px-4 py-4 text-base font-extralight text-white bg-black border-white border-2 rounded-[4px]"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                      {selectedOption || "from chain and token"}
                      <Image
                        src={ArrowDown}
                        alt="voyagerLogo"
                        className="h-8"
                       />
                  </button>
              </div>

              {isDropdownOpen && (
                  <div className="z-50 w-[400px]  absolute -right-9 -top-32 mt-2  rounded-[4px] shadow-lg border-2 border-white p-4 bg-black ring-1 ring-black ring-opacity-5">
                      <CrossIcon className=' rotate-45 cursor-pointer' onClick={()=>{setIsDropdownOpen(false)}}/>
                      <div className='w-full border-2 border-white h-24 my-2 flex flex-wrap gap-4 p-2 '>
                          {chains.map((option) => (<>
                              <div className='grid place-items-center h-10 w-10 p-1 border-2 border-white hover:bg-gray-100 hover:text-gray-900'>
                                  <Image
                                      src={ChainLogo}
                                      alt="voyagerLogo"
                                      className="h-6 w-6 rounded-[50%]"
                                  />
                            </div>
                          </>))}
                      </div>
                      <div className="py-1 text-left">
                          {tokens.map((option) => (
                              <button
                                  key={option}
                                  onClick={() => handleOptionClick(option)}
                                  className="flex justify-between align-middle mb-2 w-full border-2 border-white px-4 py-2 text-base text-white hover:bg-gray-100 hover:text-gray-900"
                              >
                                  <Image
                                      src={ChainLogo}
                                      alt="voyagerLogo"
                                      className="h-6 w-6 rounded-[50%]"
                                  />
                                  {option}

                              </button>
                          ))}
                      </div>
                  </div>
              )}
          </div>
    </>
  )
}

export default Dropdown