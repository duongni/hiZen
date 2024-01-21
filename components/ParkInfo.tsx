"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { ParkDetails } from "@/types";

interface ParkDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  park: ParkDetails;
}

const ParkInfo = ({ isOpen, closeModel, park }: ParkDetailsProps) => {
  return (
    <section className=" max-container mx-auto bg-feature-bg bg-center bg-repeat">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all flex flex-col">
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-green-50 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={park.images[0].url}
                        alt={park.fullName}
                        fill
                        priority
                        //className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-white rounded-lg">
                        <Image
                          src={park.images[1].url}
                          alt={park.fullName}
                          fill
                          priority
                          //className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-white rounded-lg">
                        <Image
                          src={park.images[2].url}
                          alt={park.fullName}
                          fill
                          priority
                          //className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-white rounded-lg">
                        <Image
                          src={park.images[3].url}
                          alt={park.fullName}
                          fill
                          priority
                          //className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex-col gap-2 mt-3">
                    <h1 className="text-[22px] leading-[26px] font-bold capitalize">
                      {park.name}
                    </h1>
                    <p className="text-gray-50 my-3">{park.description}</p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <h4 className=" capitalize font-semibold">Activities</h4>

                      <p className=" text-[12px] text-gray-50 -mt-2">
                        {park.activities
                          .map((activity) => activity.name)
                          .join(", ")}
                      </p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4"></div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default ParkInfo;
