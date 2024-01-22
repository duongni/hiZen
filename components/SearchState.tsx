"use client";

import { Combobox, Transition } from "@headlessui/react";
import { IoLocationOutline } from "react-icons/io5";
import { useState, Fragment } from "react";
import Image from "next/image";
import { SearchStateProps } from "@/types";

const SearchState = ({ state, setState }: SearchStateProps) => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <IoLocationOutline width={20} height={20} />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-slate-50 outline-none cursor-pointer text-sm"
            placeholder="WA"
            displayValue={(state: string) => state}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition as={Fragment}></Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchState;
