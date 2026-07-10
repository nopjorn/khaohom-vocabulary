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
  { id: "emotions", th: "อารมณ์", en: "Emotions", icon: "😄" },
  { id: "vegetables", th: "ผัก", en: "Vegetables", icon: "🥦" },
  { id: "household", th: "ของใช้ในบ้าน", en: "Household Items", icon: "🧹" },
  { id: "places", th: "สถานที่", en: "Places", icon: "🏠" },
  { id: "wild-animals", th: "สัตว์ป่า", en: "Wild Animals", icon: "🦁" },

  // --- กลุ่มเพิ่มเติมล่าสุด ---
  { id: "birds", th: "นก", en: "Birds", icon: "🐦" },
  { id: "dinosaurs", th: "ไดโนเสาร์", en: "Dinosaurs", icon: "🦕" },
  { id: "space", th: "อวกาศ", en: "Space", icon: "🚀" },
  { id: "flowers-plants", th: "ดอกไม้และต้นไม้", en: "Flowers & Plants", icon: "🌸" },
  { id: "desserts-snacks", th: "ขนมและของว่าง", en: "Desserts & Snacks", icon: "🍪" },
  { id: "festivals", th: "เทศกาล", en: "Festivals", icon: "🎊" },
  { id: "opposites", th: "คำตรงข้าม", en: "Opposites", icon: "⬆️" },
  { id: "farm", th: "ฟาร์ม", en: "Farm", icon: "🚜" },

  // --- กลุ่มเพิ่มเติมรอบใหม่ ---
  { id: "technology", th: "เทคโนโลยี", en: "Technology", icon: "📱" },
  { id: "transportation-signs", th: "ป้ายจราจร", en: "Traffic Signs", icon: "🚦" },
  { id: "actions", th: "คำกริยา", en: "Actions", icon: "🏃" },
  { id: "money", th: "เงิน", en: "Money", icon: "💰" },
  { id: "camping-outdoor", th: "แคมป์ปิ้ง", en: "Camping & Outdoor", icon: "⛺" },

  // --- กลุ่มเพิ่มเติมรอบล่าสุด ---
  { id: "beach-seaside", th: "ชายหาด", en: "Beach & Seaside", icon: "🏖️" },
  { id: "playground", th: "สนามเด็กเล่น", en: "Playground", icon: "🛝" },
  { id: "seasons", th: "ฤดูกาล", en: "Seasons", icon: "🍂" },
  { id: "hospital-health", th: "โรงพยาบาลและสุขภาพ", en: "Hospital & Health", icon: "🩺" }
];

// ไฟล์ words/*.js ต้องถูกโหลดก่อนไฟล์นี้ใน index.html
const WORDS = [
  ...WORDS_ANIMALS,
  ...WORDS_ANIMALS_REAL,
  ...WORDS_FRUITS,
  ...WORDS_FRUITS_REAL,
  ...WORDS_VEHICLES,
  ...WORDS_VEHICLES_REAL,
  ...WORDS_COLORS,
  ...WORDS_NUMBERS,
  ...WORDS_BODY,
  ...WORDS_BODY_REAL,
  ...WORDS_FAMILY,
  ...WORDS_TOYS,
  ...WORDS_TOYS_REAL,
  ...WORDS_CLOTHES,
  ...WORDS_SCHOOL,
  ...WORDS_SCHOOL_REAL,
  ...WORDS_FOOD,
  ...WORDS_NATURE,
  ...WORDS_SHAPES,
  ...WORDS_JOBS,
  ...WORDS_JOBS_REAL,
  ...WORDS_WEATHER,
  ...WORDS_ROOMS,
  ...WORDS_INSTRUMENTS,
  ...WORDS_SPORTS,
  ...WORDS_INSECTS,
  ...WORDS_TIME,
  ...WORDS_SEA_ANIMALS,
  ...WORDS_EMOTIONS,
  ...WORDS_VEGETABLES,
  ...WORDS_HOUSEHOLD,
  ...WORDS_PLACES,
  ...WORDS_WILD_ANIMALS,
  ...WORDS_BIRDS,
  ...WORDS_DINOSAURS,
  ...WORDS_SPACE,
  ...WORDS_FLOWERS_PLANTS,
  ...WORDS_DESSERTS_SNACKS,
  ...WORDS_FESTIVALS,
  ...WORDS_OPPOSITES,
  ...WORDS_FARM,
  ...WORDS_TECHNOLOGY,
  ...WORDS_TRANSPORTATION_SIGNS,
  ...WORDS_ACTIONS,
  ...WORDS_MONEY,
  ...WORDS_CAMPING_OUTDOOR,
  ...WORDS_BEACH_SEASIDE,
  ...WORDS_PLAYGROUND,
  ...WORDS_SEASONS,
  ...WORDS_HOSPITAL_HEALTH
];
