import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./component/Pages/MainPage";

const App = () => {
  return (
    <Router>
      
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/Textures/:Tiles" element={<MainPage />}></Route>
          <Route path="/Textures/:Paint" element={<MainPage />}></Route>
          <Route path="/Textures/:Wallpaper" element={<MainPage />}></Route>
          
          <Route path="/lighting" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
