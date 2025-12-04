import React from 'react';


const Navbar = () => {
  return (
    
<div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
      
      {/* --- Navbar --- */}
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img 
            src="/logo.png" 
            alt="The Nexus Logo" 
            className="w-32 h-32 object-contain" 
            />
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-teal-700 cursor-pointer border-b-2 border-transparent hover:border-teal-700 transition">หน้าแรก</li>
          <li className="hover:text-teal-700 cursor-pointer transition">ฟีเจอร์</li>
          <li className="hover:text-teal-700 cursor-pointer transition">บริการ</li>
          <li className="hover:text-teal-700 cursor-pointer transition">คู่มือการใช้งาน</li>
          <li className="hover:text-teal-700 cursor-pointer transition">บทความ</li>
          <li className="hover:text-teal-700 cursor-pointer transition">ติดต่อเรา</li>
        </ul>

        {/* Login Button */}
        <button className="bg-teal-900 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium transition shadow-md">
          เข้าสู่ระบบ
        </button>
      </nav>
</div>
  );
};

export default Navbar;