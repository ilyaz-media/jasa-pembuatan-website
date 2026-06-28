// Sticky Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("nav-scroll");

    } else {

        navbar.classList.remove("nav-scroll");

    }

});

// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});



// FAQ =============
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;
        const currentAnswer = currentItem.querySelector(".faq-answer");
        const currentIcon = currentItem.querySelector(".icon");

        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== currentItem) {
                item.querySelector(".faq-answer").style.maxHeight = null;
                item.querySelector(".icon").classList.remove("rotate-45");
            }
        });

        if (currentAnswer.style.maxHeight) {

            currentAnswer.style.maxHeight = null;
            currentIcon.classList.remove("rotate-45");

        } else {

            currentAnswer.style.maxHeight =
                currentAnswer.scrollHeight + "px";

            currentIcon.classList.add("rotate-45");
        }
    });
});