// คำศัพท์หมวดสี
// รูปภาพ: Wikimedia Commons solid-color SVG swatches (public domain) ลิงก์ตรง ไม่ต้องเก็บไฟล์ในโปรเจกต์
const WORDS_COLORS = [
  // 🟥 โทนสีแดง / ชมพู่ / ส้ม / เหลือง
  { emoji: "🟥", th: "สีแดง", en: "Red", category: "colors", image: null },
  { emoji: "🟧", th: "สีส้ม", en: "Orange", category: "colors", image: null },
  { emoji: "🟨", th: "สีเหลือง", en: "Yellow", category: "colors", image: null },
  { emoji: "🟪", th: "สีม่วง", en: "Purple", category: "colors", image: null },
  { emoji: "🤎", th: "สีน้ำตาล", en: "Brown", category: "colors", image: null },
  { emoji: "🖤", th: "สีดำ", en: "Black", category: "colors", image: null },
  { emoji: "🤍", th: "สีขาว", en: "White", category: "colors", image: null },
  { emoji: "🩵", th: "สีฟ้าอ่อน", en: "Light Blue", category: "colors", image: null },
  { emoji: "🩶", th: "สีเทา", en: "Grey", category: "colors", image: null },

  // 🟢 โทนวงกลมสี (สำหรับเปลี่ยนรูปแบบตติยภูมิ)
  // { emoji: "🔵", th: "สีน้ำเงิน", en: "Blue", category: "colors", image: null },
  // { emoji: "🟢", th: "สีเขียว", en: "Green", category: "colors", image: null },
  // { emoji: "🟡", th: "สีเหลืองวงกลม", en: "Yellow Circle", category: "colors", image: null },
  // { emoji: "🟠", th: "สีส้มวงกลม", en: "Orange Circle", category: "colors", image: null },
  // { emoji: "🔴", th: "สีแดงวงกลม", en: "Red Circle", category: "colors", image: null },
  // { emoji: "🟣", th: "สีม่วงวงกลม", en: "Purple Circle", category: "colors", image: null },
  // { emoji: "🟤", th: "สีน้ำตาลวงกลม", en: "Brown Circle", category: "colors", image: null },
  // { emoji: "⚫", th: "สีดำวงกลม", en: "Black Circle", category: "colors", image: null },
  // { emoji: "⚪", th: "สีขาววงกลม", en: "White Circle", category: "colors", image: null },

  // 💖 โทนหัวใจสี (เพิ่มสีสันและความหลากหลายที่มีเฉพาะใน Emoji)
  // { emoji: "❤️", th: "สีแดงหัวใจ", en: "Red Heart", category: "colors", image: null },
  // { emoji: "🧡", th: "สีส้มหัวใจ", en: "Orange Heart", category: "colors", image: null },
  // { emoji: "💛", th: "สีเหลืองหัวใจ", en: "Yellow Heart", category: "colors", image: null },
  // { emoji: "💚", th: "สีเขียวหัวใจ", en: "Green Heart", category: "colors", image: null },
  // { emoji: "💙", th: "สีน้ำเงินหัวใจ", en: "Blue Heart", category: "colors", image: null },
  // { emoji: "💜", th: "สีม่วงหัวใจ", en: "Purple Heart", category: "colors", image: null },
  // { emoji: "🖤", th: "สีดำหัวใจ", en: "Black Heart", category: "colors", image: null },
  // { emoji: "🤍", th: "สีขาวหัวใจ", en: "White Heart", category: "colors", image: null },
  // { emoji: "🤎", th: "สีน้ำตาลหัวใจ", en: "Brown Heart", category: "colors", image: null },
  // { emoji: "🩵", th: "สีฟ้าหัวใจ", en: "Light Blue Heart", category: "colors", image: null },
  // { emoji: "🩷", th: "สีชมพู", en: "Pink", category: "colors", image: null }
];
