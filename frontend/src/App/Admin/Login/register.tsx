import React, { useState } from 'react';

// --- Interface และ Component ย่อย (คงเดิม) ---
interface RequiredLabelProps {
  text: string;
  detail?: string; 
}

const RequiredLabel: React.FC<RequiredLabelProps> = ({ text, detail }) => {
  return (
    <label className="block text-gray-700 text-sm mb-1 font-medium">
      {text}
      {detail && <span className="text-gray-400 text-xs ml-1 font-normal">{detail}</span>}
      <span className="text-red-400 ml-1">* จำเป็น</span>
    </label>
  );
};

const inputStyle = "w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-lime-50 outline-none bg-white shadow-sm";

// --- Interface สำหรับ State ของ Error ---
interface FormErrors {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    confirmPassword?: string;
}

const RegisterPage: React.FC = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  // State สำหรับเก็บ Error
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // ลบ Error ทิ้งเมื่อเริ่มพิมพ์ใหม่
    if (errors[name as keyof FormErrors]) {
        setErrors({ ...errors, [name]: '' });
    }
  };

  // ฟังก์ชันตรวจสอบเมื่อกดปุ่ม
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    const newErrors: FormErrors = {};
    const { fullName, email, phoneNumber, password, confirmPassword } = formData;

    // 1. ตรวจสอบช่องว่าง (ข้อมูลทั่วไป)
    if (!fullName.trim()) newErrors.fullName = "จำเป็นต้องกรอกข้อมูลเหล่านี้";
    if (!email.trim()) newErrors.email = "จำเป็นต้องกรอกข้อมูลเหล่านี้";
    if (!phoneNumber.trim()) newErrors.phoneNumber = "จำเป็นต้องกรอกข้อมูลเหล่านี้";

    // 2. ตรวจสอบรหัสผ่าน (เงื่อนไขความซับซ้อน)
    if (!password) {
        newErrors.password = "จำเป็นต้องกรอกข้อมูลเหล่านี้";
    } else {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordRegex.test(password)) {
            newErrors.password = `รหัสผ่านต้องมีอย่างน้อย 8 ตัว ประกอบด้วย
            A-Z
            a-z
            0-9
            อกัขระพิเศษ`;
        }
    }

    // 3. ตรวจสอบยืนยันรหัสผ่าน (เพิ่มใหม่ตรงนี้)
    if (!confirmPassword.trim()) {
        newErrors.confirmPassword = "จำเป็นต้องกรอกข้อมูลเหล่านี้";
    } else if (password !== confirmPassword) {
        // ถ้ากรอกแล้ว แต่ไม่ตรงกับรหัสผ่าน
        newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    }

    setErrors(newErrors);

    // ถ้าไม่มี Error ให้ทำรายการต่อ
    if (Object.keys(newErrors).length === 0) {
        console.log("Form Submitted Successfully", formData);
        // ใส่ logic การส่งข้อมูลไป Backend ตรงนี้
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans">

      <div className="w-full max-w-md flex justify-center lg:justify-center mb-6">
        <img 
            src="/logo.png" 
            alt="The Nexus Logo" 
            className="w-56 h-auto object-contain" 
            />
        </div>

      <div className="w-full max-w-[500px] bg-lime-50 rounded-[30px] shadow-sm p-8 md:p-10 border">
        {/* onSubmit */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <RequiredLabel text="ชื่อและนามสกุล" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`${inputStyle} ${errors.fullName ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <RequiredLabel text="อีเมล" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputStyle} ${errors.email ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <RequiredLabel text="เบอร์โทรศัพท์" />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`${inputStyle} ${errors.phoneNumber ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>

          <div>
             <RequiredLabel text="รหัสผ่าน" detail="(อย่างน้อย 8 ตัวอักษร)" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${inputStyle} ${errors.password ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 whitespace-pre-line">{errors.password}</p>}
          </div>

          <div>
            <RequiredLabel text="ยืนยันรหัสผ่าน" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`${inputStyle} ${errors.confirmPassword ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center justify-between pt-6 mt-2">
            <a href="/login" className="text-sm text-gray-500 hover:text-gray-800 underline decoration-gray-300 underline-offset-2">
              มีบัญชีอยู่แล้ว?
            </a>

            <button
              type="submit"
              className="bg-sky-600 hover:bg-cyan-500 text-white font-medium py-3 px-10 rounded-lg shadow-md transition duration-200 text-lg"
            >
              ลงทะเบียน
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;