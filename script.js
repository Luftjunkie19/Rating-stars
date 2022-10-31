const stars = document.querySelectorAll(".star");
const ratingContainer = document.querySelector(".rating-container");
const starsContainer = document.querySelector(".stars-container");
const ratingHeader = document.querySelector(".rating-header");
const submitBtn = document.querySelector(".btn-send");
const messageHolder = document.querySelector(".message");

console.log(stars);

function testFunction() {
  stars.forEach((star, i) => {
    star.addEventListener("click", () => {
      for (let index = 0; index <= i && index < stars.length; index++) {
        const element = stars[index];
        element.classList.toggle("active");
      }
    });
  });
}

testFunction();

submitBtn.addEventListener("click", () => {
  let activeStars = document.querySelectorAll(".active");

  ratingHeader.innerText = "Thank you for your Feedback";

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
