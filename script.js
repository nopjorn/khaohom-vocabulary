// Vocaberry game logic

// เพิ่มเลขนี้ทุกครั้งที่แก้โค้ด จะได้เช็คจากมุมล่างของหน้าเว็บว่าเห็นเวอร์ชันล่าสุดหรือยัง
const APP_VERSION = "1.11.0";

const STORAGE_KEY = "vocaberry_stars";
const QUESTIONS_PER_ROUND = 10;
const OPTIONS_COUNT = 3;

let state = {
  category: null,
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  locked: false,
};

// เกมฟังเสียงทายภาพ (แยก state ออกจากเกมทายคำเดิมเพราะ flow ต่างกัน)
let listenState = {
  category: null,
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  locked: false,
};

// เกมคณิตศาสตร์ (บวก-ลบเลข) โจทย์สุ่มขึ้นเองแทนการดึงจาก WORDS
const MATH_MODES = [
  { id: "addition", th: "บวกเลข", en: "Addition", icon: "➕" },
  { id: "subtraction", th: "ลบเลข", en: "Subtraction", icon: "➖" },
  { id: "mixed", th: "บวก-ลบผสม", en: "Mixed", icon: "🔢" },
];

const MATH_EMOJI_POOL = ["🍓", "🍎", "🍌", "⭐", "🐶", "🎈"];

let mathState = {
  mode: null,
  displayStyle: "digits",
  emoji: MATH_EMOJI_POOL[0],
  questions: [],
  currentIndex: 0,
  correctCount: 0,
  locked: false,
};

const el = {
  screenMenu: document.getElementById("screen-menu"),
  screenGame: document.getElementById("screen-game"),
  screenResult: document.getElementById("screen-result"),
  screenReview: document.getElementById("screen-review"),
  screenListenMenu: document.getElementById("screen-listen-menu"),
  screenListenGame: document.getElementById("screen-listen-game"),
  categoryGridReal: document.getElementById("categoryGridReal"),
  categoryGrid: document.getElementById("categoryGrid"),
  listenCategoryGrid: document.getElementById("listenCategoryGrid"),
  btnListenMode: document.getElementById("btnListenMode"),
  btnListenMenuBack: document.getElementById("btnListenMenuBack"),
  btnListenBack: document.getElementById("btnListenBack"),
  btnListenReplay: document.getElementById("btnListenReplay"),
  listenProgressDisplay: document.getElementById("listenProgressDisplay"),
  listenPromptText: document.getElementById("listenPromptText"),
  listenOptionsGrid: document.getElementById("listenOptionsGrid"),
  listenFeedback: document.getElementById("listenFeedback"),
  screenMathMenu: document.getElementById("screen-math-menu"),
  screenMathGame: document.getElementById("screen-math-game"),
  mathModeGridEmoji: document.getElementById("mathModeGridEmoji"),
  mathModeGridDigits: document.getElementById("mathModeGridDigits"),
  btnMathMode: document.getElementById("btnMathMode"),
  btnMathMenuBack: document.getElementById("btnMathMenuBack"),
  btnMathBack: document.getElementById("btnMathBack"),
  mathProgressDisplay: document.getElementById("mathProgressDisplay"),
  mathQuestionDisplay: document.getElementById("mathQuestionDisplay"),
  mathOptionsGrid: document.getElementById("mathOptionsGrid"),
  mathFeedback: document.getElementById("mathFeedback"),
  btnReview: document.getElementById("btnReview"),
  btnReviewBack: document.getElementById("btnReviewBack"),
  btnReviewExpandAll: document.getElementById("btnReviewExpandAll"),
  btnReviewCollapseAll: document.getElementById("btnReviewCollapseAll"),
  reviewContent: document.getElementById("reviewContent"),
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

const ALL_SCREENS = [
  el.screenMenu,
  el.screenGame,
  el.screenResult,
  el.screenReview,
  el.screenListenMenu,
  el.screenListenGame,
  el.screenMathMenu,
  el.screenMathGame,
];

// เกมไหน "เล่นอีกครั้ง" ต่อจากหน้าสรุปผล อัปเดตตัวนี้ก่อนเรียก showResult()
let playAgainHandler = () => startGame(state.category);

function showScreen(name) {
  ALL_SCREENS.forEach((s) => s.classList.remove("active"));
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
  // utter.rate = 0.9;
  utter.rate = 0.5;
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
  el.categoryGridReal.innerHTML = "";
  CATEGORIES_REAL.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-card";
    btn.innerHTML = `
      <div class="icon">${cat.icon}</div>
      <div class="name-en">${cat.en}</div>
      <div class="name-th">${cat.th}</div>
    `;
    btn.addEventListener("click", () => startGame(cat.id));
    el.categoryGridReal.appendChild(btn);
  });

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

function renderListenCategories() {
  el.listenCategoryGrid.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "category-card";
    btn.innerHTML = `
      <div class="icon">${cat.icon}</div>
      <div class="name-en">${cat.en}</div>
      <div class="name-th">${cat.th}</div>
    `;
    btn.addEventListener("click", () => startListenGame(cat.id));
    el.listenCategoryGrid.appendChild(btn);
  });
}

function renderReviewScreen() {
  el.reviewContent.innerHTML = "";
  const sections = [
    { label: "📷 รูปจริง (Real)", cats: CATEGORIES_REAL },
    { label: "😀 Emoji", cats: CATEGORIES },
  ];
  sections.forEach((section, sectionIndex) => {
    if (sectionIndex > 0) {
      const hr = document.createElement("hr");
      hr.className = "review-section-divider";
      el.reviewContent.appendChild(hr);
    }
    const heading = document.createElement("h3");
    heading.className = "review-section-heading";
    heading.textContent = section.label;
    el.reviewContent.appendChild(heading);

    section.cats.forEach((cat) => {
    const words = WORDS.filter((w) => w.category === cat.id);
    if (words.length === 0) return;

    const group = document.createElement("details");
    group.className = "review-group";
    group.open = true;

    const title = document.createElement("summary");
    title.className = "review-group-title";
    title.innerHTML = `${cat.icon} ${cat.en} / ${cat.th} <span class="count">(${words.length})</span>`;
    group.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "review-word-grid";
    words.forEach((word) => {
      const card = document.createElement("div");
      card.className = "review-word-card";
      if (!word.emoji && !word.image && !(Array.isArray(word.images) && word.images.length)) {
        card.classList.add("missing-image");
      }

      const media = document.createElement("div");
      media.className = "review-word-media";
      const images = Array.isArray(word.images) && word.images.length
        ? word.images
        : word.image
        ? [word.image]
        : [];
      if (images.length) {
        images.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = word.en;
          media.appendChild(img);
        });
      } else {
        media.textContent = word.emoji || "❓";
      }
      card.appendChild(media);

      const en = document.createElement("div");
      en.className = "review-word-en";
      en.textContent = word.en;
      card.appendChild(en);

      const th = document.createElement("div");
      th.className = "review-word-th";
      th.textContent = word.th;
      card.appendChild(th);

      grid.appendChild(card);
    });
    group.appendChild(grid);
    el.reviewContent.appendChild(group);
    });
  });
}

function renderMathModes(grid, displayStyle) {
  grid.innerHTML = "";
  MATH_MODES.forEach((mode) => {
    const btn = document.createElement("button");
    btn.className = "category-card";
    btn.innerHTML = `
      <div class="icon">${mode.icon}</div>
      <div class="name-en">${mode.en}</div>
      <div class="name-th">${mode.th}</div>
    `;
    btn.addEventListener("click", () => {
      mathState.displayStyle = displayStyle;
      startMathGame(mode.id);
    });
    grid.appendChild(btn);
  });
}

renderStars();
renderCategories();
renderListenCategories();
renderMathModes(el.mathModeGridEmoji, "emoji");
renderMathModes(el.mathModeGridDigits, "digits");

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

function pickWordImage(word) {
  if (Array.isArray(word.images) && word.images.length > 0) {
    return word.images[Math.floor(Math.random() * word.images.length)];
  }
  return word.image || null;
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
  const pickedImage = pickWordImage(word);
  if (pickedImage) {
    const img = document.createElement("img");
    img.src = pickedImage;
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
  playAgainHandler = () => startGame(state.category);
  showScreen(el.screenResult);
  el.resultScore.textContent = `${state.correctCount} / ${state.questions.length} stars ได้ ${state.correctCount} ดาว จาก ${state.questions.length} ข้อ`;
}

function startListenGame(categoryId) {
  const pool = WORDS.filter((w) => w.category === categoryId);
  const count = Math.min(QUESTIONS_PER_ROUND, pool.length);
  listenState = {
    category: categoryId,
    questions: shuffle(pool).slice(0, count),
    currentIndex: 0,
    correctCount: 0,
    locked: false,
  };
  showScreen(el.screenListenGame);
  renderListenQuestion();
}

function speakListenWord() {
  const word = listenState.questions[listenState.currentIndex];
  if (word) speak(word.en, "en-US");
}

function renderListenQuestion() {
  listenState.locked = false;
  el.listenFeedback.textContent = "";
  el.listenFeedback.className = "feedback";

  const word = listenState.questions[listenState.currentIndex];
  el.listenProgressDisplay.textContent = `${listenState.currentIndex + 1} / ${listenState.questions.length}`;
  el.listenPromptText.textContent = word.en;

  const options = buildOptions(word);
  el.listenOptionsGrid.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "image-option-btn";
    btn._word = opt;

    const pickedImage = pickWordImage(opt);
    if (pickedImage) {
      const img = document.createElement("img");
      img.src = pickedImage;
      img.alt = opt.en;
      btn.appendChild(img);
    } else {
      const span = document.createElement("span");
      span.className = "image-option-emoji";
      span.textContent = opt.emoji;
      btn.appendChild(span);
    }

    btn.addEventListener("click", () => handleListenAnswer(btn, opt, word));
    el.listenOptionsGrid.appendChild(btn);
  });

  speakListenWord();
}

function handleListenAnswer(btn, chosen, correctWord) {
  if (listenState.locked) return;
  listenState.locked = true;

  const isCorrect = chosen === correctWord;
  const allBtns = el.listenOptionsGrid.querySelectorAll(".image-option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (isCorrect) {
    btn.classList.add("correct");
    el.listenFeedback.textContent = "Correct! เก่งมาก! ถูกต้อง 🎉";
    el.listenFeedback.className = "feedback correct";
    listenState.correctCount++;
    addStars(1);
    speak("เก่งมาก", "th-TH");
  } else {
    btn.classList.add("wrong");
    btn.classList.add("shake");
    el.listenFeedback.textContent = `Not quite, the answer is ${correctWord.en} ไม่ใช่นะ คำตอบคือ ${correctWord.th}`;
    el.listenFeedback.className = "feedback wrong";
    allBtns.forEach((b) => {
      if (b._word === correctWord) b.classList.add("correct");
    });
    speak(`The answer is ${correctWord.en}`, "en-US");
  }

  setTimeout(() => {
    listenState.currentIndex++;
    if (listenState.currentIndex < listenState.questions.length) {
      renderListenQuestion();
    } else {
      showListenResult();
    }
  }, 1600);
}

function showListenResult() {
  window.speechSynthesis.cancel();
  playAgainHandler = () => startListenGame(listenState.category);
  showScreen(el.screenResult);
  el.resultScore.textContent = `${listenState.correctCount} / ${listenState.questions.length} stars ได้ ${listenState.correctCount} ดาว จาก ${listenState.questions.length} ข้อ`;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathQuestions(mode, count, maxOperand) {
  const cap = maxOperand || 20;
  const questions = [];
  for (let i = 0; i < count; i++) {
    let a, b, op;
    if (mode === "addition") {
      a = randInt(1, Math.min(10, cap));
      b = randInt(1, Math.min(10, cap));
      op = "+";
    } else if (mode === "subtraction") {
      a = randInt(1, Math.min(10, cap));
      b = randInt(0, a);
      op = "-";
    } else {
      op = Math.random() < 0.5 ? "+" : "-";
      if (op === "+") {
        a = randInt(1, cap);
        b = randInt(1, Math.max(cap - a, 0) || 1);
      } else {
        a = randInt(1, cap);
        b = randInt(0, a);
      }
    }
    const answer = op === "+" ? a + b : a - b;
    questions.push({ a, b, op, answer });
  }
  return questions;
}

function buildMathOptions(correctAnswer) {
  const options = new Set([correctAnswer]);
  while (options.size < OPTIONS_COUNT) {
    const offset = randInt(1, 5) * (Math.random() < 0.5 ? -1 : 1);
    const candidate = correctAnswer + offset;
    if (candidate >= 0) options.add(candidate);
  }
  return shuffle([...options]);
}

function startMathGame(mode) {
  const displayStyle = mathState.displayStyle;
  const maxOperand = displayStyle === "emoji" ? 10 : 20;
  mathState = {
    mode,
    displayStyle,
    emoji: MATH_EMOJI_POOL[randInt(0, MATH_EMOJI_POOL.length - 1)],
    questions: generateMathQuestions(mode, QUESTIONS_PER_ROUND, maxOperand),
    currentIndex: 0,
    correctCount: 0,
    locked: false,
  };
  showScreen(el.screenMathGame);
  renderMathQuestion();
}

function renderMathEmojiGroup(count) {
  const group = document.createElement("div");
  group.className = "math-emoji-group";
  for (let i = 0; i < count; i++) {
    const item = document.createElement("span");
    item.className = "math-emoji-item";
    item.textContent = mathState.emoji;
    group.appendChild(item);
  }
  return group;
}

function renderMathEmojiOperand(count) {
  const operand = document.createElement("div");
  operand.className = "math-emoji-operand";
  operand.appendChild(renderMathEmojiGroup(count));
  const countLabel = document.createElement("span");
  countLabel.className = "math-emoji-count";
  countLabel.textContent = count;
  operand.appendChild(countLabel);
  return operand;
}

function renderMathQuestion() {
  mathState.locked = false;
  el.mathFeedback.textContent = "";
  el.mathFeedback.className = "feedback";

  const q = mathState.questions[mathState.currentIndex];
  el.mathProgressDisplay.textContent = `${mathState.currentIndex + 1} / ${mathState.questions.length}`;

  el.mathQuestionDisplay.innerHTML = "";
  if (mathState.displayStyle === "emoji") {
    el.mathQuestionDisplay.classList.add("math-question-emoji");
    el.mathQuestionDisplay.appendChild(renderMathEmojiOperand(q.a));
    const opSpan = document.createElement("span");
    opSpan.className = "math-emoji-op";
    opSpan.textContent = q.op;
    el.mathQuestionDisplay.appendChild(opSpan);
    el.mathQuestionDisplay.appendChild(renderMathEmojiOperand(q.b));
    const eqSpan = document.createElement("span");
    eqSpan.className = "math-emoji-op";
    eqSpan.textContent = "= ❓";
    el.mathQuestionDisplay.appendChild(eqSpan);
  } else {
    el.mathQuestionDisplay.classList.remove("math-question-emoji");
    el.mathQuestionDisplay.textContent = `${q.a} ${q.op} ${q.b} = ?`;
  }

  const options = buildMathOptions(q.answer);
  el.mathOptionsGrid.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (mathState.displayStyle === "emoji") {
      btn.classList.add("option-btn-emoji");
      btn.appendChild(renderMathEmojiGroup(opt));
      const countLabel = document.createElement("span");
      countLabel.className = "math-emoji-count";
      countLabel.textContent = opt;
      btn.appendChild(countLabel);
    } else {
      btn.innerHTML = `<span class="opt-en">${opt}</span>`;
    }
    btn._value = opt;
    btn.addEventListener("click", () => handleMathAnswer(btn, opt, q.answer));
    el.mathOptionsGrid.appendChild(btn);
  });
}

function handleMathAnswer(btn, chosen, correctAnswer) {
  if (mathState.locked) return;
  mathState.locked = true;

  const isCorrect = chosen === correctAnswer;
  const allBtns = el.mathOptionsGrid.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (isCorrect) {
    btn.classList.add("correct");
    el.mathFeedback.textContent = "Correct! เก่งมาก! ถูกต้อง 🎉";
    el.mathFeedback.className = "feedback correct";
    mathState.correctCount++;
    addStars(1);
    speak("เก่งมาก", "th-TH");
  } else {
    btn.classList.add("wrong");
    btn.classList.add("shake");
    el.mathFeedback.textContent = `Not quite, the answer is ${correctAnswer} ไม่ใช่นะ คำตอบคือ ${correctAnswer}`;
    el.mathFeedback.className = "feedback wrong";
    allBtns.forEach((b) => {
      if (b._value === correctAnswer) b.classList.add("correct");
    });
    speak(`The answer is ${correctAnswer}`, "en-US");
  }

  setTimeout(() => {
    mathState.currentIndex++;
    if (mathState.currentIndex < mathState.questions.length) {
      renderMathQuestion();
    } else {
      showMathResult();
    }
  }, 1600);
}

function showMathResult() {
  window.speechSynthesis.cancel();
  playAgainHandler = () => startMathGame(mathState.mode);
  showScreen(el.screenResult);
  el.resultScore.textContent = `${mathState.correctCount} / ${mathState.questions.length} stars ได้ ${mathState.correctCount} ดาว จาก ${mathState.questions.length} ข้อ`;
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

el.btnPlayAgain.addEventListener("click", () => playAgainHandler());
el.btnMenu.addEventListener("click", () => showScreen(el.screenMenu));

el.btnListenMode.addEventListener("click", () => showScreen(el.screenListenMenu));
el.btnListenMenuBack.addEventListener("click", () => showScreen(el.screenMenu));
el.btnListenBack.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  showScreen(el.screenListenMenu);
});
el.btnListenReplay.addEventListener("click", () => speakListenWord());

el.btnMathMode.addEventListener("click", () => showScreen(el.screenMathMenu));
el.btnMathMenuBack.addEventListener("click", () => showScreen(el.screenMenu));
el.btnMathBack.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  showScreen(el.screenMathMenu);
});

el.btnReview.addEventListener("click", () => {
  renderReviewScreen();
  showScreen(el.screenReview);
});
el.btnReviewBack.addEventListener("click", () => showScreen(el.screenMenu));

el.btnReviewExpandAll.addEventListener("click", () => {
  el.reviewContent.querySelectorAll(".review-group").forEach((g) => (g.open = true));
});
el.btnReviewCollapseAll.addEventListener("click", () => {
  el.reviewContent.querySelectorAll(".review-group").forEach((g) => (g.open = false));
});
