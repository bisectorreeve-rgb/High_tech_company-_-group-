
document.addEventListener("DOMContentLoaded", function () {

  // Mobile navigation
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (header && nav) {
    const menuButton = document.createElement("button");
    menuButton.textContent = "☰ Menu";
    menuButton.className = "menu-toggle";
    menuButton.setAttribute("aria-expanded", "false");

    header.insertBefore(menuButton, nav);

    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Show a welcome message in the browser console
  console.log("HIGH TECH COMPANY GROUP is ready!");

});
