// คำศัพท์หมวดร่างกาย
const WORDS_BODY_REAL = [
  // 🟢 ส่วนศีรษะและใบหน้า
  { emoji: "👁️", th: "ตา", en: "Eye", category: "body_r", image: 'https://images.unsplash.com/photo-1565581655763-f6b0bfda8e75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUUwJUI4JTk1JUUwJUI4JUIyfGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "👀", th: "ดวงตา", en: "Eyes", category: "body_r", image: null },
  // { emoji: "👁️‍🗨️", th: "ตาในฟองคำพูด", en: "Eye in Speech Bubble", category: "body_r", image: null },
  { emoji: "👂", th: "หู", en: "Ear", category: "body_r", image: 'https://images.unsplash.com/photo-1596088869451-491e167efabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFyfGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "🦻", th: "หูติดเครื่องช่วยฟัง", en: "Ear with Hearing Aid", category: "body_r", image: null },
  // { emoji: "👃", th: "จมูก", en: "Nose", category: "body_r", image: null },
  { emoji: "👄", th: "ปาก", en: "Mouth", category: "body_r", image: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91dGh8ZW58MHwwfDB8fHwy' },
  { emoji: "👅", th: "ลิ้น", en: "Tongue", category: "body_r", image: 'https://images.unsplash.com/photo-1725588003428-491d56d2f91b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9uZ3VlfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦷", th: "ฟัน", en: "Tooth", category: "body_r", image: 'https://images.unsplash.com/photo-1660732205495-f65510d8180e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRvb3RofGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🫁", th: "ปอด", en: "Lungs", category: "body_r", image: 'https://images.unsplash.com/photo-1743767587847-08c42b31cdec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVuZ2VzfGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "🫀", th: "หัวใจ", en: "Anatomical Heart", category: "body_r", image: null },
  { emoji: "🫀", th: "หัวใจ", en: "Heart", category: "body_r", image: 'https://images.unsplash.com/photo-1623134915837-d2fdb4f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVhcnR8ZW58MHwwfDB8fHwy' },
  { emoji: "🧠", th: "สมอง", en: "Brain", category: "body_r", image: 'https://images.unsplash.com/photo-1644648479153-2a3dbee76212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJhaW58ZW58MHwwfDB8fHwy' },
  { emoji: null, th: "คิ้ว", en: "Eyebrow", category: "body_r", image: 'https://images.unsplash.com/photo-1721540343335-142d9a064d94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc4fHxleWVicm93fGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: null, th: "แก้ม", en: "Cheek", category: "body_r", image: null },
  // { emoji: null, th: "คาง", en: "Chin", category: "body_r", image: null },

  // 🟡 ส่วนมือและแขน
  { emoji: "👋", th: "มือ", en: "Hand", category: "body_r", image: 'https://images.unsplash.com/photo-1574676122993-cd7fcf7f9030?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGFuZHxlbnwwfDB8MHx8fDI%3D' },
  // { emoji: "🤚", th: "หลังมือ", en: "Raised Back of Hand", category: "body_r", image: null },
  // { emoji: "🖐️", th: "กางนิ้วมือ", en: "Hand with Fingers Splayed", category: "body_r", image: null },
  // { emoji: "✋", th: "ยกมือ", en: "Raised Hand", category: "body_r", image: null },
  // { emoji: "🖖", th: "มือวัลแคน", en: "Vulcan Salute", category: "body_r", image: null },
  // { emoji: "👌", th: "มือโอเค", en: "OK Hand", category: "body_r", image: null },
  // { emoji: "✌️", th: "ชูสองนิ้ว", en: "Victory Hand", category: "body_r", image: null },
  // { emoji: "🤞", th: "ไขว้นิ้ว", en: "Crossed Fingers", category: "body_r", image: null },
  // { emoji: "🤙", th: "ทำมือโทรศัพท์", en: "Call Me Hand", category: "body_r", image: null },
  // { emoji: "👍", th: "นิ้วโป้ง", en: "Thumbs Up", category: "body_r", image: null },
  // { emoji: "👎", th: "คว่ำนิ้วโป้ง", en: "Thumbs Down", category: "body_r", image: null },
  // { emoji: "👊", th: "กำปั้น", en: "Oncoming Fist", category: "body_r", image: null },
  // { emoji: "💪", th: "กล้ามแขน", en: "Flexed Biceps", category: "body_r", image: null },

  // 🔵 ส่วนขาและเท้า
  { emoji: "🦵", th: "ขา", en: "Leg", category: "body_r", image: 'https://images.unsplash.com/photo-1558976454-3031bc29ec28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGVnfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦶", th: "เท้า", en: "Foot", category: "body_r", image: 'https://images.unsplash.com/photo-1638859460750-181fcc7936a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9vdHxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦴", th: "กระดูก", en: "Bone", category: "body_r", image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9uZXxlbnwwfDB8MHx8fDI%3D' },


  
];