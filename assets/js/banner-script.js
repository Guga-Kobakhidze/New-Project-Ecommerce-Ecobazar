// For Banner Show //

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


// For Single Product Description //

const EyeLineElements = document.getElementsByClassName("Eye-Line");
const productDesc = document.querySelector(".product_desc");
const closeBtn2 = document.getElementById("Prod_close");
const overlay1 = document.getElementById("overlay");

function openSubscribeBanner1() {
  productDesc.style.display = "flex";
  overlay1.style.display = "block";
}

function closeSubscribeBanner1() {
  productDesc.style.display = "none";
  overlay1.style.display = "none";
}

// You need to add an event listener for each element in the EyeLineElements collection
for (const element of EyeLineElements) {
  element.addEventListener("click", openSubscribeBanner1);
}

closeBtn2.addEventListener("click", closeSubscribeBanner1);

