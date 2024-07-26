import React from "react";
import loadIcon from "../IconLoader/iconLoader";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = ({ setActiveButton }) => {
  const ExpandIcon = loadIcon("ExpandIcon");
  const ExpandSmallIcon = loadIcon("ExpandSmallIcon");

  const location = useLocation();
  const { pathname } = location;
  const parts = pathname.split("/").filter((part) => part !== "");
  const navigate = useNavigate();

  const handleClick = (event, index) => {
    if (index < 1) {
      event.preventDefault();
      setActiveButton("");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-wrap items-center my-4">
      <Link
        to={`/`}
        className="flex items-center"
        onClick={(event) => handleClick(event, 0)}
      >
        <ExpandIcon />
        <span className="px-2 hover:text-[#FF5C00]">Surface name</span>
      </Link>

      {parts.map((part, index) => (
        <React.Fragment key={part}>
          <ExpandSmallIcon />
          <Link
            to={`/${parts.slice(0, index + 1).join("/")}`}
            className="px-2 hover:text-[#FF5C00]"
            onClick={(event) => handleClick(event, index)}
          >
            {index <= parts.length - 1 &&
              part.replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
