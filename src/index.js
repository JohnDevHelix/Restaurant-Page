import { HomePage } from "./home";
import { Menu } from "./menu";
import { ContactUs } from "./contact";
import "./style.css";

let currentScreen = HomePage();
const body = document.querySelector("body");
const content = document.querySelector("#content");
const createDiv = document.createElement("div");
const p = document.createElement("p");

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

const footer = document.createElement("footer");
const footerDiv = createDiv.cloneNode(true);
footer.appendChild(footerDiv);
footerDiv.id = "footer";
const footerP = p.cloneNode(true);
footerDiv.appendChild(footerP);
footerP.innerHTML = "&bull; &copy; 2025 - Kuya Louie's Carinderia &bull;";
body.appendChild(footer);
