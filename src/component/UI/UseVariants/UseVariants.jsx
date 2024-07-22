import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UseVariants = () => {
  const [activeButton, setActiveButton] = useState("Tiles");
  const navigate = useNavigate();

  const handleClick = (button) => {
    setActiveButton(button);
    navigate(`/Textures/${button}`);
  };

  // OBJECT
  const variants = ["Tiles", "Paint", "Wallpaper"];
  // OBJECT

  return (
    <div className="py-4">
      <div className="bg-[#FFFFFF] flex item-center justify-between">
        {variants.map(variant => (
          <Link
          to={`/Textures/${variant}`}
          className={`rounded px-3 py-1 ${
            activeButton === `${variant}` && "bg-[#FECC00] font-bold"
          }`}
          onClick={() => handleClick(`${variant}`)}
        >
          {variant}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default UseVariants;
