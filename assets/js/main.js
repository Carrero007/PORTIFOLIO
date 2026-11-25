var r = document.documentElement;
var T = {
  pt: {
    title: "Pedro Carrero | Desenvolvimento de Sistemas",
    desc: "Portfólio de Pedro Carrero, estudante de Desenvolvimento de Sistemas em Campinas, SP. Back-end, web e IA. Finalista da 14ª Mostra de Ciências e Tecnologia Instituto 3M (2026) com o AgroScan.",
    navAria: "Principal",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navEdu: "Formação",
    navContact: "Contato",
    today: "hoje",
    ongoing: "em andamento",
    done: "concluído",
    certs: "Certificações e prêmios",
    role: "Estudante de Desenvolvimento de Sistemas",
    tag: "Crio aplicações web e back-end, e uso IA onde ela resolve um problema de verdade.",
    agroKind: "TCC",
    agroBadge:
      "Finalista · 14ª Mostra de Ciências e Tecnologia Instituto 3M (2026)",
    agroDesc:
      "Plataforma multiplataforma que diagnostica pragas e doenças em hortaliças a partir de uma foto, usando visão computacional com IA.",
    agroB1: "Identifica a planta e indica o diagnóstico a partir da imagem.",
    agroB2: "Histórico de diagnósticos e catálogo de hortaliças.",
    agroB3:
      "Integração com a API Gemini, com prompts otimizados para gastar menos tokens.",
    agroB4:
      "Categoria Ciências Agrárias. Desenvolvido em equipe na ETEC Ferrucio Humberto Gazzetta (Nova Odessa, SP).",
    cifraKind: "Web app",
    cifraDesc:
      "Controle financeiro que responde uma pergunta: quanto sobrou este mês? Você registra por texto, voz ou foto e a IA faz a conta.",
    cifraB1:
      "Assistente de IA no chat e relatório mensal gerado automaticamente.",
    cifraB2:
      "Limites por categoria, metas, contas, cartões e faturas, com detecção de assinaturas.",
    cifraB3:
      "Instalável no celular, com bloqueio por biometria ou PIN e CPF guardado só como hash.",
    code: "Ver código",
    video: "Ver vídeo",
    agroShotAlt: "Tela do sistema AgroScan",
    agroShotPh: "Espaço para imagem do sistema",
    site: "Abrir site",
    photoAlt: "Pedro Carrero de perfil, olhando para o horizonte à noite",
    live: "Prévia ao vivo",
    copy: "Copiar e-mail",
    copied: "Copiado",
    mailLbl: "E-mail",
    about1:
      "Curso Desenvolvimento de Sistemas na Etec de Nova Odessa, na região de Campinas, e desenvolvo projetos pessoais e trabalhos para empresas e colegas. Meu TCC, o AgroScan, foi finalista da 14ª Mostra de Ciências e Tecnologia Instituto 3M (2026).",
    about2:
      "Comecei pelo front-end, com HTML, CSS e JavaScript, e hoje também trabalho com C# e .NET, PHP e Python. Procuro uma oportunidade para contribuir com um time e continuar aprendendo.",
    tech: "Tecnologias",
    gBack: "Back-end",
    gFront: "Front-end",
    gTools: "Ferramentas",
    contactP: "Quer conversar sobre uma vaga ou um projeto?",
  },
  en: {
    title: "Pedro Carrero | Systems Development",
    desc: "Portfolio of Pedro Carrero, Systems Development student in Campinas, Brazil. Back-end, web and AI. Finalist at the 14th 3M Institute Science and Technology Fair (2026) with AgroScan.",
    navAria: "Main",
    navProjects: "Projects",
    navAbout: "About",
    navEdu: "Education",
    navContact: "Contact",
    today: "today",
    ongoing: "in progress",
    done: "completed",
    certs: "Certifications and awards",
    role: "Systems Development student",
    tag: "I build web applications and back-ends, and use AI where it solves a real problem.",
    agroKind: "Capstone",
    agroBadge:
      "Finalist · 14th 3M Institute Science and Technology Fair (2026)",
    agroDesc:
      "A multiplatform system that diagnoses pests and diseases in vegetable crops from a photo, using AI computer vision.",
    agroB1: "Identifies the plant and suggests a diagnosis from the image.",
    agroB2: "History of diagnoses and a catalog of vegetables.",
    agroB3:
      "Integrates the Gemini API, with prompts optimized to use fewer tokens.",
    agroB4:
      "Agricultural Sciences category. Built as a team at ETEC Ferrucio Humberto Gazzetta (Nova Odessa, SP).",
    cifraKind: "Web app",
    cifraDesc:
      "A personal finance tracker that answers one question: how much is left this month? Log by text, voice or photo and the AI does the math.",
    cifraB1: "AI chat assistant and an automatically generated monthly report.",
    cifraB2:
      "Category limits, goals, accounts, cards and invoices, with subscription detection.",
    cifraB3:
      "Installable on your phone, with biometric or PIN lock and the CPF stored only as a hash.",
    code: "View code",
    video: "Watch video",
    agroShotAlt: "AgroScan system screenshot",
    agroShotPh: "Space for system image",
    site: "Open site",
    photoAlt: "Pedro Carrero in profile, looking at the night skyline",
    live: "Live preview",
    copy: "Copy email",
    copied: "Copied",
    mailLbl: "Email",
    about1:
      "I study Systems Development at Etec de Nova Odessa, in the Campinas region, and build personal projects as well as work for companies and friends. My capstone, AgroScan, was a finalist at the 14th 3M Institute Science and Technology Fair (2026).",
    about2:
      "I started with front-end (HTML, CSS and JavaScript) and now also work with C# and .NET, PHP and Python. I'm looking for an opportunity to contribute to a team and keep learning.",
    tech: "Technologies",
    gBack: "Back-end",
    gFront: "Front-end",
    gTools: "Tools",
    contactP: "Want to talk about a role or a project?",
  },
};

/* ===== FORMAÇÃO: edite só este objeto ===== */
var EDU = {
  range: { start: "2024-01", end: "2027-12" },
  items: [
    {
      badge: "ETEC",
      start: "2024-02", // AJUSTE: mês/ano em que você começou
      end: "2026-12",
      ongoing: true, // troque para false quando concluir
      pt: {
        title: "Técnico em Desenvolvimento de Sistemas",
        org: "ETEC Ferrucio Humberto Gazzetta · Nova Odessa, SP",
        short: "ETEC Nova Odessa",
      },
      en: {
        title: "Technical Diploma in Systems Development",
        org: "ETEC Ferrucio Humberto Gazzetta · Nova Odessa, Brazil",
        short: "ETEC Nova Odessa",
      },
    },
  ],
  /* Certificações: copie o modelo para dentro da lista.
     {
       pt: { name: "Nome do curso", detail: "Instituição" },
       en: { name: "Course name", detail: "Institution" },
       year: "2026",
       url: "https://link-do-certificado"   // opcional
     }
  */
  certs: [
    {
      pt: { name: "Bootcamp SaaS para Barbearias", detail: "Full Stack Club · 20 h" },
      en: { name: "SaaS Bootcamp for Barbershops", detail: "Full Stack Club · 20 h" },
      year: "2026",
    },
    {
      pt: { name: "TOEIC Bridge: 84/100", detail: "Listening 40 · Reading 44 · Centro Paula Souza" },
      en: { name: "TOEIC Bridge: 84/100", detail: "Listening 40 · Reading 44 · Centro Paula Souza" },
      year: "2026",
    },
    {
      pt: { name: "CUCO USP: Menção Honrosa (Prêmio Destaque na Escola)", detail: "9ª edição, 2ª série" },
      en: { name: "USP CUCO: Honorable Mention (School Highlight Award)", detail: "9th edition, 2nd year" },
      year: "2025",
    },
    {
      pt: { name: "Jornada Full Stack", detail: "Hashtag Treinamentos · 8 h" },
      en: { name: "Full Stack Journey", detail: "Hashtag Treinamentos · 8 h" },
      year: "2025",
    },
    {
      pt: { name: "Jornada Python", detail: "Hashtag Treinamentos · 8 h" },
      en: { name: "Python Journey", detail: "Hashtag Treinamentos · 8 h" },
      year: "2025",
    },
    {
      pt: { name: "CUCO USP: Menção Honrosa (Prêmio Destaque na Escola)", detail: "8ª edição, 1ª série" },
      en: { name: "USP CUCO: Honorable Mention (School Highlight Award)", detail: "8th edition, 1st year" },
      year: "2024",
    },
  ],
};
function mo(v) {
  var p = v.split("-");
  return +p[0] * 12 + (+p[1] - 1);
}
function el(tag, cls, txt) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt != null) e.textContent = txt;
  return e;
}
function renderEdu(l) {
  var d = T[l],
    rs = mo(EDU.range.start),
    len = mo(EDU.range.end) - rs + 1,
    pc = function (v) {
      return ((v / len) * 100).toFixed(2) + "%";
    },
    fm = function (v) {
      var p = v.split("-");
      return new Date(+p[0], +p[1] - 1, 1).toLocaleDateString(
        l === "pt" ? "pt-BR" : "en",
        { month: "short", year: "numeric" },
      );
    };
  var yrs = document.getElementById("tl-years"),
    bars = document.getElementById("tl-bars"),
    list = document.getElementById("edu"),
    y0 = +EDU.range.start.split("-")[0];
  yrs.textContent = "";
  yrs.style.setProperty("--n", Math.ceil(len / 12));
  for (var i = 0; i < Math.ceil(len / 12); i++)
    yrs.appendChild(el("li", "", y0 + i));
  var now = new Date(),
    nm = now.getFullYear() * 12 + now.getMonth() - rs + 0.5,
    td = document.getElementById("tl-today");
  td.style.display = nm >= 0 && nm <= len ? "" : "none";
  td.style.left = pc(nm);
  bars.textContent = "";
  list.textContent = "";
  EDU.items.forEach(function (it) {
    var t = it[l],
      li = el("li"),
      b = el("div", "tl-bar" + (it.ongoing ? " ongoing" : ""));
    b.style.left = pc(mo(it.start) - rs);
    b.style.width = pc(mo(it.end) - mo(it.start) + 1);
    b.appendChild(el("b", "", t.title));
    b.appendChild(el("small", "", t.short));
    li.appendChild(b);
    bars.appendChild(li);
    var row = el("li"),
      mid = el("div");
    mid.appendChild(el("h3", "", t.title));
    mid.appendChild(el("p", "", t.org));
    row.appendChild(el("span", "seal", it.badge));
    row.appendChild(mid);
    row.appendChild(
      el(
        "p",
        "when",
        fm(it.start) +
          " — " +
          fm(it.end) +
          " · " +
          (it.ongoing ? d.ongoing : d.done),
      ),
    );
    list.appendChild(row);
  });
  var cw = document.getElementById("certs-wrap"),
    cl = document.getElementById("certs");
  cl.textContent = "";
  cw.hidden = !EDU.certs.length;
  EDU.certs.forEach(function (c) {
    var li = el("li"),
      n = c[l];
    if (c.url) {
      var a = el("a", "", n.name);
      a.href = c.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
    } else {
      li.appendChild(document.createTextNode(n.name));
    }
    li.appendChild(
      el("span", "", " · " + n.detail + (c.year ? " · " + c.year : "")),
    );
    cl.appendChild(li);
  });
}

function setLang(l) {
  var d = T[l];
  r.lang = l === "pt" ? "pt-BR" : "en";
  document.title = d.title;
  document.querySelector("meta[name=description]").content = d.desc;
  document.querySelector('meta[property="og:description"]').content = d.desc;
  document.querySelectorAll("[data-i18n]").forEach(function (e) {
    e.textContent = d[e.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (e) {
    e.setAttribute("aria-label", d[e.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (e) {
    e.alt = d[e.dataset.i18nAlt];
  });
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.setAttribute("aria-pressed", b.dataset.l === l);
  });
  renderEdu(l);
  try {
    localStorage.setItem("lang", l);
  } catch (e) {}
}
var saved = null;
try {
  saved = localStorage.getItem("lang");
} catch (e) {}
setLang(
  saved ||
    ((navigator.language || "pt").toLowerCase().indexOf("pt") === 0
      ? "pt"
      : "en"),
);
document.querySelectorAll(".lang button").forEach(function (b) {
  b.addEventListener("click", function () {
    setLang(b.dataset.l);
  });
});
document.getElementById("ano").textContent = new Date().getFullYear();

/* destaque de luz que segue o cursor */
if (matchMedia("(pointer:fine)").matches) {
  addEventListener(
    "pointermove",
    function (e) {
      r.style.setProperty("--mx", e.clientX + "px");
      r.style.setProperty("--my", e.clientY + "px");
    },
    { passive: true },
  );
}
/* item ativo no menu */
var links = document.querySelectorAll("nav a,.tb a");
var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (a) {
          a.setAttribute(
            "aria-current",
            a.getAttribute("href") === "#" + en.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
document.querySelectorAll("main section").forEach(function (s) {
  io.observe(s);
});
/* hora em Campinas */
var fmt = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "America/Sao_Paulo",
});
function tick() {
  document.getElementById("hora").textContent = fmt.format(new Date());
}
tick();
setInterval(tick, 30000);
/* copiar e-mail */
var cb = document.getElementById("copiar"),
  email = "pedroagostinhocarrero@gmail.com";
cb.addEventListener("click", function () {
  var done = function () {
    var t = T[r.lang === "en" ? "en" : "pt"];
    cb.textContent = t.copied;
    setTimeout(function () {
      cb.textContent = t.copy;
    }, 1800);
  };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(done, function () {
      location.href = "mailto:" + email;
    });
  } else {
    location.href = "mailto:" + email;
  }
});