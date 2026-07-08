// คำศัพท์หมวดยานพาหนะ
// รูปภาพ: Wikimedia Commons (public domain / CC) ลิงก์ตรง ไม่ต้องเก็บไฟล์ในโปรเจกต์
const WORDS_VEHICLES = [
  // 🟢 ยานพาหนะทางบก (รถยนต์ และ รถขนาดเล็ก)
  { emoji: "🚗", th: "รถยนต์", en: "Car", category: "vehicles", image: null },
  { emoji: "🚕", th: "รถแท็กซี่", en: "Taxi", category: "vehicles", image: null },
  { emoji: "🚙", th: "รถเอสยูวี", en: "SUV", category: "vehicles", image: null },
  { emoji: "🚌", th: "รถบัส", en: "Bus", category: "vehicles", image: null },
  { emoji: "🦼", th: "รถเข็นไฟฟ้า", en: "Motorized Wheelchair", category: "vehicles", image: null },
  { emoji: "🛺", th: "รถตุ๊กตุ๊ก", en: "Auto Rickshaw", category: "vehicles", image: null },
  { emoji: "🏎️", th: "รถแข่ง", en: "Racing Car", category: "vehicles", image: null },
  { emoji: "🚓", th: "รถตำรวจ", en: "Police Car", category: "vehicles", image: null },
  { emoji: "🚑", th: "รถพยาบาล", en: "Ambulance", category: "vehicles", image: null },
  { emoji: "🚒", th: "รถดับเพลิง", en: "Fire Engine", category: "vehicles", image: null },
  { emoji: "🚐", th: "รถตู้", en: "Minivan", category: "vehicles", image: null },
  { emoji: "🛻", th: "รถกระบะ", en: "Pickup Truck", category: "vehicles", image: null },
  { emoji: "🚚", th: "รถส่งของ", en: "Delivery Truck", category: "vehicles", image: null },
  { emoji: "🚛", th: "รถบรรทุก", en: "Truck", category: "vehicles", image: null },
  { emoji: "🚜", th: "รถแทรกเตอร์", en: "Tractor", category: "vehicles", image: null },
  { emoji: "🚲", th: "จักรยาน", en: "Bicycle", category: "vehicles", image: null },
  { emoji: "🛵", th: "รถสกู๊ตเตอร์", en: "Motor Scooter", category: "vehicles", image: null },
  { emoji: "🏍️", th: "มอเตอร์ไซค์", en: "Motorcycle", category: "vehicles", image: null },
  { emoji: "🛼", th: "รองเท้าสเก็ต", en: "Roller Skates", category: "vehicles", image: null },
  { emoji: "🛹", th: "สเก็ตบอร์ด", en: "Skateboard", category: "vehicles", image: null },

  // 🟡 ยานพาหนะทางราง (รถไฟ รูปแบบต่างๆ)
  { emoji: "🚂", th: "รถไฟหัวจักรไอน้ำ", en: "Steam Locomotive", category: "vehicles", image: null },
  { emoji: "🪂", th: "ร่มชูชีพ", en: "Parachute", category: "vehicles", image: null },
  { emoji: "🚃", th: "โบกี้รถไฟ", en: "Railway Car", category: "vehicles", image: null },
  { emoji: "🚄", th: "รถไฟความเร็วสูง", en: "High-Speed Train", category: "vehicles", image: null },
  { emoji: "🚅", th: "รถไฟชินคันเซ็น", en: "Bullet Train", category: "vehicles", image: null },
  { emoji: "🚆", th: "รถไฟ", en: "Train", category: "vehicles", image: null },
  { emoji: "🚇", th: "รถไฟใต้ดิน", en: "Subway", category: "vehicles", image: null },
  { emoji: "🚈", th: "รถไฟฟ้ารางเบา", en: "Light Rail", category: "vehicles", image: null },
  { emoji: "🚉", th: "รถไฟจอดสถานี", en: "Stationed Train", category: "vehicles", image: null },
  { emoji: "🚊", th: "รถราง", en: "Tram", category: "vehicles", image: null },
  { emoji: "🚝", th: "รถไฟรางเดี่ยว", en: "Monorail", category: "vehicles", image: null },
  { emoji: "ภูเขาไฟ", th: "รถไฟขึ้นเขา", en: "Mountain Railway", category: "vehicles", image: null }, // 🚞
  { emoji: "🚋", th: "รถรางไฟฟ้า", en: "Tramcar", category: "vehicles", image: null },

  // 🔵 ยานพาหนะทางอากาศ และอวกาศ
  { emoji: "✈️", th: "เครื่องบิน", en: "Airplane", category: "vehicles", image: null },
  { emoji: "🛫", th: "เครื่องบินขึ้น", en: "Airplane Takeoff", category: "vehicles", image: null },
  { emoji: "🛬", th: "เครื่องบินลงจอด", en: "Airplane Landing", category: "vehicles", image: null },
  { emoji: "🛩️", th: "เครื่องบินเล็ก", en: "Small Airplane", category: "vehicles", image: null },
  { emoji: "🚀", th: "จรวด", en: "Rocket", category: "vehicles", image: null },
  { emoji: "🛸", th: "จานบิน UFO", en: "Flying Saucer", category: "vehicles", image: null },
  { emoji: "🚁", th: "เฮลิคอปเตอร์", en: "Helicopter", category: "vehicles", image: null },
  { emoji: "🪂", th: "พารามอเตอร์", en: "Paraglider", category: "vehicles", image: null },
  { emoji: "balloon" /* 🎈 */, th: "บอลลูนลมร้อน", en: "Hot Air Balloon", category: "vehicles", image: null }, // 🪂 / 🎈 เหมือนกันในบาง OS จึงปรับมาใช้รูปร่างตรงตัว

  // 🟣 ยานพาหนะทางน้ำ
  { emoji: "⛵", th: "เรือใบ", en: "Sailboat", category: "vehicles", image: null },
  { emoji: "🛶", th: "เรือแคนู", en: "Canoe", category: "vehicles", image: null },
  { emoji: "🚤", th: "เรือสปีดโบ๊ท", en: "Speedboat", category: "vehicles", image: null },
  { emoji: "🛳️", th: "เรือสำราญ", en: "Passenger Ship", category: "vehicles", image: null },
  { emoji: " ferry" /* ⛴️ */, th: "เรือเฟอร์รี่", en: "Ferry", category: "vehicles", image: null },
  { emoji: "🚢", th: "เรือสินค้า", en: "Ship", category: "vehicles", image: null },
  { emoji: "⚓", th: "เรือสมอเรือ", en: "Anchor Boat", category: "vehicles", image: null },
  { emoji: " submarine" /* 🤿 */, th: "เรือดำน้ำ", en: "Submarine", category: "vehicles", image: null },

  // 🟤 กระเช้า คาร์ และอื่นๆ ยานพาหนะเฉพาะทาง
  { emoji: "🚟", th: "รถไฟแขวน", en: "Suspended Railway", category: "vehicles", image: null },
  { emoji: "🚠", th: "กระเช้าลอยฟ้ารางเคเบิล", en: "Mountain Cableway", category: "vehicles", image: null },
  { emoji: "🚡", th: "กระเช้าลอยฟ้า", en: "Aerial Tramway", category: "vehicles", image: null },
  { emoji: "🛹", th: "โฮเวอร์บอร์ด", en: "Hoverboard", category: "vehicles", image: null },
  { emoji: "🛷", th: "เลื่อนหิมะ", en: "Sled", category: "vehicles", image: null },
  { emoji: "🎿", th: "สกี", en: "Skis", category: "vehicles", image: null },
  { emoji: "🦽", th: "รถเข็นผู้ป่วย", en: "Manual Wheelchair", category: "vehicles", image: null },
  { emoji: "🛴", th: "เตะสกู๊ตเตอร์", en: "Kick Scooter", category: "vehicles", image: null },

  // 🔴 สัญลักษณ์การจราจรและยานพาหนะเพิ่มเติม 
  { emoji: "🚨", th: "ไฟไซเรน", en: "Police Light", category: "vehicles", image: null },
  { emoji: "⛽", th: "ปั๊มน้ำมัน", en: "Fuel Pump", category: "vehicles", image: null },
  { emoji: "🚏", th: "ป้ายรถเมล์", en: "Bus Stop", category: "vehicles", image: null },
  { emoji: "🚦", th: "ไฟเขียวไฟแดงแนวตั้ง", en: "Vertical Traffic Light", category: "vehicles", image: null },
  { emoji: "🚥", th: "ไฟสัญญาณจราจรแนวนอน", en: "Horizontal Traffic Light", category: "vehicles", image: null },
  { emoji: "🛑", th: "ป้ายหยุด", en: "Stop Sign", category: "vehicles", image: null },
  { emoji: "🚧", th: "แผงกั้นถนน", en: "Construction Sign", category: "vehicles", image: null },
  { emoji: "🧳", th: "กระเป๋าเดินทาง", en: "Luggage", category: "vehicles", image: null },
  { emoji: "🚲", th: "จักรยานเสือภูเขา", en: "Mountain Bike", category: "vehicles", image: null },
  { emoji: "🏎️", th: "รถสูตรหนึ่ง", en: "Formula Car", category: "vehicles", image: null },
  { emoji: "🚒", th: "รถกู้ภัย", en: "Rescue Truck", category: "vehicles", image: null },
  { emoji: "🚚", th: "รถขนส่งสินค้า", en: "Cargo Truck", category: "vehicles", image: null },
  { emoji: "🛸", th: "ยานอวกาศเอเลี่ยน", en: "Alien Spaceship", category: "vehicles", image: null },
  { emoji: "🚀", th: "กระสวยอวกาศ", en: "Space Shuttle", category: "vehicles", image: null }
];