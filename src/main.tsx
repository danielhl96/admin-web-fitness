import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard.tsx';
import './index.css';
import LoginPage from './Login.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import { AuthProvider } from './AuthProvider.tsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </AuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
