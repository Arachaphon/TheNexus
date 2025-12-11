import React, { useState } from 'react';

// Component หลัก
export default function DormitoryLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // ตั้งเป็น true เพื่อให้เห็นเมนูตามรูป (ในการใช้งานจริงควรเริ่มที่ false)

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 1. Navbar Section */}
      <header className="bg-white px-6 py-3 flex justify-between items-center shadow-sm relative z-20">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* Mockup Logo Icon (รูปบ้าน/ลูกศร) */}
          <div className="w-10 h-10 relative flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#bfa15f]" stroke="currentColor" strokeWidth="2">
                <path d="M3 12l9-9 9 9M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                <path d="M12 12l4-4m0 0v4m0-4h-4" className="text-[#0e4b3a]" strokeWidth="2.5" />
             </svg>
          </div>
          {/* Logo Text */}
          <div className="flex flex-col leading-none">
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
            
            <span className="font-medium text-lg uppercase border-b-2 border-[#0e4b3a]">XXXXXXXX</span>
            
            {/* Chevron Down */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden z-30">
              <a href="#profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 border-b border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                โปรไฟล์
              </a>
              <a href="#logout" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                ออกจากระบบ
              </a>
            </div>
          )}
        </div>
      </header>

      {/* 2. Sub-Header (Dark Green Bar) */}
      <div className="bg-[#0e4b3a] text-white py-2 px-6 shadow-md z-10">
        <div className="container mx-auto sm:mx-0">
            <h1 className="text-lg font-medium tracking-wide text-center sm:text-left">Dormitory</h1>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <main className="flex-1 bg-[#f4fce8] relative">
        {/* พื้นที่สำหรับใส่เนื้อหาอื่นๆ */}
        <div className="container mx-auto p-6">
           {/* Content goes here */}
        </div>
      </main>
    </div>
  );
}