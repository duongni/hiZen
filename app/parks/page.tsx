import React from "react";

import ParkCard from "@/components/ParkCard";
import SearchBar from "@/components/SearchBar";
import { fetchParks } from "@/utils";

export default async function Parks({ searchParams }: { searchParams: any }) {
  const allParks = await fetchParks({
    state: searchParams.state || "",
  });
  //checking there is any data in allParks
  const isDataEmpty =
    !Array.isArray(allParks) || allParks.length < 1 || !allParks;

  return (
    <div className="overflow-hidden max-container mx-auto xs:mt-5 object-contain mb-20">
      <div className="mt-1 grid justify-center min-w-[300px] sm:px-16 px-6 py-2">
        <SearchBar />
        <div className="flex justify-start flex-wrap items-center gap-2"></div>
      </div>
      <div>
        {" "}
        {!isDataEmpty ? (
          <section>
            <div className="grid 3xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
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
    </div>
  );
}
