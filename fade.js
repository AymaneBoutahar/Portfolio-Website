
/* =========================
   SHARED SCROLL REVEAL
========================= */

const fadeElements = document.querySelectorAll(
    ".project, .project-card, .project-description, .project-process, .project-reflection, .project-end"
);

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// Show everything immediately if reduced motion is preferred
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    fadeElements.forEach((element) => {
        element.classList.add("project-visible");
    });
} else {
    const fadeObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("project-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    fadeElements.forEach((element) => {
        element.classList.add("project-hidden");
        fadeObserver.observe(element);
    });
}
