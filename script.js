const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const store = {
  get(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
};

let currentLang = root.lang === "ar" ? "ar" : "en";

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

const escape = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const isolate = (html) =>
  currentLang !== "ar"
    ? html
    : html.replace(/(?<![&\w])[A-Za-z][\w#.+\-]*(?: [A-Za-z0-9][\w#.+\-]*)*/g, (m) => {
        const trail = m.match(/\.+$/);
        const core = trail ? m.slice(0, -trail[0].length) : m;
        return "<bdi>" + core + "</bdi>" + (trail ? trail[0] : "");
      });

const txt = (s) => isolate(escape(s));

const tagList = (tags) => {
  const ul = el("ul", "tags");
  tags.forEach((t) => ul.appendChild(el("li", "", txt(t))));
  return ul;
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

const observeReveal = (nodes, stagger) => {
  nodes.forEach((node, i) => {
    node.classList.add("reveal");
    if (stagger) node.style.transitionDelay = i * 80 + "ms";
    if (reduceMotion) node.classList.add("in");
    else revealObserver.observe(node);
  });
};

const attachSpotlight = (node) => {
  node.classList.add("spot");
  node.addEventListener("pointermove", (e) => {
    const r = node.getBoundingClientRect();
    node.style.setProperty("--mx", e.clientX - r.left + "px");
    node.style.setProperty("--my", e.clientY - r.top + "px");
  });
};

const renderLists = (d) => {
  const focus = document.getElementById("focusList");
  focus.innerHTML = "";
  d.focus.forEach((f) => focus.appendChild(el("li", "", txt(f))));

  const exp = document.getElementById("expList");
  exp.innerHTML = "";
  d.experience.forEach((x) => {
    const li = el("li", "timeline-item");
    li.appendChild(el("div", "timeline-meta mono", txt(x.date)));
    const body = el("div", "timeline-body");
    body.appendChild(el("h3", "", txt(x.title)));
    body.appendChild(el("p", "org", txt(x.org)));
    const ul = el("ul");
    x.points.forEach((p) => ul.appendChild(el("li", "", txt(p))));
    body.appendChild(ul);
    li.appendChild(body);
    exp.appendChild(li);
  });
  observeReveal([...exp.children], true);

  const proj = document.getElementById("projList");
  proj.innerHTML = "";
  d.projects.forEach((p) => {
    const card = el("article", "project-card" + (p.featured ? " featured" : ""));
    const top = el("div", "project-top");
    top.appendChild(el("span", "project-date mono", txt(p.date)));
    top.appendChild(el("span", "project-org", txt(p.org)));
    card.appendChild(top);
    card.appendChild(el("h3", "", txt(p.title)));
    card.appendChild(el("p", "", txt(p.desc)));
    card.appendChild(tagList(p.tags));
    attachSpotlight(card);
    proj.appendChild(card);
  });
  observeReveal([...proj.children], true);

  const skills = document.getElementById("skillsGrid");
  skills.innerHTML = "";
  d.skills.forEach((s) => {
    const g = el("div", "skill-group");
    g.appendChild(el("h3", "card-label", txt(s.title)));
    g.appendChild(tagList(s.tags));
    attachSpotlight(g);
    skills.appendChild(g);
  });
  observeReveal([...skills.children], true);

  const edu = document.getElementById("eduList");
  edu.innerHTML = "";
  d.education.forEach((e) => {
    const item = el("div", "edu-item");
    item.appendChild(el("span", "edu-date mono", txt(e.date)));
    item.appendChild(el("h3", "", txt(e.title)));
    item.appendChild(el("p", "", txt(e.org)));
    edu.appendChild(item);
  });
  observeReveal([...edu.children], true);

  const certs = document.getElementById("certList");
  certs.innerHTML = "";
  d.certs.forEach((c) => {
    const li = el("li");
    li.appendChild(el("span", "mono", txt(c.year)));
    li.appendChild(el("p", "", txt(c.text)));
    certs.appendChild(li);
  });
  observeReveal([...certs.children], true);
};

const applyLang = (lang) => {
  const d = I18N[lang];
  currentLang = lang;
  root.lang = lang;
  root.dir = d.dir;
  document.title = d.t["doc.title"];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const v = d.t[node.dataset.i18n];
    if (v !== undefined) node.innerHTML = v;
  });
  document.querySelectorAll(".cv-link").forEach((a) => a.setAttribute("href", d.cv));
  document.querySelector(".role-line").setAttribute("dir", d.dir);
  renderLists(d);
  startRoles(d.roles);
  store.set("lang", lang);
};

document.getElementById("langBtn").addEventListener("click", () => {
  document.body.classList.add("lang-fade");
  setTimeout(() => {
    applyLang(currentLang === "en" ? "ar" : "en");
    document.body.classList.remove("lang-fade");
  }, reduceMotion ? 0 : 180);
});

document.getElementById("themeBtn").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  store.set("theme", next);
  readAccent();
});

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

const progress = document.querySelector(".scroll-progress");
const header = document.querySelector(".site-header");
const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
  header.classList.toggle("scrolled", window.scrollY > 10);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

let roleRun = 0;
function startRoles(roles) {
  const target = document.getElementById("role");
  const run = ++roleRun;
  if (reduceMotion) {
    target.textContent = roles[0];
    return;
  }
  let i = 0;
  let pos = 0;
  let deleting = false;
  target.textContent = "";
  const tick = () => {
    if (run !== roleRun) return;
    const word = roles[i];
    if (!deleting) {
      pos++;
      target.textContent = word.slice(0, pos);
      if (pos === word.length) {
        deleting = true;
        return setTimeout(tick, 1800);
      }
      return setTimeout(tick, 70);
    }
    pos--;
    target.textContent = word.slice(0, pos);
    if (pos === 0) {
      deleting = false;
      i = (i + 1) % roles.length;
      return setTimeout(tick, 350);
    }
    setTimeout(tick, 35);
  };
  tick();
}

const codeTokens = [
  ["k", "public "], ["k", "class "], ["t", "Developer"], ["p", "\n{\n    "],
  ["k", "public "], ["t", "string "], ["n", "Name "], ["p", "=> "], ["s", "\"Ameer Blaibel\""], ["p", ";\n    "],
  ["k", "public "], ["t", "string "], ["n", "City "], ["p", "=> "], ["s", "\"Baghdad\""], ["p", ";\n\n    "],
  ["k", "public "], ["t", "string"], ["p", "[] "], ["n", "Stack "], ["p", "=>\n    [\n        "],
  ["s", "\"ASP.NET Core\""], ["p", ", "], ["s", "\"C#\""], ["p", ",\n        "],
  ["s", "\"SQL Server\""], ["p", ", "], ["s", "\"EF Core\""], ["p", "\n    ];\n\n    "],
  ["k", "public "], ["t", "bool "], ["n", "SecureByDefault "], ["p", "=> "], ["k", "true"], ["p", ";\n    "],
  ["k", "public "], ["t", "bool "], ["n", "OpenToWork "], ["p", "=> "], ["k", "true"], ["p", ";\n}"]
];

const typeCode = () => {
  const code = document.getElementById("code");
  const status = document.querySelector(".code-status");
  const finish = () => {
    status.classList.add("show");
    document.querySelector(".code-caret").classList.add("done");
  };
  if (reduceMotion) {
    codeTokens.forEach(([c, text]) => code.appendChild(el("span", "tk-" + c, escape(text))));
    finish();
    return;
  }
  let ti = 0;
  let ci = 0;
  let span = null;
  const step = () => {
    if (ti >= codeTokens.length) return setTimeout(finish, 400);
    const [c, text] = codeTokens[ti];
    if (ci === 0) {
      span = el("span", "tk-" + c);
      code.appendChild(span);
    }
    span.textContent += text[ci];
    ci++;
    if (ci >= text.length) {
      ti++;
      ci = 0;
    }
    const ch = text[ci - 1] || "";
    setTimeout(step, ch === "\n" ? 120 : ch === " " ? 18 : 26 + Math.random() * 30);
  };
  setTimeout(step, 700);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const end = parseInt(node.dataset.count, 10);
      counterObserver.unobserve(node);
      if (reduceMotion) {
        node.textContent = end;
        return;
      }
      const start = performance.now();
      const dur = 1400;
      const frame = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(end * eased);
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll("[data-count]").forEach((n) => counterObserver.observe(n));

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let particles = [];
let accent = "45, 212, 191";
const mouse = { x: -9999, y: -9999 };

function readAccent() {
  const v = getComputedStyle(root).getPropertyValue("--accent-rgb").trim();
  if (v) accent = v;
}

const resize = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 16000), 90);
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.6
  }));
};

const draw = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    if (!reduceMotion) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 160) {
        p.x -= dx * 0.004;
        p.y -= dy * 0.004;
      }
    }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + accent + ", 0.55)";
    ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < 130) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = "rgba(" + accent + ", " + (0.16 * (1 - d / 130)) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  if (!reduceMotion && !document.hidden) requestAnimationFrame(draw);
};

window.addEventListener("resize", () => {
  resize();
  if (reduceMotion) draw();
});
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener("pointerleave", () => {
  mouse.x = -9999;
  mouse.y = -9999;
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && !reduceMotion) requestAnimationFrame(draw);
});

document.getElementById("year").textContent = new Date().getFullYear();
attachSpotlight(document.querySelector(".about-card"));
readAccent();
resize();
draw();
applyLang(currentLang);
observeReveal([...document.querySelectorAll(".reveal")], false);
typeCode();
