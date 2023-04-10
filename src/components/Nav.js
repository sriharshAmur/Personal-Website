const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const links = document.querySelectorAll(".links");

menu.addEventListener("click", () => {
  const nav = document.querySelector("#mobile-nav");
  nav.classList.remove("hidden");
});

close.addEventListener("click", () => {
  const nav = document.querySelector("#mobile-nav");
  nav.classList.add("hidden");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const section = e.target.getAttribute("data-url");
    const nav = document.querySelector("#mobile-nav");
    nav.classList.add("hidden");
    document.getElementById(section).scrollIntoView();
  });
});
