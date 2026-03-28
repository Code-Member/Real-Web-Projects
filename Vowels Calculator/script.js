const textInput = document.getElementById("text-input");
const countBtn = document.getElementById("count-btn");
const clearBtn = document.getElementById("clear-btn");

const totalVowelsEl = document.getElementById("total-vowels");
const totalCharactersEl = document.getElementById("total-characters");

const countAEl = document.getElementById("count-a");
const countEEl = document.getElementById("count-e");
const countIEl = document.getElementById("count-i");
const countOEl = document.getElementById("count-o");
const countUEl = document.getElementById("count-u");

function calculateVowels(text) {
  const chars = text.toLowerCase().split("");
  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (const ch of chars) {
    if (counts[ch] !== undefined) {
      counts[ch] += 1;
    }
  }

  const total = counts.a + counts.e + counts.i + counts.o + counts.u;
  return { counts, total };
}

function renderCounts() {
  const text = textInput.value;
  const { counts, total } = calculateVowels(text);

  totalVowelsEl.textContent = total;
  totalCharactersEl.textContent = text.length;

  countAEl.textContent = counts.a;
  countEEl.textContent = counts.e;
  countIEl.textContent = counts.i;
  countOEl.textContent = counts.o;
  countUEl.textContent = counts.u;
}

function clearAll() {
  textInput.value = "";
  renderCounts();
  textInput.focus();
}

countBtn.addEventListener("click", renderCounts);
clearBtn.addEventListener("click", clearAll);
textInput.addEventListener("input", renderCounts);

renderCounts();