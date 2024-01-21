import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  onClick?: string;
}
export interface ParkDetails {
  id: string;
  parkCode: string;
  fullName: string;
  states: string;
  url: string;
  designation: string;
  description: string;
  images: { url: string }[];
  activities: {
    id: string;
    name: string;
  }[];
  operatingHours: { description: string }[];
  directionsInfo: string;
  directionsUrl: string;
  name: string;
}
