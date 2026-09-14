// Simple reveal animation when elements enter the screen

const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },
    {
        threshold: 0.15
    }
);


projects.forEach((project) => {

    project.style.opacity = "0";
    project.style.transform = "translateY(40px)";
    project.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(project);

});