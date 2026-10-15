const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Textos da interface por idioma (o idioma vem do <html lang>)
const UI = {
  pt: {
    hire: "Contratar no Upwork",
    live: "Abrir projeto",
    repo: "Código no GitHub",
    file: "Baixar o fluxo (JSON)",
    stack: "Tecnologias",
    shots: "Mais telas de",
    log: [
      ["info", "gatilho · nova linha na planilha"],
      ["info", "validando campos obrigatórios"],
      ["ok", "dados normalizados"],
      ["info", "consultando registro no postgres"],
      ["warn", "registro já existe · atualizando"],
      ["ok", "banco sincronizado"],
      ["info", "enviando alerta para a equipe"],
      ["ok", "alerta entregue"],
      ["ok", "fluxo concluído · aguardando próximo"],
    ],
  },
  en: {
    hire: "Hire on Upwork",
    live: "Open project",
    repo: "Code on GitHub",
    file: "Download the workflow (JSON)",
    stack: "Tech stack",
    shots: "More screens of",
    log: [
      ["info", "trigger · new row in spreadsheet"],
      ["info", "validating required fields"],
      ["ok", "data normalized"],
      ["info", "looking up record in postgres"],
      ["warn", "record already exists · updating"],
      ["ok", "database synced"],
      ["info", "sending alert to the team"],
      ["ok", "alert delivered"],
      ["ok", "workflow done · waiting for next"],
    ],
  },
};
const t = UI[document.documentElement.lang.slice(0, 2)] || UI.pt;

// Lista de projetos
const list = document.getElementById("project-list");

list.innerHTML = PROJECTS.map((p, i) => {
  const n = String(i + 1).padStart(2, "0");

  return `
  <details class="project" ${i === 0 ? "open" : ""}>
    <summary>
      <span class="p-num">${n}</span>
      <span class="p-title">
        <strong>${esc(p.title)}</strong>
        <span>${esc(p.tagline)}</span>
      </span>
      <span class="p-meta">${esc(p.category)}</span>
      <span class="p-meta p-role">${esc(p.role || "")}</span>
      <span class="p-toggle" aria-hidden="true"></span>
    </summary>
    <div class="p-body ${p.image ? "" : "no-image"} ${p.wideCover ? "wide-cover" : ""}">
      ${p.image ? `<img class="p-cover" src="${esc(p.image)}" alt="${esc(p.imageAlt || "")}" loading="lazy">` : ""}
      <div class="p-copy">
        <p class="p-desc">${esc(p.description)}</p>
        ${p.features ? `<ul class="p-features">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        <ul class="p-stack" aria-label="${t.stack}">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        <p class="p-links">
          ${p.hireUrl ? `<a href="${esc(p.hireUrl)}" target="_blank" rel="noopener">${t.hire} <span aria-hidden="true">↗</span></a>` : ""}
          ${p.liveUrl ? `<a href="${esc(p.liveUrl)}" target="_blank" rel="noopener">${t.live} <span aria-hidden="true">↗</span></a>${p.liveNote ? `<span class="p-note">${esc(p.liveNote)}</span>` : ""}` : ""}
          ${p.repoUrl ? `<a href="${esc(p.repoUrl)}" target="_blank" rel="noopener">${t.repo} <span aria-hidden="true">↗</span></a>` : ""}
          ${p.fileUrl ? `<a href="${esc(p.fileUrl)}" download>${t.file} <span aria-hidden="true">↓</span></a>` : ""}
        </p>
      </div>
      ${
        p.shots
          ? `<div class="p-shots" tabindex="0" role="group" aria-label="${t.shots} ${esc(p.title)}">${p.shots
              .map(
                (s) =>
                  `<figure class="${s.wide ? "wide" : ""}"><img src="${esc(s.src)}" alt="${esc(s.caption)}" loading="lazy"><figcaption>${esc(s.caption)}</figcaption></figure>`
              )
              .join("")}</div>`
          : ""
      }
    </div>
  </details>`;
}).join("");

// Log do hero: uma sincronização genérica planilha → banco, linha a linha
const LOG = t.log;

const logEl = document.getElementById("log-lines");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const logLine = ([level, text], i) => {
  const li = document.createElement("li");
  li.className = level;
  li.innerHTML = `<span class="l-n">${String(i + 1).padStart(2, "0")}</span><span class="l-lv">${level}</span><span>${esc(text)}</span>`;
  return li;
};

if (reduced) {
  LOG.forEach((l, i) => logEl.append(logLine(l, i)));
} else {
  let i = 0;
  const tick = () => {
    if (i === LOG.length) {
      i = 0;
      setTimeout(() => {
        logEl.replaceChildren();
        tick();
      }, 3200);
      return;
    }
    logEl.append(logLine(LOG[i], i));
    i++;
    setTimeout(tick, 520 + Math.random() * 520);
  };
  tick();
}
