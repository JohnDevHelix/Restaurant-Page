import Calamares from "./assets/calamares.jpg";
import SinigangnaBaboy from "./assets/sinigangnababoy.jpg";
import Turon from "./assets/turon.jpg";
import BananaCue from "./assets/bananacue.jpg"

export function Menu() {
  const divContent = document.querySelector("#content");
  const createDiv = document.createElement("div");
  const image = document.createElement("img");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");

  const menuContainer = createDiv.cloneNode(true);
  menuContainer.classList.add("main-container");
  divContent.appendChild(menuContainer);

  // menu header
  const headerDiv = createDiv.cloneNode(true);
  headerDiv.classList.add("menu-header");
  menuContainer.appendChild(headerDiv);
  headerDiv.appendChild(h1);
  h1.textContent = "Kuya Louie's Menu";

  class Menu {
    constructor(variety, food, description) {
      this.variety = variety;
      this.food = food;
      this.description = description;
    }

    newMenu(food) {
      const newMenuDiv = createDiv.cloneNode(true);
      newMenuDiv.classList.add("menu");

      // image
      const imgDiv = createDiv.cloneNode(true);
      imgDiv.classList.add("menu-images");
      const foodImg = image.cloneNode(true);
      imgDiv.appendChild(foodImg);
      foodImg.src = food;

      // food name
      const nameDiv = createDiv.cloneNode(true);
      nameDiv.classList.add("food-name");
      const foodText = h2.cloneNode(true);
      nameDiv.appendChild(foodText);
      foodText.textContent = this.food;

      // description
      const descDiv = createDiv.cloneNode(true);
      descDiv.classList.add("desc");
      const descText = h3.cloneNode(true);
      descDiv.appendChild(descText);
      descText.textContent = this.description;

      if (this.variety === "Appetizer") {
        appetizersContainer.appendChild(imgDiv);
        appetizersContainer.appendChild(nameDiv);
        appetizersContainer.appendChild(descDiv);
      } else if (this.variety === "Main Course") {
        mainCourseContainer.appendChild(imgDiv);
        mainCourseContainer.appendChild(nameDiv);
        mainCourseContainer.appendChild(descDiv);
      } else if (this.variety === "Desserts") {
        dessertsContainer.appendChild(imgDiv);
        dessertsContainer.appendChild(nameDiv);
        dessertsContainer.appendChild(descDiv);
      }
    }
  }

  // appetizers
  const appetizersContainer = createDiv.cloneNode(true);
  appetizersContainer.classList.add("appetizer-container");
  menuContainer.appendChild(appetizersContainer);
  const appName = createDiv.cloneNode(true);
  appName.id = "appetizer";
  appetizersContainer.appendChild(appName);
  const appText = h2.cloneNode(true);
  appName.appendChild(appText);
  appText.textContent = "Appetizers";

  // main course
  const mainCourseContainer = createDiv.cloneNode(true);
  mainCourseContainer.classList.add("course-container");
  menuContainer.appendChild(mainCourseContainer);
  const mainName = createDiv.cloneNode(true);
  mainName.id = "main";
  mainCourseContainer.appendChild(mainName);
  const mainText = h2.cloneNode(true);
  mainName.appendChild(mainText);
  mainText.textContent = "Main Course";

  // desserts
  const dessertsContainer = createDiv.cloneNode(true);
  dessertsContainer.classList.add("desserts-container");
  menuContainer.appendChild(dessertsContainer);
  const dessertName = createDiv.cloneNode(true);
  dessertName.id = "dessert";
  dessertsContainer.appendChild(dessertName);
  const dessertText = h2.cloneNode(true);
  dessertName.appendChild(dessertText);
  dessertText.textContent = "Desserts";

  // appetizers list
  const appetizer1 = new Menu(
    "Appetizer",
    "Calamares",
    "Calamares is the Filipino version of the Mediterranean breaded fried squid dish, Calamari."
  );
  appetizer1.newMenu(Calamares);

  // main course list
  const main1 = new Menu(
    "Main Course",
    "Sinigang na Baboy",
    "Sinigang na baboy with Gabi is a Filipino pork soup with taro cooked in a sour broth."
  );
  main1.newMenu(SinigangnaBaboy);

  // desserts list
  const dessert1 = new Menu(
    "Desserts",
    "Turon",
    "Turon are deep fried bananas wrapped in spring roll wrappers."
  );
  dessert1.newMenu(Turon);

  const dessert2 = new Menu(
    "Desserts",
    "Banana Cue",
    "A popular Filipino snack or street food made of fried bananas coated in caramelized brown sugar and served on skewers."
  )
  dessert2.newMenu(BananaCue);
}

Menu();
