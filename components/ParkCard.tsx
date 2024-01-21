"use client";

import { ParkDetails } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import ParkInfo from "./ParkInfo";

interface ParkDetailsProps {
  park: ParkDetails;
}
const ParkCard = ({ park }: ParkDetailsProps) => {
  const {
    fullName,
    parkCode,
    description,
    activities,
    states,
    images,
    designation,
  } = park;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-slate-50 hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {park.fullName}
        </h2>
      </div>
      <div className="relative w-full h-60 my-3 object-contain">
        <Image
          src={park.images[0].url}
          alt={park.fullName}
          fill
          priority //className="object-contain"
        />
      </div>
      <p className="text-gray-30 mb-3">{park.description.slice(0, 200)}... </p>
      <div className="hidden group-hover:flex absolute bottom-0 w-full z-10"></div>
      <CustomButton
        title="View More"
        containerStyles="w-full py-[10px] rounded-full bg-green-50"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        handleClick={() => setIsOpen(true)}
      />
      <ParkInfo
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        park={park}
      />
    </div>
  );
};

export default ParkCard;
