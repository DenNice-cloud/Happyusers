import React, { useState } from "react";
import CubeComponent from "./component/CubeComponent";
import FilterSearch from "./component/UI/FilterSearch/FilterSearch";
import ApplyButton from "./component/UI/ApplyButton/ApplyButton";
import OwnTextureButton from "./component/UI/OwnTextureButton/OwnTextureButton";
import SaveButton from "./component/UI/SaveButton/SaveButton";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as HeartIcon } from "./icons/heart_check.svg";

import loadIcon from "./component/UI/IconLoader/iconLoader";

const App = () => {
  const [click, setClick] = useState(false);
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

  return (
    <div className="App ">
      {/* <header className="flex flex-row justify-between px-4 py-4">
        <div className="flex flex-row space-x-6">
          <div className="font-[800] leading-4 text-base text-center h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex flex-col justify-center">
            LOGO
            <br />
            ICON
          </div>

          <div className="rounded-lg px-4 py-2 ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
            About project
            <InfoIcon className='ml-2' />
          </div>
        </div>

        <div className="flex flex-row space-x-6">
          <button className="h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
            <StylusIcon />
          </button>

          <button className="font-[300] text-[12px] h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex flex-col items-center justify-center">
            <LightIcon />
            Lighting
          </button>

          <div className="h-16 w-auto rounded-lg px-4 py-8 ring-1 ring-slate-900/5 shadow-xl space-x-2 flex items-center">
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

          <button className="h-16 w-16 rounded-lg ring-1 ring-slate-900/5 shadow-xl flex items-center justify-center">
            <CloseIcon />
          </button>
        </div>
      </header>

      <div className="flex px-4">
        <div className="h-16 w-auto rounded-lg px-3 py-8 ring-1 ring-slate-900/5 shadow-xl space-x-2 flex items-center">
          <button
            className="h-14 w-16 rounded-lg flex flex-col items-center justify-center 
          focus:bg-[#333333] focus:text-white"
          >
            <PartialIcon />
            textures
          </button>

          <button className="h-12 w-14 rounded-lg flex flex-col items-center justify-center">
            <LightGroupIcon />
            lighting
          </button>

          <button className="h-12 w-14 rounded-lg flex flex-col items-center justify-center">
            <ChairIcon />
            furniture
          </button>

          <button className="h-12 w-14 rounded-lg flex flex-col items-center justify-center">
            <DoorOpenIcon />
            building
          </button>
        </div>
      </div> */}

      <FilterSearch />
      <ApplyButton />
      <OwnTextureButton />
      <SaveButton />

      {/* <div className="flex px-4 py-4">
        <div className="flex items-center justify-center search-layer relative">
          <input
            type="text"
            className="px-3 py-2 border rounded text-[#1C1C1C]
                        focus:placeholder-[#787878] focus:border-[#FF5C00] focus:text-[#FF5C00] focus:outline-none
                        hover:placeholder-[#787878] hover:border-[#FF8642] hover:text-[#FF8642] pr-10"
            placeholder="Search"
          />

          <div className="bg-red absolute right-5 ">
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 fill-current text-[#1C1C1C] hover:text-[#FF8642] focus:text-[#FF5C00]" />
          </div>
        </div>
      </div> */}
{/* <div className="flex px-3 py-2 font-[500]">
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
    </div> */}
    {/* <div className="flex px-3 py-2">
      <button
        className={`save-layer h-7 w-auto rounded
        border
        ${click ? 'text-[#787878]' : 'text-[#1C1C1C]'}
        hover:border-[#FF5C00] 
        `}
        onClick={() => setClick(!click)}
      >
        <span className={`flex items-center justify-center px-5 `}>
          Saved
          <HeartIcon
            className="ml-2"
          />
        </span>
      </button>
    </div> */}


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
