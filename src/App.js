import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, NotFoundPage } from 'component/pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Happyusers" element={<Navigate to="/" replace />} />

      <Route path="/textures/:path" element={<MainPage />} />
      <Route path="/lighting" element={<MainPage />} />
      <Route path="/furniture" element={<MainPage />} />
      <Route path="/building" element={<MainPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
