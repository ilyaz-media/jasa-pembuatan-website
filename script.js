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

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  // Initialize theme based on stored preference or system
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
}