"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Park {
  fullName: string;
  parkCode: string;
  description: string;
  activities: { name: string }[];
  state: string;
  entranceFees: { cost: string; title: string }[];
  directionsInfor: string;
  directionsUrl: string;
  images: { url: string }[];
  designation: string;
}

async function getParkByCode(parkCode) {
  const res = await fetch(`http://localhost:3000/api/parks/${parkCode}`);
  const data = await res.json();
  return data.data.data;
}

const ParkDetails = () => {
  const [park, setPark] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { parkCode } = router.query; // Destructure within useEffect
    const fetchData = async () => {
      try {
        const parkData = await getParkByCode(parkCode);
        setPark(parkData);
      } catch (error) {
        console.error("Error fetching park details:", error.message);
        // Handle error or redirect to an error page
      }
    };

    if (parkCode) {
      fetchData();
    }
  }, [router.query]); // Watch for changes in the entire router.query object

  if (!park) {
    // Render loading state or error message
    return <div>Loading...</div>;
  }
  return (
    <section className=" max-container mx-auto bg-feature-bg bg-center bg-repeat">
      <div className="flex flex-col flexCenter ">
        <Image
          src="https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg"
          alt={park.designation}
          width={1459}
          height={994}
          className="flex flexCenter h-full w-fulll  bg-cover bg-center bg-no-repeat "
        />

        <div className="flex h-full flex-col items-start justify-between p-2 lg:px-20 ">
          <div className="flexCenter gap-4  ">
            <div className="flex flex-col gap-1">
              <h1 className="regular-24 sm:regular-32 md:regular-64  font-medium capitalize text-white md:-mt-[500px] sm:-mt-[350px] xs:-mt-[275px] pb-0">
                {park.fullName}
              </h1>
              <p className="regular-14 text-white">designation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-5  pb-15  flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="flex flex-col ">
          <p className="regular-16 text-gray-20">Location</p>
          <h4 className="bold-20 mt-1 whitespace-nowrap">Sedro-Woolley, WA</h4>
        </div>

        <div className="flex  flex-col">
          <p className="regular-16 text-gray-20">Email</p>
          <h4 className="bold-20 mt-1 whitespace-nowrap">
            noca_information@nps.gov
          </h4>
        </div>
      </div>
      <div className="my-5"></div>
      <div className="px-5">
        <div className="flex flex-wrap justify-between gap-4 lg:justify-items-center xl:justify-items-center 2xl:justify-items-center">
          <h2 className="bold-40 lg:bold-56 xl:max-w-[350px]">Description</h2>
          <p className="regular-16 text-gray-30 lg:max-w-[725px]  xl:max-w-[1000px] 2xl:max-w-[1000px]">
            Less than three hours from Seattle, an alpine landscape beckons.
            Discover communities of life adapted to moisture in the west and
            recurring fire in the east. Explore jagged peaks crowned by more
            than 300 glaciers. Listen to cascading waters in forested valleys.
            Witness a landscape sensitive to the Earth's changing climate. Help
            steward the ecological heart of the Cascades.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mt-10 lg:justify-items-center xl:justify-items-center 2xl:justify-items-center">
          <h2 className="bold-40 lg:bold-56 xl:max-w-[350px]">
            Direction Info
          </h2>
          <p className="regular-16 text-gray-30 lg:max-w-[725px] xl:max-w-[1000px] 2xl:max-w-[1000px]">
            North Cascades National Park Service Complex is open year-round. The
            park operational season is late May-late September, with limited
            services outside the operational season. The North Cascades Visitor
            Center in Newhalem, and the Golden West Visitor Center in Stehekin,
            are open late-May-September.
          </p>
        </div>
      </div>
      <div className="2xl:max-container relative  flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[450px] w-full items-start justify-start gap-8 overflow-x-auto  lg:h-[500px] xl:h-[640px]">
          <Image
            src="https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg"
            alt="North Cascades National Park"
            width={1459}
            height={994}
            className="h-full w-fulll min-w-[1100px]  bg-cover bg-no-repeat  md:rounded-3xl lg:rounded-5xl 2xl:rounded-5xl "
          />
          <Image
            src="https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg"
            alt="North Cascades National Park"
            width={1459}
            height={994}
            className="h-full w-fulll min-w-[1100px]  bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl "
          />
          <Image
            src="https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg"
            alt="North Cascades National Park"
            width={1459}
            height={994}
            className="h-full w-fulll min-w-[1100px]  bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl "
          />
          <Image
            src="https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg"
            alt="North Cascades National Park"
            width={1459}
            height={994}
            className="h-full w-fulll min-w-[1100px]  bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl "
          />
        </div>
      </div>
      <div className="flex flex-wrap px-5 justify-between gap-4 lg:justify-items-center xl:justify-items-center 2xl:justify-items-center">
        <h2 className="bold-40 lg:bold-56 xl:max-w-[350px]">Activities</h2>
        <p className="regular-16 text-gray-30 lg:max-w-[725px]  xl:max-w-[1000px] 2xl:max-w-[1000px]">
          Auto and ATV, Scenic Driving, Biking, Road Biking, Boating, Motorized
          Boating, Boat Tour, Camping, Backcountry Camping, Canoe or Kayak
          Camping, Car or Front Country Camping, Horse Camping (see also
          Horse/Stock Use), Group Camping, RV Camping, Climbing, Rock Climbing,
          Fishing, Guided Tours, Bus/Shuttle Guided Tour, Hands-On, Citizen
          Science, Hiking, Front-Country Hiking, Horse Trekking, Horseback
          Riding, Paddling, Canoe or Kayak Camping, Junior Ranger Program,
          Shopping, Bookstore and Park Store
        </p>
      </div>
      <div className="flex flex-row justify-around ">
        <div className="flex  flex-col my-10 px-5">
          <h4 className="bold-20 mt-1 whitespace-nowrap">Hours</h4>
          <ul className="regular-16 text-gray-30">
            <li>
              Monday: <span>All day</span>
            </li>
            <li>
              Tuesday: <span>All day</span>
            </li>
            <li>
              Wednesday: <span>All day</span>
            </li>
            <li>
              Thursday: <span>All day</span>
            </li>
            <li>
              Friday: <span>All day</span>
            </li>
            <li>
              Saturday: <span>All day</span>
            </li>
            <li>
              Sunday: <span>All day</span>
            </li>
          </ul>
        </div>
        <div className="flex  flex-col my-10 px-5">
          <h4 className="bold-20 mt-1 whitespace-nowrap">Fee</h4>
          <ul className="regular-16 text-gray-30">
            <li>
              Private Vehicle: <span>$30.00</span>
            </li>
            <li>
              Motorcycle: <span>$25</span>
            </li>
            <li>
              Per Person: <span>$15</span>
            </li>
            <li>
              Van: <span>$75</span>
            </li>
            <li>
              Mini-Bus: <span>$100</span>
            </li>
            <li>
              Motor Coach: <span>$200</span>
            </li>
            <li>
              Non-commercial Groups: <span>$30</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ParkDetails;
