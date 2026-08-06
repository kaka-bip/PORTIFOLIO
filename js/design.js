//Sistema de menu
let menu = document.getElementById("menu");
let menuButton = document.getElementById("menubutton");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
  console.log("Menu");
});

document.querySelectorAll(".navlinks li a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuButton.textContent = "☰";
  });
});

// Efeito Typerwriter

new Typed("#typer", {
  strings: ["HEY!, I AM KAUAN"],
  typeSpeed: 30,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});

//scrolled

const navbar = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//loader

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});

//theme and lenguage
const theme = document.getElementById("theme");
const language = document.getElementById("language");
let currentLanguage = "en";

function applyTheme(themeName) {
  document.body.classList.toggle("light", themeName === "light");
  localStorage.setItem("theme", themeName);
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  applyTheme(isLight ? "light" : "dark");
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "light" ? "light" : "dark");

theme.addEventListener("click", toggleTheme);

// ==========================================
// TRADUÇÕES
// ==========================================

const translations = {
  pt: {
    // NAVBAR
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skill",
    navContact: "Contact",

    theme: "Tema",
    language: "Idioma",

    // HOME
    homeDescription: "Evaluate my portfolio and my projects.",
    developer: "Full-Stack Developer",
    homeText:
      "I transform ideas into high-impact digital experiences by combining cutting-edge technology and intuitive design.",

    // ABOUT
    aboutTitle: "About Me",
    aboutText:
      "I'm Kauan Santos, a Full-Stack developer passionate about technology and turning ideas into digital solutions. Because I love what I do so much, I always strive to dedicate myself fully to each project, understanding the client's needs and seeking the best solutions for each challenge. My goal is to develop modern, functional and quality products, always ensuring the best experience and customer satisfaction.",

    // SKILLS
    skillsTitle: "Skills",
    skillsSubtitle: "The skills I use in projects",

    // PROJECTS
    projectsTitle: "My Projects",
    projectsDescription:
      "A collection of web systems and applications I've engineered—from responsive user interfaces to scalable backend architectures.",

    // CONTACT
    contactTitle: "Let's Work Together",
    contactFormTitle: "Send me a message",

    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",

    contactDescription:
      "I'm always open to discussing new opportunities, creative projects, and partnerships. Whether you have a project in mind, need a custom solution, or simply want to explore new possibilities, I'd love to connect. • Full-Stack Web Development • Front-end & Back-end Development • Responsive & Modern Websites • APIs & Database Integration • Custom Web Applications • Technical Solutions & Problem Solving",
  },

  en: {
    // NAVBAR
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skill",
    navContact: "Contact",

    theme: "Theme",
    language: "Language",

    // HOME
    homeDescription: "Evaluate my portfolio and my projects.",
    developer: "Full-Stack Developer",
    homeText:
      "I transform ideas into high-impact digital experiences by combining cutting-edge technology and intuitive design.",

    // ABOUT
    aboutTitle: "About Me",
    aboutText:
      "I'm Kauan Santos, a Full-Stack developer passionate about technology and turning ideas into digital solutions. Because I love what I do so much, I always strive to dedicate myself fully to each project, understanding the client's needs and seeking the best solutions for each challenge. My goal is to develop modern, functional and quality products, always ensuring the best experience and customer satisfaction.",

    // SKILLS
    skillsTitle: "Skills",
    skillsSubtitle: "The skills I use in projects",

    // PROJECTS
    projectsTitle: "My Projects",
    projectsDescription:
      "A collection of web systems and applications I've engineered—from responsive user interfaces to scalable backend architectures.",

    // CONTACT
    contactTitle: "Let's Work Together",
    contactFormTitle: "Send me a message",

    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",

    contactDescription:
      "I'm always open to discussing new opportunities, creative projects, and partnerships. Whether you have a project in mind, need a custom solution, or simply want to explore new possibilities, I'd love to connect. • Full-Stack Web Development • Front-end & Back-end Development • Responsive & Modern Websites • APIs & Database Integration • Custom Web Applications • Technical Solutions & Problem Solving",
  },
};
