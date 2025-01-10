import { HomePage } from "./home";
import { Menu } from "./menu";
import { ContactUs } from "./contact";
import "./style.css";

let currentScreen = HomePage();
const content = document.querySelector("#content");
const createDiv = document.createElement("div");

// nav bar
const header = document.querySelector("header");
const navs = document.querySelectorAll("nav");
const headerDiv = createDiv.cloneNode(true);
headerDiv.classList.add("header-div");
const navsDiv = createDiv.cloneNode(true);
navsDiv.classList.add("nav-div");
header.appendChild(headerDiv);
headerDiv.appendChild(navsDiv);
navs.forEach((nav) => {
  navsDiv.appendChild(nav);
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Menu") {
      content.innerHTML = "";
      currentScreen = Menu();
    } else if (button.textContent === "Contact Us") {
      content.innerHTML = "";
      currentScreen = ContactUs();
    } else {
      content.innerHTML = "";
      currentScreen = HomePage();
    }
  });
});
