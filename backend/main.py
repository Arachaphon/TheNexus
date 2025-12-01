from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel 

# 1. การตั้งค่า FastAPI Server
app = FastAPI()

# 2. การตั้งค่า CORS: เพื่ออนุญาตให้ Frontend (React) คุยกับ Backend ได้
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. กำหนดรูปแบบข้อมูลที่รับเข้ามาจาก Frontend (Schema)
class MeterInput(BaseModel):
    water_rate: float = 20.0  
    electric_rate: float = 8.0 
    room_price: float = 5000.0

    old_water_unit: float
    new_water_unit: float
    old_electric_unit: float
    new_electric_unit: float

    extra_fees: float = 0.0

# 4. API Endpoint ทดสอบ Server
@app.get("/")
def read_root():
    return {"message": "FastAPI Room Rental Backend is running"}

# 5. API Endpoint สำหรับคำนวณค่าใช้จ่าย
@app.post("/calculate-bill")
def calculate_bill(data: MeterInput):

    water_usage = data.new_water_unit - data.old_water_unit
    total_water = water_usage * data.water_rate

    electric_usage = data.new_electric_unit - data.old_electric_unit
    total_electric = electric_usage * data.electric_rate

    grand_total = data.room_price + total_water + total_electric + data.extra_fees

    return {
        "status": "success",
        "data": {
            "water_units": water_usage,
            "total_water": round(total_water, 2),
            "electric_units": electric_usage,
            "total_electric": round(total_electric, 2),
            "room_price": data.room_price,
            "grand_total": round(grand_total, 2)
        }
    }