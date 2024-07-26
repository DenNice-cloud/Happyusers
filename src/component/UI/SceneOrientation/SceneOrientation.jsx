import React, { useState } from "react";
import loadIcon from "component/ui/IconLoader/iconLoader";

const SceneOrientation = () => {
  const [activeButtonOrientation, setActiveButtonOrientation] = useState("3D");
  const DirectionsIcon = loadIcon("DirectionsIcon");

  const handleButtonOrientationClick = (buttonKey) => {
    if (activeButtonOrientation === buttonKey) {
      setActiveButtonOrientation(null);
    } else {
      setActiveButtonOrientation(buttonKey);
    }
  };

  const buttonsVisual = [
    {
      icon: null,
      text: "2D",
      key: "2D",
      fillBG: activeButtonOrientation === "2D" ? "#FFFFFF" : "#B3B3B3",
    },
    {
      icon: null,
      text: "3D",
      key: "3D",
      fillBG: activeButtonOrientation === "3D" ? "#FFFFFF" : "#B3B3B3",
    },
    {
      icon: DirectionsIcon,
      text: "Person",
      key: "Person",
      fillBG: activeButtonOrientation === "Person" ? "#FFFFFF" : "#B3B3B3",
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 py-4">
      <div className="flex justify-around items-center bg-white text-[#B3B3B3] font-bold h-[60px] w-[223px] rounded">
        {buttonsVisual.map((btn, index) => {
          const IconComponent = btn.icon;

          return (
            <button
              key={index}
              className={`flex items-center justify-center rounded-full w-[32px] h-[32px] 
                ${
                  activeButtonOrientation === btn.key
                    ? "text-[#FFFFFF] bg-[#404040]"
                    : "text-[#B3B3B3] bg-[#FFFFFF]"
                }
              `}
              onClick={() => handleButtonOrientationClick(btn.key)}
            >
              {IconComponent ? (
                <IconComponent
                  style={{
                    fill:
                      activeButtonOrientation === btn.key
                        ? "#FFFFFF"
                        : "#B3B3B3",
                  }}
                />
              ) : (
                btn.text
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SceneOrientation;
