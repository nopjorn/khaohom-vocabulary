// ฐานข้อมูลคำศัพท์สำหรับเกม Vocaberry
// คำศัพท์แต่ละหมวดแยกไว้ในโฟลเดอร์ words/ (เช่น words/animals.js) เพื่อให้แก้ไขง่าย
// เพิ่มคำศัพท์ใหม่ได้โดยเติม object ในไฟล์หมวดที่ต้องการ (ดูวิธีใช้ใน README.md)
// field "image" เป็น null = ใช้ emoji แสดงผล, ถ้าใส่ path รูป (เช่น "images/animals/dog.png") เกมจะใช้รูปนั้นแทนอัตโนมัติ

const CATEGORIES_REAL = [
  // --- กลุ่มเดิมของคุณ ---
  { id: "animals_r", th: "สัตว์", en: "Animals", icon: "🐶" },
  { id: "fruits_r", th: "ผลไม้", en: "Fruits", icon: "🍎" },
  { id: "vehicles_r", th: "ยานพาหนะ", en: "Vehicles", icon: "🚗" },
  // { id: "colors", th: "สี", en: "Colors", icon: "🎨" },
  // { id: "numbers", th: "ตัวเลข", en: "Numbers", icon: "🔢" },

  // // --- ระดับเริ่มต้น (ใกล้ตัวเด็ก) ---
  { id: "body_r", th: "ร่างกาย", en: "Body Parts", icon: "👁️" },
  // { id: "family", th: "ครอบครัว", en: "Family", icon: "👨‍👩‍👧‍👦" },
  { id: "toys_r", th: "ของเล่น", en: "Toys", icon: "🧸" },

  // // --- ระดับเริ่มเข้าสังคม / ไปโรงเรียน ---
  // { id: "clothes", th: "เสื้อผ้า", en: "Clothes", icon: "👕" },
  { id: "school_r", th: "โรงเรียน", en: "School", icon: "🎒" },
  // { id: "food", th: "อาหารและเครื่องดื่ม", en: "Food & Drinks", icon: "🥛" },

  // // --- ระดับเปิดโลกกว้าง ---
  // { id: "nature", th: "ธรรมชาติ", en: "Nature", icon: "☀️" },
  // { id: "shapes", th: "รูปทรง", en: "Shapes", icon: "📐" },
  { id: "jobs_r", th: "อาชีพ", en: "Jobs", icon: "👩‍⚕️" },

  // // --- กลุ่มเพิ่มเติม ---
  // { id: "weather", th: "สภาพอากาศ", en: "Weather", icon: "🌧️" },
  // { id: "rooms", th: "ห้องในบ้าน", en: "Rooms", icon: "🛏️" },
  // { id: "instruments", th: "เครื่องดนตรี", en: "Musical Instruments", icon: "🎸" },
  // { id: "sports", th: "กีฬา", en: "Sports", icon: "⚽" },
  // { id: "insects", th: "แมลง", en: "Insects", icon: "🦋" },
  // { id: "time", th: "เวลาและวัน", en: "Time & Days", icon: "🌅" },
  // { id: "sea-animals", th: "สัตว์น้ำ", en: "Sea Animals", icon: "🐋" },
  // { id: "emotions", th: "อารมณ์", en: "Emotions", icon: "😄" },
  // { id: "vegetables", th: "ผัก", en: "Vegetables", icon: "🥦" },
  // { id: "household", th: "ของใช้ในบ้าน", en: "Household Items", icon: "🧹" },
  // { id: "places", th: "สถานที่", en: "Places", icon: "🏠" },
  // { id: "wild-animals", th: "สัตว์ป่า", en: "Wild Animals", icon: "🦁" }
];

const CATEGORIES = [
  // --- 🐾 สัตว์ ---
  { id: "animals", th: "สัตว์", en: "Animals", icon: "🐶" },
  { id: "wild-animals", th: "สัตว์ป่า", en: "Wild Animals", icon: "🦁" },
  { id: "sea-animals", th: "สัตว์น้ำ", en: "Sea Animals", icon: "🐋" },
  { id: "birds", th: "นก", en: "Birds", icon: "🐦" },
  { id: "insects", th: "แมลง", en: "Insects", icon: "🦋" },
  { id: "dinosaurs", th: "ไดโนเสาร์", en: "Dinosaurs", icon: "🦕" },
  { id: "farm", th: "ฟาร์ม", en: "Farm", icon: "🚜" },

  // --- 🍎 อาหารและพืช ---
  { id: "fruits", th: "ผลไม้", en: "Fruits", icon: "🍎" },
  { id: "vegetables", th: "ผัก", en: "Vegetables", icon: "🥦" },
  { id: "food", th: "อาหารและเครื่องดื่ม", en: "Food & Drinks", icon: "🥛" },
  { id: "desserts-snacks", th: "ขนมและของว่าง", en: "Desserts & Snacks", icon: "🍪" },
  { id: "flowers-plants", th: "ดอกไม้และต้นไม้", en: "Flowers & Plants", icon: "🌸" },

  // --- 👦 ตัวเด็กเอง ---
  { id: "body", th: "ร่างกาย", en: "Body Parts", icon: "👁️" },
  { id: "emotions", th: "อารมณ์", en: "Emotions", icon: "😄" },
  { id: "actions", th: "คำกริยา", en: "Actions", icon: "🏃" },
  { id: "opposites", th: "คำตรงข้าม", en: "Opposites", icon: "⬆️" },
  { id: "clothes", th: "เสื้อผ้า", en: "Clothes", icon: "👕" },

  // --- 👨‍👩‍👧 คนและอาชีพ ---
  { id: "family", th: "ครอบครัว", en: "Family", icon: "👨‍👩‍👧‍👦" },
  { id: "jobs", th: "อาชีพ", en: "Jobs", icon: "👩‍⚕️" },
  { id: "hospital-health", th: "โรงพยาบาลและสุขภาพ", en: "Hospital & Health", icon: "🩺" },

  // --- 🏠 บ้านและสิ่งของ ---
  { id: "toys", th: "ของเล่น", en: "Toys", icon: "🧸" },
  { id: "rooms", th: "ห้องในบ้าน", en: "Rooms", icon: "🛏️" },
  { id: "household", th: "ของใช้ในบ้าน", en: "Household Items", icon: "🧹" },
  { id: "technology", th: "เทคโนโลยี", en: "Technology", icon: "📱" },
  { id: "money", th: "เงิน", en: "Money", icon: "💰" },

  // --- 🎒 โรงเรียนและความรู้ ---
  { id: "school", th: "โรงเรียน", en: "School", icon: "🎒" },
  { id: "colors", th: "สี", en: "Colors", icon: "🎨" },
  { id: "numbers", th: "ตัวเลข", en: "Numbers", icon: "🔢" },
  { id: "shapes", th: "รูปทรง", en: "Shapes", icon: "📐" },
  { id: "time", th: "เวลาและวัน", en: "Time & Days", icon: "🌅" },

  // --- 🌤️ ธรรมชาติและโลก ---
  { id: "nature", th: "ธรรมชาติ", en: "Nature", icon: "☀️" },
  { id: "weather", th: "สภาพอากาศ", en: "Weather", icon: "🌧️" },
  { id: "seasons", th: "ฤดูกาล", en: "Seasons", icon: "🍂" },
  { id: "space", th: "อวกาศ", en: "Space", icon: "🚀" },

  // --- 🚗 การเดินทางและสถานที่ ---
  { id: "vehicles", th: "ยานพาหนะ", en: "Vehicles", icon: "🚗" },
  { id: "transportation-signs", th: "ป้ายจราจร", en: "Traffic Signs", icon: "🚦" },
  { id: "places", th: "สถานที่", en: "Places", icon: "🏠" },

  // --- 🎉 เล่นและกิจกรรมกลางแจ้ง ---
  { id: "sports", th: "กีฬา", en: "Sports", icon: "⚽" },
  { id: "instruments", th: "เครื่องดนตรี", en: "Musical Instruments", icon: "🎸" },
  { id: "playground", th: "สนามเด็กเล่น", en: "Playground", icon: "🛝" },
  { id: "beach-seaside", th: "ชายหาด", en: "Beach & Seaside", icon: "🏖️" },
  { id: "camping-outdoor", th: "แคมป์ปิ้ง", en: "Camping & Outdoor", icon: "⛺" },
  { id: "festivals", th: "เทศกาล", en: "Festivals", icon: "🎊" }
];

// ไฟล์ words/*.js ต้องถูกโหลดก่อนไฟล์นี้ใน index.html
const WORDS = [
  // 🐾 สัตว์
  ...WORDS_ANIMALS,
  ...WORDS_ANIMALS_REAL,
  ...WORDS_WILD_ANIMALS,
  ...WORDS_SEA_ANIMALS,
  ...WORDS_BIRDS,
  ...WORDS_INSECTS,
  ...WORDS_DINOSAURS,
  ...WORDS_FARM,

  // 🍎 อาหารและพืช
  ...WORDS_FRUITS,
  ...WORDS_FRUITS_REAL,
  ...WORDS_VEGETABLES,
  ...WORDS_FOOD,
  ...WORDS_DESSERTS_SNACKS,
  ...WORDS_FLOWERS_PLANTS,

  // 👦 ตัวเด็กเอง
  ...WORDS_BODY,
  ...WORDS_BODY_REAL,
  ...WORDS_EMOTIONS,
  ...WORDS_ACTIONS,
  ...WORDS_OPPOSITES,
  ...WORDS_CLOTHES,

  // 👨‍👩‍👧 คนและอาชีพ
  ...WORDS_FAMILY,
  ...WORDS_JOBS,
  ...WORDS_JOBS_REAL,
  ...WORDS_HOSPITAL_HEALTH,

  // 🏠 บ้านและสิ่งของ
  ...WORDS_TOYS,
  ...WORDS_TOYS_REAL,
  ...WORDS_ROOMS,
  ...WORDS_HOUSEHOLD,
  ...WORDS_TECHNOLOGY,
  ...WORDS_MONEY,

  // 🎒 โรงเรียนและความรู้
  ...WORDS_SCHOOL,
  ...WORDS_SCHOOL_REAL,
  ...WORDS_COLORS,
  ...WORDS_NUMBERS,
  ...WORDS_SHAPES,
  ...WORDS_TIME,

  // 🌤️ ธรรมชาติและโลก
  ...WORDS_NATURE,
  ...WORDS_WEATHER,
  ...WORDS_SEASONS,
  ...WORDS_SPACE,

  // 🚗 การเดินทางและสถานที่
  ...WORDS_VEHICLES,
  ...WORDS_VEHICLES_REAL,
  ...WORDS_TRANSPORTATION_SIGNS,
  ...WORDS_PLACES,

  // 🎉 เล่นและกิจกรรมกลางแจ้ง
  ...WORDS_SPORTS,
  ...WORDS_INSTRUMENTS,
  ...WORDS_PLAYGROUND,
  ...WORDS_BEACH_SEASIDE,
  ...WORDS_CAMPING_OUTDOOR,
  ...WORDS_FESTIVALS
];
