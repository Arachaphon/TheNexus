import React, { useState } from 'react';

// Component หลัก
export default function DormitoryLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // ในการใช้งานจริงควรเริ่มที่ false

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      
      {/* --- 1. Navbar Section --- */}
      <header className="bg-white px-6 py-3 flex justify-between items-center shadow-sm relative z-20">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="w-10 h-10 relative flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#bfa15f]" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l9-9 9 9M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                <path d="M12 12l4-4m0 0v4m0-4h-4" className="text-[#0e4b3a]" strokeWidth="2.5" />
             </svg>
          </div>
          {/* Logo Text */}
          <div className="flex flex-col leading-none select-none">
            <span className="text-[#bfa15f] font-bold text-xl tracking-wide">THE</span>
            <span className="text-[#bfa15f] font-bold text-xl tracking-wide">NEXUS</span>
          </div>
        </div>

        {/* User Profile & Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-gray-700 hover:text-black focus:outline-none border-b-2 border-transparent hover:border-gray-300 pb-1"
          >
            {/* User Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            
            {/* Username placeholder */}
            <span className="font-medium text-lg uppercase border-b-2 border-[#0e4b3a]">XXXXXXXX</span>
            
            {/* Chevron Down Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu Items */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden z-30">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 border-b border-gray-200 text-left">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                โปรไฟล์
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 text-left">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                ออกจากระบบ
              </button>
            </div>
          )}
        </div>
      </header>

      {/* --- 2. Sub-Header (Green Bar) --- */}
      <div className="bg-[#0e4b3a] text-white py-2 px-6 shadow-md z-10">
        <div className="container mx-auto">
            <h1 className="text-lg font-medium tracking-wide">Dormitory Information</h1>
        </div>
      </div>

      {/* --- 3. Main Content (Cream Background) --- */}
      <main className="flex-grow bg-[#fdfbf7] px-6 py-8">
        <div className="container mx-auto">
          
          {/* Content Card Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
            
            <div className="bg-[#f0f4f3] p-4 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#0e4b3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-[#0e4b3a] mb-2">ยินดีต้อนรับสู่ The Nexus</h2>
            <p className="text-gray-500 max-w-md mb-6">
              เลือกเมนูเพื่อจัดการข้อมูลหอพัก ตรวจสอบรายชื่อนิสิต หรือคำนวณค่าธรรมเนียม
            </p>
            
            <button className="px-6 py-2 bg-[#bfa15f] hover:bg-[#a88d50] text-white rounded shadow transition-colors">
              เริ่มต้นใช้งาน
            </button>

          </div>
        </div>
      </main>

      {/* --- 4. Footer --- */}
      <footer className="bg-[#0e4b3a] text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">&copy; 2025 The Nexus Dormitory Management System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}