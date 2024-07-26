import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './component/pages/MainPage';
import NotFoundPage from './component/pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/textures/:path" element={<MainPage />} />
      {/* <Route path="/:menu" element={<MainPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
