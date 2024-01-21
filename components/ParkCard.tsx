import { ParkDetails } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";

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

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl;">
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
      <p>{park.description.slice(0, 200)}... </p>
      <CustomButton />
    </div>
  );
};

export default ParkCard;
