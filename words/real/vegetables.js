// คำศัพท์หมวดผัก
const WORDS_VEGETABLES_REAL = [
  { emoji: "🍅", th: "มะเขือเทศ", en: "Tomato", category: "vegetables_r", images: [
    "https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9tYXRvfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvfGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  { emoji: "🥕", th: "แครอท", en: "Carrot", category: "vegetables_r", images: [
    "https://images.unsplash.com/photo-1633380110125-f6e685676160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1601493700750-58796129ebb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1582515073490-39981397c445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2Fycm90fGVufDB8MHwwfHx8Mg%3D%3D"
  ] },
  // { emoji: "🌽", th: "ข้าวโพด", en: "Corn", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Air_fried_corn-on-the-cob_%28United_States%29.jpg/250px-Air_fried_corn-on-the-cob_%28United_States%29.jpg"
  // ] },
  // { emoji: "🥦", th: "บล็อคโคลี่", en: "Broccoli", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/250px-Broccoli_and_cross_section_edit.jpg"
  // ] },
  // { emoji: "🥬", th: "ผักกาด / ผักใบเขียว", en: "Lettuce / Leafy green", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lactuca_sativa_%27Ashbrook%27.jpg/250px-Lactuca_sativa_%27Ashbrook%27.jpg"
  // ] },
  // { emoji: "🥒", th: "แตงกวา", en: "Cucumber", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cucumber_in_jaffna.JPG/250px-Cucumber_in_jaffna.JPG"
  // ] },
  // { emoji: "🌶️", th: "พริก", en: "Chili pepper", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Man_turns_drying_chili_peppers%2C_Turkey.jpg/250px-Man_turns_drying_chili_peppers%2C_Turkey.jpg"
  // ] },
  // { emoji: "🫑", th: "พริกหยวก", en: "Bell pepper", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Baby_Bell_pepper_%27%27Capsicum_annuum%27%27_.jpg/250px-Baby_Bell_pepper_%27%27Capsicum_annuum%27%27_.jpg"
  // ] },
  // { emoji: "🍆", th: "มะเขือยาว", en: "Eggplant", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Green_eggplant%2C_potato%2C_carrot_etc._in_A_typical_Bangladeshi_vegetable_shop.jpg/250px-Green_eggplant%2C_potato%2C_carrot_etc._in_A_typical_Bangladeshi_vegetable_shop.jpg"
  // ] },
  // { emoji: "🥔", th: "มันฝรั่ง", en: "Potato", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Potato_flowers_2016_G1.jpg/250px-Potato_flowers_2016_G1.jpg"
  // ] },
  // { emoji: "🍠", th: "มันเทศ", en: "Sweet potato", category: "vegetables_r", images: [
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ipomoea_batatas_%28Sweet_Potato%29_Flower.jpg/250px-Ipomoea_batatas_%28Sweet_Potato%29_Flower.jpg"
  // ] },
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