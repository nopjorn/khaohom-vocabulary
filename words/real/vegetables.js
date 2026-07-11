// คำศัพท์หมวดผัก
const WORDS_VEGETABLES_REAL = [
  { emoji: "🍅", th: "มะเขือเทศ", en: "Tomato", category: "vegetables_r", images: [
    "https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9tYXRvfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9tYXRvfGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  { emoji: "🥕", th: "แครอท", en: "Carrot", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1633380110125-f6e685676160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1601493700750-58796129ebb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1582515073490-39981397c445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  { emoji: "🌽", th: "ข้าวโพด", en: "Corn", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1634467524884-897d0af5e104?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ybnxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1511817354854-e361703ac368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ybnxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1550828484-45019f8bf11c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcm58ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1634467524884-897d0af5e104?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29ybnxlbnwwfDB8MHx8fDI%3D"
  ] },
  { emoji: "🥦", th: "บล็อคโคลี่", en: "Broccoli", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1614336215203-05a588f74627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJvY2NvbGl8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1623534656125-dfe29b92c3ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJyb2Njb2xpfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1550409174-a8ea3586299c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJyb2Njb2xpfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1550409174-a8ea3586299c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJyb2Njb2xpfGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  // { emoji: "🥬", th: "ผักกาด", en: "Lettuce", category: "vegetables_r", images: [] },
  // { emoji: "🥬", th: "ผักใบเขียว", en: "Leafy green", category: "vegetables_r", images: [] },
  { emoji: "🥒", th: "แตงกวา", en: "Cucumber", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VjdW1iZXJ8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3VjdW1iZXJ8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1602343244137-a142ba5c7b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q3VjdW1iZXJ8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1737945203617-f4fceb8ef475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEN1Y3VtYmVyfGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  { emoji: "🌶️", th: "พริก", en: "Chili pepper", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1526346698789-22fd84314424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpbGklMjBwZXBwZXJ8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1518006959466-0db0b6b4c1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpbGklMjBwZXBwZXJ8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1526179969422-e92255a5f223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2hpbGklMjBwZXBwZXJ8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1542932883-fe7e7dbad533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENoaWxpJTIwcGVwcGVyfGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  { emoji: "🫑", th: "พริกหยวก", en: "Bell pepper", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVsbCUyMHBlcHBlcnxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1621953723422-6023013f659d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVsbCUyMHBlcHBlcnxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1669863347362-1630fe821708?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVsbCUyMHBlcHBlcnxlbnwwfDB8MHx8fDI%3D",
    "https://images.unsplash.com/photo-1640958900243-159750015dce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVsbCUyMHBlcHBlcnxlbnwwfDB8MHx8fDI%3D"
  ] },
  { emoji: "🍆", th: "มะเขือยาว", en: "Eggplant", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1615484477201-9f4953340fab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWdncGxhbnR8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1683543122945-513029986574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWdncGxhbnR8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1533213520888-6aa83d71cc24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWdncGxhbnR8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1615484477545-04af2a4d851c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVnZ3BsYW50fGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  { emoji: "🥔", th: "มันฝรั่ง", en: "Potato", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1675501344642-92d35d90fe51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG90YXRvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1508313880080-c4bef0730395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UG90YXRvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG90YXRvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1573196444577-af471298e034?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UG90YXRvfGVufDB8MHwwfHx8Mg%3D%3D",
  ] },
  { emoji: "🍠", th: "มันเทศ", en: "Sweet potato", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1730815048561-45df6f7f331d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3dlZXQlMjBwb3RhdG98ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1584699006710-3ad3b82fce7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3dlZXQlMjBwb3RhdG98ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1580324613766-3b5d415bb34a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3dlZXQlMjBwb3RhdG98ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1648768940344-9e110879e0c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3dlZXQlMjBwb3RhdG98ZW58MHwwfDB8fHwy",
  ] },
  // { emoji: "🧅", th: "หัวหอม", en: "Onion", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Whole_onion.jpg/250px-Whole_onion.jpg"
  // ] },
  // { emoji: "🧄", th: "กระเทียม", en: "Garlic", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Garlic_bulbs_and_cloves.jpg/250px-Garlic_bulbs_and_cloves.jpg"
  // ] },
  // { emoji: "🍄", th: "เห็ด", en: "Mushroom", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2016-01_Agaricus_bisporus_01.jpg/250px-2016-01_Agaricus_bisporus_01.jpg"
  // ] },
  // { emoji: "🥑", th: "อะโวคาโด", en: "Avocado", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Avocado_with_cross_section.jpg/250px-Avocado_with_cross_section.jpg"
  // ] },
  // { emoji: "🥜", th: "ถั่วลิสง", en: "Peanut", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Peanuts_%28Arachis_hypogaea%29_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_peeled.jpg/250px-Peanuts_%28Arachis_hypogaea%29_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_peeled.jpg"
  // ] },
  // { emoji: "🫛", th: "ถั่วลันเตา / ถั่วฝัก", en: "Pea pod", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Green_pea_pods.jpg/250px-Green_pea_pods.jpg"
  // ] },
  // { emoji: "🫚", th: "ขิง", en: "Ginger", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/GingerRoot_Novo_Los_Angeles.jpg/250px-GingerRoot_Novo_Los_Angeles.jpg"
  // ] },
  // { emoji: "🎃", th: "ฟักทอง", en: "Pumpkin", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cucurbita_2011_G1.jpg/250px-Cucurbita_2011_G1.jpg"
  // ] },
  // { emoji: "竹", th: "หน่อไม้", en: "Bamboo shoot", category: "vegetables_r", images: [] }
]