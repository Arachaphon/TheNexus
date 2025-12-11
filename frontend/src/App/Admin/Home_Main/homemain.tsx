import React, { useState } from 'react';
import C_HomeMain from '../../components/C_homemain';

const HomeMain = () => {
  // State สำหรับจัดการ Dropdown ตรง User Profile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (

      <main className="flex-1 bg-[#f4fce8] relative">
        {/* เรียกใช้ Component เนื้อหาหลักที่ import มา */}
        <C_HomeMain />
      </main>

  );
}

export default HomeMain;