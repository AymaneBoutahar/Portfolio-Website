// =========================
// PROJECT SCROLL ANIMATION
// =========================

const projects = document.querySelectorAll(".project");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// =========================
// REDUCED MOTION
// =========================

if (prefersReducedMotion) {

    projects.forEach((project) => {
        project.style.opacity = "1";
        project.style.transform = "none";
    });

}


// =========================
// SCROLL REVEAL
// =========================

else {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("project-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    projects.forEach((project) => {

        project.classList.add("project-hidden");

        observer.observe(project);

    });

}



// =========================
// CLOSE MENU WHEN LINK IS CLICKED
// =========================

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.style.overflow = "";

    });

});