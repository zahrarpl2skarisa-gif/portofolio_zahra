/* =========================================
   LOADING
========================================= */

const pageLoader =
    document.getElementById("pageLoader");


window.addEventListener("load", function () {

    setTimeout(function () {

        pageLoader.classList.add("hide");

    }, 700);

});



/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");


    const icon =
        menuButton.querySelector("i");


    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =========================================
   CLOSE MENU
   KETIKA MENU DIPENCET
========================================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });



/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopButton =
    document.getElementById("scrollTop");


window.addEventListener("scroll", function () {


    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================================
   LANGUAGE SYSTEM
========================================= */

const languageSwitch =
    document.getElementById(
        "languageSwitch"
    );


const translations = {


    /* =========================
       ENGLISH
    ========================= */

    en: {

        navHome: "Home",

        navAbout: "About Me",

        navSkills: "My Skills",

        navProjects: "My Project",

        navContact: "Contact",


        heroEyebrow:
            "Hello, It's Me",

        andImA:
            "And I'm a",

        student:
            "Student",


        heroDescription:
            "I love learning technology, creating websites, building creative projects, and turning ideas into useful digital experiences.",


        moreAbout:
            "More About Me",


        aboutButton:
            "More About Me",


        whoIs:
            "Who is",


        aboutText:
            "I'm a student who is interested in technology, web development and creative design. I enjoy learning new things, making digital projects, and improving my skills through practice.",


        aboutText2:
            "I believe every project is a chance to learn, experiment and create something meaningful.",


        mySkillsButton:
            "My Skills",


        my:
            "My",


        skills:
            "Skills",


        htmlDesc:
            "CREATE A NEAT AND STRUCTURED WEBSITE STRUCTURE.",


        cssDesc:
            "CREATE AN ATTRACTIVE AND RESPONSIVE WEBSITE APPEARANCE.",


        jsDesc:
            "MAKE THE WEBSITE MORE INTERACTIVE.",


        design:
            "DESIGN",


        designDesc:
            "MAKE SIMPLE AND CREATIVE DESIGNS.",


        myProjectButton:
            "My Project",


        project1Desc:
            "A simple calculator website made with HTML, CSS and JavaScript. This project helped me practice basic logic and interaction.",


        project2Desc:
            "A simple cashier project designed to calculate purchases and practice JavaScript interaction.",


        project3Desc:
            "A logo design project created with a bold and playful visual concept.",


        contactMe:
            "Contact Me",


        letsWork:
            "Let's Work Together",


        contactText:
            "Have a project, idea, or collaboration in mind? Feel free to contact me and let's create something together.",


        sendEmail:
            "Send Email",


        rights:
            "All rights reserved."

    },



    /* =========================
       INDONESIA
    ========================= */

    id: {

        navHome:
            "Beranda",

        navAbout:
            "Tentang Saya",

        navSkills:
            "Keahlian",

        navProjects:
            "Proyek Saya",

        navContact:
            "Kontak",


        heroEyebrow:
            "Halo, Ini Saya",


        andImA:
            "Dan saya seorang",


        student:
            "Pelajar",


        heroDescription:
            "Saya suka mempelajari teknologi, membuat website, mengembangkan proyek kreatif, dan mengubah ide menjadi pengalaman digital yang bermanfaat.",


        moreAbout:
            "Lebih Tentang Saya",


        aboutButton:
            "Lebih Tentang Saya",


        whoIs:
            "Siapa",


        aboutText:
            "Saya adalah seorang pelajar yang tertarik pada teknologi, pengembangan web, dan desain kreatif. Saya senang mempelajari hal baru, membuat proyek digital, dan meningkatkan kemampuan melalui latihan.",


        aboutText2:
            "Saya percaya setiap proyek adalah kesempatan untuk belajar, bereksperimen, dan menciptakan sesuatu yang bermakna.",


        mySkillsButton:
            "Keahlian Saya",


        my:
            "Keahlian",


        skills:
            "Saya",


        htmlDesc:
            "MEMBUAT STRUKTUR WEBSITE YANG RAPI DAN TERSTRUKTUR.",


        cssDesc:
            "MEMBUAT TAMPILAN WEBSITE YANG MENARIK DAN RESPONSIF.",


        jsDesc:
            "MEMBUAT WEBSITE MENJADI LEBIH INTERAKTIF.",


        design:
            "DESAIN",


        designDesc:
            "MEMBUAT DESAIN YANG SEDERHANA DAN KREATIF.",


        myProjectButton:
            "Proyek Saya",


        project1Desc:
            "Website kalkulator sederhana yang dibuat dengan HTML, CSS, dan JavaScript. Proyek ini membantu saya berlatih logika dasar dan interaksi.",


        project2Desc:
            "Proyek kasir sederhana untuk menghitung pembelian sekaligus melatih interaksi menggunakan JavaScript.",


        project3Desc:
            "Proyek desain logo dengan konsep visual yang tegas dan kreatif.",


        contactMe:
            "Hubungi Saya",


        letsWork:
            "Mari Bekerja Sama",


        contactText:
            "Punya proyek, ide, atau ingin berkolaborasi? Silakan hubungi saya dan mari membuat sesuatu bersama.",


        sendEmail:
            "Kirim Email",


        rights:
            "Hak cipta dilindungi."

    }

};



/* =========================================
   FUNCTION GANTI BAHASA
========================================= */

function setLanguage(language) {


    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach(function (element) {


        const key =
            element.dataset.i18n;


        if (translations[language][key]) {

            element.textContent =
                translations[language][key];

        }

    });


    languageSwitch.dataset.language =
        language;


    document.documentElement.lang =
        language;


    /* simpan pilihan bahasa */

    localStorage.setItem(
        "portfolioLanguage",
        language
    );


    /* animasi tombol */

    languageSwitch.animate(

        [

            {
                transform: "scale(1)"
            },

            {
                transform:
                    "scale(1.12) rotate(-3deg)"
            },

            {
                transform: "scale(1)"
            }

        ],

        {

            duration: 350,

            easing: "ease-out"

        }

    );

}



/* =========================================
   TOMBOL SWITCH BAHASA
========================================= */

languageSwitch.addEventListener(
    "click",
    function () {


        const currentLanguage =
            languageSwitch.dataset.language;


        if (currentLanguage === "en") {

            setLanguage("id");

        } else {

            setLanguage("en");

        }

    }
);



/* =========================================
   LOAD BAHASA YANG TERAKHIR DIPILIH
========================================= */

const savedLanguage =
    localStorage.getItem(
        "portfolioLanguage"
    );


if (savedLanguage) {

    setLanguage(savedLanguage);

} else {

    setLanguage("en");

}



/* =========================================
   TAHUN FOOTER OTOMATIS
========================================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();



/* =========================================
   ANIMASI CARD SKILLS
========================================= */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach(function (card) {


    card.addEventListener(
        "mousemove",
        function (event) {


            if (window.innerWidth < 700) {

                return;

            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y / rect.height) - .5)
                * -4;


            const rotateY =
                ((x / rect.width) - .5)
                * 4;


            card.style.transform =
                `translateY(-8px)
                 perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );



    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform = "";

        }
    );

});