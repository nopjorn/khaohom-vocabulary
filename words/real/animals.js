// คำศัพท์หมวดสัตว์
// รูปภาพ: Wikimedia Commons (public domain / CC) ลิงก์ตรง ไม่ต้องเก็บไฟล์ในโปรเจกต์
const WORDS_ANIMALS_REAL = [
  // 1-20 (ข้อมูลเดิมของคุณ)
  {
    emoji: "🐶", th: "หมา", en: "Dog", category: "animals_r", images: [
      'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8MHwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8MHwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1556866261-8763a7662333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRvZ3xlbnwwfDB8MHx8fDI%3D'
    ]
  },
  {
    emoji: "🐱", th: "แมว", en: "Cat", category: "animals_r", images: [
      'https://images.unsplash.com/photo-1614381016538-5f80a0852fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxjYXR8ZW58MHwwfDB8fHwy',
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8MHwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1574063413132-354db9f190fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENhdHxlbnwwfDB8MHx8fDI%3D'
    ]
  },
  {
    emoji: "🐘", th: "ช้าง", en: "Elephant", category: "animals_r", image: [
      'https://images.unsplash.com/photo-1660384479249-8cab2e38bd4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEVsZXBoYW50fGVufDB8MHwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlcGhhbnR8ZW58MHwwfDB8fHwy',
      'https://images.unsplash.com/photo-1481464904474-a575a33b44a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZXBoYW50fGVufDB8MHwwfHx8Mg%3D%3D'
    ]
  },
  {
    emoji: "🦁", th: "สิงโต", en: "Lion", category: "animals_r", images: [
      'https://images.unsplash.com/photo-1567732310772-bb589efdbb03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxpb258ZW58MHwwfDB8fHwy',
      'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGlvbnxlbnwwfDB8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1583587067350-2c49115673c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExpb258ZW58MHwwfDB8fHwy'
    ]
  },
  { emoji: "🐰", th: "กระต่าย", en: "Rabbit", category: "animals_r", images: [
    'https://images.unsplash.com/photo-1703437873366-b7a9e54dab56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhYmJpdHxlbnwwfDB8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1481500576737-9238440343a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmFiYml0fGVufDB8MHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJhYmJpdHxlbnwwfDB8MHx8fDI%3D'
  ] },
  { emoji: "🐟", th: "ปลา", en: "Fish", category: "animals_r", images: [
    'https://images.unsplash.com/photo-1510020904390-f245a6de84f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZpc2h8ZW58MHwwfDB8fHwy',
    'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmlzaHxlbnwwfDB8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZpc2h8ZW58MHwwfDB8fHwy',
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmlzaHxlbnwwfDB8MHx8fDI%3D'
  ] },
  { emoji: "🐔", th: "ไก่", en: "Chicken", category: "animals_r", image: 'https://images.unsplash.com/photo-1619598951257-68e45c835908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoaWNrZW58ZW58MHwwfDB8fHwy' },
  { emoji: "🐸", th: "กบ", en: "Frog", category: "animals_r", image: 'https://images.unsplash.com/photo-1548894817-c0e7f6faaaf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyb2d8ZW58MHwwfDB8fHwy' },
  { emoji: "🐷", th: "หมู", en: "Pig", category: "animals_r", image: 'https://images.unsplash.com/photo-1697027940563-656a71f90a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpZ3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐦", th: "นก", en: "Bird", category: "animals_r", image: 'https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJpcmR8ZW58MHwwfDB8fHwy' },
  { emoji: "🐯", th: "เสือ", en: "Tiger", category: "animals_r", image: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlnZXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🐵", th: "ลิง", en: "Monkey", category: "animals_r", image: 'https://images.unsplash.com/photo-1701860070190-d794350fab54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fE1vbmtleXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐻", th: "หมี", en: "Bear", category: "animals_r", image: 'https://images.unsplash.com/photo-1621032025366-e6f88b1da648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fEJlYXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🦓", th: "ม้าลาย", en: "Zebra", category: "animals_r", image: 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WmVicmF8ZW58MHwwfDB8fHwy' },
  { emoji: "🦒", th: "ยีราฟ", en: "Giraffe", category: "animals_r", image: 'https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2lyYWZmZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐴", th: "ม้า", en: "Horse", category: "animals_r", image: 'https://images.unsplash.com/photo-1553284965-fa61e9ad4795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG9yc2V8ZW58MHwwfDB8fHwy' },
  { emoji: "🐑", th: "แกะ", en: "Sheep", category: "animals_r", image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hlZXB8ZW58MHwwfDB8fHwy' },
  { emoji: "🦆", th: "เป็ด", en: "Duck", category: "animals_r", image: 'https://images.unsplash.com/photo-1592881759886-12888559265e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fER1Y2t8ZW58MHwwfDB8fHwy' },
  { emoji: "🦉", th: "นกฮูก", en: "Owl", category: "animals_r", image: 'https://images.unsplash.com/photo-1532007195987-bb4ddeaf052d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE93bHxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐧", th: "เพนกวิน", en: "Penguin", category: "animals_r", image: 'https://images.unsplash.com/photo-1462888210965-cdf193fb74de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVuZ3VpbnxlbnwwfDB8MHx8fDI%3D' },

  // 21-40
  { emoji: "🦊", th: "สุนัขจิ้งจอก", en: "Fox", category: "animals_r", image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm94fGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐺", th: "หมาป่า", en: "Wolf", category: "animals_r", image: 'https://images.unsplash.com/photo-1607350999170-b893fef057ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29sZnxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐗", th: "หมูป่า", en: "Wild Boar", category: "animals_r", image: 'https://images.unsplash.com/photo-1596559613200-78626d995b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdpbGQlMjBCb2FyfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐹", th: "แฮมสเตอร์", en: "Hamster", category: "animals_r", image: 'https://images.unsplash.com/photo-1618232118117-98d49b20e2f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhhbXN0ZXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🐭", th: "หนู", en: "Mouse", category: "animals_r", image: 'https://images.unsplash.com/photo-1648331607020-aa51a96ff38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1vdXNlfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐮", th: "วัว", en: "Cow", category: "animals_r", image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q293fGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐐", th: "แพะ", en: "Goat", category: "animals_r", image: 'https://images.unsplash.com/photo-1532356948574-9f03b5dcd0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdvYXR8ZW58MHwwfDB8fHwy' },
  { emoji: "🐪", th: "อูฐ", en: "Camel", category: "animals_r", image: 'https://images.unsplash.com/photo-1598113972215-96c018fb1a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FtZWx8ZW58MHwwfDB8fHwy' },
  { emoji: "🦙", th: "ลามะ", en: "Llama", category: "animals_r", image: 'https://images.unsplash.com/photo-1511885663737-eea53f6d6187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGxhbWF8ZW58MHwwfDB8fHwy' },
  { emoji: "🦘", th: "จิงโจ้", en: "Kangaroo", category: "animals_r", image: 'https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2FuZ2Fyb298ZW58MHwwfDB8fHwy' },
  { emoji: "🦡", th: "แบดเจอร์", en: "Badger", category: "animals_r", image: 'https://images.unsplash.com/photo-1563136073-32c6255d1e84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFkZ2VyfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦃", th: "ไก่งวง", en: "Turkey", category: "animals_r", image: 'https://images.unsplash.com/photo-1610847188112-fda7a87b39a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFR1cmtleXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦅", th: "นกอินทรี", en: "Eagle", category: "animals_r", image: 'https://images.unsplash.com/photo-1628703117067-fb7c9c20946e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWFnbGV8ZW58MHwwfDB8fHwy' },
  { emoji: "🦚", th: "นกยูง", en: "Peacock", category: "animals_r", image: 'https://images.unsplash.com/photo-1562504376-00be0e44d510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBlYWNvY2t8ZW58MHwwfDB8fHwy' },
  { emoji: "🦢", th: "หงส์", en: "Swan", category: "animals_r", image: 'https://images.unsplash.com/photo-1593069310094-080326c950a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3dhbnxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦩", th: "นกฟลามิงโก", en: "Flamingo", category: "animals_r", image: 'https://images.unsplash.com/photo-1625870307943-1e3f5940c321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmxhbWluZ298ZW58MHwwfDB8fHwy' },
  { emoji: "🕊️", th: "นกพิราบ", en: "Dove", category: "animals_r", image: 'https://images.unsplash.com/photo-1597777190635-8c3c80468b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RG92ZXxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦇", th: "ค้างคาว", en: "Bat", category: "animals_r", image: 'https://images.unsplash.com/photo-1696236462218-3fc17512c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmF0fGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦈", th: "ฉลาม", en: "Shark", category: "animals_r", image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hhcmt8ZW58MHwwfDB8fHwy' },
  { emoji: "🐬", th: "โลมา", en: "Dolphin", category: "animals_r", image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RG9scGhpbnxlbnwwfDB8MHx8fDI%3D' },

  // 41-60
  { emoji: "🐋", th: "วาฬ", en: "Whale", category: "animals_r", image: 'https://images.unsplash.com/photo-1698334846759-2cdc3352dd85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2hhbGV8ZW58MHwwfDB8fHwy' },
  { emoji: "🐙", th: "ปลาหมึกยักษ์", en: "Octopus", category: "animals_r", image: 'https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T2N0b3B1c3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦀", th: "ปู", en: "Crab", category: "animals_r", image: 'https://images.unsplash.com/photo-1580841129862-bc2a2d113c45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3JhYnxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦞", th: "กุ้งมังกร", en: "Lobster", category: "animals_r", image: 'https://images.unsplash.com/photo-1707995548170-94dbb21e3cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TG9ic3RlcnxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦐", th: "กุ้ง", en: "Shrimp", category: "animals_r", image: 'https://images.unsplash.com/photo-1722192147966-14444c832f53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hyaW1wfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐢", th: "เต่า", en: "Turtle", category: "animals_r", image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHVydGxlfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐊", th: "จระเข้", en: "Crocodile", category: "animals_r", image: 'https://images.unsplash.com/photo-1677504391957-8235ae02b41b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3JvY29kaWxlfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐍", th: "งู", en: "Snake", category: "animals_r", image: 'https://images.unsplash.com/photo-1529978515127-dba8c80bbf05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U25ha2V8ZW58MHwwfDB8fHwy' },
  { emoji: "🦎", th: "กิ้งก่า", en: "Lizard", category: "animals_r", image: 'https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGl6YXJkfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐆", th: "เสือดาว", en: "Leopard", category: "animals_r", image: 'https://images.unsplash.com/photo-1566708627877-859df13ae63e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVvcGFyZHxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦏", th: "แรด", en: "Rhinoceros", category: "animals_r", image: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Umhpbm9jZXJvc3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦛", th: "ฮิปโปโปเตมัส", en: "Hippopotamus", category: "animals_r", image: 'https://images.unsplash.com/photo-1619535211162-85a4f94dab45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhpcHBvcG90YW11c3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦦", th: "นาก", en: "Otter", category: "animals_r", image: 'https://images.unsplash.com/photo-1597357821540-3dc1852ef417?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3R0ZXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🦫", th: "บีเวอร์", en: "Beaver", category: "animals_r", image: 'https://images.unsplash.com/photo-1586439587716-1cc4c88ce130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhdmVyfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐿️", th: "กระรอก", en: "Squirrel", category: "animals_r", image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3F1aXJyZWx8ZW58MHwwfDB8fHwy' },
  { emoji: "🦔", th: "เม่น", en: "Hedgehog", category: "animals_r", image: 'https://images.unsplash.com/photo-1637088433741-cd2dc5626dc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGVkZ2Vob2d8ZW58MHwwfDB8fHwy' },
  { emoji: "🦥", th: "สล็อท", en: "Sloth", category: "animals_r", image: 'https://images.unsplash.com/photo-1605174122933-20738d8191d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2xvdGh8ZW58MHwwfDB8fHwy' },
  { emoji: "🐨", th: "โคอาลา", en: "Koala", category: "animals_r", image: 'https://images.unsplash.com/photo-1556811431-ec33c663aa89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S29hbGF8ZW58MHwwfDB8fHwy' },
  { emoji: "🐼", th: "แพนด้า", en: "Panda", category: "animals_r", image: 'https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFuZGF8ZW58MHwwfDB8fHwy' },
  { emoji: "🦌", th: "กวาง", en: "Deer", category: "animals_r", image: 'https://images.unsplash.com/photo-1542997830-49fc838e4c61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVlcnxlbnwwfDB8MHx8fDI%3D' },

  // 61-80
  // { emoji: "🦄", th: "ยูนิคอร์น", en: "Unicorn", category: "animals_r", image: null },
  { emoji: "🐝", th: "ผึ้ง", en: "Bee", category: "animals_r", image: 'https://images.unsplash.com/photo-1570786097801-b8b9531ed5cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmVlfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐛", th: "หนอน", en: "Caterpillar", category: "animals_r", image: 'https://images.unsplash.com/photo-1598431429388-c561cb614d2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2F0ZXJwaWxsYXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🦋", th: "ผีเสื้อ", en: "Butterfly", category: "animals_r", image: 'https://images.unsplash.com/photo-1623612374192-bb28178ed476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnV0dGVyZmx5fGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐌", th: "หอยทาก", en: "Snail", category: "animals_r", image: 'https://images.unsplash.com/photo-1723032264097-77d68e12d9de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNuYWlsfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐞", th: "เต่าทอง", en: "Ladybug", category: "animals_r", image: 'https://images.unsplash.com/photo-1596733963051-36b8b6683850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExhZHlidWd8ZW58MHwwfDB8fHwy' },
  { emoji: "🐜", th: "มด", en: "Ant", category: "animals_r", image: 'https://images.unsplash.com/photo-1570553613235-412575f3fb6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW50fGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🕷️", th: "แมงมุม", en: "Spider", category: "animals_r", image: 'https://images.unsplash.com/photo-1544717455-4cf7ad978978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BpZGVyfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦂", th: "แมงป่อง", en: "Scorpion", category: "animals_r", image: 'https://images.unsplash.com/photo-1615443589816-bf96d07d3852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNjb3JwaW9ufGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦟", th: "ยุง", en: "Mosquito", category: "animals_r", image: 'https://images.unsplash.com/photo-1707943768453-7850f916ebde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9zcXVpdG98ZW58MHwwfDB8fHwy' },
  { emoji: "🦗", th: "ตั๊กแตน", en: "Grasshopper", category: "animals_r", image: 'https://images.unsplash.com/photo-1509967733342-437077d8e41a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3Jhc3Nob3BwZXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🦎", th: "ตุ๊กแก", en: "Gecko", category: "animals_r", image: 'https://images.unsplash.com/photo-1652945525180-2a61c7544e5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEdlY2tvfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐠", th: "ปลาการ์ตูน", en: "Tropical Fish", category: "animals_r", image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJvcGljYWwlMjBGaXNofGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐡", th: "ปลาปักเป้า", en: "Pufferfish", category: "animals_r", image: 'https://images.unsplash.com/photo-1618409869565-b0e4eabaf0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHVmZmVyZmlzaHxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦑", th: "ปลาหมึกกล้วย", en: "Squid", category: "animals_r", image: 'https://images.unsplash.com/photo-1657989571710-7da27e5a3126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3F1aWR8ZW58MHwwfDB8fHwy' },
  { emoji: "🦪", th: "หอยนางรม", en: "Oyster", category: "animals_r", image: 'https://images.unsplash.com/photo-1717251752308-2ef72f07484e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3lzdGVyfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: null, th: "แมงกะพรุน", en: "Jellyfish", category: "animals_r", image: 'https://images.unsplash.com/photo-1532191343016-47bf741b8b3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVsbHlmaXNofGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦭", th: "แมวน้ำ", en: "Seal", category: "animals_r", image: 'https://images.unsplash.com/photo-1572880393162-0518ac760495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2VhbHxlbnwwfDB8MHx8fDI%3D' },
  // { emoji: " walrus" /* 🦣 */, th: "แมมมอธ", en: "Mammoth", category: "animals_r", image: null },
  { emoji: "🐕‍🦺", th: "สุนัขช่วยเหลือ", en: "Service Dog", category: "animals_r", image: 'https://images.unsplash.com/photo-1661552066736-935e0cad1782?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2VydmljZSUyMERvZ3xlbnwwfDB8MHx8fDI%3D' },

  // 81-100
  { emoji: "🐩", th: "สุนัขพุดเดิ้ล", en: "Poodle", category: "animals_r", image: 'https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9vZGxlfGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐈", th: "แมวบ้าน", en: "Domestic Cat", category: "animals_r", image: 'https://images.unsplash.com/photo-1592893658769-5da16cb93236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERvbWVzdGljJTIwQ2F0fGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🐂", th: "วัวตัวผู้", en: "Ox", category: "animals_r", image: 'https://images.unsplash.com/photo-1711548462317-e412ed1a5a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3h8ZW58MHwwfDB8fHwy' },
  // { emoji: "🐃", th: "ควาย", en: "Water Buffalo", category: "animals_r", image: null },
  { emoji: "🐃", th: "ควาย", en: "Buffalo", category: "animals_r", image: 'https://images.unsplash.com/photo-1603696861627-db79cf52fecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVmZmFsb3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐄", th: "แม่วัว", en: "Dairy Cow", category: "animals_r", image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGFpcnklMjBDb3d8ZW58MHwwfDB8fHwy' },
  // { emoji: "🐖", th: "แม่หมู", en: "Sow", category: "animals_r", image: null },
  // { emoji: "🐏", th: "แกะตัวผู้", en: "Ram", category: "animals_r", image: null },
  { emoji: "🐃", th: "กระทิง", en: "Bull", category: "animals_r", image: 'https://images.unsplash.com/photo-1470141881098-2223c09ab720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJ1bGx8ZW58MHwwfDB8fHwy' },
  { emoji: "🐓", th: "พ่อไก่", en: "Rooster", category: "animals_r", image: 'https://images.unsplash.com/photo-1545251765-6aad90d25972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9vc3RlcnxlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐣", th: "ลูกไก่เพิ่งฟัก", en: "Hatching Chick", category: "animals_r", image: 'https://images.unsplash.com/photo-1617687131031-9d0d3b25ebd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGF0Y2hpbmclMjBDaGlja3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🐤", th: "ลูกไก่", en: "Baby Chick", category: "animals_r", image: 'https://images.unsplash.com/photo-1546272989-40c92939c6c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFieSUyMENoaWNrfGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "🐦", th: "นกน้อย", en: "Small Bird", category: "animals_r", image: null },
  { emoji: "🦅", th: "นกเหยี่ยว", en: "Hawk", category: "animals_r", image: 'https://images.unsplash.com/photo-1559403053-900e0c4abc8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGF3a3xlbnwwfDB8MHx8fDI%3D' },
  { emoji: "🦜", th: "นกแก้ว", en: "Parrot", category: "animals_r", image: 'https://images.unsplash.com/photo-1549608276-5786777e6587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFycm90fGVufDB8MHwwfHx8Mg%3D%3D' },
  // { emoji: "🦤", th: "นกดอนโด", en: "Dodo", category: "animals_r", image: null },
  // { emoji: "🦡", th: "ฮันนี่แบดเจอร์", en: "Honey Badger", category: "animals_r", image: null },
  // { emoji: "🦫", th: "นากทะเล", en: "Sea Otter", category: "animals_r", image: 'https://images.unsplash.com/photo-1698435354379-b10bcc803369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VhJTIwT3R0ZXJ8ZW58MHwwfDB8fHwy' },
  { emoji: "🦧", th: "ลิงอุรังอุตัง", en: "Orangutan", category: "animals_r", image: 'https://images.unsplash.com/photo-1615982513414-d287e6b70ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3Jhbmd1dGFufGVufDB8MHwwfHx8Mg%3D%3D' },
  { emoji: "🦍", th: "ลิงกอริลลา", en: "Gorilla", category: "animals_r", image: 'https://images.unsplash.com/photo-1546146020-c84c6bf355bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29yaWxsYXxlbnwwfDB8MHx8fDI%3D' },
  // { emoji: "🐕", th: "สุนัข", en: "Hound", category: "animals_r", image: null }
];
