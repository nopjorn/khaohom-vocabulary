// คำศัพท์หมวดธรรมชาติ
const WORDS_NATURE = [
  // --- สภาพอากาศ / ท้องฟ้า ---
  { emoji: "☀️", th: "พระอาทิตย์ / แดดออก", en: "Sun", category: "nature", image: null },
  { emoji: "🌙", th: "พระจันทร์เสี้ยว", en: "Crescent Moon", category: "nature", image: null },
  { emoji: "⭐", th: "ดาว", en: "Star", category: "nature", image: null },
  { emoji: "☁️", th: "ก้อนเมฆ", en: "Cloud", category: "nature", image: null },
  { emoji: "🌧️", th: "ฝนตก", en: "Rain", category: "nature", image: null },
  { emoji: "⛈️", th: "พายุฝนฟ้าคะนอง", en: "Thunderstorm", category: "nature", image: null },
  { emoji: "❄️", th: "เกล็ดหิมะ / หิมะตก", en: "Snowflake", category: "nature", image: null },
  { emoji: "💨", th: "ลมพัด", en: "Wind", category: "nature", image: null },
  { emoji: "🌈", th: "สายรุ้ง", en: "Rainbow", category: "nature", image: null },

  // --- ภูมิประเทศ / แหล่งน้ำ ---
  { emoji: "⛰️", th: "ภูเขา", en: "Mountain", category: "nature", image: null },
  { emoji: "🌋", th: "ภูเขาไฟ", en: "Volcano", category: "nature", image: null },
  { emoji: "🏜️", th: "ทะเลทราย", en: "Desert", category: "nature", image: null },
  { emoji: "🏝️", th: "เกาะร้าง / เกาะเขตร้อน", en: "Desert Island", category: "nature", image: null },
  { emoji: "🌊", th: "คลื่นทะเล", en: "Water Wave", category: "nature", image: null },

  // --- ต้นไม้ / ดอกไม้ ---
  { emoji: "🌱", th: "ต้นกล้า / ต้นไม้새", en: "Seedling", category: "nature", image: null },
  { emoji: "🌲", th: "ต้นสน", en: "Evergreen Tree", category: "nature", image: null },
  { emoji: "🌴", th: "ต้นปาล์ม / ต้นมะพร้าว", en: "Palm Tree", category: "nature", image: null },
  { emoji: "🍁", th: "ใบเมเปิ้ล / ใบไม้เปลี่ยนสี", en: "Maple Leaf", category: "nature", image: null },
  { emoji: "🍂", th: "ใบไม้ร่วง", en: "Fallen Leaf", category: "nature", image: null },
  { emoji: "🌸", th: "ดอกซากุระ", en: "Cherry Blossom", category: "nature", image: null },
  { emoji: "🌹", th: "ดอกกุหลาบ", en: "Rose", category: "nature", image: null },
  { emoji: "🌻", th: "ดอกทานตะวัน", en: "Sunflower", category: "nature", image: null },
  { emoji: "🌵", th: "ต้นกระบองเพชร", en: "Cactus", category: "nature", image: null },

  // --- สัตว์และแมลงยอดฮิต ---
  { emoji: "🐶", th: "สุนัษ / หมา", en: "Dog", category: "nature", image: null },
  { emoji: "🐱", th: "แมว", en: "Cat", category: "nature", image: null },
  { emoji: "🦁", th: "สิงโต", en: "Lion", category: "nature", image: null },
  { emoji: "🐯", th: "เสือ", en: "Tiger", category: "nature", image: null },
  { emoji: "🐻", th: "หมี", en: "Bear", category: "nature", image: null },
  { emoji: "🐼", th: "แพนด้า", en: "Panda", category: "nature", image: null },
  { emoji: "🐘", th: "ช้าง", en: "Elephant", category: "nature", image: null },
  { emoji: "🐵", th: "ลิง", en: "Monkey", category: "nature", image: null },
  { emoji: "🐦", th: "นก", en: "Bird", category: "nature", image: null },
  { emoji: "🐟", th: "ปลา", en: "Fish", category: "nature", image: null },
  { emoji: "🦋", th: "ผีเสื้อ", en: "Butterfly", category: "nature", image: null },
  { emoji: "🐝", th: "ผึ้ง", en: "Honeybee", category: "nature", image: null }
];