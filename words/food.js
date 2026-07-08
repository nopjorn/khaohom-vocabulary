// คำศัพท์หมวดอาหารและเครื่องดื่ม
const WORDS_FOOD = [
  // --- อาหารจานหลัก / ของคาว ---
  { emoji: "🍚", th: "ข้าวสวย", en: "Cooked Rice", category: "food", image: null },
  { emoji: "🍜", th: "ก๋วยเตี๋ยว / ราเมน", en: "Noodles", category: "food", image: null },
  { emoji: "🍛", th: "ข้าวแกงกะหรี่ / ข้าวราดแกง", en: "Curry and Rice", category: "food", image: null },
  { emoji: "🍣", th: "ซูชิ", en: "Sushi", category: "food", image: null },
  { emoji: "🍕", th: "พิซซ่า", en: "Pizza", category: "food", image: null },
  { emoji: "🍔", th: "แฮมเบอร์เกอร์", en: "Hamburger", category: "food", image: null },
  { emoji: "🍟", th: "เฟรนช์ฟรายส์", en: "French Fries", category: "food", image: null },
  { emoji: "🥪", th: "แซนด์วิช", en: "Sandwich", category: "food", image: null },
  { emoji: "🌮", th: "ทาโก้", en: "Taco", category: "food", image: null },
  { emoji: "🍗", th: "น่องไก่ทอด", en: "Poultry Leg", category: "food", image: null },
  { emoji: "🥩", th: "เนื้อสเต็ก", en: "Meat", category: "food", image: null },
  { emoji: "🥚", th: "ไข่", en: "Egg", category: "food", image: null },
  { emoji: "🍲", th: "หม้อไฟ / ซุป", en: "Hot Pot / Soup", category: "food", image: null },
  { emoji: "🥗", th: "สลัดผัก", en: "Green Salad", category: "food", image: null },

  // --- ผลไม้ ---
  { emoji: "🍎", th: "แอปเปิ้ลสีแดง", en: "Red Apple", category: "food", image: null },
  { emoji: "🍌", th: "กล้วย", en: "Banana", category: "food", image: null },
  { emoji: "🍉", th: "แตงโม", en: "Watermelon", category: "food", image: null },
  { emoji: "🍇", th: "องุ่น", en: "Grapes", category: "food", image: null },
  { emoji: "🍓", th: "สตรอว์เบอร์รี", en: "Strawberry", category: "food", image: null },
  { emoji: "🥭", th: "มะม่วง", en: "Mango", category: "food", image: null },
  { emoji: "🍍", th: "สับปะรด", en: "Pineapple", category: "food", image: null },
  { emoji: "🍊", th: "ส้ม", en: "Tangerine", category: "food", image: null },
  { emoji: "🥥", th: "มะพร้าว", en: "Coconut", category: "food", image: null },

  // --- ขนมหวาน ---
  { emoji: "🍦", th: "ไอศกรีมซอฟต์เสิร์ฟ", en: "Soft Ice Cream", category: "food", image: null },
  { emoji: "🍧", th: "น้ำแข็งไส", en: "Shaved Ice", category: "food", image: null },
  { emoji: "🍰", th: "เค้ก", en: "Shortcake", category: "food", image: null },
  { emoji: "🍩", th: "โดนัท", en: "Donut", category: "food", image: null },
  { emoji: "🍪", th: "คุกกี้", en: "Cookie", category: "food", image: null },
  { emoji: "🍫", th: "ช็อกโกแลต", en: "Chocolate Bar", category: "food", image: null },
  { emoji: "🍿", th: "ป๊อปคอร์น / ข้าวโพดคั่ว", en: "Popcorn", category: "food", image: null },

  // --- เครื่องดื่ม ---
  { emoji: "🥛", th: "นมสดหนึ่งแก้ว", en: "Glass of Milk", category: "food", image: null },
  { emoji: "🧋", th: "ชานมไข่มุก", en: "Bubble Tea", category: "food", image: null },
  { emoji: "🥤", th: "น้ำอัดลม / เครื่องดื่มแก้วพลาสติก", en: "Soft Drink", category: "food", image: null },
  { emoji: "☕", th: "กาแฟร้อน / ชาร้อน", en: "Hot Beverage", category: "food", image: null },
  { emoji: "🧃", th: "น้ำผลไม้กล่อง", en: "Juice Box", category: "food", image: null }
];