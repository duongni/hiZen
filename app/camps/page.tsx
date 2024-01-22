import React from "react";

import CampCard from "@/components/CampCard";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCamps } from "@/utils";

export default async function Parks() {
  const allCamps = await fetchCamps();
  //checking there is any data in allParks
  const isDataEmpty =
    !Array.isArray(allCamps) || allCamps.length < 1 || !allCamps;

  return (
    <div className="overflow-hidden max-container mx-auto object-contain mb-20">
      <div className="mt-12 w-full flex-between items-center flex-wrap gap-5 sm:px-16 px-6 py-4">
        <SearchBar />
        <div className="flex justify-start flex-wrap items-center gap-2">
          <CustomFilter title="activity" />
        </div>
      </div>
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
