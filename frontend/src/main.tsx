import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

// Pages
import Home from './App/Admin/Home/Home.tsx';
import Login from './App/Admin/Login/login.tsx';
import RegisterPage from './App/Admin/Login/register.tsx';
import ForgotPasswordPage from './App/Admin/Login/forgotpassword.tsx';
import CreatePasswordPage from './App/Admin/Login/createpassword.tsx';
import HomeMain from './App/Admin/Home_Main/homemain.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/createpassword" element={<CreatePasswordPage />} />
        <Route path="/homemain" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
