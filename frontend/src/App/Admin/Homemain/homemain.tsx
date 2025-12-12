import React, { useState } from 'react';
import C_HomeMain from '../../components/C_homemain';
import Footer from '../../components/Footerhomemain';

const HomeMain = () => {
  const [activeTab, setActiveTab] = useState<'dormitory' | 'users'>('dormitory');

  return (
    // ✅ 1. ใช้ div ครอบทั้งหมด กำหนด min-h-screen เพื่อให้ความสูงอย่างน้อยเท่ากับหน้าจอ
    // และใช้ flex-col เพื่อเรียง Header -> Content -> Footer
    <div className="flex flex-col min-h-screen">
      
      {/* ส่วน Header (ความสูงตาม content) */}
      <C_HomeMain />

      {/* ✅ 2. ส่วน Content ตรงกลาง */}
      {/* ใช้ flex-grow (หรือ flex-1) เพื่อให้ส่วนนี้ขยายกินพื้นที่ว่างทั้งหมดระหว่าง Header และ Footer */}
      {/* ลบ h-5/6 ออก เพราะมันจะทำให้สูงเกินหรือขาดได้ */}
      <div className="flex-grow w-full p-6 relative bg-lime-50 flex flex-col">
        
        {/* --- Top Control Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 relative">
          
          {/* Spacer ด้านซ้าย */}
          <div className="hidden md:block w-[120px]"></div>

          {/* --- Center Tabs --- */}
            <div className="flex space-x-8 gap-4">
                {/* Tab 1: จัดการหอพัก */}
                <button
                onClick={() => setActiveTab('dormitory')}
                className={`flex items-center gap-4 pb-2 text-lg font-medium transition-colors border-b-2 ${
                    activeTab === 'dormitory'
                    ? 'text-[#0e4b3a] border-[#0e4b3a]' 
                    : 'text-gray-500 border-gray-300 hover:text-gray-700'
                }`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                จัดการหอพัก
                </button>

                {/* Tab 2: จัดการผู้ใช้งาน */}
                <button
                onClick={() => setActiveTab('users')}
                className={`flex items-center gap-4 pb-2 text-lg font-medium transition-colors border-b-2 ${
                    activeTab === 'users'
                    ? 'text-[#0e4b3a] border-[#0e4b3a]' 
                    : 'text-gray-500 border-gray-300 hover:text-gray-700'
                }`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                จัดการผู้ใช้งาน
                </button>
            </div>

          {/* --- Right Action Button --- */}
          <div className="mt-4 md:mt-0 w-[120px] flex justify-end">
            <a href="/homemain/adddormitory">
                <button className="bg-[#7d7671] hover:bg-[#68625d] text-white px-6 py-4 rounded-md shadow-sm text-sm font-medium transition-colors">
                เพิ่มหอพัก 
                </button>
            </a>
          </div>

        </div>

        {/* --- Content Area --- */}
        <div className="mt-6 flex-grow"> 
           {/* เพิ่ม flex-grow ตรงนี้ด้วยถ้าอยากให้ content ดันลงไปอีก แต่เบื้องต้นไม่จำเป็นเท่า parent div */}
          {activeTab === 'dormitory' ? (
            <div className="text-center text-gray-400 mt-20">
              {/* <p>Dormitory List Content goes here</p> */}
            </div>
          ) : (
            <div className="text-center text-gray-400 mt-20">
              {/* <p>User List Content goes here</p> */}
            </div>
          )}
        </div>

      </div>

      {/* ส่วน Footer (ติดล่างสุดอัตโนมัติ เพราะ div ตรงกลางดันลงมา) */}
      <div className="w-full">
        <Footer />
      </div>

    </div> 
  );
}

export default HomeMain;