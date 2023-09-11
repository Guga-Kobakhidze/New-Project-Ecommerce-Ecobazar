const mainBanner = document.getElementById("Main-banner");
const subscribeBanner = document.querySelector(".subscribe_banner");
const closeBtn = document.getElementById("ba-close");
const overlay = document.getElementById("overlay");

function openSubscribeBanner() {
  subscribeBanner.style.display = "flex";
  overlay.style.display = "block";
}

function closeSubscribeBanner() {
  subscribeBanner.style.display = "none";
  overlay.style.display = "none";
}

mainBanner.addEventListener("click", openSubscribeBanner);

closeBtn.addEventListener("click", closeSubscribeBanner);
