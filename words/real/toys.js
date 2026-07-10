// คำศัพท์หมวดของเล่น
const WORDS_TOYS_REAL = [
  { emoji: "🧸", th: "ตุ๊กตาหมี", en: "Teddy Bear", category: "toys_r", image: 'https://images.unsplash.com/photo-1648311128165-848a00883496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFRlZGR5JTIwQmVhcnxlbnwwfDB8MHx8fDI%3D' },
  // { emoji: "🪆", th: "ตุ๊กตาแม่ลูกดก", en: "Matryoshka Doll", category: "toys_r", image: null },
  { emoji: "🪁", th: "ว่าว", en: "Kite", category: "toys_r", image: 'https://images.unsplash.com/flagged/photo-1583603275310-33d386c7298a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2l0ZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🎈", th: "ลูกโป่ง", en: "Balloon", category: "toys_r", image: 'https://images.unsplash.com/photo-1525351159099-81893194469e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhbGxvb258ZW58MHwwfDB8fHwy' },
  // { emoji: "🪀", th: "โยโย่", en: "Yo-yo", category: "toys_r", image: null },
  // // { emoji: "spinning_top", th: "ลูกข่าง", en: "Spinning Top", category: "toys_r", image: null }, // หมายเหตุ: บางระบบใช้ 🪀 หรือ 🔝 แต่อีโมจิมาตรฐานส่วนใหญ่คือ 🪀 หรือรูปเฉพาะตัว
  { emoji: "🧩", th: "จิ๊กซอว์ / ตัวต่อ", en: "Puzzle", category: "toys_r", image: 'https://images.unsplash.com/photo-1710276965600-be65a3f7c2e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fFB1enpsZXxlbnwwfDB8MHx8fDI%3D' },
  // { emoji: "🧱", th: "บล็อกไม้ / ตัวต่อ", en: "Building Blocks", category: "toys_r", image: null },
  // { emoji: "🎮", th: "เครื่องเล่นเกม / จอยเกม", en: "Video Game / Controller", category: "toys_r", image: null },
  // { emoji: "🕹️", th: "จอยสติ๊กเกม", en: "Joystick", category: "toys_r", image: null },
  { emoji: "🎲", th: "ลูกเต๋า", en: "Dice", category: "toys_r", image: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGljZXxlbnwwfDB8MHx8fDI%3D' },
  // { emoji: "♟️", th: "ตัวหมากรุก", en: "Chess Pawn", category: "toys_r", image: null },
  // { emoji: "🎯", th: "เป้าปาลูกดอก", en: "Dartboard", category: "toys_r", image: null },
  { emoji: "🛹", th: "สเก็ตบอร์ด", en: "Skateboard", category: "toys_r", image: 'https://images.unsplash.com/photo-1495361276969-f11591d57520?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFNrYXRlYm9hcmR8ZW58MHwwfDB8fHwy' },
  // { emoji: "🛼", th: "โรลเลอร์สเก็ต", en: "Roller Skates", category: "toys_r", image: null },
  { emoji: "🚲", th: "จักรยาน", en: "Bicycle", category: "toys_r", image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmljeWNsZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🛴", th: "สกู๊ตเตอร์", en: "Kick Scooter", category: "toys_r", image: 'https://images.unsplash.com/photo-1655100870423-68461d93ce4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEtpY2slMjBTY29vdGVyfGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "🚗", th: "รถของเล่น", en: "Toy Car", category: "toys_r", image: null },
  // { emoji: "🚂", th: "รถไฟของเล่น", en: "Toy Train", category: "toys_r", image: null },
  { emoji: "🤖", th: "หุ่นยนต์", en: "Robot", category: "toys_r", image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJvYm90fGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "🪄", th: "ไม้กายสิทธิ์", en: "Magic Wand", category: "toys_r", image: null },
  // { emoji: "🔮", th: "ลูกแก้วพยากรณ์", en: "Crystal Ball", category: "toys_r", image: null },
  { emoji: "🔫", th: "ปืนฉีดน้ำ", en: "Water Pistol", category: "toys_r", image: 'https://images.unsplash.com/photo-1727895948998-22fdd2abb7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBwaXN0b2x8ZW58MHwwfDB8fHwy' },
  // { emoji: "🃏", th: "ไพ่โจ๊กเกอร์", en: "Joker Card", category: "toys_r", image: null }
];