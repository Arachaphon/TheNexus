import { useState,useEffect } from 'react';
import { supabase } from '../../../supabaseClient';
import C_HomeMain from '../../components/C_homemain'; 
import Footer from '../../components/Footerhomemain'; 

const ProfileSettings: React.FC = () => {

  // State สำหรับข้อมูลส่วนตัว
  const [profile, setProfile] = useState({
    name: '',
    email: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, [])

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const {data: {user}, error: authError } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (user) {
        const {data: dbData, error: dbError } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', user.id)
          .single()

          if (dbError) throw dbError;

          if(dbData){
            setProfile({
              name: dbData?.username || '',
              email: user.email || ''
          });
        }  
      }
    } catch (error) {
      console.error('Error:',error);
    } finally {
      setLoading(false);
    }
  }

  // State สำหรับรหัสผ่าน
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    console.log('Saving profile:', profile);
  };

  const savePassword = () => {
    console.log('Updating password:', password);
  };

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-[#f8fcf8]'>
        <p className='text-lg text-gray-600'>กำลังโหลดข้อมูล...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fcf8]"> 
      <C_HomeMain />

      {/* Header Bar สีเขียวเข้มตามรูปภาพ */}


      <div className="flex-grow w-full max-w-6xl mx-auto px-6 py-10">
        
        {/* ส่วนที่ 1: ข้อมูลส่วนตัว */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800">ข้อมูลส่วนตัว</h2>
            <p className="text-sm text-gray-500 mt-1">อัปเดตข้อมูลโปรไฟล์และอีเมลของบัญชีของคุณ</p>
          </div>
          
          <div className="md:col-span-2 space-y-5 max-w-2xl">
            <div className="flex flex-col">
              <label className="mb-2 text-base font-medium text-gray-800">ชื่อ</label>
              <input 
                type="text" 
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full border border-gray-400 rounded-xl h-12 px-4 focus:outline-none focus:ring-1 focus:ring-lime-50 bg-white shadow-sm "
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-base font-medium text-gray-800">อีเมล</label>
              <input 
                type="email" 
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full border border-gray-400 rounded-xl h-12 px-4 focus:outline-none focus:ring-1 focus:ring-lime-50 bg-white shadow-sm"
              />
            </div>
            <div className="flex justify-end pt-2">
              <button 
                onClick={saveProfile}
                className="bg-[#7d7671] hover:bg-[#635d59] text-white px-8 py-2.5 rounded-lg text-sm transition-colors shadow-md"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-[#8daaa2] my-12 opacity-40"></div>

        {/* ส่วนที่ 2: อัพเดทรหัสผ่าน */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800">อัพเดทรหัสผ่าน</h2>
            <p className="text-sm text-gray-500 mt-1">ระบุรหัสผ่านเดิมและรหัสผ่านใหม่ของคุณ</p>
          </div>
          
          <div className="md:col-span-2 space-y-5 max-w-2xl">
            <div className="flex flex-col">
              <label className="mb-2 text-base font-medium text-gray-800">รหัสผ่านปัจจุบัน</label>
              <input 
                type="password" 
                name="current"
                value={password.current}
                onChange={handlePasswordChange}
                className="w-full border border-gray-400 rounded-xl h-12 px-4 focus:outline-none focus:ring-1 focus:ring-lime-50 bg-white shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-base font-medium text-gray-800">รหัสผ่านใหม่</label>
              <input 
                type="password" 
                name="new"
                value={password.new}
                onChange={handlePasswordChange}
                className="w-full border border-gray-400 rounded-xl h-12 px-4 focus:outline-none focus:ring-1 focus:ring-lime-50 bg-white shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-base font-medium text-gray-800">ยืนยันรหัสผ่านใหม่อีกครั้ง</label>
              <input 
                type="password" 
                name="confirm"
                value={password.confirm}
                onChange={handlePasswordChange}
                className="w-full border border-gray-400 rounded-xl h-12 px-4 focus:outline-none focus:ring-1 focus:ring-lime-50 bg-white shadow-sm"
              />
            </div>
            <div className="flex justify-end pt-2">
              <button 
                onClick={savePassword}
                className="bg-[#7d7a75] hover:bg-[#6b6863] text-white px-8 py-2.5 rounded-lg text-sm transition-colors shadow-md"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div> 
  );
}

export default ProfileSettings;