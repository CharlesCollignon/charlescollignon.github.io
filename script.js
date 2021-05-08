const contact = document.querySelector(".contact-infos-clic");
const infosCards = document.querySelector(".hidden");
const arrowTop = document.querySelector(".fa-arrow-circle-up");

function handleClick() {
  infosCards.classList.toggle("hidden");
  contact.classList.toggle("hidden");
}

function handleTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

contact.addEventListener("click", handleClick);
arrowTop.addEventListener("click", handleTop);
