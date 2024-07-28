import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from 'component/pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/textures/:path" element={<MainPage />} />
      <Route path="/lighting" element={<MainPage />} />
      <Route path="/furniture" element={<MainPage />} />
      <Route path="/building" element={<MainPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
