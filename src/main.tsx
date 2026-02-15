import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard.tsx';
import './index.css';
import LoginPage from './Login.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
