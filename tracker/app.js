// Tracker engine — reads WEEKS/MONTHS/SYNCED from data.js, renders + persists.

const MS_D = 864e5;
const LS_KEY = "ml-sprint-2026";
const START_KEY = "ml-roadmap-start";
const MO = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function loadStart() {
  try {
    const s = localStorage.getItem(START_KEY);
    if (s) { const [y, m, d] = s.split("-").map(Number); if (y && m && d) return new Date(y, m - 1, d); }
  } catch (e) {}
  return new Date(2026, 6, 13); // default: Mon Jul 13 2026, local
}
let START = loadStart();
function mondayOf(i) {
  const d = new Date(START.getFullYear(), START.getMonth(), START.getDate());
  d.setDate(d.getDate() + i * 7);
  return d;
}
function finishDate() { const d = mondayOf(17); d.setDate(d.getDate() + 4); return d; } // Fri of W18
let END = mondayOf(18);

function fmtRange(i) {
  const mon = mondayOf(i), fri = new Date(mon); fri.setDate(fri.getDate() + 4);
  const left = MO[mon.getMonth()] + " " + mon.getDate();
  const right = mon.getMonth() === fri.getMonth() ? String(fri.getDate()) : MO[fri.getMonth()] + " " + fri.getDate();
  return left + "–" + right;
}
function fmtDay(d) { return MO[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); }
function isoLocal(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

function loadState() {
  let st = { done: {}, hours: {} };
  for (const id of SYNCED.done) st.done[id] = true;
  Object.assign(st.hours, SYNCED.hours);
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    Object.assign(st.done, raw.done || {});
    Object.assign(st.hours, raw.hours || {});
  } catch (e) {}
  return st;
}
let state = loadState();
function save() { localStorage.setItem(LS_KEY, JSON.stringify(state)); }

function weekInfo() {
  const now = new Date();
  const idx = Math.floor((now - START) / (7 * MS_D));
  const dow = (now.getDay() + 6) % 7; // Mon=0
  const frac = Math.max(0, Math.min(dow, 5)) / 5;
  return { now, idx, frac };
}

function weekDone(w) { return w.items.filter((_, i) => state.done[w.id + "-" + i]).length; }

function expectedCounts() {
  const { idx, frac } = weekInfo();
  let exp = 0, expH = 0;
  WEEKS.forEach((w, i) => {
    if (i < idx) { exp += w.items.length; expH += 30; }
    else if (i === idx) { exp += w.items.length * frac; expH += 30 * frac; }
  });
  return { exp, expH };
}

function render() {
  const root = document.getElementById("months");
  root.innerHTML = "";
  const { idx } = weekInfo();
  let curMonth = 0;
  WEEKS.forEach((w, i) => {
    if (w.m !== curMonth) {
      curMonth = w.m;
      const h = document.createElement("div");
      h.className = "month-h";
      h.textContent = MONTHS[curMonth];
      root.appendChild(h);
    }
    const done = weekDone(w), total = w.items.length;
    let stateAttr = "upcoming";
    if (i < idx) stateAttr = done === total ? "done" : "overdue";
    else if (i === idx) stateAttr = "current";
    const d = document.createElement("details");
    d.className = "week"; d.id = w.id; d.dataset.state = stateAttr;
    if (i === idx) d.open = true;
    d.innerHTML =
      '<summary><span class="dot"></span><span class="wk">W' + (i + 1) + '</span>' +
      '<span class="dates">' + fmtRange(i) + '</span><span class="t">' + w.title + '</span>' +
      '<span class="count" id="' + w.id + '-count">' + done + "/" + total + '</span></summary>' +
      '<div class="week-body">' +
      w.items.map((it, j) => {
        const iid = w.id + "-" + j;
        const checked = state.done[iid] ? " checked" : "";
        return '<div class="item' + (state.done[iid] ? " checked" : "") + '" id="row-' + iid + '">' +
          '<input type="checkbox" id="' + iid + '"' + checked + '>' +
          '<label for="' + iid + '"><span class="chip ' + it[0] + '">' + KIND[it[0]] + "</span>" + it[1] + "</label></div>";
      }).join("") +
      '<div class="hours-row"><label for="h-' + w.id + '">hours logged</label>' +
      '<input type="number" min="0" max="60" step="0.5" id="h-' + w.id + '" value="' + (state.hours[w.id] || "") + '"> / 30</div></div>';
    root.appendChild(d);
  });

  root.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => {
      state.done[cb.id] = cb.checked;
      if (!cb.checked) delete state.done[cb.id];
      document.getElementById("row-" + cb.id).classList.toggle("checked", cb.checked);
      save(); refreshLight();
    });
  });
  root.querySelectorAll('input[type="number"]').forEach(inp => {
    inp.addEventListener("change", () => {
      const wid = inp.id.slice(2);
      const v = parseFloat(inp.value);
      if (isNaN(v) || v <= 0) delete state.hours[wid]; else state.hours[wid] = v;
      save(); refreshLight();
    });
  });
  refreshLight();
}

function refreshLight() {
  const { now, idx, frac } = weekInfo();
  const total = WEEKS.reduce((a, w) => a + w.items.length, 0);
  const done = WEEKS.reduce((a, w) => a + weekDone(w), 0);
  const { exp, expH } = expectedCounts();
  const loggedH = Object.values(state.hours).reduce((a, b) => a + b, 0);

  // per-week counts + states
  WEEKS.forEach((w, i) => {
    const el = document.getElementById(w.id + "-count");
    if (el) el.textContent = weekDone(w) + "/" + w.items.length;
    const card = document.getElementById(w.id);
    if (card) {
      let s = "upcoming";
      if (i < idx) s = weekDone(w) === w.items.length ? "done" : "overdue";
      else if (i === idx) s = "current";
      card.dataset.state = s;
    }
  });

  document.getElementById("st-items").innerHTML = done + "<small> / " + total + "</small>";
  document.getElementById("st-fill").style.width = (100 * done / total) + "%";
  document.getElementById("st-tick").style.left = Math.min(99.5, Math.max(0, 100 * exp / total)) + "%";
  document.getElementById("st-items-note").textContent = "expected ~" + Math.round(exp) + " by today (tick)";
  document.getElementById("st-hours").innerHTML = (Math.round(loggedH * 10) / 10) + "<small> / " + Math.round(expH) + " expected</small>";

  const pv = WEEKS.reduce((a, w) => a + w.items.filter((it, j) => it[0] === "v" && state.done[w.id + "-" + j]).length, 0);
  const pvT = WEEKS.reduce((a, w) => a + w.items.filter(it => it[0] === "v").length, 0);
  const g = WEEKS.reduce((a, w) => a + w.items.filter((it, j) => it[0] === "g" && state.done[w.id + "-" + j]).length, 0);
  const gT = WEEKS.reduce((a, w) => a + w.items.filter(it => it[0] === "g").length, 0);
  document.getElementById("st-prove").innerHTML = pv + "/" + pvT + "<small> · gates " + g + "/" + gT + "</small>";

  const wkEl = document.getElementById("st-week"), wkNote = document.getElementById("st-week-note");
  const verdict = document.getElementById("verdict");
  if (now < START) {
    const days = Math.ceil((START - now) / MS_D);
    wkEl.textContent = "T-" + days + "d";
    wkNote.textContent = "starts " + fmtDay(START);
    verdict.textContent = "STARTS IN " + days + "D"; verdict.className = "pill neutral";
  } else if (idx > 17) {
    wkEl.textContent = "DONE";
    wkNote.textContent = "window closed " + fmtDay(finishDate());
    const open = total - done;
    verdict.textContent = open === 0 ? "ROADMAP COMPLETE" : "WINDOW OVER · " + open + " OPEN";
    verdict.className = open === 0 ? "pill good" : "pill warn";
  } else {
    const day = Math.min(5, Math.floor(frac * 5) + 1);
    wkEl.textContent = "W" + (idx + 1) + " · day " + day + "/5";
    const daysLeft = Math.max(0, Math.round((END - now) / MS_D));
    wkNote.textContent = WEEKS[idx].title + " · " + daysLeft + " days left";
    const diff = done - Math.ceil(exp);
    let cls, txt;
    if (diff >= 3) { cls = "good"; txt = "AHEAD +" + diff; }
    else if (diff >= -2) { cls = "good"; txt = "ON TRACK"; }
    else if (diff >= -7) { cls = "warn"; txt = "SLIGHTLY BEHIND · " + (-diff) + " ITEMS"; }
    else { cls = "bad"; txt = "BEHIND · " + (-diff) + " ITEMS"; }
    verdict.textContent = txt; verdict.className = "pill " + cls;
  }

  // needs attention: past weeks with open items
  const overdue = WEEKS.map((w, i) => ({ w, i, open: w.items.length - weekDone(w) }))
    .filter(x => x.i < idx && x.i >= 0 && x.open > 0);
  const att = document.getElementById("attention");
  if (overdue.length) {
    att.hidden = false;
    att.innerHTML = "<b>Needs attention:</b> " +
      overdue.map(x => 'W' + (x.i + 1) + " (" + x.w.title + "): " + x.open + " open").join(" · ") +
      " — behind? cut resources, not checkpoints.";
  } else att.hidden = true;
}

// ---- start date ----
const startInput = document.getElementById("startdate");
function refreshStartUI() {
  startInput.value = isoLocal(START);
  document.getElementById("startnote").textContent = "W1 " + fmtRange(0) + " · wraps " + fmtDay(finishDate());
}
startInput.addEventListener("change", () => {
  const v = startInput.value;
  if (!v) return;
  const [y, m, d] = v.split("-").map(Number);
  if (!y || !m || !d) return;
  START = new Date(y, m - 1, d);
  END = mondayOf(18);
  try { localStorage.setItem(START_KEY, v); } catch (e) {}
  refreshStartUI();
  render();
});

// ---- copy / import ----
const iobox = document.getElementById("iobox"), ioText = document.getElementById("io-text"), ioHint = document.getElementById("io-hint");
let ioMode = "copy";

function exportBlob() {
  const doneIds = [];
  WEEKS.forEach(w => w.items.forEach((_, j) => { if (state.done[w.id + "-" + j]) doneIds.push(w.id + "-" + j); }));
  const summary = WEEKS.map((w, i) => "W" + (i + 1) + ":" + weekDone(w) + "/" + w.items.length).join(" ");
  return JSON.stringify({ sprint: "ml-2026", start: isoLocal(START), asOf: new Date().toISOString().slice(0, 10), done: doneIds, hours: state.hours, summary });
}

document.getElementById("btn-copy").addEventListener("click", async () => {
  const blob = exportBlob();
  ioMode = "copy";
  try {
    await navigator.clipboard.writeText(blob);
    ioHint.textContent = "Copied. Paste it on another device (Import progress) or hand it to an assistant to sync.";
  } catch (e) {
    ioHint.textContent = "Clipboard blocked — select the text below and copy it manually.";
  }
  ioText.value = blob; iobox.classList.add("show"); ioText.select();
});
document.getElementById("btn-import").addEventListener("click", () => {
  ioMode = "import";
  ioHint.textContent = "Paste a progress blob (from Copy progress on another device) and hit Apply.";
  ioText.value = ""; iobox.classList.add("show"); ioText.focus();
});
document.getElementById("io-apply").addEventListener("click", () => {
  if (ioMode !== "import") { iobox.classList.remove("show"); return; }
  try {
    const p = JSON.parse(ioText.value);
    if (p.sprint !== "ml-2026") throw new Error("wrong blob");
    state.done = {}; (p.done || []).forEach(id => state.done[id] = true);
    state.hours = p.hours || {};
    if (p.start) { const [y, m, d] = p.start.split("-").map(Number); if (y && m && d) { START = new Date(y, m - 1, d); END = mondayOf(18); try { localStorage.setItem(START_KEY, p.start); } catch (e) {} } }
    save(); refreshStartUI(); render();
    ioHint.textContent = "Imported.";
    iobox.classList.remove("show");
  } catch (e) { ioHint.textContent = "Couldn't parse that — paste the exact blob from Copy progress."; }
});
document.getElementById("io-close").addEventListener("click", () => iobox.classList.remove("show"));
document.getElementById("btn-jump").addEventListener("click", () => {
  const { idx } = weekInfo();
  const w = WEEKS[Math.max(0, Math.min(idx, 17))];
  const el = document.getElementById(w.id);
  if (el) { el.open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); }
});

refreshStartUI();
render();
