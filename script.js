`use strict`;

const stars = document.querySelectorAll(".star");
const ratingContainer = document.querySelector(".rating-container");
const starsContainer = document.querySelector(".stars-container");
const ratingHeader = document.querySelector(".rating-header");
const submitBtn = document.querySelector(".btn-send");
const messageHolder = document.querySelector(".message");
const rate = document.querySelector(".rate");

console.log(stars);

let activeStars = [];

stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    markStars(i);
  });
});

function markStars(idx) {
  if (
    stars[idx].classList.contains("active") &&
    !stars[idx].nextElementSibling.classList.contains("active")
  ) {
    idx--;
  }

  stars.forEach((star, idx2) => {
    if (idx2 <= idx) {
      star.classList.add("active");
      activeStars.push(star);
      localStorage.setItem("starred", JSON.stringify(activeStars));
    } else {
      star.classList.remove("active");
      activeStars.splice(idx2, 1);
      localStorage.setItem("starred", JSON.stringify(activeStars));
    }
  });
}

let active = JSON.parse(localStorage.getItem("starred"));

console.log(active);

function keepMarked() {
  for (let index = 0; index < active.length; index++) {
    const element = stars[index];
    element.classList.add("active");
  }
}

window.addEventListener("DOMContentLoaded", keepMarked);

submitBtn.addEventListener("click", () => {
  localStorage.clear();

  let activeStars = document.querySelectorAll(".active");

  ratingHeader.innerText = "Thank you for your Feedback";
  rate.innerText = `Your rate: ${activeStars.length}/${stars.length}`;

  if (activeStars.length >= 4) {
    messageHolder.innerText = `We hope you really liked the visit by us and we hope, we see us again😜(If you have anyway some advice to us, message us😁)`;
  } else if (activeStars.length === 3) {
    messageHolder.innerText = `Oh😥, your rate let us think, visit by us wasn't the best experience of yours. Message us and describe what happened😉`;
  } else {
    messageHolder.innerText = `OMG😨, please message us, so you explain what happened and we will do all to repair our fault😄`;
  }
  starsContainer.style.display = "none";
  submitBtn.style.display = "none";
});
