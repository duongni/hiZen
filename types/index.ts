import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface ParkDetails {
  id: string;
  parkCode: string;
  fullName: string;
  states: string;
  designation: string;
  description: string;
  images: { url: string }[];
  activities: { name: string }[];
  entranceFees: { cost: string; title: string }[];
  directionsInfor: string;
  directionsUrl: string;
}
