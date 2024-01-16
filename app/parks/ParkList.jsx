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

  return (
    <>
      {parks.map((park) => (
        <div key={park.id} className="flexCenter flex-col">
          <Image
            src={park.images[0].url}
            alt={park.fullName}
            width={100}
            height={100}
          />
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            {park.fullName}
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            {park.description}
          </p>
          <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
            {park.state}
          </p>
        </div>
      ))}
    </>
  );
};

export default ParkList;
