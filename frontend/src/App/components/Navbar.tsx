import React, { useState } from 'react';

// 1. รับ props ชื่อ onMenuClick เข้ามา
const Navbar = ({ onMenuClick }: { onMenuClick: (page: string) => void }) => {
  const [activeTab, setActiveTab] = useState('หน้าแรก');

  const handleClick = (pageName: string) => {
    setActiveTab(pageName); // เปลี่ยนสีปุ่มใน Navbar
    onMenuClick(pageName);  // **ส่งสัญญาณบอกหน้าหลักให้เปลี่ยนเนื้อหา**
  };

  const getBtnClass = (name: string) => {
    return activeTab === name
      ? "border-b-2 border-emerald-700 text-emerald-800 transition cursor-default" 
      : "border-b-2 border-transparent hover:text-emerald-600 hover:border-emerald-200 transition cursor-pointer"; 
  };

  return (
    <div className="font-sans text-gray-800 bg-white font-semibold text-lg">
      <div className="sticky top-0 z-50 w-full">
        <nav className="w-full px-6 py-4 flex justify-evenly items-center bg-white">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-24 h-24 object-contain" />
          </div>

          {/* แก้ onClick ให้เรียก handleClick แทน */}
          <button onClick={() => handleClick('หน้าแรก')} className={getBtnClass('หน้าแรก')}>
            หน้าแรก
          </button>

          <button onClick={() => handleClick('ฟีเจอร์')} className={getBtnClass('ฟีเจอร์')}>
            ฟีเจอร์
          </button>

          <button onClick={() => handleClick('บริการ')} className={getBtnClass('บริการ')}>
            บริการ
          </button>

          <button onClick={() => handleClick('คู่มือการใช้งาน')} className={getBtnClass('คู่มือการใช้งาน')}>
            คู่มือการใช้งาน
          </button>

          <button onClick={() => handleClick('บทความ')} className={getBtnClass('บทความ')}>
            บทความ
          </button>

          <button onClick={() => handleClick('ติดต่อเรา')} className={getBtnClass('ติดต่อเรา')}>
            ติดต่อเรา
          </button>

          <button className="bg-emerald-900 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition shadow-md">
            เข้าสู่ระบบ
          </button>
        </nav>
        <div className='bg-emerald-900 h-8 w-full'></div>
      </div>
    </div>
  );
};

export default Navbar;