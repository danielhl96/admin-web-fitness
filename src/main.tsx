import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard/Dashboard';
import './index.css';
import LoginPage from './Pages/Login';
import ProtectedRoute from './Auth/ProtectedRoute';
import { AuthProvider } from './Auth/AuthProvider';
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
