let projects = {

    "miles-morales": {

        number: "01",
        title: "Miles Morales",
        titleSecond: "Animation.",

        intro: "A 3D animation project created using Maya, focusing on character animation and movement.",

        type: "3D & Animation",
        tools: "Maya · 3D · Animation",
        year: "2026",

        cover: "images/modelling/modelling-cover.png",

        description:
            "A 3D animation project created during my studies. The project focused on bringing a character to life through movement and animation.",

        description2:
            "I worked on the animation, movement and overall presentation of the character while learning more about 3D animation in Maya.",

        image1: "images/modelling/modelling-1.png",

        aboutVideo: "",

        research:
            "I started by studying the character and looking at references for movement, posing and animation.",

        development:
            "The animation was developed in Maya, where I worked on the character movement and timing.",

        result:
            "The final result is a short 3D animation demonstrating the character and movement.",

        gallery: [
            "images/modelling/placeholder.png",
            "images/modelling/placeholder.png",
            "images/modelling/placeholder.png"
        ],

        video: "Cjj-ZdUxsg0",

        reflection:
            "This project helped me understand the basics of character animation and gave me more experience working with Maya."

    },


    "3d-modelling": {

        number: "02",
        title: "Whispers of",
        titleSecond: "The Duat.",

        intro: "A 3D Game development project created during my studies.",

        type: "3D Game development",
        tools: "Unity · Animation · C#",
        year: "2026",

        cover: "images/gaming/gaming-cover.png",

        description:
            "A project focused on creating and developing 3D models using Maya.",

        description2:
            "The project allowed me to experiment with modelling techniques and learn how to build 3D objects from scratch.",

        image1: "images/gaming/gaming-1.png",

        aboutVideo: "",

        research:
            "I started by looking at references and planning the shapes and forms I wanted to create.",

        development:
            "I created the models in Maya while experimenting with different modelling techniques.",

        result:
            "The final result consists of the completed 3D models created during the project.",

        gallery: [
            "images/gaming/placeholder.png",
            "images/gaming/placeholder.png",
            "images/gaming/placeholder.png"
        ],

        video: "",

        reflection:
            "This project helped me improve my understanding of 3D modelling and working in Maya."

    },


    "visual-identity": {

        number: "03",
        title: "Visual",
        titleSecond: "Identity.",

        intro: "A graphic design project exploring typography, composition and visual identity.",

        type: "Graphic Design",
        tools: "Illustrator · Photoshop · Figma",
        year: "2026",

        cover: "images/duff/duff-cover.png",

        description:
            "A visual identity project created during my studies, focusing on creating a consistent visual language.",

        description2:
            "I explored typography, composition, colour and different graphic elements to develop the final identity.",

        image1: "images/duff/duff-1.png",

        aboutVideo: "",

        research:
            "I started by researching visual identities and collecting references that matched the direction of the project.",

        development:
            "I developed different visual ideas and experimented with typography, layouts and graphic elements.",

        result:
            "The final result is a visual identity combining the different design elements into one consistent style.",

        gallery: [
            "images/duff/placeholder.png",
            "images/duff/placeholder.png",
            "images/duff/placeholder.png"
        ],

        video: "",

        reflection:
            "This project helped me develop my visual design skills and understand the importance of consistency in a visual identity."

    },


    "poster-design": {

        number: "04",
        title: "Poster",
        titleSecond: "Design.",

        intro: "A poster design project focused on visual communication and composition.",

        type: "Graphic Design",
        tools: "Figma",
        year: "2026",

        cover: "images/smarthome/smarthome-cover.png",

        description:
            "A collection of poster design work created during my studies.",

        description2:
            "The projects focused on communicating an idea through typography, imagery, composition and visual hierarchy.",

        image1: "images/smarthome/smarthome-1.png",

        aboutVideo: "",

        research:
            "I researched poster design and looked at different approaches to composition, typography and visual communication.",

        development:
            "I experimented with different layouts, typography and imagery before developing the final design.",

        result:
            "The final poster combines the different design elements into a clear visual composition.",

        gallery: [
            "images/smarthome/placeholder.png",
            "images/smarthome/placeholder.png",
            "images/smarthome/placeholder.png"
        ],

        video: "",

        reflection:
            "This project helped me become more comfortable with composition and communicating an idea visually."

    },


    "motion-project": {

        number: "05",
        title: "Motion",
        titleSecond: "Project.",

        intro: "An animation project focused on movement, timing and visual storytelling.",

        type: "Motion Graphics",
        tools: "After Effects · Premiere Pro",
        year: "2025",

        cover: "images/motion-project/cover.jpg",

        description:
            "A motion graphics project focused on creating movement and visual storytelling.",

        description2:
            "I worked with animation, timing and transitions to create a short visual sequence.",

        image1: "images/motion-project/image1.jpg",

        aboutVideo: "",

        research:
            "I researched motion graphics and looked at different examples of animation and visual storytelling.",

        development:
            "I developed the animation using After Effects and worked on timing, movement and transitions.",

        result:
            "The final result is a short motion graphics piece combining animation and visual elements.",

        gallery: [
            "images/motion-project/placeholder.png",
            "images/motion-project/placeholder.png",
            "images/motion-project/placeholder.png"
        ],

        video: "",

        reflection:
            "This project helped me understand animation timing and how movement can be used to communicate an idea."

    }

};


/* =========================
   GET PROJECT
========================= */

let urlParams =
    new URLSearchParams(window.location.search);

let projectId =
    urlParams.get("id");

let project =
    projects[projectId];


if (!project) {

    window.location.href = "projects.html";

} else {

    document.title =
        project.title + " — Aymane Boutahar";


    /* =========================
       HERO
    ========================== */

    document.getElementById("project-number").textContent =
        project.number + " — PROJECT";

    document.getElementById("project-title").innerHTML =
        project.title +
        "<br><span>" +
        project.titleSecond +
        "</span>";

    document.getElementById("project-intro").textContent =
        project.intro;


    /* =========================
       META
    ========================== */

    document.getElementById("project-type").textContent =
        project.type;

    document.getElementById("project-tools").textContent =
        project.tools;

    document.getElementById("project-year").textContent =
        project.year;


    /* =========================
       COVER
    ========================== */

    document.getElementById("project-cover").src =
        project.cover;

    document.getElementById("project-cover").alt =
        project.title;


    /* =========================
       DESCRIPTION
    ========================== */

    document.getElementById("project-description").textContent =
        project.description;

    document.getElementById("project-description-2").textContent =
        project.description2;


    /* =========================
       ABOUT IMAGE / VIDEO
    ========================== */

    let aboutImage =
        document.getElementById("project-image1");

    let aboutVideoContainer =
        document.getElementById("about-video-container");

    let aboutVideo =
        document.getElementById("about-project-video");


    if (project.image1) {

        aboutImage.style.display = "block";

        aboutImage.src =
            project.image1;

        aboutVideoContainer.style.display =
            "none";

    } else if (project.aboutVideo) {

        aboutImage.style.display =
            "none";

        aboutVideoContainer.style.display =
            "block";

        aboutVideo.src =
            "https://www.youtube.com/embed/" +
            project.aboutVideo;

    } else {

        aboutImage.style.display =
            "none";

        aboutVideoContainer.style.display =
            "none";

    }


    /* =========================
       PROCESS
    ========================== */

    document.getElementById("project-research").textContent =
        project.research;

    document.getElementById("project-development").textContent =
        project.development;

    document.getElementById("project-result").textContent =
        project.result;


    /* =========================
       GALLERY
    ========================== */

    let galleryTrack =
        document.getElementById("gallery-track");

    galleryTrack.innerHTML = "";


    /* CREATE GALLERY IMAGES */

    for (let i = 0; i < project.gallery.length; i++) {

        let image =
            document.createElement("img");

        image.src =
            project.gallery[i];

        image.alt =
            project.title +
            " gallery image";

        image.classList.add("gallery-image");

        image.dataset.index =
            i;

        galleryTrack.appendChild(image);

    }


    let galleryImages =
        document.querySelectorAll(".gallery-image");


    /* =========================
       GALLERY CONTROLS
    ========================== */

    let galleryPrev =
        document.getElementById("gallery-prev");

    let galleryNext =
        document.getElementById("gallery-next");

    let currentGalleryImage =
        0;


    /* NEXT */

    galleryNext.addEventListener("click", function() {

        currentGalleryImage++;

        if (
            currentGalleryImage >=
            galleryImages.length
        ) {

            currentGalleryImage = 0;

        }

        galleryImages[currentGalleryImage].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

    });


    /* PREVIOUS */

    galleryPrev.addEventListener("click", function() {

        currentGalleryImage--;

        if (currentGalleryImage < 0) {

            currentGalleryImage =
                galleryImages.length - 1;

        }

        galleryImages[currentGalleryImage].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

    });


    /* =========================
       LIGHTBOX
    ========================== */

    let lightbox =
        document.getElementById("image-lightbox");

    let lightboxImage =
        document.getElementById("lightbox-image");

    let lightboxClose =
        document.getElementById("lightbox-close");

    let lightboxPrev =
        document.getElementById("lightbox-prev");

    let lightboxNext =
        document.getElementById("lightbox-next");

    let currentImage =
        0;


    /* SHOW IMAGE */

    function showLightboxImage(index) {

        currentImage =
            index;

        lightboxImage.src =
            project.gallery[currentImage];

        lightbox.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }


    /* CLOSE */

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    /* NEXT */

    function nextLightboxImage() {

        currentImage++;

        if (
            currentImage >=
            project.gallery.length
        ) {

            currentImage = 0;

        }

        lightboxImage.src =
            project.gallery[currentImage];

    }


    /* PREVIOUS */

    function previousLightboxImage() {

        currentImage--;

        if (currentImage < 0) {

            currentImage =
                project.gallery.length - 1;

        }

        lightboxImage.src =
            project.gallery[currentImage];

    }


    /* CLICK GALLERY IMAGE */

    galleryImages.forEach(function(image) {

        image.addEventListener("click", function() {

            let index =
                Number(image.dataset.index);

            showLightboxImage(index);

        });

    });


    /* LIGHTBOX BUTTONS */

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

    lightboxNext.addEventListener(
        "click",
        nextLightboxImage
    );

    lightboxPrev.addEventListener(
        "click",
        previousLightboxImage
    );


    /* CLICK BACKGROUND */

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });


    /* KEYBOARD */

    document.addEventListener("keydown", function(event) {

        if (!lightbox.classList.contains("active")) {

            return;

        }

        if (event.key === "Escape") {

            closeLightbox();

        }

        if (event.key === "ArrowRight") {

            nextLightboxImage();

        }

        if (event.key === "ArrowLeft") {

            previousLightboxImage();

        }

    });


    /* =========================
       REFLECTION
    ========================== */

    document.getElementById("project-reflection").textContent =
        project.reflection;


    /* =========================
       PROJECT VIDEO
    ========================== */

    let videoSection =
        document.getElementById("project-video-section");

    let video =
        document.getElementById("project-video");


    if (project.video) {

        videoSection.style.display =
            "block";

        video.src =
            "https://www.youtube.com/embed/" +
            project.video;

    } else {

        videoSection.style.display =
            "none";

    }

}