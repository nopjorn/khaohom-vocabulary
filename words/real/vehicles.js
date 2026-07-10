// คำศัพท์หมวดยานพาหนะ
// รูปภาพ: Wikimedia Commons (public domain / CC) ลิงก์ตรง ไม่ต้องเก็บไฟล์ในโปรเจกต์
const WORDS_VEHICLES_REAL = [
  // { emoji: "🚗", th: "รถยนต์", en: "Car", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Car_%28205937923%29.jpeg/250px-Car_%28205937923%29.jpeg" },
  // { emoji: "🚌", th: "รถบัส", en: "Bus", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Thomas_School_Bus_Bus.jpg/250px-Thomas_School_Bus_Bus.jpg" },
  // { emoji: "🚲", th: "จักรยาน", en: "Bicycle", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kettler_Joker_bicycle_side_view.JPG/250px-Kettler_Joker_bicycle_side_view.JPG" },
  // { emoji: "✈️", th: "เครื่องบิน", en: "Airplane", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Airplane_%28199513961%29.jpeg/250px-Airplane_%28199513961%29.jpeg" },
  // { emoji: "🚂", th: "รถไฟ", en: "Train", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Steam_locomotive_train.jpg/250px-Steam_locomotive_train.jpg" },
  // { emoji: "🚤", th: "เรือ", en: "Boat", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Boat_on_Lake_Superior_Minnesota_%2814555643848%29.jpg/250px-Boat_on_Lake_Superior_Minnesota_%2814555643848%29.jpg" },
  // { emoji: "🚑", th: "รถพยาบาล", en: "Ambulance", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Columbia_University_EMS_Ambulance.JPG/250px-Columbia_University_EMS_Ambulance.JPG" },
  // { emoji: "🚒", th: "รถดับเพลิง", en: "Fire Truck", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jeffersonville_Firetruck.jpg/250px-Jeffersonville_Firetruck.jpg" },
  // { emoji: "🏍️", th: "มอเตอร์ไซค์", en: "Motorcycle", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/DMW_motorcycle.jpg/250px-DMW_motorcycle.jpg" },
  // { emoji: "🚁", th: "เฮลิคอปเตอร์", en: "Helicopter", category: "vehicles_r", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Helicopter_hovering_just_above_the_ground.jpg/250px-Helicopter_hovering_just_above_the_ground.jpg" },

  { emoji: "🚗", th: "รถยนต์", en: "Car", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhcnxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🚌", th: "รถบัส", en: "Bus", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fEJ1c3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🚲", th: "จักรยาน", en: "Bicycle", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmljeWNsZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "✈️", th: "เครื่องบิน", en: "Airplane", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWlycGxhbmV8ZW58MHwwfDB8fHwy' },
  { emoji: "🚂", th: "รถไฟ", en: "Train", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1615555489695-71c6290ea155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFRyYWlufGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🚤", th: "เรือ", en: "Boat", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1587977706287-86d257db113f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fEJvYXR8ZW58MHwwfDB8fHwy' },
  { emoji: "🚑", th: "รถพยาบาล", en: "Ambulance", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFtYnVsYW5jZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🚒", th: "รถดับเพลิง", en: "Fire Truck", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1622783089891-ddf18baab338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmlyZSUyMFRydWNrfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🏍️", th: "มอเตอร์ไซค์", en: "Motorcycle", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW90b3JjeWNsZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🚁", th: "เฮลิคอปเตอร์", en: "Helicopter", category: "vehicles_r", image: 'https://images.unsplash.com/photo-1586097494908-6dbb35137167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEhlbGljb3B0ZXJ8ZW58MHwwfDB8fHwy' },
];
