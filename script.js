const contact = document.querySelector(".contact-infos-clic");
const infosCards = document.querySelector(".hidden");
const arrowTop = document.querySelector(".fa-arrow-circle-up");
const btnEnter = document.querySelector(".btn-enter");
const loadingPage = document.querySelector(".loading-page");

function handleClick() {
  loadingPage.classList.add("zoomOut");
}

btnEnter.addEventListener("click", handleClick);

function handleTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

arrowTop.addEventListener("click", handleTop);

//Toggle infos and stack landing page
const btnwhoIAM = document.querySelector(".btn-who");
const bodyWhoIAM = document.querySelector(".who-i-am");

const btnStack = document.querySelector(".btn-stack");
const bodyStack = document.querySelector(".my-stack");

const btnInfos = document.querySelector(".btn-infos");
const bodyInfos = document.querySelector(".my-infos");

const sectionInfos = document.getElementsByClassName("section-infos");

function toggleInfos(e) {
  const targetClass = e.target.classList;

  if (targetClass[2] === "btn-who") {
    bodyWhoIAM.classList.add("display-infos-active");
    bodyStack.classList.remove("display-infos-active");
    bodyInfos.classList.remove("display-infos-active");

    btnwhoIAM.classList.add("btn-active");
    btnInfos.classList.remove("btn-active");
    btnStack.classList.remove("btn-active");
  } else if (targetClass[2] === "btn-stack") {
    btnStack.classList.add("btn-active");
    btnwhoIAM.classList.remove("btn-active");
    btnInfos.classList.remove("btn-active");

    bodyStack.classList.add("display-infos-active");
    bodyWhoIAM.classList.remove("display-infos-active");
    bodyInfos.classList.remove("display-infos-active");
  } else if (targetClass[2] === "btn-infos") {
    btnStack.classList.remove("btn-active");
    btnwhoIAM.classList.remove("btn-active");
    btnInfos.classList.add("btn-active");

    bodyStack.classList.remove("display-infos-active");
    bodyWhoIAM.classList.remove("display-infos-active");
    bodyInfos.classList.add("display-infos-active");
  }
}

btnwhoIAM.addEventListener("click", toggleInfos);
btnStack.addEventListener("click", toggleInfos);
btnInfos.addEventListener("click", toggleInfos);

// // Hotjar Tracking Code for https://www.charlescollignon.com/
// (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:2459115,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
// })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
