import React from "react";
import ParkList from "./ParkList";

const Parks = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <ParkList />
    </div>
  );
};

export default Parks;
