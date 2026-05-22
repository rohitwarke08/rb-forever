/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    gsap.to("#preloader", {

        opacity: 0,
        duration: 1.5,
        delay: 2,

        onComplete: () => {
            document.getElementById("preloader").style.display = "none";
        }

    });

});

/* =========================
   AOS INIT
========================= */

AOS.init({
    duration: 1200,
    once: true
});

/* =========================
   TYPED TEXT
========================= */

new Typed(".typing-text", {

    strings: [

        "Tum meri favorite feeling ho ❤️",
        "Har raat ka chand tumhari yaad dilata hai 🌙",
        "Every memory with you feels magical ✨"

    ],

    typeSpeed: 50,
    backSpeed: 30,
    loop: true

});

/* =========================
   HERO GSAP ANIMATION
========================= */

const heroTimeline = gsap.timeline();

heroTimeline

    .from(".hero-subtitle", {

        y: 50,
        opacity: 0,
        duration: 1

    })

    .from(".hero-title", {

        y: 80,
        opacity: 0,
        duration: 1.2

    }, "-=0.5")

    .from(".typing-text", {

        opacity: 0,
        duration: 1

    }, "-=0.5")

    .from(".hero-btn", {

        scale: 0.8,
        opacity: 0,
        duration: 1

    }, "-=0.5")

    .from(".moon", {

        scale: 0,
        opacity: 0,
        duration: 2

    }, "-=2");

/* =========================
   MOON PARALLAX
========================= */

document.addEventListener("mousemove", (e) => {

    const moon = document.querySelector(".moon");

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    moon.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* =========================
   LOVE COUNTER
========================= */

const startDate = new Date("June 6, 2024 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const difference = now - startDate;

    const days =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor((difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60));

    const minutes =
        Math.floor((difference % (1000 * 60 * 60))
            / (1000 * 60));

    const seconds =
        Math.floor((difference % (1000 * 60))
            / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);


/* =========================
   IMAGE MODAL
========================= */

const galleryItems =
    document.querySelectorAll(".gallery-item img");

const imageModal =
    document.querySelector(".image-modal");

const modalImg =
    document.querySelector(".modal-img");

const closeModal =
    document.querySelector(".close-modal");

galleryItems.forEach((img) => {

    img.addEventListener("click", () => {

        imageModal.classList.add("active");

        modalImg.src = img.src;

    });

});

closeModal.addEventListener("click", () => {

    imageModal.classList.remove("active");

});

/* Close on outside click */

imageModal.addEventListener("click", (e) => {

    if (e.target !== modalImg) {

        imageModal.classList.remove("active");

    }

});


/* =========================
   VANILLA TILT
========================= */

VanillaTilt.init(

    document.querySelectorAll(".gallery-item"),

    {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    }

);


/* =========================
   LETTER POPUP
========================= */

const openLetterBtn =
    document.getElementById("openLetterBtn");

const letterModal =
    document.getElementById("letterModal");

const closeLetter =
    document.getElementById("closeLetter");

/* Open */

openLetterBtn.addEventListener("click", () => {

    letterModal.classList.add("show");

});

/* Close */

closeLetter.addEventListener("click", () => {

    letterModal.classList.remove("show");

});

/* Close Outside */

letterModal.addEventListener("click", (e) => {

    if(e.target === letterModal){

        letterModal.classList.remove("show");

    }

});


/* =========================
   FLOATING MUSIC CARDS
========================= */

gsap.to(".music-card", {

    y: -12,

    duration: 3,

    repeat: -1,

    yoyo: true,

    stagger: 0.3,

    ease: "power1.inOut"

});


/* =========================
   FLOATING DREAM CARDS
========================= */

gsap.to(".dream-card", {

    y: -10,

    duration: 3,

    repeat: -1,

    yoyo: true,

    stagger: 0.2,

    ease: "power1.inOut"

});


/* =========================
   FINAL TEXT ANIMATION
========================= */

gsap.from(".final-content", {

    scrollTrigger: {

        trigger: ".final-section",

        start: "top 70%"
    },

    opacity: 0,

    y: 100,

    duration: 2

});