let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // descendo
    navbar.style.top = "-80px"; // esconde
  } else {
    // subindo
    navbar.style.top = "0"; // mostra
  }
  lastScrollTop = scrollTop;
});