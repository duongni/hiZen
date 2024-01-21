import React from "react";

import CampCard from "@/components/CampCard";
import { fetchCamps } from "@/utils";

export default async function Parks() {
  const allCamps = await fetchCamps();
  //checking there is any data in allParks
  const isDataEmpty =
    !Array.isArray(allCamps) || allCamps.length < 1 || !allCamps;

  return (
    <div className="overflow-hidden max-container mx-auto object-contain mb-20">
      <div>
        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14;">
              {allCamps?.map((camp) => (
                <CampCard camp={camp} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </div>
  );
}
