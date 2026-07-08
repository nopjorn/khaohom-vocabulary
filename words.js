// ฐานข้อมูลคำศัพท์สำหรับเกม Vocaberry
// คำศัพท์แต่ละหมวดแยกไว้ในโฟลเดอร์ words/ (เช่น words/animals.js) เพื่อให้แก้ไขง่าย
// เพิ่มคำศัพท์ใหม่ได้โดยเติม object ในไฟล์หมวดที่ต้องการ (ดูวิธีใช้ใน README.md)
// field "image" เป็น null = ใช้ emoji แสดงผล, ถ้าใส่ path รูป (เช่น "images/animals/dog.png") เกมจะใช้รูปนั้นแทนอัตโนมัติ

const CATEGORIES = [
  { id: "animals", th: "สัตว์", en: "Animals", icon: "🐶" },
  { id: "fruits", th: "ผลไม้", en: "Fruits", icon: "🍎" },
  { id: "vehicles", th: "ยานพาหนะ", en: "Vehicles", icon: "🚗" },
  { id: "colors", th: "สี", en: "Colors", icon: "🎨" },
  { id: "numbers", th: "ตัวเลข", en: "Numbers", icon: "🔢" },
];

// ไฟล์ words/*.js ต้องถูกโหลดก่อนไฟล์นี้ใน index.html
const WORDS = [
  ...WORDS_ANIMALS,
  ...WORDS_FRUITS,
  ...WORDS_VEHICLES,
  ...WORDS_COLORS,
  ...WORDS_NUMBERS,
];
