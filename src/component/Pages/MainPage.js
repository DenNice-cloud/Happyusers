import React, { useState } from "react";
import CubeComponent from "../UI/CubeComponent/CubeComponent";
import ApplyButton from "../UI/ApplyButton/ApplyButton";
import TexturesMenu from "../Menu/TexturesMenu/TexturesMenu";

// import { ReactComponent as SearchIcon } from "./../../icons/search.svg";
// import { ReactComponent as HeartIcon } from "./../../icons/heart_check.svg";
import { useNavigate } from "react-router-dom";

import loadIcon from "../UI/IconLoader/iconLoader";
import { color } from "three/examples/jsm/nodes/Nodes.js";

const App = () => {
  // const [click, setClick] = useState(false);
  const [intersects, setIntersects] = useState(false);
  const LeftIcon = loadIcon("LeftIcon");
  const RightIcon = loadIcon("RightIcon");
  const ShareIcon = loadIcon("ShareIcon");
  const AddPhotoIcon = loadIcon("AddPhotoIcon");
  const HelpIcon = loadIcon("HelpIcon");

  const StylusIcon = loadIcon("StylusIcon");
  const LightIcon = loadIcon("LightIcon");
  const CloseIcon = loadIcon("CloseIcon");
  const InfoIcon = loadIcon("InfoIcon");

  const ChairIcon = loadIcon("ChairIcon");
  const LightGroupIcon = loadIcon("LightGroupIcon");
  const DoorOpenIcon = loadIcon("DoorOpenIcon");
  const PartialIcon = loadIcon("PartialIcon");

  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (path, buttonKey) => {
    if (activeButton === buttonKey) {
      setActiveButton(null);
      navigate("/");
    } else {
      setActiveButton(buttonKey);
      navigate(path);
    }
  };

  console.log(activeButton);

// OBJECT
  const buttons = [
    {
      icon: PartialIcon,
      text: "Textures",
      key: "Textures",
      path: "/Textures/Tiles",
      fill: activeButton === "Textures" ? "#FFFFFF" : "#1C1C1C",
    },
    {
      icon: LightGroupIcon,
      text: "Lighting",
      key: "Lighting",
      path: "/Lighting",
      fill: activeButton === "Lighting" ? "#FFFFFF" : "#1C1C1C",
    },
    {
      icon: ChairIcon,
      text: "Furniture",
      key: "Furniture",
      path: "/Furniture",
      fill: activeButton === "Furniture" ? "#FFFFFF" : "#1C1C1C",
    },
    {
      icon: DoorOpenIcon,
      text: "Building",
      key: "Building",
      path: "/Building",
      fill: activeButton === "Building" ? "#FFFFFF" : "#1C1C1C",
    },
  ];

  return (
    <div className="App">
      <header className="fixed top-0 left-0 right-0">
        <div className="flex flex-row justify-between px-4 py-4">
          <div className="flex flex-row space-x-6">
            <div className="bg-[#FFFFFF] font-[800] leading-4 text-base text-center h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex flex-col justify-center">
              LOGO
              <br />
              ICON
            </div>

            <div className="bg-[#FFFFFF] rounded-lg px-4 py-2 ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
              About project
              <InfoIcon className="ml-2" />
            </div>
          </div>

          <div className="flex flex-row space-x-6">
            <button className="bg-[#FFFFFF] h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
              <StylusIcon />
            </button>

            <button className="bg-[#FFFFFF] font-[300] text-[12px] h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex flex-col items-center justify-center">
              <LightIcon />
              Lighting
            </button>

            <div className="bg-[#FFFFFF] h-16 w-auto rounded-lg px-4 py-8 ring-1 ring-slate-900/5 shadow-xl space-x-2 flex items-center">
              <button className="opacity-25 px-2 py-2 flex items-center justify-center hover:opacity-100">
                <LeftIcon />
              </button>
              <button className="opacity-25 px-2 py-2 flex items-center justify-center hover:opacity-100">
                <RightIcon />
              </button>
              <button className="px-2 py-2 flex items-center justify-center">
                <ShareIcon />
              </button>
              <button className="px-2 py-2 flex items-center justify-center">
                <AddPhotoIcon />
              </button>
              <button className="px-2 py-2 flex items-center justify-center">
                <HelpIcon />
              </button>
            </div>

            <button className="bg-[#FFFFFF] h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="flex px-4">
          <div className="bg-[#FFFFFF] h-16 w-auto rounded-lg px-3 py-8 ring-1 ring-slate-900/5 shadow-xl space-x-2 flex items-center">
            {buttons.map((btn, index) => {
              const IconComponent = btn.icon;

              return (
                <button
                  key={index}
                  className={`h-14 w-[73px] rounded-lg flex flex-col items-center justify-between ${
                    activeButton === btn.key
                      ? "text-[#FFFFFF] bg-[#1C1B1FCC]"
                      : "text-[#1C1B1FCC]"
                  }`}
                  onClick={() => handleButtonClick(btn.path, btn.key)}
                >
                  <IconComponent fill={btn.fill} className='mt-[5px]'/>
                  <span className="text-end">{btn.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeButton === "Textures" && <TexturesMenu />}
      </header>

      {intersects && (
        <div>
          {["red", "green", "blue", "grey"].map((valueColor) => (
            <button
              key={valueColor}
              // onClick={(event) => setColor(event, valueColor)}
            >
              {valueColor}
            </button>
          ))}
        </div>
      )}

      <CubeComponent setIntersects={setIntersects} />
    </div>
  );
};

export default App;
