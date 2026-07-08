# 🍓 Vocaberry

เกมทายคำศัพท์ง่ายๆ สำหรับเด็ก 5 ขวบ — ดูรูป (emoji) แล้วเลือกคำศัพท์ให้ถูกต้อง เรียนรู้คำศัพท์ไทยและอังกฤษไปพร้อมกัน

เป็น static HTML/CSS/JS ล้วนๆ ไม่มี build step ไม่มี dependency ภายนอก รันได้ทันทีบน GitHub Pages

## วิธีเล่น

1. เลือกหมวดหมู่ (สัตว์, ผลไม้, ยานพาหนะ, สี, ตัวเลข)
2. ดู emoji แล้วเลือกคำศัพท์ที่ตรงกับรูปจาก 3 ตัวเลือก
3. เกมจะอ่านคำศัพท์ให้ฟังทั้งภาษาไทยและอังกฤษ (ใช้ Web Speech API ของเบราว์เซอร์)
4. ตอบถูกได้ดาว ⭐ สะสมคะแนนเก็บไว้ในเครื่อง (localStorage)

## รันทดสอบในเครื่อง

เปิด `index.html` ตรงๆ ในเบราว์เซอร์ได้เลย หรือใช้ local server เช่น:

```bash
npx serve .
```

## Deploy บน GitHub Pages

1. Push โปรเจกต์นี้ขึ้น GitHub repository
2. ไปที่ repository → **Settings** → **Pages**
3. เลือก **Source**: Deploy from a branch → เลือก branch `main` และโฟลเดอร์ `/root`
4. บันทึก แล้วรอสักครู่ เกมจะพร้อมใช้งานที่ `https://<username>.github.io/<repo-name>/`

## เพิ่มคำศัพท์ใหม่

เปิดไฟล์หมวดที่ต้องการในโฟลเดอร์ [`words/`](words/) (เช่น [`words/animals.js`](words/animals.js)) แล้วเพิ่ม object ใหม่เข้าไปใน array ตามรูปแบบ:

```js
{ emoji: "🐶", th: "หมา", en: "Dog", category: "animals", image: null }
```

## เพิ่มหมวดหมู่ใหม่

1. เปิดไฟล์ [`words.js`](words.js) แล้วเพิ่ม object ใหม่ใน array `CATEGORIES`:

   ```js
   { id: "shapes", th: "รูปทรง", en: "Shapes", icon: "🔺" }
   ```

2. สร้างไฟล์ใหม่ `words/shapes.js` แล้วเพิ่มคำศัพท์ที่มี `category: "shapes"`:

   ```js
   const WORDS_SHAPES = [
     { emoji: "🔺", th: "สามเหลี่ยม", en: "Triangle", category: "shapes", image: null },
   ];
   ```

3. เพิ่ม `<script src="words/shapes.js"></script>` ใน `index.html` **ก่อน** `<script src="words.js"></script>`
4. เพิ่ม `...WORDS_SHAPES` เข้าไปใน array `WORDS` ที่ท้ายไฟล์ `words.js`

## ใช้รูปจริงแทน emoji

ดูวิธีที่ [`images/README.md`](images/README.md)

## โครงสร้างไฟล์

```
Vocaberry/
├── index.html   # หน้าเกมหลัก
├── style.css    # สไตล์
├── script.js    # game logic
├── words.js     # CATEGORIES + รวม WORDS จากไฟล์ย่อยใน words/
├── words/       # คำศัพท์แยกไฟล์ตามหมวด (animals.js, fruits.js, ...)
└── images/      # (ไม่บังคับ) ใส่รูปจริงแทน emoji ได้
```
