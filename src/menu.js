import Calamares from "./assets/calamares.jpg";
import SinigangnaBaboy from "./assets/sinigangnababoy.jpg";
import Turon from "./assets/turon.jpg";
import BananaCue from "./assets/bananacue.jpg";
import Dynamite from "./assets/dynamite.jpg";
import Afritada from "./assets/afritada.jpg";
import Adobo from "./assets/adobo.jpg";
import HaloHalo from "./assets/halohalo.jpg";

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
  const headerMenuDiv = createDiv.cloneNode(true);
  headerMenuDiv.classList.add("menu-header");
  menuContainer.appendChild(headerMenuDiv);
  headerMenuDiv.appendChild(h1);
  h1.textContent = "Kuya Louie's Menu";

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

  const appSubContainer = createDiv.cloneNode(true);
  appSubContainer.classList.add("app-subcontainer");
  appetizersContainer.appendChild(appSubContainer);

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

  const mainSubContainer = createDiv.cloneNode(true);
  mainSubContainer.classList.add("main-subcontainer");
  mainCourseContainer.appendChild(mainSubContainer);

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

  const dessSubContainer = createDiv.cloneNode(true);
  dessSubContainer.classList.add("dessert-subcontainer");
  dessertsContainer.appendChild(dessSubContainer);

  class Menu {
    constructor(variety, food, description) {
      this.variety = variety;
      this.food = food;
      this.description = description;
    }

    appendMenuItem(subContainer, food) {
      const newMenuDiv = createDiv.cloneNode(true);
      newMenuDiv.classList.add("menu");

      const nameDescDiv = createDiv.cloneNode(true);
      nameDescDiv.classList.add("name-desc");

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

      // append elements
      newMenuDiv.appendChild(imgDiv);
      newMenuDiv.appendChild(nameDescDiv);
      nameDescDiv.appendChild(nameDiv);
      nameDescDiv.appendChild(descDiv);

      subContainer.appendChild(newMenuDiv);
    }

    newMenu(food) {
      if (this.variety === "Appetizer") {
        this.appendMenuItem(appSubContainer, food);
      } else if (this.variety === "Main Course") {
        this.appendMenuItem(mainSubContainer, food);
      } else if (this.variety === "Desserts") {
        this.appendMenuItem(dessSubContainer, food);
      }
    }
  }

  // appetizers list
  const appetizer1 = new Menu(
    "Appetizer",
    "Calamares",
    "Calamares is the Filipino version of the Mediterranean breaded fried squid dish, Calamari."
  );
  appetizer1.newMenu(Calamares);

  const appetizer2 = new Menu(
    "Appetizer",
    "Dynamite Lumpia",
    "Dynamite Lumpia is a version of the popular Filipino lumpia. This is unique because it involves the use of stuffed long green chili."
  );
  appetizer2.newMenu(Dynamite);

  // main course list
  const main1 = new Menu(
    "Main Course",
    "Sinigang na Baboy",
    "Sinigang na baboy with Gabi is a Filipino pork soup with taro cooked in a sour broth."
  );
  main1.newMenu(SinigangnaBaboy);

  const main2 = new Menu(
    "Main Course",
    "Chicken Afritada",
    "Chicken Afritada or afritadang manok is a type of Filipino chicken stew with tomato based sauced."
  );
  main2.newMenu(Afritada);

  const main3 = new Menu(
    "Main Course",
    "Pork Adobo",
    "Pork Adobo is pork cooked in soy sauce, vinegar, and garlic. It is considered as the Philippine's national dish because of its popularity."
  );
  main3.newMenu(Adobo);

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
  );
  dessert2.newMenu(BananaCue);

  const dessert3 = new Menu(
    "Desserts",
    "Halo-Halo",
    "Halo-Halo is a refreshing Filipino ice dessert made with various tropical ingredients topped with milk, leche flan, and ice cream."
  );
  dessert3.newMenu(HaloHalo);
}
