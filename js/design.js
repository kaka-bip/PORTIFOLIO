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
  typeSpeed: 50,
  backSpeed: 60,
  loop: true,
  showCursor: false,
});


//scrolled

const navbar = document.getElementById('menu');

window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//loader

window.addEventListener('load', () => {
  const  loader = document.getElementById('loader');
  loader.classList.add('hidden');
})