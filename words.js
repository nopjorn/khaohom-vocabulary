// ฐานข้อมูลคำศัพท์สำหรับเกม Vocaberry
// คำศัพท์แต่ละหมวดแยกไว้ในโฟลเดอร์ words/ (เช่น words/animals.js) เพื่อให้แก้ไขง่าย
// เพิ่มคำศัพท์ใหม่ได้โดยเติม object ในไฟล์หมวดที่ต้องการ (ดูวิธีใช้ใน README.md)
// field "image" เป็น null = ใช้ emoji แสดงผล, ถ้าใส่ path รูป (เช่น "images/animals/dog.png") เกมจะใช้รูปนั้นแทนอัตโนมัติ

const CATEGORIES = [
  // --- กลุ่มเดิมของคุณ ---
  { id: "animals", th: "สัตว์", en: "Animals", icon: "🐶" },
  { id: "fruits", th: "ผลไม้", en: "Fruits", icon: "🍎" },
  { id: "vehicles", th: "ยานพาหนะ", en: "Vehicles", icon: "🚗" },
  { id: "colors", th: "สี", en: "Colors", icon: "🎨" },
  { id: "numbers", th: "ตัวเลข", en: "Numbers", icon: "🔢" },

  // --- ระดับเริ่มต้น (ใกล้ตัวเด็ก) ---
  { id: "body", th: "ร่างกาย", en: "Body Parts", icon: "👁️" },
  { id: "family", th: "ครอบครัว", en: "Family", icon: "👨‍👩‍👧‍👦" },
  { id: "toys", th: "ของเล่น", en: "Toys", icon: "🧸" },

  // --- ระดับเริ่มเข้าสังคม / ไปโรงเรียน ---
  { id: "clothes", th: "เสื้อผ้า", en: "Clothes", icon: "👕" },
  { id: "school", th: "โรงเรียน", en: "School", icon: "🎒" },
  { id: "food", th: "อาหารและเครื่องดื่ม", en: "Food & Drinks", icon: "🥛" },

  // --- ระดับเปิดโลกกว้าง ---
  { id: "nature", th: "ธรรมชาติ", en: "Nature", icon: "☀️" },
  { id: "shapes", th: "รูปทรง", en: "Shapes", icon: "📐" },
  { id: "jobs", th: "อาชีพ", en: "Jobs", icon: "👩‍⚕️" },

  // --- กลุ่มเพิ่มเติม ---
  { id: "weather", th: "สภาพอากาศ", en: "Weather", icon: "🌧️" },
  { id: "rooms", th: "ห้องในบ้าน", en: "Rooms", icon: "🛏️" },
  { id: "instruments", th: "เครื่องดนตรี", en: "Musical Instruments", icon: "🎸" },
  { id: "sports", th: "กีฬา", en: "Sports", icon: "⚽" },
  { id: "insects", th: "แมลง", en: "Insects", icon: "🦋" },
  { id: "time", th: "เวลาและวัน", en: "Time & Days", icon: "🌅" },
  { id: "sea-animals", th: "สัตว์น้ำ", en: "Sea Animals", icon: "🐋" },
  { id: "emotions", th: "อารมณ์", en: "Emotions", icon: "😄" }
];

// ไฟล์ words/*.js ต้องถูกโหลดก่อนไฟล์นี้ใน index.html
const WORDS = [
  ...WORDS_ANIMALS,
  ...WORDS_FRUITS,
  ...WORDS_VEHICLES,
  ...WORDS_COLORS,
  ...WORDS_NUMBERS,
  ...WORDS_BODY,
  ...WORDS_FAMILY,
  ...WORDS_TOYS,
  ...WORDS_CLOTHES,
  ...WORDS_SCHOOL,
  ...WORDS_FOOD,
  ...WORDS_NATURE,
  ...WORDS_SHAPES,
  ...WORDS_JOBS,
  ...WORDS_WEATHER,
  ...WORDS_ROOMS,
  ...WORDS_INSTRUMENTS,
  ...WORDS_SPORTS,
  ...WORDS_INSECTS,
  ...WORDS_TIME,
  ...WORDS_SEA_ANIMALS,
  ...WORDS_EMOTIONS
];
