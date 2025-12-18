import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  // 1. State เก็บข้อมูลD
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  // State เก็บ Error (กำหนด Type ให้มันรู้ว่าอาจมี key เป็น string)
  const [errors, setErrors] = useState<{ username?: string; password?: string; general?: string }>({});
  const [loading,setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  // ฟังก์ชันอัปเดตค่าเมื่อพิมพ์
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // ลบ error ทิ้งเมื่อเริ่มพิมพ์
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  React.useEffect(() => {
    const savedUsername = localStorage.getItem('rememberUsername');
    const savedPassword = localStorage.getItem('rememberPassword');

    if (savedUsername && savedPassword) {
      setFormData((prev) => ({
      ...prev, 
      username: savedUsername,
      password: savedPassword || ''
    }));
      setRememberMe(true);
    }
  },[]);

  // 2. ฟังก์ชันตรวจสอบการ Login (จำลองการทำงาน)
  const handleLogin = async () => {
    const { username, password } = formData;
    const newErrors: {username?: string; password?: string} = {};

    if (!username) newErrors.username = 'กรุณากรอกชื่อผู้ใช้หรืออีเมล';
    if (!password) newErrors.password = 'กรุณากรอกรหัสผ่าน';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setLoading(true);

    try {
      let loginEmail = username;

      const isEmail = username.includes('@');
      if(!isEmail){
        const { data:userProfile ,error:profileError } = await supabase
          .from('profiles')
          .select('email')
          .eq('username',username)
          .single();
        if (profileError || !userProfile){
          throw new Error('ไม่พบชื่อผู้ใช้นี้ หรือ ชื่อผู้ใช้ผิด')
        }
        loginEmail = userProfile.email;
      }

      const { data,error} = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: password,
      });

      if (error) {
        console.error('Login Error:',error.message);
        if (error.message.includes("Invalid login credentials")) {
          setErrors({ general:'อีเมลหรือรหัสผ่านไม่ถูกต้อง'})
        } else {
          setErrors({ general: error.message});
        }
      } else {
        if (rememberMe) {
          localStorage.setItem('rememberUsername', formData.username);
          localStorage.setItem('rememberPassword', formData.password);
        } else {
          localStorage.removeItem('rememberUsername');
          localStorage.removeItem('rememberPassword');
        }
        console.log('Login Success!',data);
        alert('เข้าสู่ระบบสำเร็จ');
        navigate('/')
      }
    } catch (err: unknown) {
      console.error('Unexpected Error',err);
      setErrors({ general:err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่'});
    } finally {
      setLoading(false)
    }
    
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden font-sans">
      
      <div className="absolute -top-[1%] -left-[15%] w-[90%] h-[25%] bg-emerald-900 transform rotate-[25deg] rounded-[60px] z-0"></div>
      <div className="absolute -bottom-[5%] -left-[20%] w-[150%] h-[25%] bg-emerald-900 transform rotate-[25deg] rounded-[60px] z-0"></div>

      <div className="z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">

        <div className="hidden lg:block relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/login.png" 
              alt="Office Coworking" 
              className="w-full h-[700px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end w-full">

          <div className="w-full max-w-md flex justify-center lg:justify-end mb-6">
            <img 
              src="/logo.png" 
              alt="The Nexus Logo" 
              className="w-56 h-auto object-contain" 
            />
          </div>
          <div className="bg-lime-50 w-[500px] p-8 rounded-[30px] shadow-xl relative">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2 text-sm">
                ชื่อผู้ใช้ / อีเมล
                </label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-lime-50 outline-none bg-white shadow-sm ${errors.username ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors.username&& (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                )}
                {errors.general && (
                <p className="text-red-500 text-xs mt-1">{errors.general}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-2 text-sm">
                  รหัสผ่าน
                </label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-lime-50 outline-none bg-white shadow-sm ${errors.password ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
                {errors.general && (
                <p className="text-red-500 text-xs mt-1">{errors.general}</p>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox"
                  checked = {rememberMe}
                  onChange ={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                  <span className="text-gray-700">บันทึกรหัสผ่าน</span>
                </label>
                <a href="/Forgotpassword" className="text-gray-700 underline hover:text-gray-900">
                  ลืมรหัสผ่าน
                </a>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button" 
                  onClick={handleLogin}
                  disabled={loading}
                  className="bg-sky-600 hover:bg-cyan-500 text-white font-medium py-3 px-10 rounded-lg shadow-md transition duration-200 text-lg"
                >
                  {loading ? 'กำลังตรวจสอบ...' :  'เข้าสู่ระบบ' }
                </button>
              </div>

              <div className="border-t border-gray-900 my-4"></div>
                <div className="text-right">
                  <div>
                    ยังไม่มีบัญชีผู้ใช้? 
                    <a href="/register" className="text-gray-800 underline hover:text-black font-medium ml-4">
                      ลงทะเบียน
                    </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;