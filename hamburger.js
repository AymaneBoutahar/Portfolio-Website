
/* =========================
   HAMBURGER MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (menuToggle && mobileMenu) {

    // OPEN AND CLOSE MENU
    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        const isOpen = mobileMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        // Prevent scrolling while the menu is open
        document.body.style.overflow = isOpen ? "hidden" : "";

    });

    // CLOSE MENU WHEN A LINK IS CLICKED
    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

            document.body.style.overflow = "";

        });

    });

}
