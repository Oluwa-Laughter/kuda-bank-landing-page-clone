"use strict";

const yearEL = document.getElementById("year");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const btn = document.querySelector(".btn");
const cta = document.querySelector(".cta-section");
const mainNavLinks = document.querySelector(".main-nav-list");
const heroSection = document.querySelector(".hero-section");
const allSections = document.querySelectorAll(".section");

const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Navigation Menu
const btnNavMenu = function (e) {
  e.preventDefault();
  header.classList.toggle("nav-open");
};
btnMobileNav.addEventListener("click", btnNavMenu);

// Scroll to CTA
btn.addEventListener("click", function (e) {
  e.target.getBoundingClientRect();

  cta.scrollIntoView({
    behavior: "smooth",
  });
  header.classList.remove("nav-open");
});

// Sticky Navigation
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};
const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
observer.observe(heroSection);

// Page Navigation
mainNavLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-bar-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    header.classList.remove("nav-open");
  }
});

//////////////////////////
//Revealing Sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// Scroll to top
// const btnScrollToTop = document.querySelector(".scroll-to-top");
// btnScrollToTop.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });

// Menu fade Animation
// const handleHover = function (e) {
//   if (e.target.classList.contains("nav-bar-link")) {
//     const link = e.target;
//     console.log(link);
//     const siblings = link
//       .closest(".main-nav")
//       .querySelectorAll(".nav-bar-link");
//     console.log(siblings);

//     siblings.forEach((el) => {
//       if (el !== link) {
//         el.style.opacity = this;
//       }
//     });
//   }
// };

// header.addEventListener("mouseenter", handleHover.bind(0));
// header.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////
// Tabbed Component
// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".operations__tab");

//   // Guard Clause
//   if (!clicked) return;

//   // Remove active classes
//   tabs.forEach((t) => t.classList.remove("operations__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

//   //Activate tab
//   clicked.classList.add("operations__tab--active");

//   // Activate Content area
//   document
//     .querySelector(`.operations__content--${clicked.dataset.tab}`)
//     .classList.add("operations__content--active");
// });

//////////////////////////////////////
