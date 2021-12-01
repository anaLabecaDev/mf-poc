import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Outlet } from './features/Outlet';
import { OutletList } from './features/OutletList';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/outlets" element={<OutletList />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/" element={<Navigate replace to="/outlets" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
