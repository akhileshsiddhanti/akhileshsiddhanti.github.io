document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".mobile-menu");
  const sidebar = document.querySelector(".sidenav");
  if (!button || !sidebar) return;
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  };
  button.addEventListener("click", () => setMenu(button.getAttribute("aria-expanded") !== "true"));
  sidebar.addEventListener("click", (event) => { if (event.target.closest("a")) setMenu(false); });
  document.addEventListener("click", (event) => { if (!sidebar.contains(event.target) && !button.contains(event.target)) setMenu(false); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); button.focus(); }
  });
  window.matchMedia("(max-width: 900px)").addEventListener("change", () => setMenu(false));
  const links = [...sidebar.querySelectorAll("a")];
  const markActive = (active) => links.forEach((link) => {
    const selected = link === active;
    link.classList.toggle("active", selected);
    if (selected) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  const sections = [...document.querySelectorAll("main > section[id]")];
  if (sections.length) {
    const updateSection = () => {
      const section = sections.reduce((current, item) => item.getBoundingClientRect().top <= 120 ? item : current, sections[0]);
      markActive(links.find((link) => link.hash === `#${section.id}`));
    };
    window.addEventListener("scroll", updateSection, { passive: true });
    updateSection();
  } else markActive(links.find((link) => link.classList.contains("active")));
});
