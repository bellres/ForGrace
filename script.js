// ================= 데이터 =================
const MENUS = [
  { name: "김치찌개", emoji: "🍲", tags: ["한식", "국물", "매운", "따뜻", "든든"] },
  { name: "된장찌개", emoji: "🍲", tags: ["한식", "국물", "따뜻", "가벼운"] },
  { name: "순대국밥", emoji: "🥘", tags: ["한식", "국물", "따뜻", "든든", "해장", "고기"] },
  { name: "냉면", emoji: "🍜", tags: ["한식", "면", "시원"] },
  { name: "비빔밥", emoji: "🍚", tags: ["한식", "밥", "가벼운"] },
  { name: "제육볶음", emoji: "🥩", tags: ["한식", "매운", "고기", "밥", "든든"] },
  { name: "삼겹살", emoji: "🥓", tags: ["한식", "고기", "든든", "회식"] },
  { name: "김치볶음밥", emoji: "🍳", tags: ["한식", "밥", "간단", "매운"] },
  { name: "떡볶이", emoji: "🌶️", tags: ["분식", "매운", "간단", "달달"] },
  { name: "김밥", emoji: "🍙", tags: ["분식", "간단", "가벼운", "밥"] },
  { name: "라면", emoji: "🍜", tags: ["분식", "면", "국물", "간단", "매운", "해장"] },
  { name: "짜장면", emoji: "🍝", tags: ["중식", "면", "달달"] },
  { name: "짬뽕", emoji: "🍜", tags: ["중식", "면", "국물", "매운", "해장"] },
  { name: "마라탕", emoji: "🥵", tags: ["중식", "국물", "매운", "따뜻"] },
  { name: "탕수육", emoji: "🍖", tags: ["중식", "고기", "달달", "회식"] },
  { name: "초밥", emoji: "🍣", tags: ["일식", "가벼운", "특별"] },
  { name: "돈가스", emoji: "🍛", tags: ["일식", "고기", "든든"] },
  { name: "라멘", emoji: "🍜", tags: ["일식", "면", "국물", "따뜻"] },
  { name: "우동", emoji: "🍲", tags: ["일식", "면", "국물", "따뜻", "가벼운"] },
  { name: "파스타", emoji: "🍝", tags: ["양식", "면", "특별"] },
  { name: "피자", emoji: "🍕", tags: ["양식", "회식", "든든"] },
  { name: "햄버거", emoji: "🍔", tags: ["양식", "간단", "고기", "든든"] },
  { name: "샐러드", emoji: "🥗", tags: ["양식", "가벼운", "시원"] },
  { name: "샌드위치", emoji: "🥪", tags: ["양식", "간단", "가벼운", "빵"] },
  { name: "치킨", emoji: "🍗", tags: ["치킨", "고기", "회식", "든든"] },
  { name: "쌀국수", emoji: "🍜", tags: ["아시안", "면", "국물", "따뜻", "해장", "가벼운"] },
  { name: "팟타이", emoji: "🍤", tags: ["아시안", "면", "특별"] },
  { name: "팥빙수", emoji: "🍧", tags: ["디저트", "시원", "달달"] },
];

// 소금·간장·설탕·식용유·참기름 등 기본 양념은 있다고 가정
const RECIPES = [
  {
    name: "김치볶음밥", emoji: "🍳", ingredients: ["김치", "밥", "계란", "대파"],
    steps: ["대파를 송송 썰어 기름에 볶아 파기름을 내요.", "잘게 썬 김치를 넣고 2~3분 볶아요.", "밥을 넣고 간장 1큰술, 설탕 약간으로 간하며 골고루 볶아요.", "계란 프라이를 올리고 참기름을 둘러 완성!"],
  },
  {
    name: "김치찌개", emoji: "🍲", ingredients: ["김치", "돼지고기", "두부", "대파"],
    steps: ["냄비에 돼지고기와 김치를 넣고 볶아요.", "물 2컵을 붓고 10분간 끓여요.", "두부를 넣고 5분 더 끓여요.", "대파를 올리고 간을 맞춰 완성!"],
  },
  {
    name: "된장찌개", emoji: "🍲", ingredients: ["된장", "두부", "애호박", "양파", "감자"],
    steps: ["물 2컵에 된장 1.5큰술을 풀어요.", "감자, 양파를 넣고 5분 끓여요.", "애호박과 두부를 넣고 5분 더 끓여요.", "기호에 맞게 고춧가루를 넣어 완성!"],
  },
  {
    name: "계란말이", emoji: "🥚", ingredients: ["계란", "대파", "당근"],
    steps: ["계란 3개를 풀고 소금으로 간해요.", "대파와 당근을 잘게 다져 섞어요.", "약불 팬에 얇게 부어 익으면 돌돌 말아요.", "반복해서 두툼하게 만들고 썰어서 완성!"],
  },
  {
    name: "계란찜", emoji: "🥚", ingredients: ["계란", "대파"],
    steps: ["계란 3개에 물 반 컵, 소금 약간을 넣고 풀어요.", "뚝배기에 붓고 중약불에서 저어가며 익혀요.", "몽글해지면 대파를 올리고 뚜껑을 덮어요.", "약불에서 3분 뜸 들여 완성!"],
  },
  {
    name: "참치마요덮밥", emoji: "🍚", ingredients: ["참치캔", "밥", "마요네즈", "김"],
    steps: ["참치캔의 기름을 빼요.", "참치에 마요네즈 2큰술, 간장 약간을 섞어요.", "밥 위에 참치마요를 올려요.", "잘게 부순 김을 뿌려 완성!"],
  },
  {
    name: "라면", emoji: "🍜", ingredients: ["라면", "계란", "대파"],
    steps: ["물 550ml를 끓여요.", "면과 스프를 넣고 4분 끓여요.", "계란을 넣고 대파를 올려요.", "30초 더 끓여 완성!"],
  },
  {
    name: "떡볶이", emoji: "🌶️", ingredients: ["떡", "어묵", "고추장", "대파"],
    steps: ["물 2컵에 고추장 2큰술, 설탕 1큰술, 간장 1큰술을 풀어요.", "끓으면 떡과 어묵을 넣어요.", "국물이 걸쭉해질 때까지 졸여요.", "대파를 넣고 한소끔 끓여 완성!"],
  },
  {
    name: "제육볶음", emoji: "🥩", ingredients: ["돼지고기", "고추장", "양파", "대파"],
    steps: ["고추장 2, 간장 1, 설탕 1, 다진 마늘 1큰술로 양념을 만들어요.", "돼지고기를 양념에 10분 재워요.", "센불에 고기를 볶다가 양파를 넣어요.", "대파를 넣고 한 번 더 볶아 완성!"],
  },
  {
    name: "파스타", emoji: "🍝", ingredients: ["파스타면", "토마토소스", "양파", "마늘"],
    steps: ["소금 넣은 물에 면을 8분 삶아요.", "올리브유에 마늘, 양파를 볶아요.", "토마토소스를 넣고 끓여요.", "면을 넣고 면수 약간과 함께 버무려 완성!"],
  },
  {
    name: "오므라이스", emoji: "🍳", ingredients: ["밥", "계란", "양파", "당근", "케첩"],
    steps: ["양파와 당근을 잘게 썰어 볶아요.", "밥과 케첩 2큰술을 넣고 볶아요.", "계란 2개를 풀어 얇게 부쳐요.", "볶음밥을 계란으로 감싸고 케첩을 뿌려 완성!"],
  },
  {
    name: "감자채볶음", emoji: "🥔", ingredients: ["감자", "양파", "당근"],
    steps: ["감자를 채 썰어 찬물에 헹궈 전분을 빼요.", "기름 두른 팬에 감자를 볶아요.", "양파, 당근을 넣고 소금으로 간해요.", "투명해질 때까지 볶아 완성!"],
  },
  {
    name: "두부부침", emoji: "🧈", ingredients: ["두부", "계란"],
    steps: ["두부를 1cm 두께로 썰어 물기를 빼요.", "소금을 살짝 뿌려요.", "계란물을 입혀요.", "기름 두른 팬에 노릇하게 부쳐 완성!"],
  },
  {
    name: "소시지야채볶음", emoji: "🌭", ingredients: ["소시지", "양파", "파프리카", "케첩"],
    steps: ["소시지에 칼집을 내요.", "양파와 파프리카를 한입 크기로 썰어요.", "소시지와 채소를 함께 볶아요.", "케첩 2큰술, 올리고당 1큰술을 넣고 볶아 완성!"],
  },
  {
    name: "비빔밥", emoji: "🍚", ingredients: ["밥", "계란", "고추장", "당근", "애호박"],
    steps: ["당근과 애호박을 채 썰어 각각 볶아요.", "계란 프라이를 만들어요.", "밥 위에 채소와 계란을 올려요.", "고추장과 참기름을 넣고 비벼 완성!"],
  },
];

const COMMON_INGREDIENTS = [...new Set(RECIPES.flatMap((r) => r.ingredients))];

const TAG_RULES = [
  { tag: "매운", re: /매운|맵|얼큰|칼칼|스트레스/ },
  { tag: "국물", re: /국물|찌개|국밥|뜨끈/ },
  { tag: "따뜻", re: /따뜻|따듯|추워|춥|쌀쌀|감기/ },
  { tag: "해장", re: /해장|술|숙취/ },
  { tag: "시원", re: /시원|더워|덥|차가운|여름/ },
  { tag: "가벼운", re: /가벼|가볍|다이어트|건강|속이 안 좋|부담/ },
  { tag: "든든", re: /든든|배고|배가 고프|허기|많이 먹/ },
  { tag: "고기", re: /고기|육식/ },
  { tag: "달달", re: /달달|단 거|단거|달콤|디저트/ },
  { tag: "면", re: /국수|누들|면 ?요리|면류|(^|\s)면/ },
  { tag: "밥", re: /덮밥|볶음밥|밥 ?요리|밥이 먹고|밥 먹고 싶/ },
  { tag: "간단", re: /간단|빨리|빠르게|혼밥|귀찮/ },
  { tag: "특별", re: /특별|기념|데이트|분위기/ },
  { tag: "회식", re: /회식|친구|모임|여럿|같이/ },
  { tag: "한식", re: /한식/ },
  { tag: "중식", re: /중식|중국/ },
  { tag: "일식", re: /일식|일본/ },
  { tag: "양식", re: /양식|서양/ },
  { tag: "분식", re: /분식/ },
  { tag: "치킨", re: /치킨|닭/ },
  { tag: "빵", re: /빵|샌드/ },
];

const OUT_CATEGORIES = ["한식", "중식", "일식", "양식", "분식", "치킨", "아시안", "디저트"];

const WHEEL_COLORS = ["#F7D66B", "#9DB8E6", "#A8CF6B", "#F4F4EF", "#A9D8E6", "#F2B45C", "#C3A3DB", "#EE9B95"];
const DEFAULT_OPTIONS = ["김치찌개", "짜장면", "치킨", "초밥", "떡볶이", "파스타", "비빔밥", "햄버거"];
const MIN_OPTIONS = 2;
const MAX_OPTIONS = 12;

// ================= 저장소 =================
const store = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem("golabab-" + key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem("golabab-" + key, JSON.stringify(value));
    } catch {
      // 저장 불가 환경에서는 메모리에만 유지
    }
  },
  clear() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith("golabab-"))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      // 무시
    }
  },
};

let userName = store.get("name", "이은우");
let options = store.get("options", DEFAULT_OPTIONS.slice());
let fridge = store.get("fridge", ["계란", "김치", "밥", "대파", "양파"]);
let menuHistory = store.get("history", []);

// ================= 유틸 =================
const $ = (id) => document.getElementById(id);

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function findMenu(name) {
  return MENUS.find((m) => m.name === name);
}

function findRecipe(name) {
  return RECIPES.find((r) => r.name === name);
}

function menuEmoji(name) {
  return (findMenu(name) || findRecipe(name) || { emoji: "🍽️" }).emoji;
}

function naverMapUrl(menu) {
  return "https://map.naver.com/p/search/" + encodeURIComponent(menu + " 맛집");
}

function kakaoMapUrl(menu) {
  return "https://map.kakao.com/?q=" + encodeURIComponent(menu + " 맛집");
}

function recipeSearchUrl(menu) {
  return "https://www.10000recipe.com/recipe/list.html?q=" + encodeURIComponent(menu);
}

let toastTimer;
function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

function addHistory(menu, source) {
  menuHistory.unshift({ menu, source, time: Date.now() });
  menuHistory = menuHistory.slice(0, 30);
  store.set("history", menuHistory);
}

function optionLabel(i) {
  return (options[i] || "").trim() || `옵션 ${i + 1}`;
}

function wheelColor(i, n) {
  // 마지막 칸이 첫 칸과 같은 색이 되지 않도록
  if (i === n - 1 && n > 1 && i % WHEEL_COLORS.length === 0) return WHEEL_COLORS[3];
  return WHEEL_COLORS[i % WHEEL_COLORS.length];
}

// ================= 이름 =================
function renderName() {
  $("title-name").textContent = `${userName}님`;
  if (greetingEl) {
    greetingEl.innerHTML = `안녕하세요, ${esc(userName)}님<br>골라밥이<br>메뉴 추천해드릴게요`;
  }
}

// ================= 룰렛 =================
const wheel = $("wheel");
const wctx = wheel.getContext("2d");
const startBtn = $("start");
let rotation = 0;
let spinning = false;
let pendingWinner = null;

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function fitText(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(t + "…").width > maxWidth) t = t.slice(0, -1);
  return t + "…";
}

function drawWheel() {
  const size = wheel.width;
  const c = size / 2;
  const r = c - 8;
  const n = options.length;
  const seg = (Math.PI * 2) / n;

  wctx.clearRect(0, 0, size, size);

  for (let i = 0; i < n; i++) {
    const start = -Math.PI / 2 + i * seg;
    wctx.beginPath();
    wctx.moveTo(c, c);
    wctx.arc(c, c, r, start, start + seg);
    wctx.closePath();
    wctx.fillStyle = wheelColor(i, n);
    wctx.fill();
    wctx.strokeStyle = "rgba(0,0,0,0.08)";
    wctx.lineWidth = 2;
    wctx.stroke();
  }

  wctx.beginPath();
  wctx.arc(c, c, r, 0, Math.PI * 2);
  wctx.lineWidth = 10;
  wctx.strokeStyle = "#6b6258";
  wctx.stroke();

  const fontSize = n <= 6 ? 28 : n <= 8 ? 25 : n <= 10 ? 22 : 19;
  const labelRadius = r * (n <= 4 ? 0.55 : n <= 8 ? 0.64 : 0.7);
  const maxLabelWidth = n <= 4 ? 200 : n <= 8 ? 110 : 80;
  wctx.font = `700 ${fontSize}px "Noto Sans KR", sans-serif`;
  wctx.textAlign = "center";
  wctx.textBaseline = "middle";

  for (let i = 0; i < n; i++) {
    const mid = -Math.PI / 2 + (i + 0.5) * seg;
    const x = c + Math.cos(mid) * labelRadius;
    const y = c + Math.sin(mid) * labelRadius;
    const text = fitText(wctx, optionLabel(i), maxLabelWidth);
    const w = wctx.measureText(text).width + 16;
    const h = fontSize + 12;

    roundRectPath(wctx, x - w / 2, y - h / 2, w, h, 6);
    wctx.fillStyle = "#fff";
    wctx.fill();
    wctx.lineWidth = 2;
    wctx.strokeStyle = "#444";
    wctx.stroke();

    wctx.fillStyle = "#1b1b1b";
    wctx.fillText(text, x, y + 1);
  }
}

function renderOptions() {
  $("count").textContent = `${options.length}개`;
  $("minus").disabled = spinning || options.length <= MIN_OPTIONS;
  $("plus").disabled = spinning || options.length >= MAX_OPTIONS;
  drawWheel();
}

function saveOptions() {
  store.set("options", options);
  renderOptions();
}

function addOption(name) {
  if (options.length >= MAX_OPTIONS) return false;
  if (!name) {
    const unused = MENUS.map((m) => m.name).filter((m) => !options.includes(m));
    name = unused.length ? pickRandom(unused) : `옵션 ${options.length + 1}`;
  }
  options.push(name);
  saveOptions();
  return true;
}

function spin() {
  if (spinning) return;
  spinning = true;
  startBtn.disabled = true;
  renderOptions();

  const n = options.length;
  const seg = 360 / n;
  const idx = Math.floor(Math.random() * n);
  const target = idx * seg + seg * (0.15 + Math.random() * 0.7);
  const desired = (360 - target) % 360;
  const current = ((rotation % 360) + 360) % 360;
  rotation += 360 * 6 + ((desired - current + 360) % 360);
  pendingWinner = optionLabel(idx);
  wheel.style.transform = `rotate(${rotation}deg)`;
}

wheel.addEventListener("transitionend", () => {
  if (!spinning) return;
  spinning = false;
  startBtn.disabled = false;
  renderOptions();
  addHistory(pendingWinner, "룰렛");
  openSheet(() => renderResult(pendingWinner));
});

startBtn.addEventListener("click", spin);
wheel.addEventListener("click", () => {
  if (!spinning) openSheet(renderOptionsEditor);
});
$("edit-options").addEventListener("click", () => {
  if (!spinning) openSheet(renderOptionsEditor);
});
$("plus").addEventListener("click", () => addOption());
$("minus").addEventListener("click", () => {
  if (options.length > MIN_OPTIONS) {
    options.pop();
    saveOptions();
  }
});

// ================= 바텀 시트 =================
const sheetEl = $("sheet");
const sheetBody = $("sheet-body");

function openSheet(render) {
  closeDrawer();
  render();
  sheetEl.classList.add("open");
  sheetEl.querySelector(".sheet").scrollTop = 0;
}

function closeSheet() {
  sheetEl.classList.remove("open");
}

$("sheet-close").addEventListener("click", closeSheet);
sheetEl.addEventListener("click", (e) => {
  if (e.target === sheetEl) closeSheet();
});

// 메뉴 결정 후 공통 액션 (레시피 / 맛집)
// 레시피가 있으면 앱 안에서 열고, 없으면 레시피 검색 사이트 링크 (window.open은 일부 브라우저에서 막힘)
function recipeActionHtml(menu, cls, label) {
  return findRecipe(menu)
    ? `<button class="${cls}" data-act="recipe" data-menu="${esc(menu)}">${label}</button>`
    : `<a class="${cls}" href="${recipeSearchUrl(menu)}" target="_blank" rel="noopener">${label}</a>`;
}

function menuActionsHtml(menu) {
  return `
    <div class="btn-row">
      ${recipeActionHtml(menu, "btn home", "🏡 집에서 해먹기")}
      <a class="btn out" href="${naverMapUrl(menu)}" target="_blank" rel="noopener">🚙 근처 맛집</a>
    </div>`;
}

function openRecipe(menu) {
  openSheet(() => renderRecipe(menu, () => renderResult(menu)));
}

sheetBody.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act='recipe']");
  if (btn) openRecipe(btn.dataset.menu);
});

// 룰렛 결과
function renderResult(menu) {
  sheetBody.innerHTML = `
    <div class="result">
      <p class="result-label">오늘의 메뉴는</p>
      <p class="result-menu">${menuEmoji(menu)} ${esc(menu)}</p>
      <p class="result-label">${findRecipe(menu) ? "집에서 직접 만들 수도 있어요!" : "맛있게 드세요!"}</p>
    </div>
    ${menuActionsHtml(menu)}
    <div class="btn-row">
      <button class="btn" id="spin-again">🎡 다시 돌리기</button>
    </div>`;
  $("spin-again").addEventListener("click", () => {
    closeSheet();
    setTimeout(spin, 300);
  });
}

// 옵션 편집
function renderOptionsEditor() {
  const n = options.length;
  sheetBody.innerHTML = `
    <h2>✏️ 룰렛 옵션 편집</h2>
    <p class="sheet-desc">룰렛에 올릴 메뉴를 적어주세요. (${MIN_OPTIONS}~${MAX_OPTIONS}개)</p>
    <div class="option-list">
      ${options
        .map(
          (o, i) => `
        <div class="option-row">
          <span class="dot" style="background:${wheelColor(i, n)}"></span>
          <input class="text-input" data-index="${i}" value="${esc(o)}" placeholder="옵션 ${i + 1}" maxlength="12">
          <button data-del="${i}" aria-label="삭제" ${n <= MIN_OPTIONS ? "disabled" : ""}>×</button>
        </div>`
        )
        .join("")}
    </div>
    <div class="btn-row">
      <button class="btn" id="opt-add" ${n >= MAX_OPTIONS ? "disabled" : ""}>+ 옵션 추가</button>
      <button class="btn" id="opt-random">🎲 랜덤 채우기</button>
    </div>
    <div class="btn-row">
      <button class="btn primary" id="opt-done">완료</button>
    </div>`;

  sheetBody.querySelectorAll("input[data-index]").forEach((input) => {
    input.addEventListener("input", () => {
      options[Number(input.dataset.index)] = input.value;
      saveOptions();
    });
  });
  sheetBody.querySelectorAll("[data-del]").forEach((btn) => {
    btn.addEventListener("click", () => {
      options.splice(Number(btn.dataset.del), 1);
      saveOptions();
      renderOptionsEditor();
    });
  });
  $("opt-add").addEventListener("click", () => {
    addOption();
    renderOptionsEditor();
  });
  $("opt-random").addEventListener("click", () => {
    options = shuffle(MENUS.map((m) => m.name)).slice(0, options.length);
    saveOptions();
    renderOptionsEditor();
  });
  $("opt-done").addEventListener("click", () => {
    options = options.map((o, i) => o.trim() || `옵션 ${i + 1}`);
    saveOptions();
    closeSheet();
  });
}

// ================= 집밥 (냉장고) =================
function hasIngredient(ing) {
  return fridge.some((f) => f === ing || f.includes(ing));
}

function saveFridge() {
  store.set("fridge", fridge);
}

function addToFridge(raw) {
  const items = raw.split(/[,\s]+/).map((s) => s.trim()).filter(Boolean);
  for (const item of items) {
    if (!fridge.includes(item)) fridge.push(item);
  }
  saveFridge();
}

function recommendRecipes() {
  return RECIPES.map((r) => {
    const have = r.ingredients.filter(hasIngredient);
    const missing = r.ingredients.filter((i) => !hasIngredient(i));
    return { recipe: r, have, missing };
  })
    .filter((x) => x.have.length > 0)
    .sort((a, b) => a.missing.length - b.missing.length || b.have.length - a.have.length)
    .slice(0, 6);
}

function renderHome() {
  const recs = recommendRecipes();
  const quick = COMMON_INGREDIENTS.filter((i) => !fridge.includes(i));

  sheetBody.innerHTML = `
    <h2>🏡 집밥</h2>
    <p class="sheet-desc">냉장고에 있는 재료로 만들 수 있는 요리를 추천해드려요.</p>

    <h3>🧊 내 냉장고</h3>
    <div class="chips">
      ${
        fridge.length
          ? fridge.map((i) => `<span class="chip">${esc(i)}<button data-remove="${esc(i)}" aria-label="${esc(i)} 삭제">×</button></span>`).join("")
          : `<p class="sheet-desc">냉장고가 비어 있어요. 재료를 추가해주세요.</p>`
      }
    </div>
    <form class="add-row" id="fridge-form">
      <input id="fridge-input" placeholder="재료 추가 (예: 두부, 감자)" autocomplete="off">
      <button class="btn primary">추가</button>
    </form>
    ${quick.length ? `<div class="chips">${quick.map((i) => `<button class="chip ghost" data-add="${esc(i)}">+ ${esc(i)}</button>`).join("")}</div>` : ""}

    <h3>🍳 추천 레시피</h3>
    <div class="recipe-list">
      ${
        recs.length
          ? recs
              .map(
                ({ recipe, have, missing }) => `
          <button class="recipe-card" data-recipe="${esc(recipe.name)}">
            <div class="row">
              <span>${recipe.emoji} ${esc(recipe.name)}</span>
              ${missing.length ? `<span class="badge partial">${missing.length}개 부족</span>` : `<span class="badge">바로 가능!</span>`}
            </div>
            <p>✅ ${have.map(esc).join(", ")}${missing.length ? ` · 🛒 ${missing.map(esc).join(", ")}` : ""}</p>
          </button>`
              )
              .join("")
          : `<p class="empty">재료를 추가하면 레시피를 추천해드려요 🥕</p>`
      }
    </div>
    <p class="note">* 소금·간장·설탕·식용유 같은 기본 양념은 있다고 가정해요.</p>`;

  $("fridge-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = $("fridge-input").value;
    if (!value.trim()) return;
    addToFridge(value);
    renderHome();
    $("fridge-input").focus();
  });
  sheetBody.querySelectorAll("[data-remove]").forEach((btn) =>
    btn.addEventListener("click", () => {
      fridge = fridge.filter((f) => f !== btn.dataset.remove);
      saveFridge();
      renderHome();
    })
  );
  sheetBody.querySelectorAll("[data-add]").forEach((btn) =>
    btn.addEventListener("click", () => {
      addToFridge(btn.dataset.add);
      renderHome();
    })
  );
  sheetBody.querySelectorAll("[data-recipe]").forEach((btn) =>
    btn.addEventListener("click", () => renderRecipe(btn.dataset.recipe, renderHome))
  );
}

function renderRecipe(name, back) {
  const recipe = findRecipe(name);
  sheetBody.innerHTML = `
    <h2>${recipe.emoji} ${esc(recipe.name)}</h2>
    <p class="sheet-desc">초록색은 냉장고에 있는 재료, 빨간색은 사야 할 재료예요.</p>
    <h3>재료</h3>
    <ul class="ingredients">
      ${recipe.ingredients.map((i) => `<li class="${hasIngredient(i) ? "" : "missing"}">${esc(i)}</li>`).join("")}
    </ul>
    <h3>만드는 법</h3>
    <ol class="steps">${recipe.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
    <div class="btn-row">
      <button class="btn" id="recipe-back">← 뒤로</button>
      <button class="btn primary" id="recipe-pick">이걸로 결정!</button>
    </div>`;
  $("recipe-back").addEventListener("click", back);
  $("recipe-pick").addEventListener("click", () => {
    addHistory(recipe.name, "집밥");
    closeSheet();
    toast(`${recipe.emoji} 오늘은 ${recipe.name}! 맛있게 드세요`);
  });
}

// ================= 외식 =================
function renderOut(category = null, menu = null) {
  sheetBody.innerHTML = `
    <h2>🚙 외식</h2>
    <p class="sheet-desc">어떤 종류가 끌리세요? 골라밥이 메뉴를 골라드려요.</p>
    <div class="chips" style="margin-top:12px">
      ${OUT_CATEGORIES.map((c) => `<button class="chip ghost ${c === category ? "selected" : ""}" data-cat="${c}">${c}</button>`).join("")}
      <button class="chip ghost ${category === "아무거나" ? "selected" : ""}" data-cat="아무거나">🎲 아무거나</button>
    </div>
    ${
      menu
        ? `
      <div class="result">
        <p class="result-label">${esc(category)} 중에서 골라봤어요</p>
        <p class="result-menu">${menuEmoji(menu)} ${esc(menu)}</p>
      </div>
      <div class="btn-row">
        <a class="btn out" href="${naverMapUrl(menu)}" target="_blank" rel="noopener">🗺️ 네이버 지도</a>
        <a class="btn out" href="${kakaoMapUrl(menu)}" target="_blank" rel="noopener">📍 카카오맵</a>
      </div>
      <div class="btn-row">
        <button class="btn" id="out-again">🔄 다른 메뉴</button>
        <button class="btn primary" id="out-pick">이걸로 결정!</button>
      </div>`
        : ""
    }`;

  const pickFrom = (cat, exclude) => {
    const pool = MENUS.filter((m) => (cat === "아무거나" || m.tags.includes(cat)) && m.name !== exclude);
    return pickRandom(pool.length ? pool : MENUS).name;
  };

  sheetBody.querySelectorAll("[data-cat]").forEach((btn) =>
    btn.addEventListener("click", () => renderOut(btn.dataset.cat, pickFrom(btn.dataset.cat)))
  );
  if (menu) {
    $("out-again").addEventListener("click", () => renderOut(category, pickFrom(category, menu)));
    $("out-pick").addEventListener("click", () => {
      addHistory(menu, "외식");
      closeSheet();
      toast(`${menuEmoji(menu)} 오늘은 ${menu}! 맛있게 드세요`);
    });
  }
}

$("home-btn").addEventListener("click", () => openSheet(renderHome));
$("out-btn").addEventListener("click", () => openSheet(() => renderOut()));

// ================= 골라밥에게 물어보기 (챗) =================
const chatLog = $("chat-log");
const chatForm = $("chat-form");
const chatInput = $("chat-input");
let greetingEl = null;
let lastTags = [];
let lastMenu = null;

function scrollChat() {
  chatLog.scrollTop = chatLog.scrollHeight;
}

function addUserMessage(text) {
  if (greetingEl) {
    greetingEl.classList.remove("greeting");
    greetingEl.classList.add("bot");
  }
  const el = document.createElement("div");
  el.className = "msg user";
  el.textContent = text;
  chatLog.append(el);
  scrollChat();
}

function addBotMessage(html, menu) {
  const el = document.createElement("div");
  el.className = "msg bot";
  el.innerHTML = html;
  if (menu) {
    const actions = document.createElement("div");
    actions.className = "msg-actions";
    actions.innerHTML = `
      ${recipeActionHtml(menu, "", "🏡 레시피")}
      <a href="${naverMapUrl(menu)}" target="_blank" rel="noopener">🚙 맛집</a>
      <button data-chat="wheel">🎡 룰렛에 추가</button>`;
    const recipeBtn = actions.querySelector("[data-act='recipe']");
    if (recipeBtn) recipeBtn.addEventListener("click", () => openRecipe(menu));
    actions.querySelector("[data-chat='wheel']").addEventListener("click", () => {
      if (options.includes(menu)) toast("이미 룰렛에 있어요!");
      else if (addOption(menu)) toast(`룰렛에 ${menu} 추가!`);
      else toast(`룰렛이 가득 찼어요 (최대 ${MAX_OPTIONS}개)`);
    });
    el.append(actions);
  }
  chatLog.append(el);
  scrollChat();
}

function isNegated(text, index, length) {
  const before = text.slice(Math.max(0, index - 3), index);
  const after = text.slice(index + length, index + length + 10);
  return /안\s?$/.test(before) || /^[^,.!?]{0,5}(말고|빼고|싫|제외|없는|별로)/.test(after);
}

function recommend(text) {
  const want = [];
  const avoid = [];
  for (const rule of TAG_RULES) {
    const m = text.match(rule.re);
    if (m) (isNegated(text, m.index, m[0].length) ? avoid : want).push(rule.tag);
  }

  // 메뉴 이름을 직접 말한 경우
  const direct = MENUS.find((m) => text.includes(m.name));
  if (direct) {
    const idx = text.indexOf(direct.name);
    if (!isNegated(text, idx, direct.name.length)) {
      lastMenu = direct.name;
      lastTags = direct.tags;
      return { menu: direct, reason: `${direct.name} 좋죠! 탁월한 선택이에요 👍` };
    }
    avoid.push(...direct.tags.slice(0, 1));
  }

  let tags = want;
  if (!want.length && /다른|또|별로|싫|말고/.test(text)) tags = lastTags;

  const candidates = MENUS.filter((m) => m.name !== lastMenu && !m.tags.some((t) => avoid.includes(t)));
  const scored = (candidates.length ? candidates : MENUS).map((m) => ({
    m,
    score: tags.filter((t) => m.tags.includes(t)).length,
  }));
  const best = Math.max(...scored.map((x) => x.score));
  const menu = pickRandom(scored.filter((x) => x.score === best)).m;

  let reason;
  if (tags.length && best > 0) {
    reason = `${tags.map((t) => "#" + t).join(" ")} 메뉴를 찾으시는군요!`;
  } else if (avoid.length) {
    reason = `${avoid.map((t) => "#" + t).join(" ")} 빼고 골라봤어요.`;
  } else if (tags.length) {
    reason = "딱 맞는 메뉴는 없지만, 이건 어때요?";
  } else {
    reason = pickRandom(["고민될 땐 골라밥이 골라드릴게요!", "오늘 같은 날엔 이게 딱이에요.", "골라밥의 추천 메뉴는요~"]);
  }

  lastTags = tags;
  lastMenu = menu.name;
  return { menu, reason };
}

function handleChat(text) {
  addUserMessage(text);

  const typing = document.createElement("div");
  typing.className = "msg bot typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatLog.append(typing);
  scrollChat();

  setTimeout(() => {
    typing.remove();
    const { menu, reason } = recommend(text);
    addBotMessage(`${esc(reason)}<br><span class="menu-name">${menu.emoji} ${esc(menu.name)}</span> 어떠세요?`, menu.name);
  }, 600);
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = "";
  handleChat(text);
});

// 음성 입력
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const micBtn = $("mic");
let recognition = null;

micBtn.addEventListener("click", () => {
  if (!SpeechRecognition) {
    toast("이 브라우저는 음성 인식을 지원하지 않아요 (Chrome 권장)");
    return;
  }
  if (recognition) {
    recognition.stop();
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = "ko-KR";
  recognition.interimResults = false;
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript.trim();
    if (text) handleChat(text);
  };
  recognition.onerror = (e) => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") {
      toast("마이크 권한이 없어요. 글자로 입력해주세요");
    } else {
      toast("음성을 인식하지 못했어요. 다시 시도해주세요");
    }
  };
  recognition.onend = () => {
    micBtn.classList.remove("listening");
    recognition = null;
  };
  try {
    micBtn.classList.add("listening");
    recognition.start();
  } catch {
    micBtn.classList.remove("listening");
    recognition = null;
    toast("이 환경에서는 음성 입력을 쓸 수 없어요");
  }
});

// ================= 햄버거 메뉴 =================
const drawer = $("drawer");

function closeDrawer() {
  drawer.classList.remove("open");
}

$("menu-btn").addEventListener("click", () => drawer.classList.add("open"));
drawer.addEventListener("click", (e) => {
  if (e.target === drawer) closeDrawer();
});

function renderNameEditor() {
  sheetBody.innerHTML = `
    <h2>👤 이름 바꾸기</h2>
    <p class="sheet-desc">골라밥이 부를 이름을 알려주세요.</p>
    <form class="add-row" id="name-form">
      <input id="name-input" value="${esc(userName)}" maxlength="10" autocomplete="off">
      <button class="btn primary">저장</button>
    </form>`;
  const input = $("name-input");
  setTimeout(() => input.select(), 300);
  $("name-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    userName = value;
    store.set("name", userName);
    renderName();
    closeSheet();
    toast(`반가워요, ${userName}님!`);
  });
}

function renderHistory() {
  const fmt = (t) => {
    const d = new Date(t);
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };
  sheetBody.innerHTML = `
    <h2>🕘 최근 결정한 메뉴</h2>
    ${
      menuHistory.length
        ? `<ul class="history-list">${menuHistory
            .map((h) => `<li><span>${menuEmoji(h.menu)} ${esc(h.menu)} <small>· ${esc(h.source)}</small></span><small>${fmt(h.time)}</small></li>`)
            .join("")}</ul>
           <div class="btn-row"><button class="btn" id="history-clear">기록 지우기</button></div>`
        : `<p class="empty">아직 기록이 없어요. 룰렛을 돌려보세요! 🎡</p>`
    }`;
  const clearBtn = $("history-clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      menuHistory = [];
      store.set("history", menuHistory);
      renderHistory();
    });
  }
}

drawer.querySelectorAll("[data-nav]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const nav = btn.dataset.nav;
    if (nav === "name") openSheet(renderNameEditor);
    else if (nav === "options") openSheet(renderOptionsEditor);
    else if (nav === "fridge") openSheet(renderHome);
    else if (nav === "out") openSheet(() => renderOut());
    else if (nav === "history") openSheet(renderHistory);
    else if (nav === "reset") openSheet(renderResetConfirm);
  })
);

// confirm()은 일부 브라우저·앱 내 브라우저에서 동작하지 않아 화면 안에서 확인
function renderResetConfirm() {
  sheetBody.innerHTML = `
    <h2>↺ 전체 초기화</h2>
    <p class="sheet-desc">이름, 룰렛 옵션, 냉장고, 기록이 모두 처음 상태로 돌아가요.</p>
    <div class="btn-row">
      <button class="btn" id="reset-cancel">취소</button>
      <button class="btn primary" id="reset-ok">초기화</button>
    </div>`;
  $("reset-cancel").addEventListener("click", closeSheet);
  $("reset-ok").addEventListener("click", () => {
    store.clear();
    userName = "이은우";
    options = DEFAULT_OPTIONS.slice();
    fridge = ["계란", "김치", "밥", "대파", "양파"];
    menuHistory = [];
    renderName();
    renderOptions();
    closeSheet();
    toast("초기화했어요");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSheet();
    closeDrawer();
  }
});

// ================= 시작 =================
greetingEl = document.createElement("div");
greetingEl.className = "msg greeting";
chatLog.append(greetingEl);

renderName();
renderOptions();
if (document.fonts) document.fonts.ready.then(drawWheel);
