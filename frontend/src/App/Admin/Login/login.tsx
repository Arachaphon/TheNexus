import React from 'react';

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden font-sans">
      
      {/* --- Background Decorative Shapes (ส่วนตกแต่งพื้นหลัง) --- */}
      {/* ใช้สีเดิม bg-emerald-900 ตามคำสั่ง ห้ามเปลี่ยน */}
      
      {/* Top Left Shape: รูปทรงด้านบนซ้าย ปรับมุมให้เกิดเส้นทแยงมุมลงมา */}
      <div className="absolute -top-[1%] -left-[15%] w-[90%] h-[25%] bg-emerald-900 transform rotate-[25deg] rounded-[60px] z-0"></div>
      
      {/* Bottom Left Shape: รูปทรงด้านล่างซ้าย ขนานกับชิ้นบน */}
        <div className="absolute -bottom-[5%] -left-[20%] w-[150%] h-[25%] bg-emerald-900 transform rotate-[25deg] rounded-[60px] z-0"></div>

      {/* --- Main Content Container --- */}
        <div className="z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
            
            {/* Left Side: Image (รูปภาพคนทำงาน) */}
            {/* วางทับอยู่บนช่องว่างระหว่าง Shape ทั้งสอง */}
            <div className="hidden lg:block relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl">
                    <img 
                    src="/login.png" 
                    alt="Office Coworking" 
                    className="w-full h-[700px] object-cover"
                    />
                </div>
                </div>

                {/* Right Side: Logo & Form */}
                <div className="flex flex-col items-center lg:items-end w-full">
                
                {/* Logo Area: จัดให้อยู่เหนือฟอร์มและตรงกัน */}
                <div className="w-full max-w-md flex justify-center lg:justify-end mb-6">
                    <img 
                        src="/logo.png" 
                        alt="The Nexus Logo" 
                        className="w-56 h-auto object-contain" 
                    />
                </div>

                {/* Login Card Form */}
                {/* ใช้สีเดิม bg-lime-50 ตามคำสั่ง */}
                <div className="bg-lime-50 w-full max-w-md p-8 rounded-[30px] shadow-xl relative">
                    
                    <form className="space-y-6">
                    
                    {/* Username Input */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-2 text-lg">
                        ชื่อผู้ใช้ / อีเมล
                        </label>
                        <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-lime-50 outline-none bg-white shadow-sm"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-2 text-lg">
                        รหัสผ่าน
                        </label>
                        <input 
                        type="password" 
                        className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-lime-50 outline-none bg-white shadow-sm"
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                        <span className="text-gray-700">บันทึกรหัสผ่าน</span>
                        </label>
                        <a href="#" className="text-gray-700 underline hover:text-gray-900">
                        ลืมรหัสผ่าน
                        </a>
                    </div>

                    {/* Login Button */}
                    {/* ใช้สีเดิม bg-sky-600 ตามคำสั่ง */}
                    <div className="flex justify-end pt-2">
                        <button 
                        type="button" 
                        className="bg-sky-600 hover:bg-cyan-500 text-white font-medium py-3 px-10 rounded-lg shadow-md transition duration-200 text-lg"
                        >
                        เข้าสู่ระบบ
                        </button>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-gray-400 my-4"></div>

                    {/* Register Link */}
                    <div className="text-right">
                        <a href="#" className="text-gray-800 underline hover:text-black font-medium">
                        ลงทะเบียน
                        </a>
                    </div>

                    </form>
                </div>

            </div>
        </div>
    </div>
  );
};

export default LoginPage;