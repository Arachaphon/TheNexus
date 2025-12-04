import React from 'react';


const Navbar = () => {
  return (
    
<div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col ">
      
      {/* --- Navbar --- */}
      <nav className="w-full px-6 py-4 flex justify-evenly items-center bg-white shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img 
            src="/logo.png" 
            alt="The Nexus Logo" 
            className="w-24 h-24 object-contain" 
            />
        </div>

        {/* Menu Links */}
    
          <ul className="border-b-2 border-transparent hover:border-teal-700 transition">หน้าแรก</ul>
          <ul className="hover:text-teal-700 cursor-pointer transition">ฟีเจอร์</ul>
          <ul className="hover:text-teal-700 cursor-pointer transition">บริการ</ul>
          <ul className="hover:text-teal-700 cursor-pointer transition">คู่มือการใช้งาน</ul>
          <ul className="hover:text-teal-700 cursor-pointer transition">บทความ</ul>
          <ul className="hover:text-teal-700 cursor-pointer transition">ติดต่อเรา</ul>

        {/* Login Button */}
        <button className="bg-teal-900 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-medium transition shadow-md">
          เข้าสู่ระบบ
        </button>
      </nav>
</div>
  );
};

export default Navbar;