import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

import './index.css';

// Pages
import Home from './App/Admin/Home/Home.tsx';
import Login from './App/Admin/Login/login.tsx';
import RegisterPage from './App/Admin/Login/register.tsx';
import ForgotPasswordPage from './App/Admin/Login/forgotpassword.tsx';
import CreatePasswordPage from './App/Admin/Login/createpassword.tsx';
import HomeMain from './App/Admin/Homemain/homemain.tsx';
import Adddormitory from './App/Admin/Homemain/adddormitory.tsx';

// --- แก้ไขจุดที่ 1: เปลี่ยนนามสกุลเป็น .jsx ให้ตรงกับไฟล์จริง ---
import UtilityCalculation from './App/Admin/Homemain/utilitycalculation.jsx'; 

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
        <Route path="/homemain/adddormitory" element={<Adddormitory />} />
        <Route path="/homemain/utilitycalculation" element={<UtilityCalculation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);