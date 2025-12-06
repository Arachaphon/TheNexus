import { faFacebook, faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#fef3c7] text-gray-800 py-10 mt-auto">
          <div className="container mx-auto px-6 max-w-6xl">
            
            {/* --- ส่วนหัวข้อด้านบน --- */}
            <div className="flex flex-col md:flex-row justify-end items-end mb-2">
                <div className="text-right">
                    <h2 className="font-bold text-lg md:text-xl text-black">TheNexus Dormitory Management System</h2>
                    <h3 className="font-bold text-base md:text-lg text-black">ระบบบริหารจัดการหอพัก</h3>
                </div>
            </div>

            {/* เส้นขีดคั่น */}
            <hr className="border-gray-500 mb-8" />

            {/* --- ส่วนเนื้อหาหลัก (3 คอลัมน์) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* คอลัมน์ 1: Logo */}
                <div className="flex items-start justify-center md:justify-start">
                    <img 
                        src="/logo.png" 
                        alt="The Nexus Logo" 
                        className="w-48 h-auto object-contain" 
                    />
                </div>

                {/* คอลัมน์ 2: รายละเอียด */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg text-black">TheNexus Dormitory</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        บริหารหอพักและอพาร์ตเมนต์ได้ง่ายขึ้น<br/>
                        ลดความผิดพลาดและประหยัดเวลา<br/>
                        เพื่อให้คุณมีเวลาโฟกัสกับการพัฒนาธุรกิจ<br/>
                        และการเติบโตอย่างยั่งยืน
                    </p>
                </div>

                {/* คอลัมน์ 3: ช่องทางการติดต่อ */}
                <div className="flex flex-col gap-2 pl-0 md:pl-8">
                    <h4 className="font-bold text-lg text-black">ช่องทางการติดต่อ</h4>
                    <ul className="space-y-2 text-sm font-medium text-gray-800">
                        <li className="flex items-center gap-2">
                            <i className='bxrd  bx-phone bx-invert-opacity'></i> 
                            <span>012-345-6789</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className='bxrd  bx-envelope bx-invert-opacity'></i> 
                            <span>TheNexus@TheNexus.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl text-black" />
                            <span>TheNexus</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLine} className="text-xl text-black" />
                            <span>TheNexus</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- ส่วนล่างสุด (ลิขสิทธิ์ / Links) --- */}
            <div className="mt-10 pt-4 border-t border-gray-400 flex justify-center md:justify-end gap-4 text-xs font-semibold text-gray-700">
                <a href="#" className="hover:underline">Terms Condition</a>
                <span>|</span>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>

        </div>
      </footer>
  );
};

export default Footer;