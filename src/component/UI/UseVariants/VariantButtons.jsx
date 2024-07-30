import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const VariantButtons = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const [activeButton, setActiveButton] = useState(lastSegment);
  const navigate = useNavigate();

  const handleClick = (button) => {
    setActiveButton(button);
    navigate(`/textures/${button}`);
  };

  const variants = ["tiles", "paint", "wallpaper"];

  return (
    <div className="py-4">
      <div className="bg-[#FFFFFF] flex item-center justify-between">
        {variants.map((variant) => (
          <Link
            key={variant}
            to={`/textures/${variant}`}
            className={`rounded px-3 py-1 ${
              activeButton === `${variant}` && "bg-[#FECC00] font-bold"
            }`}
            onClick={() => handleClick(`${variant}`)}
          >
            {variant.replace(/\b\w/g, (firstLetter) =>
              firstLetter.toUpperCase()
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VariantButtons;
