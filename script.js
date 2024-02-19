var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
let menuIconDiv = document.querySelector(".menu-icon")
let tab = window.matchMedia("(max-width: 770px)");
let mobile = window.matchMedia("(max-width: 600px)");
const mediaTab = () => {
 
  let banner = document.querySelectorAll(".swiper-slide img");
  banner.forEach(BannerImage => {
    let newSrc = BannerImage.getAttribute("alt-src")
    BannerImage.setAttribute("alt-src", BannerImage.getAttribute("src"));
    BannerImage.setAttribute("src", newSrc);
  })
}
mobile.addEventListener("change",mediaTab);
let navChange = window.matchMedia("(max-width: 980px)");
navChange.addEventListener("change", () => {
  if(navChange.matches){
    menuIconDiv.style.display = "flex";
  }
  else{
    menuIconDiv.style.display = "none";
  }
} )
let menu = document.querySelector(".menu-page");

let menuIcon = document.querySelector(".menu-icon i")
let flag = true;
menuIconDiv.addEventListener("click", (evt) => {
  let newI = menuIcon.getAttribute("alt-class");
  menuIcon.setAttribute("alt-class", menuIcon.getAttribute("class"));
  menuIcon.setAttribute("class", newI);
  if (flag){
    menu.style.left = 0;
    document.querySelector(".pages").style.display = "none";
    flag = false;
  }
  else {
    menu.style.left = "-120vw";
    document.querySelector(".pages").style.display = "block";
    flag = true;
  }
})