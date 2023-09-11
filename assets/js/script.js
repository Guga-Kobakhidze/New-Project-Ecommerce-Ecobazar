// For slider -->> //

$(document).ready(function () {
  const $slider = $(".client_reviews");
  const $reviews = $(".review");

  let slideIndex = 0;
  function nextSlide() {
    slideIndex++;
    if (slideIndex >= $reviews.length - 2) {
      slideIndex = 0;
    }
    updateSlider();
  }
  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = $reviews.length - 3;
    }
    updateSlider();
  }

  function updateSlider() {
    const translateX = -slideIndex * ($reviews.outerWidth() + 24);
    $slider.css("transform", `translateX(${translateX}px)`);
  }

  $(".left_handle").on("click", prevSlide);
  $(".right_handle").on("click", nextSlide);

  // const autoplayInterval = setInterval(nextSlide, 5000);
});

// For BurgerMenu --> //

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// For Active menu --> //

const currentLocation = window.location.href;

const navbarLinks = document.querySelectorAll(".navigation li a");

navbarLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});

// For Timer -->> //

const targetDate = new Date("2023-09-15T00:02:18").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(countdown);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = padZero(days);
  document.getElementById("hours").textContent = padZero(hours);
  document.getElementById("minutes").textContent = padZero(minutes);
  document.getElementById("seconds").textContent = padZero(seconds);

  document.getElementById("days1").textContent = padZero(days);
  document.getElementById("hours1").textContent = padZero(hours);
  document.getElementById("minutes1").textContent = padZero(minutes);
  document.getElementById("seconds1").textContent = padZero(seconds);
}
updateCountdown();
const countdown = setInterval(updateCountdown, 1000);

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
