const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

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
    <div class="p-body ${p.image ? "" : "no-image"}">
      ${p.image ? `<img class="p-cover" src="${esc(p.image)}" alt="${esc(p.imageAlt || "")}" width="1400" height="1050" loading="lazy">` : ""}
      <div class="p-copy">
        <p class="p-desc">${esc(p.description)}</p>
        ${p.features ? `<ul class="p-features">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        <ul class="p-stack" aria-label="Tecnologias">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        <p class="p-links">
          ${p.liveUrl ? `<a href="${esc(p.liveUrl)}" target="_blank" rel="noopener">Abrir projeto <span aria-hidden="true">↗</span></a>${p.liveNote ? `<span class="p-note">${esc(p.liveNote)}</span>` : ""}` : ""}
          ${p.repoUrl ? `<a href="${esc(p.repoUrl)}" target="_blank" rel="noopener">Código no GitHub <span aria-hidden="true">↗</span></a>` : ""}
        </p>
      </div>
      ${
        p.shots
          ? `<div class="p-shots" tabindex="0" role="group" aria-label="Mais telas de ${esc(p.title)}">${p.shots
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
const LOG = [
  ["info", "gatilho · nova linha na planilha"],
  ["info", "validando campos obrigatórios"],
  ["ok", "dados normalizados"],
  ["info", "consultando registro no postgres"],
  ["warn", "registro já existe · atualizando"],
  ["ok", "banco sincronizado"],
  ["info", "enviando alerta para a equipe"],
  ["ok", "alerta entregue"],
  ["ok", "fluxo concluído · aguardando próximo"],
];

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
