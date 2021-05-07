const contact = document.querySelector(".contact-infos-clic");
const infosCards = document.querySelector(".hidden");

function handleClick() {
  infosCards.classList.toggle("hidden");
  contact.classList.toggle("hidden");
}

contact.addEventListener("click", handleClick);
