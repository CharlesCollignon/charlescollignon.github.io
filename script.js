const contact = document.querySelector(".contact-infos-clic");
const infosCards = document.querySelector(".hidden");
const arrowTop = document.querySelector(".fa-arrow-circle-up");
const btn = document.querySelector(".btn-enter");

// function myLoader() {
//   loader.style.display = "none";
// }
$(btn).on("click", function () {
  $(".loading-page").fadeOut(1000, "linear");
});

$(contact).on("click", async function () {
  $(".contacts").slideToggle(1000);
});

// function handleClick() {
//   infosCards.classList.toggle("hidden");
//   contact.classList.toggle("hidden");
// }

function handleTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// contact.addEventListener("click", handleClick);
arrowTop.addEventListener("click", handleTop);
