// For Filter Mobile show //

const filterSection = document.querySelector(".shfilter_section");
const forFilterMobile = document.querySelector(".for_filter_shmobile");
const closeBtn = document.querySelector(".close_btn3");

function closeFilterSection() {
  filterSection.classList.remove("open");
}

forFilterMobile.addEventListener("click", function () {
  filterSection.classList.toggle("open");
});

closeBtn.addEventListener("click", closeFilterSection);

// For Banner Description --> //

const EyeLineElements = document.getElementsByClassName("Eye-Line");
const productDesc = document.querySelector(".product_desc");
const closeBtn3 = document.getElementById("Prod_close");
const overlay2 = document.getElementById("overlay");

function openSubscribeBanner1() {
  productDesc.style.display = "flex";
  overlay2.style.display = "block";
}

function closeSubscribeBanner1() {
  productDesc.style.display = "none";
  overlay2.style.display = "none";
}

for (const element of EyeLineElements) {
  element.addEventListener("click", openSubscribeBanner1);
}

closeBtn3.addEventListener("click", closeSubscribeBanner1);

// Radio Input //

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", function () {
    radioButtons.forEach((rb) => {
      rb.checked = false;
    });

    this.checked = true;
  });
});

// hide and show filter //

// Categories -->

const filterStaff = document.getElementById("toggleCategories");
const categoriesList = document.querySelector(".categories");

filterStaff.addEventListener("click", function () {
  if (
    categoriesList.style.maxHeight === "0px" ||
    categoriesList.style.maxHeight === ""
  ) {
    categoriesList.style.maxHeight = categoriesList.scrollHeight + "px";
  } else {
    categoriesList.style.maxHeight = "0px";
  }
});

// Range -->

const toggleRange = document.getElementById("togglerange");
const rangeForm = document.querySelector(".range_form");

toggleRange.addEventListener("click", function () {
  if (rangeForm.style.maxHeight === "0px" || rangeForm.style.maxHeight === "") {
    rangeForm.style.maxHeight = rangeForm.scrollHeight + "px";
  } else {
    rangeForm.style.maxHeight = "0px";
  }
});

// Rating -->

const toggleRating = document.getElementById("togglerating");
const checkBox = document.querySelector(".checkboxes");

toggleRating.addEventListener("click", function () {
  if (checkBox.style.maxHeight === "0px" || checkBox.style.maxHeight === "") {
    checkBox.style.maxHeight = checkBox.scrollHeight + "px";
  } else {
    checkBox.style.maxHeight = "0px";
  }
});

// Tags -->

const toggleTag = document.getElementById("toggletag");
const pTags = document.querySelector(".p_tags");

toggleTag.addEventListener("click", function () {
  if (pTags.style.maxHeight === "0px" || pTags.style.maxHeight === "") {
    pTags.style.maxHeight = pTags.scrollHeight + "px";
  } else {
    pTags.style.maxHeight = "0px";
  }
});

// Range Control //

function updateFirstRange(value) {
  document.getElementById("firstHandleValue").textContent = value;
}

function updateSecondRange(value) {
  document.getElementById("secondHandleValue").textContent = value;
}
