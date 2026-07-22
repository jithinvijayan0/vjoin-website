document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    function closeMenu() {
        links.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
        const isOpen = links.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (e) {
        if (!links.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu();
        }
    });
});
