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

        research:
            "I started by studying the character and looking at references for movement, posing and animation.",

        development:
            "The animation was developed in Maya, where I worked on the character movement and timing.",

        result:
            "The final result is a short 3D animation demonstrating the character and movement.",

        image2: "",

        video: "Cjj-ZdUxsg0",

        reflection:
            "This project helped me understand the basics of character animation and gave me more experience working with Maya."

    },


    "3d-modelling": {

        number: "02",
        title: "3D",
        titleSecond: "Modelling.",

        intro: "A 3D modelling project created during my studies.",

        type: "3D Modelling",
        tools: "Maya · Modelling · Animation",
        year: "2025",

        cover: "images/3d-modelling/cover.jpg",

        description:
            "A project focused on creating and developing 3D models using Maya.",

        description2:
            "The project allowed me to experiment with modelling techniques and learn how to build 3D objects from scratch.",

        image1: "images/3d-modelling/image1.jpg",

        research:
            "I started by looking at references and planning the shapes and forms I wanted to create.",

        development:
            "I created the models in Maya while experimenting with different modelling techniques.",

        result:
            "The final result consists of the completed 3D models created during the project.",

        image2: "images/3d-modelling/image2.jpg",

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
        year: "2025",

        cover: "images/visual-identity/cover.jpg",

        description:
            "A visual identity project created during my studies, focusing on creating a consistent visual language.",

        description2:
            "I explored typography, composition, colour and different graphic elements to develop the final identity.",

        image1: "images/visual-identity/image1.jpg",

        research:
            "I started by researching visual identities and collecting references that matched the direction of the project.",

        development:
            "I developed different visual ideas and experimented with typography, layouts and graphic elements.",

        result:
            "The final result is a visual identity combining the different design elements into one consistent style.",

        image2: "images/visual-identity/image2.jpg",

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
        tools: "Illustrator · Photoshop",
        year: "2025",

        cover: "images/poster-design/cover.jpg",

        description:
            "A collection of poster design work created during my studies.",

        description2:
            "The projects focused on communicating an idea through typography, imagery, composition and visual hierarchy.",

        image1: "images/poster-design/image1.jpg",

        research:
            "I researched poster design and looked at different approaches to composition, typography and visual communication.",

        development:
            "I experimented with different layouts, typography and imagery before developing the final design.",

        result:
            "The final poster combines the different design elements into a clear visual composition.",

        image2: "images/poster-design/image2.jpg",

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

        research:
            "I researched motion graphics and looked at different examples of animation and visual storytelling.",

        development:
            "I developed the animation using After Effects and worked on timing, movement and transitions.",

        result:
            "The final result is a short motion graphics piece combining animation and visual elements.",

        image2: "images/motion-project/image2.jpg",

        video: "",

        reflection:
            "This project helped me understand animation timing and how movement can be used to communicate an idea."

    }

};

let urlParams = new URLSearchParams(window.location.search);

let projectId = urlParams.get("id");

let project = projects[projectId];

if (!project) {

    window.location.href = "projects.html";

} else {

    document.title = project.title + " — Aymane Boutahar";

    document.getElementById("project-number").textContent =
        project.number + " — PROJECT";

    document.getElementById("project-title").innerHTML =
        project.title + "<br><span>" + project.titleSecond + "</span>";

    document.getElementById("project-intro").textContent =
        project.intro;

    document.getElementById("project-type").textContent =
        project.type;

    document.getElementById("project-tools").textContent =
        project.tools;

    document.getElementById("project-year").textContent =
        project.year;


    document.getElementById("project-cover").src =
        project.cover;

    document.getElementById("project-cover").alt =
        project.title;


    document.getElementById("project-description").textContent =
        project.description;

    document.getElementById("project-description-2").textContent =
        project.description2;


    document.getElementById("project-image1").src =
        project.image1;


    document.getElementById("project-research").textContent =
        project.research;

    document.getElementById("project-development").textContent =
        project.development;

    document.getElementById("project-result").textContent =
        project.result;


    document.getElementById("project-image2").src =
        project.image2;


    document.getElementById("project-reflection").textContent =
        project.reflection;


    /* VIDEO */

    let videoSection =
        document.getElementById("project-video-section");

    let video =
        document.getElementById("project-video");


    if (project.video) {

        videoSection.style.display = "block";

        video.src =
            "https://www.youtube.com/embed/" + project.video;

    } else {

        videoSection.style.display = "none";

    }

}

let image2Section =
    document.getElementById("project-image2-section");

if (project.image2) {
    image2Section.style.display = "flex";
    document.getElementById("project-image2").src = project.image2;
} else {
    image2Section.style.display = "none";
}