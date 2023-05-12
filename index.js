const btnMenu = document.querySelector(".menu-mobile");
const menuCollapsed = document.querySelector(".nav-menu");
const btnCloseMenuCollapsed = document.querySelector(".menu-close-mobile");
// features
const linkFeatures = document.querySelector(".link-features");
const listFeatures = document.querySelector(".features-info");
const imgDirectionFeatures = document.querySelector(".img-direction-features");
// company
const linkCompany = document.querySelector(".link-company");
const listCompany = document.querySelector(".company-info");
const imgDirectionCompany = document.querySelector(".img-direction-company");
// desktop
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const imgHeader = document.querySelector(".img-header");
const listLink = document.querySelector(".list-link");

const linkHeaderFeatures = document.querySelector(".link-header-features");
const linkHeaderCompany = document.querySelector(".link-header-company");

const featuresInfoHeader = document.querySelector(".features-info-header");
const companyInfoHeader = document.querySelector(".company-info-header");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.add("inactive");
  menuCollapsed.classList.remove("inactive");
});

btnCloseMenuCollapsed.addEventListener("click", () => {
  menuCollapsed.classList.add("inactive");
  btnMenu.classList.remove("inactive");
});

linkFeatures.addEventListener("click", () => {
  if (listFeatures.classList.contains("inactive")) {
    imgDirectionFeatures.src = "./images/icon-arrow-up.svg";
    listFeatures.classList.remove("inactive");
  } else {
    imgDirectionFeatures.src = "./images/icon-arrow-down.svg";
    listFeatures.classList.add("inactive");
  }
});
linkCompany.addEventListener("click", () => {
  if (listCompany.classList.contains("inactive")) {
    imgDirectionCompany.src = "./images/icon-arrow-up.svg";
    listCompany.classList.remove("inactive");
  } else {
    imgDirectionCompany.src = "./images/icon-arrow-down.svg";
    listCompany.classList.add("inactive");
  }
});

const modifiredView = () => {
  if (window.innerWidth >= 850) {
    imgHeader.src = "./images/image-hero-desktop.png";
    btnMenu.classList.add("inactive");
    btnLogin.classList.remove("inactive");
    btnRegister.classList.remove("inactive");
    listLink.classList.remove("inactive");
  } else {
    btnMenu.classList.remove("inactive");
    btnLogin.classList.add("inactive");
    btnRegister.classList.add("inactive");
    listLink.classList.add("inactive");
  }
};

window.addEventListener("resize", modifiredView);

linkHeaderFeatures.addEventListener("click", () => {
  if (featuresInfoHeader.classList.contains("inactive")) {
    featuresInfoHeader.classList.remove("inactive");
  } else {
    featuresInfoHeader.classList.add("inactive");
  }
});

linkHeaderCompany.addEventListener("click", () => {
  if (companyInfoHeader.classList.contains("inactive")) {
    companyInfoHeader.classList.remove("inactive");
  } else {
    companyInfoHeader.classList.add("inactive");
  }
});
