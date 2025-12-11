import React, { useState } from 'react';
import C_HomeMain from '../../components/C_homemain';

const HomeMain = () => {
  // State สำหรับจัดการ Dropdown ตรง User Profile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (

      <main className="flex-1 relative">
        <C_HomeMain />
      </main>

  );
}

export default HomeMain;