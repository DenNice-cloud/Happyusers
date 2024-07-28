import React, { useState } from "react";
import * as THREE from "three";
import { useNavigate, Link } from "react-router-dom";
import {
  CubeComponent,
  SceneOrientation,
  FloorAndBedroom,
  LeftIcon,
  RightIcon,
  ShareIcon,
  AddPhotoIcon,
  HelpIcon,
  StylusIcon,
  LightIcon,
  CloseIcon,
  InfoIcon,
  ChairIcon,
  LightGroupIcon,
  DoorOpenIcon,
  PartialIcon,
} from "component/ui";
import { TexturesMenu } from "component/menu";

const MainPage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedFace, setSelectedFace] = useState(null);
  const [color, setSelectedColor] = useState("");
  const [selectedTexture, setSelectedTexture] = useState("");

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
      key: "textures",
      path: "/textures/tiles",
      fill: activeButton === "textures" ? "#FFFFFF" : "#1C1C1C",
    },
    {
      icon: LightGroupIcon,
      text: "Lighting",
      key: "lighting",
      path: "/lighting",
      fill: activeButton === "lighting" ? "#FFFFFF" : "#1C1C1C",
    },
    {
      icon: ChairIcon,
      text: "Furniture",
      key: "furniture",
      path: "/furniture",
      fill: activeButton === "furniture" ? "#FFFFFF" : "#1C1C1C",
    },
    {
      icon: DoorOpenIcon,
      text: "Building",
      key: "building",
      path: "/building",
      fill: activeButton === "building" ? "#FFFFFF" : "#1C1C1C",
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
            <Link
              to={"/main"}
              className="bg-[#FFFFFF] font-[800] leading-4 text-base text-center h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex flex-col justify-center"
            >
              LOGO
              <br />
              ICON
            </Link>
            <div className="bg-[#FFFFFF] rounded-lg px-4 py-2 ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
              About project
              <InfoIcon className="ml-2" />
            </div>
          </div>

          <div className="flex flex-row space-x-6">
            <Link
              to={"/stylus"}
              className="bg-[#FFFFFF] h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center"
            >
              <StylusIcon />
            </Link>
            <Link
              to={"/notFoundPage"}
              className="bg-[#FFFFFF] font-[300] text-[12px] h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex flex-col items-center justify-center"
            >
              <LightIcon />
              Lighting
            </Link>
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

        {activeButton === "textures" && (
          <TexturesMenu
            setActiveButton={setActiveButton}
            setSelectedColor={setSelectedColor}
            setSelectedTexture={setSelectedTexture}
          />
        )}

        {(activeButton === "lighting" ||
          activeButton === "furniture" ||
          activeButton === "building") && (
          <div className="absolute rounded-lg w-[340px] min-h-[80px] bg-[#FFFFFF] mx-4 my-4 flex justify-center items-center">
            Unable to load this menu
          </div>
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
        selectedTexture={selectedTexture}
        setSelectedTexture={setSelectedTexture}
      />
    </div>
  );
};

export default MainPage;
