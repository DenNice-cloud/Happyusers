import React from "react";
import { NestMultiIcon } from "component/ui";

const FloorAndBedroom = () => {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <div className="text-sm flex justify-between items-center bg-white font-semibold h-[60px] w-[190px] rounded px-5">
        <NestMultiIcon />
        Floor 2 / Bedroom
      </div>
    </div>
  );
};

export default FloorAndBedroom;
