import React from "react";

import ParkCard from "@/components/ParkCard";
import { fetchParks } from "@/utils";

export default async function Parks() {
  const allParks = await fetchParks();
  //checking there is any data in allParks
  const isDataEmpty =
    !Array.isArray(allParks) || allParks.length < 1 || !allParks;

  return (
    <div className="overflow-hidden max-container mx-auto object-contain">
      {!isDataEmpty ? (
        <section>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14;">
            {allParks?.map((park) => (
              <ParkCard park={park} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        </div>
      )}
    </div>
  );
}
