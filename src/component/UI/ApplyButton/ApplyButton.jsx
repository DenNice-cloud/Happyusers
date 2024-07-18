import React from "react";

const ApplyButton = () => {
  return (
    <div className="flex px-3 py-2 font-[400]">
      <button
        className="h-7 w-auto rounded flex text-white px-5 	
          bg-[#FF5C00]
          focus:bg-[#787878]
          hover:bg-[#FF8642]
          items-center justify-center 
          "
      >
        Apply
      </button>
    </div>
  );
};

export default ApplyButton;
