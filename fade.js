
/* =========================
   SHARED SCROLL REVEAL
========================= */

// Works on both the homepage and projects page
const fadeElements = document.querySelectorAll(
    ".project, .project-card"
);

const fadePrefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (fadePrefersReducedMotion) {
    fadeElements.forEach((element) => {
        element.classList.add("project-visible");
    });
} else {
    const fadeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("project-visible");
                    fadeObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    fadeElements.forEach((element) => {
        element.classList.add("project-hidden");
        fadeObserver.observe(element);
    });
}
