"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

async function getParks() {
  const res = await fetch("http://localhost:3000/api/parks");
  const data = await res.json();

  return data.data.data;
}

const ParkList = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getParks();
        setParks(data);
      } catch (error) {
        console.error("Error fetching parks:", error.message);
        // Handle error or set a default value for parks
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

  // Function to filter parks based on activities
  const filterParksByActivities = (parks, desiredActivities) => {
    return parks.filter((park) =>
      park.activities.some((activity) =>
        desiredActivities.includes(activity.name)
      )
    );
  };
  // Function to get filtered activities for display
  const getFilteredActivities = (park, desiredActivities) => {
    return park.activities
      .filter((activity) => desiredActivities.includes(activity.name))
      .map((activity) => activity.name)
      .join(", ");
  };

  return (
    <Link
      href="/"
      className="max-container mx-auto lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-10 flex-col w-300 mb-10 object-contain"
    >
      {filterParksByActivities(parks, [
        "Stargazing",
        "Biking",
        "Picnicking",
        "Hiking",
        "Paddling",
        "Kayaking",
        "Stand Up Paddleboarding",
      ]).map((park) => (
        <div
          key={park.id}
          className="mx-auto max-w-md overflow-hidden rounded-xl bg-gay-50 shadow-lg  mt-10 h-[500px]"
        >
          <div className="md:flex flexCenter flex-col">
            <div className="">
              <Image
                src={park.images[0].url}
                alt={park.fullName}
                width={450}
                height={150}
                className="object-cover bg-centermd:w-full h-48"
              />
            </div>
            <div className="p-8">
              <h2 className="mt-1 block text-lg font-bold leading-light text-green-50">
                {park.fullName}
              </h2>
              <p className="uppercase text-xs mt-1 mb-3 text-green-50">
                {park.states}, {park.designation}
              </p>
              <p className="mt-2 text-gray-30">
                {park.description.slice(0, 200)}...
              </p>
              <p className="text-xs flex flex-col gap-4 text-gray-30 mt-5">
                Activities:{" "}
                {getFilteredActivities(park, [
                  "Stargazing",
                  "Biking",
                  "Picnicking",
                  "Hiking",
                  "Paddling",
                  "Kayaking",
                  "Stand Up Paddleboarding",
                ])}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
};

export default ParkList;
