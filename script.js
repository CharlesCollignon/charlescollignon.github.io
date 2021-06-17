const contact = document.querySelector(".contact-infos-clic");
const infosCards = document.querySelector(".hidden");
const arrowTop = document.querySelector(".fa-arrow-circle-up");
const btn = document.querySelector(".btn-enter");
const loadingPage = document.querySelector(".loading-page")

// function myLoader() {
//   loader.style.display = "none";
// }
// $(btn).on("click", function () {
//   $(".loading-page").fadeOut(1000, "linear");
// });

function handleClick() {
  loadingPage.classList.add('zoomOut')
}

btn.addEventListener('click', handleClick)


function handleTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

arrowTop.addEventListener("click", handleTop);


// Hotjar Tracking Code for https://www.charlescollignon.com/ 

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2459115,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
