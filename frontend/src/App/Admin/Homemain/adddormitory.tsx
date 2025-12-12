import React from 'react';
import C_HomeMain from '../../components/C_homemain'; // Header เดิมของคุณ
import Footer from '../../components/Footerhomemain'; // Footer เดิมของคุณ

const Adddormitory = () => {
  return (
    // ✅ 1. Main Container: ใช้ Flex column และ min-h-screen เพื่อดัน Footer ลงล่างสุด
    <div className="flex flex-col min-h-screen bg-[#f8fcf8]"> 
      
      {/* --- Header --- */}
      <C_HomeMain />
      {/* ✅ 3. Form Content (ส่วนเนื้อหาตรงกลาง) */}
      <div className="flex-grow w-full max-w-6xl mx-auto px-6 py-10 flex flex-col items-center">
        
        {/* --- Section 1: รายละเอียดหอพัก --- */}
        <div className="w-full flex flex-col items-center mb-8">
            <h2 className="text-xl font-bold text-[#0e4b3a]">รายละเอียดหอพัก</h2>
            <p className="text-sm text-gray-500 mb-6">ชื่อและที่อยู่เพื่อนำไปแสดงในรายการใบแจ้งหนี้และใบเสร็จ</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-12">
                {/* Input: ชื่อ */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">ชื่อ<span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-lg h-12 px-4 focus:outline-none focus:border-[#0e4b3a] shadow-sm"
                    />
                </div>
                {/* Input: ที่อยู่ */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">ที่อยู่<span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-lg h-12 px-4 focus:outline-none focus:border-[#0e4b3a] shadow-sm"
                    />
                </div>
            </div>
        </div>

        {/* Divider (เส้นขีดคั่น) */}
        <div className="w-full border-b border-[#8daaa2] my-4 md:mx-12 opacity-50"></div>

        {/* --- Section 2: รายละเอียดอื่นๆ --- */}
        <div className="w-full flex flex-col items-center my-8">
            <h2 className="text-xl font-bold text-[#0e4b3a]">รายละเอียดอื่นๆ</h2>
            <p className="text-sm text-gray-500 mb-6">เบอร์โทรศัพท์และ เลขประจำตัวผู้เสียภาษี</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-12">
                {/* Input: เบอร์โทรศัพท์ */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">เบอร์โทรศัพท์<span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-lg h-12 px-4 focus:outline-none focus:border-[#0e4b3a] shadow-sm"
                    />
                </div>
                {/* Input: เลขประจำตัวผู้เสียภาษี */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">เลขประจำตัวผู้เสียภาษี</label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-lg h-12 px-4 focus:outline-none focus:border-[#0e4b3a] shadow-sm"
                    />
                </div>
            </div>
        </div>

        {/* Divider (เส้นขีดคั่น) */}
        <div className="w-full border-b border-[#8daaa2] my-4 md:mx-12 opacity-50"></div>

        {/* --- Section 3: กำหนดชำระค่าห้องและค่าปรับ --- */}
        <div className="w-full flex flex-col items-center my-8">
            <h2 className="text-xl font-bold text-[#0e4b3a]">กำหนดชำระค่าห้องและค่าปรับ</h2>
            <p className="text-sm text-gray-500 mb-6">วันที่ที่ต้องการให้ระบบเริ่มคิดค่าปรับอัตโนมัติกรณีเลยวันที่กำหนดชำระเงิน</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-12">
                {/* Input: ระบุวันสุดท้าย */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">ระบุวันสุดท้ายของการชำระเงิน<span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-lg h-12 px-4 focus:outline-none focus:border-[#0e4b3a] shadow-sm"
                    />
                </div>
                {/* Input: ค่าปรับ */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">ค่าปรับชำระล่าช้าต่อวัน<span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="w-full border border-gray-400 rounded-lg h-12 px-4 focus:outline-none focus:border-[#0e4b3a] shadow-sm"
                    />
                </div>
            </div>
        </div>

        {/* Divider สุดท้าย */}
        <div className="w-full border-b border-[#8daaa2] mt-4 mb-8 md:mx-12 opacity-50"></div>

        {/* --- Button: สร้าง --- */}
        <div className="w-full flex justify-end px-4 md:px-12">
            <button className="bg-[#7d7671] hover:bg-[#635d59] text-white px-10 py-2 rounded-md font-medium shadow transition-colors">
                สร้าง
            </button>
        </div>

      </div>

      {/* --- Footer --- */}
      <div className="w-full">
        <Footer />
      </div>

    </div> 
  );
}

export default Adddormitory ;