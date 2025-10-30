AOS.init({
      duration: 1200,
      once: true,
      offset: 100
    });
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var swiper = new Swiper(".card-swiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

var swiper = new Swiper(".testimonial-swiper", {
      loop: true,
      grabCursor: true,
      speed: 800,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "slide",
    });

document.getElementById("backToTop").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

      document.getElementById("backToTop").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });