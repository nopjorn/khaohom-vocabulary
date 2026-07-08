# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vocaberry — a vocabulary-matching game for 5-year-olds ("look at the picture, pick the matching word"). Thai + English word pairs, built as static HTML/CSS/JS with zero build step and zero external dependencies (besides a Google Font link). Designed to run directly as a static file or on GitHub Pages.

## Running

No build step. Two options:

- Open `index.html` directly in a browser.
- Serve it locally: `python -m http.server 5173` (also configured in `.claude/launch.json` for the preview tool). Prefer serving over a local server rather than `file://` when testing — some browsers restrict/behave inconsistently with Web Speech API voices under `file://`.

There is no test suite, linter, or package.json — this is a plain static site.

## Architecture

Plain scripts loaded via `<script src>` in `index.html`, no modules/bundler:

- **`words/*.js`** — one file per category (`animals.js`, `fruits.js`, `vehicles.js`, `colors.js`, `numbers.js`), each defining a global array `WORDS_<CATEGORY>` (emoji/th/en/category/image). Loaded before `words.js`.
- **`words.js`** — `CATEGORIES` (id/th/en/icon) plus the global `WORDS` array, built by spreading each `words/*.js` array together. Loaded after the `words/*.js` files and before `script.js` since `script.js` references `CATEGORIES`/`WORDS` as globals.
- **`script.js`** — all game logic and DOM manipulation, driven by a single `state` object (`category`, `questions`, `currentIndex`, `correctCount`, `locked`). Three screens (`#screen-menu`, `#screen-game`, `#screen-result`) are toggled via `showScreen()` adding/removing an `.active` class — there is no router or framework.
- **`style.css`** — all styling, including the small/large text split for bilingual labels (see below).

Adding a new category requires three edits: add to `CATEGORIES` in `words.js`, create `words/<id>.js` with a `WORDS_<ID>` array, and wire it into both `index.html` (new `<script>` tag before `words.js`) and the `WORDS` spread in `words.js`.

### Game flow

`renderCategories()` → `startGame(categoryId)` picks up to `QUESTIONS_PER_ROUND` (8) random words from that category → `renderQuestion()` shows the emoji/image and calls `buildOptions()` to build `OPTIONS_COUNT` (3) choices (1 correct + distractors from the same category) → `handleAnswer()` locks input, scores, updates `localStorage` stars, and after a 1.6s delay advances to the next question or `showResult()`.

### Word display convention

In answer options, **English is the primary/large text and Thai is the secondary/small text** (`.opt-en` styled larger+bold, `.opt-th` smaller+gray) — this was an intentional flip from the original Thai-primary layout. Keep this convention when touching option rendering (`renderQuestion()` in `script.js`) or its styles.

### Images vs. emoji

Every word entry has an `image` field, `null` by default (falls back to rendering `emoji`). Setting `image` to a path (e.g. `images/animals/dog.png`) makes the game render that image instead — no code changes needed elsewhere. See `images/README.md` for the convention when adding real photos.

### Speech (Web Speech API)

`speak(text, lang, onEnd)` in `script.js` wraps `speechSynthesis`. Two non-obvious constraints baked into this function — don't regress them when editing:

1. Chrome silently garbage-collects a `SpeechSynthesisUtterance` if nothing holds a reference to it before it finishes speaking (no error, just silence). The module-level `activeUtterance` variable exists solely to keep it alive.
2. `"end"` events fire on the utterance itself, not on `window.speechSynthesis` — chaining (e.g. speak Thai, then English) must be done via `utter.addEventListener("end", onEnd)`, passed through the `onEnd` param.
3. Voice matching falls back through: exact `lang` match → language-prefix match → `voicesCache[0]` (any available voice). This is deliberate: some Windows machines have zero installed voices for a requested language (e.g. no Thai voice), and speaking with an unset `.voice` on those systems can fail silently rather than falling back to the OS default. Always leave a non-language-matched fallback in place.

`speakWord(word)` speaks Thai then English in sequence using this chaining. Each per-option "listen" button (`.opt-listen`) calls `speakWord` directly and calls `stopPropagation()` so it doesn't also trigger answer selection on the parent `.option-btn`.

### Scoring

Stars persist across sessions via `localStorage` (`vocaberry_stars` key) and are cumulative across all rounds/categories, not per-round.
