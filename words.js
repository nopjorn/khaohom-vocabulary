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
  { id: "jobs", th: "อาชีพ", en: "Jobs", icon: "👩‍⚕️" }
];

// // --- 1. สัตว์ (Animals) ---
// const WORDS_ANIMALS = [
//   { emoji: "🐶", th: "สุนัข", en: "Dog", category: "animals", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg" },
//   { emoji: "🐱", th: "แมว", en: "Cat", category: "animals", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg" },
//   { emoji: "🦁", th: "สิงโต", en: "Lion", category: "animals", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namutoni.jpg" },
//   { emoji: "🐘", th: "ช้าง", en: "Elephant", category: "animals", image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Elephant_Anfasa.jpg" },
//   { emoji: "🐰", th: "กระต่าย", en: "Rabbit", category: "animals", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Eastern_Cottontail_Rabbit_Antelope_Island.jpg" }
// ];

// // --- 2. ผลไม้ (Fruits) ---
// const WORDS_FRUITS = [
//   { emoji: "🍎", th: "แอปเปิ้ล", en: "Apple", category: "fruits", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
//   { emoji: "🍌", th: "กล้วย", en: "Banana", category: "fruits", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
//   { emoji: "🍉", th: "แตงโม", en: "Watermelon", category: "fruits", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Watermelon_750x475.jpg" },
//   { emoji: "🍊", th: "ส้ม", en: "Orange", category: "fruits", image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/2_Orange_Fruits_and_Flower.jpg" },
//   { emoji: "🍇", th: "องุ่น", en: "Grape", category: "fruits", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg" }
// ];

// // --- 3. ยานพาหนะ (Vehicles) ---
// const WORDS_VEHICLES = [
//   { emoji: "🚗", th: "รถยนต์", en: "Car", category: "vehicles", image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8_Front.jpg" },
//   { emoji: "🚌", th: "รถบัส", en: "Bus", category: "vehicles", image: "https://upload.wikimedia.org/wikipedia/commons/6/63/LT_471_%20%28LTZ_1471%29_Arriva_London_New_Routemaster_%2816480112440%29.jpg" },
//   { emoji: "🚲", th: "จักรยาน", en: "Bicycle", category: "vehicles", image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg" },
//   { emoji: "✈️", th: "เครื่องบิน", en: "Airplane", category: "vehicles", image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Airbus_A350-941_F-WWCF_MSN002_PA143242_edited.jpg" },
//   { emoji: "🚂", th: "รถไฟ", en: "Train", category: "vehicles", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/142_005_at_Skegness.jpg" }
// ];

// // --- 4. สี (Colors) ---
// const WORDS_COLORS = [
//   { emoji: "🔴", th: "สีแดง", en: "Red", category: "colors", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Red_Color_Block.jpg" },
//   { emoji: "🔵", th: "สีน้ำเงิน", en: "Blue", category: "colors", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Solid_blue.svg" },
//   { emoji: "🟢", th: "สีเขียว", en: "Green", category: "colors", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Solid_green.svg" },
//   { emoji: "🟡", th: "สีเหลือง", en: "Yellow", category: "colors", image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Solid_yellow.svg" },
//   { emoji: "⚫", th: "สีดำ", en: "Black", category: "colors", image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Disk_Black.svg" }
// ];

// // --- 5. ตัวเลข (Numbers) ---
// const WORDS_NUMBERS = [
//   { emoji: "1️⃣", th: "หนึ่ง", en: "One", category: "numbers", image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bundesstraße_1_number.svg" },
//   { emoji: "2️⃣", th: "สอง", en: "Two", category: "numbers", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bundesstraße_2_number.svg" },
//   { emoji: "3️⃣", th: "สาม", en: "Three", category: "numbers", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Bundesstraße_3_number.svg" },
//   { emoji: "4️⃣", th: "สี่", en: "Four", category: "numbers", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Bundesstraße_4_number.svg" },
//   { emoji: "5️⃣", th: "ห้า", en: "Five", category: "numbers", image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bundesstraße_5_number.svg" }
// ];

// --- 6. ร่างกาย (Body Parts) ---
const WORDS_BODY = [
  { emoji: "👁️", th: "ตา", en: "Eye", category: "body", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Human_eye_with_blood_vessels.jpg" },
  { emoji: "👃", th: "จมูก", en: "Nose", category: "body", image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Human_Nose.jpg" },
  { emoji: "👂", th: "หู", en: "Ear", category: "body", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Human_Ear.jpg" },
  { emoji: "👄", th: "ปาก", en: "Mouth", category: "body", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Human_mouth.jpg" },
  { emoji: "🤚", th: "มือ", en: "Hand", category: "body", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Open_Palm_Hand.jpg" }
];

// --- 7. ครอบครัว (Family) ---
const WORDS_FAMILY = [
  { emoji: "👨", th: "พ่อ", en: "Father", category: "family", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Young_father_with_his_child.jpg" },
  { emoji: "👩", th: "แม่", en: "Mother", category: "family", image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mother_and_child_sharing_a_moment.jpg" },
  { emoji: "👦", th: "พี่ชาย/น้องชาย", en: "Brother", category: "family", image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Two_brothers_playing.jpg" },
  { emoji: "👧", th: "พี่สาว/น้องสาว", en: "Sister", category: "family", image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Two_sisters_holding_hands.jpg" }
];

// --- 8. ของเล่น (Toys) ---
const WORDS_TOYS = [
  { emoji: "⚽", th: "ลูกบอล", en: "Ball", category: "toys", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg" },
  { emoji: "🧸", th: "ตุ๊กตาหมี", en: "Teddy Bear", category: "toys", image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Teddy_bear_isolated.jpg" },
  { emoji: "🧱", th: "ตัวต่อ", en: "Blocks", category: "toys", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Lego_dimensions.svg" },
  { emoji: "🪁", th: "ว่าว", en: "Kite", category: "toys", image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Kite_in_the_sky.jpg" }
];

// --- 9. เสื้อผ้า (Clothes) ---
const WORDS_CLOTHES = [
  { emoji: "👕", th: "เสื้อยืด", en: "T-Shirt", category: "clothes", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg" },
  { emoji: "🩳", th: "กางเกงขาสั้น", en: "Shorts", category: "clothes", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Shorts.jpg" },
  { emoji: "👗", th: "ชุดกระโปรง", en: "Dress", category: "clothes", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Blue_dress_isolated.jpg" },
  { emoji: "👟", th: "รองเท้า", en: "Shoes", category: "clothes", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/An_isolated_running_shoe.jpg" }
];

// --- 10. โรงเรียน (School) ---
const WORDS_SCHOOL = [
  { emoji: "✏️", th: "ดินสอ", en: "Pencil", category: "school", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Yellow-Pencil.jpg" },
  { emoji: "📖", th: "หนังสือ", en: "Book", category: "school", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Book_Open.svg" },
  { emoji: "🎒", th: "กระเป๋านักเรียน", en: "Schoolbag", category: "school", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Schoolbag.jpg" },
  { emoji: "📐", th: "ไม้บรรทัด", en: "Ruler", category: "school", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Plastic_ruler_15cm.jpg" }
];

// --- 11. อาหารและเครื่องดื่ม (Food & Drinks) ---
const WORDS_FOOD = [
  { emoji: "🥛", th: "นม", en: "Milk", category: "food", image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/A_glass_of_milk.jpg" },
  { emoji: "🍞", th: "ขนมปัง", en: "Bread", category: "food", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Bread_sliced.jpg" },
  { emoji: "🍳", th: "ไข่ดาว", en: "Fried Egg", category: "food", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sunny_side_up_egg.jpg" },
  { emoji: "🍚", th: "ข้าวสวย", en: "Rice", category: "food", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/White_Rice.jpg" }
];

// --- 12. ธรรมชาติ (Nature) ---
const WORDS_NATURE = [
  { emoji: "☀️", th: "พระอาทิตย์", en: "Sun", category: "nature", image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg" },
  { emoji: "☁️", th: "เมฆ", en: "Cloud", category: "nature", image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Cumulus_clouds_in_fair_weather.jpg" },
  { emoji: "🌳", th: "ต้นไม้", en: "Tree", category: "nature", image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg" },
  { emoji: "🌸", th: "ดอกไม้", en: "Flower", category: "nature", image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg" }
];

// --- 13. รูปทรง (Shapes) ---
const WORDS_SHAPES = [
  { emoji: "⭕", th: "วงกลม", en: "Circle", category: "shapes", image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_Red_Simple.svg" },
  { emoji: "🔺", th: "สามเหลี่ยม", en: "Triangle", category: "shapes", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_Triangle.svg" },
  { emoji: "🟩", th: "สี่เหลี่ยม", en: "Square", category: "shapes", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Solid_green.svg" },
  { emoji: "❤️", th: "รูปหัวใจ", en: "Heart", category: "shapes", image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_corazón.svg" }
];

// --- 14. อาชีพ (Jobs) ---
const WORDS_JOBS = [
  { emoji: "👩‍⚕️", th: "คุณหมอ", en: "Doctor", category: "jobs", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Female_Doctor_with_Stethoscope.jpg" },
  { emoji: "👩‍🏫", th: "คุณครู", en: "Teacher", category: "jobs", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Teacher_in_front_of_classroom.jpg" },
  { emoji: "👮", th: "ตำรวจ", en: "Police Officer", category: "jobs", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Police_officer_at_work.jpg" },
  { emoji: "🧑‍🚒", th: "นักดับเพลิง", en: "Firefighter", category: "jobs", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Firefighter_in_action.jpg" }
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
  ...WORDS_JOBS
];
