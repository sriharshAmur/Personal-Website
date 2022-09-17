const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const links = document.querySelectorAll(".links");

menu.addEventListener("click", () => {
  console.log("menu clicked");
  const nav = document.querySelector("#mobile-nav");
  nav.classList.remove("hidden");
});

close.addEventListener("click", () => {
  console.log("close");
  const nav = document.querySelector("#mobile-nav");
  nav.classList.add("hidden");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const section = e.target.getAttribute("data-url");
    console.log(e.target.getAttribute("data-url"));
    console.log("links");
    const nav = document.querySelector("#mobile-nav");
    nav.classList.add("hidden");
    document.getElementById(section).scrollIntoView();
  });
});

const openLink = (link) => {
  console.log(link);
};
