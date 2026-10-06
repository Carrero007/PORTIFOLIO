var r = document.documentElement;
var T = {
  pt: {
    title: "Pedro Carrero | Desenvolvimento de Sistemas",
    desc: "Portfólio de Pedro Carrero, estudante de Desenvolvimento de Sistemas em Campinas, SP. Back-end e web.",
    navAria: "Principal",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    role: "Estudante de Desenvolvimento de Sistemas",
    tag: "Crio aplicações web e back-end, e uso IA onde ela resolve um problema de verdade.",
    agroKind: "TCC",
    agroDesc:
      "Sistema que diagnostica doenças em hortaliças a partir de uma foto, usando visão computacional com IA.",
    agroB1: "Identifica a planta e indica o diagnóstico a partir da imagem.",
    agroB2: "Histórico de diagnósticos e catálogo de hortaliças.",
    agroB3:
      "Integração com a API Gemini, com prompts otimizados para gastar menos tokens.",
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
    site: "Abrir site",
    photoAlt: "Pedro Carrero de perfil, olhando para o horizonte à noite",
    live: "Prévia ao vivo",
    copy: "Copiar e-mail",
    copied: "Copiado",
    mailLbl: "E-mail",
    about1:
      "Curso Desenvolvimento de Sistemas na Etec de Nova Odessa, em Campinas, e desenvolvo projetos pessoais e trabalhos para empresas e colegas.",
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
    desc: "Portfolio of Pedro Carrero, Systems Development student in Campinas, Brazil. Back-end and web.",
    navAria: "Main",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    role: "Systems Development student",
    tag: "I build web applications and back-ends, and use AI where it solves a real problem.",
    agroKind: "Capstone",
    agroDesc:
      "A system that diagnoses diseases in vegetable crops from a photo, using AI computer vision.",
    agroB1: "Identifies the plant and suggests a diagnosis from the image.",
    agroB2: "History of diagnoses and a catalog of vegetables.",
    agroB3:
      "Integrates the Gemini API, with prompts optimized to use fewer tokens.",
    cifraKind: "Web app",
    cifraDesc:
      "A personal finance tracker that answers one question: how much is left this month? Log by text, voice or photo and the AI does the math.",
    cifraB1: "AI chat assistant and an automatically generated monthly report.",
    cifraB2:
      "Category limits, goals, accounts, cards and invoices, with subscription detection.",
    cifraB3:
      "Installable on your phone, with biometric or PIN lock and the CPF stored only as a hash.",
    code: "View code",
    site: "Open site",
    photoAlt: "Pedro Carrero in profile, looking at the night skyline",
    live: "Live preview",
    copy: "Copy email",
    copied: "Copied",
    mailLbl: "Email",
    about1:
      "I study Systems Development at Etec de Nova Odessa, in Campinas, and build personal projects as well as work for companies and friends.",
    about2:
      "I started with front-end (HTML, CSS and JavaScript) and now also work with C# and .NET, PHP and Python. I'm looking for an opportunity to contribute to a team and keep learning.",
    tech: "Technologies",
    gBack: "Back-end",
    gFront: "Front-end",
    gTools: "Tools",
    contactP: "Want to talk about a role or a project?",
  },
};
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
