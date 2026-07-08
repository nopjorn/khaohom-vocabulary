// Vocaberry game logic

// เพิ่มเลขนี้ทุกครั้งที่แก้โค้ด จะได้เช็คจากมุมล่างของหน้าเว็บว่าเห็นเวอร์ชันล่าสุดหรือยัง
const APP_VERSION = "1.3.0";

const STORAGE_KEY = "vocaberry_stars";
const QUESTIONS_PER_ROUND = 8;
const OPTIONS_COUNT = 3;

let state = {
  category: null,
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  locked: false,
};

const el = {
  screenMenu: document.getElementById("screen-menu"),
  screenGame: document.getElementById("screen-game"),
  screenResult: document.getElementById("screen-result"),
  categoryGrid: document.getElementById("categoryGrid"),
  starDisplay: document.getElementById("starDisplay"),
  progressDisplay: document.getElementById("progressDisplay"),
  emojiDisplay: document.getElementById("emojiDisplay"),
  optionsGrid: document.getElementById("optionsGrid"),
  feedback: document.getElementById("feedback"),
  btnBack: document.getElementById("btnBack"),
  btnSpeakEn: document.getElementById("btnSpeakEn"),
  btnSpeakTh: document.getElementById("btnSpeakTh"),
  resultScore: document.getElementById("resultScore"),
  btnPlayAgain: document.getElementById("btnPlayAgain"),
  btnMenu: document.getElementById("btnMenu"),
  appVersion: document.getElementById("appVersion"),
};

el.appVersion.textContent = APP_VERSION;

function showScreen(name) {
  [el.screenMenu, el.screenGame, el.screenResult].forEach((s) => s.classList.remove("active"));
  name.classList.add("active");
}

function getStars() {
  return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
}

function addStars(n) {
  const total = getStars() + n;
  localStorage.setItem(STORAGE_KEY, String(total));
  renderStars();
}

function renderStars() {
  el.starDisplay.textContent = `⭐ ${getStars()}`;
}

let voicesCache = [];
function loadVoices() {
  voicesCache = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
}
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

// Chrome จะ garbage-collect ทิ้ง SpeechSynthesisUtterance แบบเงียบๆ (ไม่มีเสียง ไม่มี error)
// ถ้าไม่มีตัวแปรอ้างอิงมันไว้จนพูดเสร็จ จึงต้องเก็บ reference ไว้ที่ตัวแปรนอกฟังก์ชัน
let activeUtterance = null;

function speak(text, lang, onEnd) {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.9;
  // ถ้าเครื่องไม่มีเสียงที่ตรงภาษาเป้าหมายเลย (เช่น Windows ที่ไม่ได้ติดตั้งเสียงไทย)
  // ให้ fallback ไปใช้เสียงอื่นที่มีอยู่แทน ดีกว่าไม่มีเสียงออกมาเลย
  const voice =
    voicesCache.find((v) => v.lang === lang) ||
    voicesCache.find((v) => v.lang.startsWith(lang.split("-")[0])) ||
    voicesCache[0];
  if (voice) utter.voice = voice;
  if (onEnd) utter.addEventListener("end", onEnd, { once: true });
  activeUtterance = utter;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderCategories() {
  el.categoryGrid.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-card";
    btn.innerHTML = `
      <div class="icon">${cat.icon}</div>
      <div class="name-en">${cat.en}</div>
      <div class="name-th">${cat.th}</div>
    `;
    btn.addEventListener("click", () => startGame(cat.id));
    el.categoryGrid.appendChild(btn);
  });
}

renderStars();
renderCategories();

function startGame(categoryId) {
  const pool = WORDS.filter((w) => w.category === categoryId);
  const count = Math.min(QUESTIONS_PER_ROUND, pool.length);
  state = {
    category: categoryId,
    questions: shuffle(pool).slice(0, count),
    currentIndex: 0,
    correctCount: 0,
    locked: false,
  };
  showScreen(el.screenGame);
  renderQuestion();
}

function buildOptions(correctWord) {
  const sameCategory = WORDS.filter(
    (w) => w.category === correctWord.category && w !== correctWord
  );
  const distractors = shuffle(sameCategory).slice(0, OPTIONS_COUNT - 1);
  return shuffle([correctWord, ...distractors]);
}

function renderQuestion() {
  state.locked = false;
  el.feedback.textContent = "";
  el.feedback.className = "feedback";

  const word = state.questions[state.currentIndex];
  el.progressDisplay.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;

  el.emojiDisplay.innerHTML = "";
  if (word.image) {
    const img = document.createElement("img");
    img.src = word.image;
    img.alt = word.en;
    img.className = "question-image";
    el.emojiDisplay.appendChild(img);
  } else {
    el.emojiDisplay.textContent = word.emoji;
  }

  const options = buildOptions(word);
  el.optionsGrid.innerHTML = "";
  options.forEach((opt) => {
    const row = document.createElement("div");
    row.className = "option-row";

    const listenBtnEn = document.createElement("button");
    listenBtnEn.className = "opt-listen opt-listen-en";
    listenBtnEn.setAttribute("aria-label", `Listen English: ${opt.en}`);
    listenBtnEn.innerHTML = `🔊<span class="opt-listen-label">EN</span>`;
    listenBtnEn.addEventListener("click", (e) => {
      e.stopPropagation();
      speak(opt.en, "en-US");
    });

    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-en">${opt.en}</span><span class="opt-th">${opt.th}</span>`;
    btn._word = opt;
    btn.addEventListener("click", () => handleAnswer(btn, opt, word));

    const listenBtnTh = document.createElement("button");
    listenBtnTh.className = "opt-listen opt-listen-th";
    listenBtnTh.setAttribute("aria-label", `ฟังภาษาไทย: ${opt.th}`);
    listenBtnTh.innerHTML = `🔊<span class="opt-listen-label">ไทย</span>`;
    listenBtnTh.addEventListener("click", (e) => {
      e.stopPropagation();
      speak(opt.th, "th-TH");
    });

    row.appendChild(listenBtnEn);
    row.appendChild(btn);
    row.appendChild(listenBtnTh);
    el.optionsGrid.appendChild(row);
  });

  // ไม่ต้องพูดอัตโนมัติ ผู้เล่นกดปุ่ม 🔊 EN/ไทย เองแทน
}

function handleAnswer(btn, chosen, correctWord) {
  if (state.locked) return;
  state.locked = true;

  const isCorrect = chosen === correctWord;
  const allBtns = el.optionsGrid.querySelectorAll(".option-btn");
  const allListenBtns = el.optionsGrid.querySelectorAll(".opt-listen");
  allBtns.forEach((b) => (b.disabled = true));
  allListenBtns.forEach((b) => (b.disabled = true));

  if (isCorrect) {
    btn.classList.add("correct");
    el.feedback.textContent = "Correct! เก่งมาก! ถูกต้อง 🎉";
    el.feedback.className = "feedback correct";
    state.correctCount++;
    addStars(1);
    speak("เก่งมาก", "th-TH");
  } else {
    btn.classList.add("wrong");
    btn.classList.add("shake");
    el.feedback.textContent = `Not quite, the answer is ${correctWord.en} ไม่ใช่นะ คำตอบคือ ${correctWord.th}`;
    el.feedback.className = "feedback wrong";
    allBtns.forEach((b) => {
      if (b._word === correctWord) b.classList.add("correct");
    });
    speak(`The answer is ${correctWord.en}`, "en-US");
  }

  setTimeout(() => {
    state.currentIndex++;
    if (state.currentIndex < state.questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1600);
}

function showResult() {
  window.speechSynthesis.cancel();
  showScreen(el.screenResult);
  el.resultScore.textContent = `${state.correctCount} / ${state.questions.length} stars ได้ ${state.correctCount} ดาว จาก ${state.questions.length} ข้อ`;
}

el.btnBack.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  showScreen(el.screenMenu);
});

el.btnSpeakEn.addEventListener("click", () => {
  const word = state.questions[state.currentIndex];
  if (word) speak(word.en, "en-US");
});

el.btnSpeakTh.addEventListener("click", () => {
  const word = state.questions[state.currentIndex];
  if (word) speak(word.th, "th-TH");
});

el.btnPlayAgain.addEventListener("click", () => startGame(state.category));
el.btnMenu.addEventListener("click", () => showScreen(el.screenMenu));
