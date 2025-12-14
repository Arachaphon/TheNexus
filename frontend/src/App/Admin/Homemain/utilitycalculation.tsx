import React, { useState } from 'react';
// ตรวจสอบ path ของ component ให้ถูกต้องตามโครงสร้างโปรเจคของคุณ
import C_HomeMain from '../../components/C_homemain'; 
import Footer from '../../components/Footerhomemain'; 

const UtilityCalculation = () => { // เปลี่ยนชื่อ function เป็น PascalCase ตาม Convention
  // --- States สำหรับควบคุม Modal ---
  const [showWaterModal, setShowWaterModal] = useState(false);
  const [waterCalcType, setWaterCalcType] = useState('meter_min'); // default: ตามมิเตอร์แบบมีขั้นต่ำ
  
  // States สำหรับเก็บค่าข้อมูล (ตัวอย่าง)
  const [waterPrice, setWaterPrice] = useState('');
  const [waterMinPrice, setWaterMinPrice] = useState('');

  const steps = [
    { id: 1, label: 'การคิดค่าน้ำ / ค่าไฟ' },
    { id: 2, label: 'บัญชีธนาคาร' },
    { id: 3, label: 'จัดการชั้น' },
    { id: 4, label: 'ผังห้อง' }, 
    { id: 5, label: 'ค่าห้อง' },
    { id: 6, label: 'สถานะห้อง' },
  ];

  // ฟังก์ชันปิด Modal
  const handleCloseModal = () => {
    setShowWaterModal(false);
  };

  // ฟังก์ชันบันทึก (กดตกลง)
  const handleSaveWater = () => {
    console.log("Saved:", { type: waterCalcType, price: waterPrice, min: waterMinPrice });
    setShowWaterModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fcf8] relative">
      
      <C_HomeMain />

      <div className="flex-grow w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center">

        {/* --- Header --- */}
        <h1 className="text-2xl font-bold text-[#0e4b3a] mb-10">ตั้งค่าหอพัก</h1>

        {/* --- Progress Bar (Wizard) --- */}
        <div className="w-full max-w-5xl mb-12">
          <div className="flex items-start justify-between w-full">
            {steps.map((step, index) => {
              const isActive = step.id === 1; 
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center relative z-10">
                    <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-[3px] transition-all duration-300 mb-3
                        ${isActive 
                            ? 'bg-[#fce96a] border-[#fdf6b2] text-[#5e4e00] ring-4 ring-[#fdf6b2]' 
                            : 'bg-[#e5e7eb] border-gray-200 text-gray-500 ring-4 ring-gray-200' 
                        }
                    `}>
                      {step.id}
                    </div>
                    <span className={`
                        text-sm text-center font-medium mt-2 whitespace-nowrap
                        ${isActive ? 'text-gray-800' : 'text-gray-400'}
                    `}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-[2px] bg-gray-300 mt-6 mx-2"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* --- Main Content Card --- */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-10 flex flex-col md:flex-row items-center border border-gray-100 min-h-[300px]">
          
          {/* Left Side: Text Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:border-r md:border-gray-300 md:pr-10">
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              การคำนวณค่าน้ำ/ค่าไฟมี 3 รูปแบบ
            </h3>
            <ul className="space-y-4 text-gray-700 text-sm list-disc pl-5 font-medium">
              <li>คิดตามหน่วยการใช้จริงจากมิเตอร์</li>
              <li>คิดตามหน่วยการใช้จริงแบบขั้นบันได</li>
              <li>คิดแบบเหมาจ่ายรายเดือน</li>
            </ul>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="w-full md:w-1/2 flex justify-center gap-12 pl-0 md:pl-10">
            
            {/* --- Water Button (เพิ่ม onClick) --- */}
            <button 
              onClick={() => setShowWaterModal(true)} 
              className="flex flex-col items-center group cursor-pointer focus:outline-none"
            >
              <div className="w-20 h-20 mb-3 transition-transform transform group-hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                 </svg>
              </div>
              <span className="text-gray-400 text-xs border border-gray-300 px-3 py-1 rounded-md group-hover:border-[#3b82f6] group-hover:text-[#3b82f6] transition-colors">
                ระบุการคิดค่าน้ำ
              </span>
            </button>

            {/* Fire Button */}
            <button className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 mb-3 transition-transform transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f97316" stroke="none" className="w-full h-full">
                   <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.243-2.143.5-3.5a6 6 0 0 1 1.5 2.5z" />
                </svg>
              </div>
              <span className="text-gray-400 text-xs border border-gray-300 px-3 py-1 rounded-md group-hover:border-[#f97316] group-hover:text-[#f97316] transition-colors">
                ระบุการคิดค่าไฟ
              </span>
            </button>

          </div>
        </div>

        {/* --- Next Button --- */}
        <div className="w-full max-w-4xl mt-8 flex justify-end">
             <button className="bg-[#7d7a75] hover:bg-[#6b6863] text-white text-sm font-medium px-8 py-2 rounded-lg shadow-sm transition-colors">
                ถัดไป
             </button>
        </div>

      </div>

      <div className="w-full">
        <Footer />
      </div>

      {/* ================= MODAL START ================= */}
      {showWaterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white w-[500px] rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                 </svg>
                 <span className="text-lg font-bold text-gray-800">ค่าน้ำ</span>
              </div>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6 space-y-5">
              
              {/* Dropdown Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  ประเภทการคิดเงิน <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select 
                    value={waterCalcType}
                    onChange={(e) => setWaterCalcType(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 appearance-none focus:outline-none focus:ring-1 focus:ring-stone-100 focus:border-stone-100"
                  >
                    <option value="meter_min">ตามมิเตอร์แบบมีขั้นต่ำ</option>
                    <option value="meter_actual">ตามมิเตอร์ที่ใช้จริง</option>
                    <option value="flat_rate">แบบเหมาจ่าย</option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Dynamic Inputs based on Selection */}
              
              {/* CASE 1: ตามมิเตอร์แบบมีขั้นต่ำ */}
              {waterCalcType === 'meter_min' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      ราคา <span className="text-red-500">*</span>
                    </label>
                    <div className="flex rounded-md border border-gray-300 overflow-hidden focus-within:ring-1 focus-within:ring-stone-100 focus-within:border-stone-100">
                      <input 
                        type="text" 
                        value={waterPrice}
                        onChange={(e) => setWaterPrice(e.target.value)}
                        className="flex-1 px-3 py-2 outline-none text-gray-700"
                      />
                      <span className="bg-gray-200 text-gray-500 px-4 py-2 text-sm border-l border-gray-300 flex items-center">
                        บาท / ยูนิต
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      ขั้นต่ำเรียกเก็บ <span className="text-red-500">*</span>
                    </label>
                    <div className="flex rounded-md border border-gray-300 overflow-hidden focus-within:ring-1 focus-within:ring-stone-100 focus-within:border-stone-100">
                      <input 
                        type="text" 
                        value={waterMinPrice}
                        onChange={(e) => setWaterMinPrice(e.target.value)}
                        className="flex-1 px-3 py-2 outline-none text-gray-700"
                      />
                      <span className="bg-gray-200 text-gray-500 px-4 py-2 text-sm border-l border-gray-300 flex items-center">
                        บาท
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* CASE 2: ตามมิเตอร์ที่ใช้จริง */}
              {waterCalcType === 'meter_actual' && (
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      ราคา <span className="text-red-500">*</span>
                    </label>
                    <div className="flex rounded-md border border-gray-300 overflow-hidden focus-within:ring-1 focus-within:ring-stone-100 focus-within:border-stone-100">
                      <input 
                        type="text" 
                        value={waterPrice}
                        onChange={(e) => setWaterPrice(e.target.value)}
                        className="flex-1 px-3 py-2 outline-none text-gray-700"
                      />
                      <span className="bg-gray-200 text-gray-500 px-4 py-2 text-sm border-l border-gray-300 flex items-center">
                        บาท / ยูนิต
                      </span>
                    </div>
                  </div>
              )}

              {/* CASE 3: แบบเหมาจ่าย */}
              {waterCalcType === 'flat_rate' && (
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      เหมาจ่าย <span className="text-red-500">*</span>
                    </label>
                    <div className="flex rounded-md border border-gray-300 overflow-hidden focus-within:ring-1 focus-within:ring-stone-100 focus-within:border-stone-100">
                      <input 
                        type="text" 
                        value={waterPrice}
                        onChange={(e) => setWaterPrice(e.target.value)}
                        className="flex-1 px-3 py-2 outline-none text-gray-700"
                      />
                      <span className="bg-gray-200 text-gray-500 px-4 py-2 text-sm border-l border-gray-300 flex items-center">
                        บาท
                      </span>
                    </div>
                  </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 flex justify-end pb-6">
              <button 
                onClick={handleSaveWater}
                className="bg-[#7d7a75] hover:bg-[#6b6863] text-white font-medium px-8 py-2 rounded-lg transition-colors shadow-sm"
              >
                ตกลง
              </button>
            </div>

          </div>
        </div>
      )}
      {/* ================= MODAL END ================= */}

    </div> 
  );
}

export default UtilityCalculation;