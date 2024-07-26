import React, { useState } from "react";
import CubeComponent from "component/ui/CubeComponent/CubeComponent";
import TexturesMenu from "component/menu/TexturesMenu/TexturesMenu";
import * as THREE from "three";
import { useNavigate, useLocation } from "react-router-dom";
import loadIcon from "component/ui/IconLoader/iconLoader";
import SceneOrientation from "component/ui/SceneOrientation/SceneOrientation";
import FloorAndBedroom from "component/ui/FloorAndBedroom/FloorAndBedroom";

const MainPage = () => {
  // const location = useLocation();
  // const fullPath = location.pathname;
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
  const [selectedFace, setSelectedFace] = useState(null);
  const [color, setSelectedColor] = useState("");
  console.log(color);

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

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const materials = [
    new THREE.MeshPhongMaterial({ color: 0xff0000 }),
    new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
    new THREE.MeshPhongMaterial({ color: 0x0000ff }),
    new THREE.MeshPhongMaterial({ color: 0xffff00 }),
    new THREE.MeshPhongMaterial({ color: 0x00ffff }),
    new THREE.MeshPhongMaterial({ color: 0xff00ff }),
  ];
  const cube = new THREE.Mesh(geometry, materials);

  return (
    <div className="MainPage">
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
                  <IconComponent
                    fill={btn.fill}
                    className="mt-[5px]"
                  />
                  <span className="text-end">{btn.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeButton === "Textures" && (
          <TexturesMenu
            setSelectedColor={setSelectedColor}
          />
        )}
      </header>

      <SceneOrientation />
      <FloorAndBedroom />

      <CubeComponent
        indexFace={null}
        selectedFace={selectedFace}
        geometry={geometry}
        setSelectedFace={setSelectedFace}
        cube={cube}
        setSelectedColor={setSelectedColor}
        color={color}
      />
    </div>
  );
};

export default MainPage;
