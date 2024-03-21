import 'normalize.css'
import './base.css';
import homePageLoad from "./homePageLoad";
import menuPageLoad from "./menuPageLoad";
import aboutPageLoad from "./aboutPageLoad";

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");

homePageLoad();

homeBtn.addEventListener("click", homePageLoad);
menuBtn.addEventListener("click", menuPageLoad);
aboutBtn.addEventListener("click", aboutPageLoad);