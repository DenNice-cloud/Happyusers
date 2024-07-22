import React from "react";

const OwnTextureButton = () => {
  return (
    <button
      className="h-7 w-auto rounded flex text-white px-5
        bg-[#FF5C00]
        focus:bg-[#787878]
        hover:bg-[#FF8642]
        items-center justify-center 
        "
    >
      Use your own texture
    </button>
  );
};

export default OwnTextureButton;
