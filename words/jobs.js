// คำศัพท์หมวดอาชีพ
const WORDS_JOBS = [
  { emoji: "🧑‍🏫", th: "คุณครู", en: "Teacher", category: "jobs", image: null },
  { emoji: "🧑‍⚕️", th: "คุณหมอ / แพทย์", en: "Doctor", category: "jobs", image: null },
  { emoji: "🧑‍⚕️", th: "พยาบาล", en: "Nurse", category: "jobs", image: null }, // สามารถใช้บริบทร่วมหรือใช้ 🩺 แทนได้
  { emoji: "🧑‍🍳", th: "พ่อครัว / เชฟ", en: "Chef / Cook", category: "jobs", image: null },
  { emoji: "🧑‍ปลูก", th: "ชาวนา / เกษตรกร", en: "Farmer", category: "jobs", image: null }, // หมายเหตุ: มักใช้ 🧑‍🌾
  { emoji: "🧑‍🌾", th: "ชาวนา / ชาวสวน", en: "Farmer", category: "jobs", image: null },
  { emoji: "🧑‍🚀", th: "นักบินอวกาศ", en: "Astronaut", category: "jobs", image: null },
  { emoji: "🧑‍✈️", th: "นักบิน", en: "Pilot", category: "jobs", image: null },
  { emoji: "👮", th: "ตำรวจ", en: "Police Officer", category: "jobs", image: null },
  { emoji: "🧑‍🚒", th: "นักดับเพลิง", en: "Firefighter", category: "jobs", image: null },
  { emoji: "🧑‍🎨", th: "ศิลปิน / จิตรกร", en: "Artist", category: "jobs", image: null },
  { emoji: "🧑‍🎤", th: "นักร้อง", en: "Singer", category: "jobs", image: null },
  { emoji: "🧑‍💻", th: "โปรแกรมเมอร์ / นักพัฒนาซอฟต์แวร์", en: "Developer / Programmer", category: "jobs", image: null },
  { emoji: "🧑‍ดนตรี", th: "นักดนตรี", en: "Musician", category: "jobs", image: null }, // หมายเหตุ: มักใช้ 🧑‍🎤 หรือร่วมกับเครื่องดนตรีเช่น 🎸
  { emoji: "🧑‍💼", th: "พนักงานออฟฟิศ / นักธุรกิจ", en: "Office Worker", category: "jobs", image: null },
  { emoji: "🧑‍🔧", th: "ช่างซ่อมเครื่องยนต์ / ช่างเทคนิค", en: "Mechanic", category: "jobs", image: null },
  { emoji: "🧑‍🔬", th: "นักวิทยาศาสตร์", en: "Scientist", category: "jobs", image: null },
  { emoji: "🧑‍อด", th: "ผู้พิพากษา", en: "Judge", category: "jobs", image: null }, // มักใช้ 🧑‍⚖️
  { emoji: "🧑‍⚖️", th: "ผู้พิพากษา / ทนายความ", en: "Judge", category: "jobs", image: null },
  { emoji: "🧑‍🎨", th: "ช่างตัดผม", en: "Hairdresser", category: "jobs", image: null }, // สามารถใช้ 💇 หรือ 💈 ร่วมได้
  { emoji: "🕵️", th: "นักสืบ", en: "Detective", category: "jobs", image: null },
  { emoji: "💂", th: "ทหารรักษาพระองค์ / ทหาร", en: "Guard / Soldier", category: "jobs", image: null },
  { emoji: "🧑‍วิศว", th: "วิศวกร / ช่างก่อสร้าง", en: "Construction Worker", category: "jobs", image: null } // มักใช้ 🧑‍🏭 หรือ 👷
];