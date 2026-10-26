const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const currentYear = document.getElementById("current-year");

// Keep the footer year current.
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Mobile navigation menu.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Prevent placeholder links from navigating until real URLs are added.
document.querySelectorAll('[data-placeholder-link="true"]').forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "PLACEHOLDER") {
      event.preventDefault();
      alert("Replace this PLACEHOLDER link with your real GitHub profile or project URL.");
    }
  });
});
