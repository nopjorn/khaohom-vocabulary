// คำศัพท์หมวดของเล่น
const WORDS_TOYS = [
  { emoji: "🧸", th: "ตุ๊กตาหมี", en: "Teddy Bear", category: "toys", image: null },
  { emoji: "🪆", th: "ตุ๊กตาแม่ลูกดก", en: "Matryoshka Doll", category: "toys", image: null },
  { emoji: "🪁", th: "ว่าว", en: "Kite", category: "toys", image: null },
  { emoji: "🎈", th: "ลูกโป่ง", en: "Balloon", category: "toys", image: null },
  { emoji: "🪀", th: "โยโย่", en: "Yo-yo", category: "toys", image: null },
  // { emoji: "spinning_top", th: "ลูกข่าง", en: "Spinning Top", category: "toys", image: null }, // หมายเหตุ: บางระบบใช้ 🪀 หรือ 🔝 แต่อีโมจิมาตรฐานส่วนใหญ่คือ 🪀 หรือรูปเฉพาะตัว
  { emoji: "🧩", th: "จิ๊กซอว์ / ตัวต่อ", en: "Puzzle", category: "toys", image: null },
  { emoji: "🧱", th: "บล็อกไม้ / ตัวต่อ", en: "Building Blocks", category: "toys", image: null },
  { emoji: "🎮", th: "เครื่องเล่นเกม / จอยเกม", en: "Video Game / Controller", category: "toys", image: null },
  { emoji: "🕹️", th: "จอยสติ๊กเกม", en: "Joystick", category: "toys", image: null },
  { emoji: "🎲", th: "ลูกเต๋า", en: "Dice", category: "toys", image: null },
  { emoji: "♟️", th: "ตัวหมากรุก", en: "Chess Pawn", category: "toys", image: null },
  { emoji: "🎯", th: "เป้าปาลูกดอก", en: "Dartboard", category: "toys", image: null },
  { emoji: "🛹", th: "สเก็ตบอร์ด", en: "Skateboard", category: "toys", image: null },
  { emoji: "🛼", th: "โรลเลอร์สเก็ต", en: "Roller Skates", category: "toys", image: null },
  { emoji: "🚲", th: "จักรยาน", en: "Bicycle", category: "toys", image: null },
  { emoji: "🛴", th: "สกู๊ตเตอร์", en: "Kick Scooter", category: "toys", image: null },
  { emoji: "🚗", th: "รถของเล่น", en: "Toy Car", category: "toys", image: null },
  { emoji: "🚂", th: "รถไฟของเล่น", en: "Toy Train", category: "toys", image: null },
  { emoji: "🤖", th: "หุ่นยนต์", en: "Robot", category: "toys", image: null },
  { emoji: "🪄", th: "ไม้กายสิทธิ์", en: "Magic Wand", category: "toys", image: null },
  { emoji: "🔮", th: "ลูกแก้วพยากรณ์", en: "Crystal Ball", category: "toys", image: null },
  { emoji: "🔫", th: "ปืนฉีดน้ำ", en: "Water Pistol", category: "toys", image: null },
  { emoji: "🃏", th: "ไพ่โจ๊กเกอร์", en: "Joker Card", category: "toys", image: null }
];