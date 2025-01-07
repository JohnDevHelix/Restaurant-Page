/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _assets_calamares_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/calamares.jpg */ \"./src/assets/calamares.jpg\");\n/* harmony import */ var _assets_sinigangnababoy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sinigangnababoy.jpg */ \"./src/assets/sinigangnababoy.jpg\");\n/* harmony import */ var _assets_turon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/turon.jpg */ \"./src/assets/turon.jpg\");\n/* harmony import */ var _assets_bananacue_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/bananacue.jpg */ \"./src/assets/bananacue.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction Menu() {\r\n  const divContent = document.querySelector(\"#content\");\r\n  const createDiv = document.createElement(\"div\");\r\n  const image = document.createElement(\"img\");\r\n  const h1 = document.createElement(\"h1\");\r\n  const h2 = document.createElement(\"h2\");\r\n  const h3 = document.createElement(\"h3\");\r\n\r\n  const menuContainer = createDiv.cloneNode(true);\r\n  menuContainer.classList.add(\"main-container\");\r\n  divContent.appendChild(menuContainer);\r\n\r\n  // menu header\r\n  const headerDiv = createDiv.cloneNode(true);\r\n  headerDiv.classList.add(\"menu-header\");\r\n  menuContainer.appendChild(headerDiv);\r\n  headerDiv.appendChild(h1);\r\n  h1.textContent = \"Kuya Louie's Menu\";\r\n\r\n  class Menu {\r\n    constructor(variety, food, description) {\r\n      this.variety = variety;\r\n      this.food = food;\r\n      this.description = description;\r\n    }\r\n\r\n    newMenu(food) {\r\n      const newMenuDiv = createDiv.cloneNode(true);\r\n      newMenuDiv.classList.add(\"menu\");\r\n\r\n      // image\r\n      const imgDiv = createDiv.cloneNode(true);\r\n      imgDiv.classList.add(\"menu-images\");\r\n      const foodImg = image.cloneNode(true);\r\n      imgDiv.appendChild(foodImg);\r\n      foodImg.src = food;\r\n\r\n      // food name\r\n      const nameDiv = createDiv.cloneNode(true);\r\n      nameDiv.classList.add(\"food-name\");\r\n      const foodText = h2.cloneNode(true);\r\n      nameDiv.appendChild(foodText);\r\n      foodText.textContent = this.food;\r\n\r\n      // description\r\n      const descDiv = createDiv.cloneNode(true);\r\n      descDiv.classList.add(\"desc\");\r\n      const descText = h3.cloneNode(true);\r\n      descDiv.appendChild(descText);\r\n      descText.textContent = this.description;\r\n\r\n      if (this.variety === \"Appetizer\") {\r\n        appetizersContainer.appendChild(imgDiv);\r\n        appetizersContainer.appendChild(nameDiv);\r\n        appetizersContainer.appendChild(descDiv);\r\n      } else if (this.variety === \"Main Course\") {\r\n        mainCourseContainer.appendChild(imgDiv);\r\n        mainCourseContainer.appendChild(nameDiv);\r\n        mainCourseContainer.appendChild(descDiv);\r\n      } else if (this.variety === \"Desserts\") {\r\n        dessertsContainer.appendChild(imgDiv);\r\n        dessertsContainer.appendChild(nameDiv);\r\n        dessertsContainer.appendChild(descDiv);\r\n      }\r\n    }\r\n  }\r\n\r\n  // appetizers\r\n  const appetizersContainer = createDiv.cloneNode(true);\r\n  appetizersContainer.classList.add(\"appetizer-container\");\r\n  menuContainer.appendChild(appetizersContainer);\r\n  const appName = createDiv.cloneNode(true);\r\n  appName.id = \"appetizer\";\r\n  appetizersContainer.appendChild(appName);\r\n  const appText = h2.cloneNode(true);\r\n  appName.appendChild(appText);\r\n  appText.textContent = \"Appetizers\";\r\n\r\n  // main course\r\n  const mainCourseContainer = createDiv.cloneNode(true);\r\n  mainCourseContainer.classList.add(\"course-container\");\r\n  menuContainer.appendChild(mainCourseContainer);\r\n  const mainName = createDiv.cloneNode(true);\r\n  mainName.id = \"main\";\r\n  mainCourseContainer.appendChild(mainName);\r\n  const mainText = h2.cloneNode(true);\r\n  mainName.appendChild(mainText);\r\n  mainText.textContent = \"Main Course\";\r\n\r\n  // desserts\r\n  const dessertsContainer = createDiv.cloneNode(true);\r\n  dessertsContainer.classList.add(\"desserts-container\");\r\n  menuContainer.appendChild(dessertsContainer);\r\n  const dessertName = createDiv.cloneNode(true);\r\n  dessertName.id = \"dessert\";\r\n  dessertsContainer.appendChild(dessertName);\r\n  const dessertText = h2.cloneNode(true);\r\n  dessertName.appendChild(dessertText);\r\n  dessertText.textContent = \"Desserts\";\r\n\r\n  // appetizers list\r\n  const appetizer1 = new Menu(\r\n    \"Appetizer\",\r\n    \"Calamares\",\r\n    \"Calamares is the Filipino version of the Mediterranean breaded fried squid dish, Calamari.\"\r\n  );\r\n  appetizer1.newMenu(_assets_calamares_jpg__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\n  // main course list\r\n  const main1 = new Menu(\r\n    \"Main Course\",\r\n    \"Sinigang na Baboy\",\r\n    \"Sinigang na baboy with Gabi is a Filipino pork soup with taro cooked in a sour broth.\"\r\n  );\r\n  main1.newMenu(_assets_sinigangnababoy_jpg__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\n  // desserts list\r\n  const dessert1 = new Menu(\r\n    \"Desserts\",\r\n    \"Turon\",\r\n    \"Turon are deep fried bananas wrapped in spring roll wrappers.\"\r\n  );\r\n  dessert1.newMenu(_assets_turon_jpg__WEBPACK_IMPORTED_MODULE_2__);\r\n\r\n  const dessert2 = new Menu(\r\n    \"Desserts\",\r\n    \"Banana Cue\",\r\n    \"A popular Filipino snack or street food made of fried bananas coated in caramelized brown sugar and served on skewers.\"\r\n  );\r\n  dessert2.newMenu(_assets_bananacue_jpg__WEBPACK_IMPORTED_MODULE_3__);\r\n}\r\n\r\nMenu();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUNZO0FBQ3BCO0FBQ1E7QUFDL0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFTO0FBQzVCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGFtYXJlcyBmcm9tIFwiLi9hc3NldHMvY2FsYW1hcmVzLmpwZ1wiO1xyXG5pbXBvcnQgU2luaWdhbmduYUJhYm95IGZyb20gXCIuL2Fzc2V0cy9zaW5pZ2FuZ25hYmFib3kuanBnXCI7XHJcbmltcG9ydCBUdXJvbiBmcm9tIFwiLi9hc3NldHMvdHVyb24uanBnXCI7XHJcbmltcG9ydCBCYW5hbmFDdWUgZnJvbSBcIi4vYXNzZXRzL2JhbmFuYWN1ZS5qcGdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZW51KCkge1xyXG4gIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcblxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVEaXYuY2xvbmVOb2RlKHRydWUpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xyXG4gIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIG1lbnUgaGVhZGVyXHJcbiAgY29uc3QgaGVhZGVyRGl2ID0gY3JlYXRlRGl2LmNsb25lTm9kZSh0cnVlKTtcclxuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGVyXCIpO1xyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcclxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJLdXlhIExvdWllJ3MgTWVudVwiO1xyXG5cclxuICBjbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhcmlldHksIGZvb2QsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudmFyaWV0eSA9IHZhcmlldHk7XHJcbiAgICAgIHRoaXMuZm9vZCA9IGZvb2Q7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBuZXdNZW51KGZvb2QpIHtcclxuICAgICAgY29uc3QgbmV3TWVudURpdiA9IGNyZWF0ZURpdi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIG5ld01lbnVEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gICAgICAvLyBpbWFnZVxyXG4gICAgICBjb25zdCBpbWdEaXYgPSBjcmVhdGVEaXYuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VzXCIpO1xyXG4gICAgICBjb25zdCBmb29kSW1nID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoZm9vZEltZyk7XHJcbiAgICAgIGZvb2RJbWcuc3JjID0gZm9vZDtcclxuXHJcbiAgICAgIC8vIGZvb2QgbmFtZVxyXG4gICAgICBjb25zdCBuYW1lRGl2ID0gY3JlYXRlRGl2LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xyXG4gICAgICBjb25zdCBmb29kVGV4dCA9IGgyLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgbmFtZURpdi5hcHBlbmRDaGlsZChmb29kVGV4dCk7XHJcbiAgICAgIGZvb2RUZXh0LnRleHRDb250ZW50ID0gdGhpcy5mb29kO1xyXG5cclxuICAgICAgLy8gZGVzY3JpcHRpb25cclxuICAgICAgY29uc3QgZGVzY0RpdiA9IGNyZWF0ZURpdi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGRlc2NEaXYuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XHJcbiAgICAgIGNvbnN0IGRlc2NUZXh0ID0gaDMuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBkZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NUZXh0KTtcclxuICAgICAgZGVzY1RleHQudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgaWYgKHRoaXMudmFyaWV0eSA9PT0gXCJBcHBldGl6ZXJcIikge1xyXG4gICAgICAgIGFwcGV0aXplcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcclxuICAgICAgICBhcHBldGl6ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xyXG4gICAgICAgIGFwcGV0aXplcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY0Rpdik7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy52YXJpZXR5ID09PSBcIk1haW4gQ291cnNlXCIpIHtcclxuICAgICAgICBtYWluQ291cnNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0Rpdik7XHJcbiAgICAgICAgbWFpbkNvdXJzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBtYWluQ291cnNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWV0eSA9PT0gXCJEZXNzZXJ0c1wiKSB7XHJcbiAgICAgICAgZGVzc2VydHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcclxuICAgICAgICBkZXNzZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgICAgICBkZXNzZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjRGl2KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYXBwZXRpemVyc1xyXG4gIGNvbnN0IGFwcGV0aXplcnNDb250YWluZXIgPSBjcmVhdGVEaXYuY2xvbmVOb2RlKHRydWUpO1xyXG4gIGFwcGV0aXplcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFwcGV0aXplci1jb250YWluZXJcIik7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBldGl6ZXJzQ29udGFpbmVyKTtcclxuICBjb25zdCBhcHBOYW1lID0gY3JlYXRlRGl2LmNsb25lTm9kZSh0cnVlKTtcclxuICBhcHBOYW1lLmlkID0gXCJhcHBldGl6ZXJcIjtcclxuICBhcHBldGl6ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcE5hbWUpO1xyXG4gIGNvbnN0IGFwcFRleHQgPSBoMi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgYXBwTmFtZS5hcHBlbmRDaGlsZChhcHBUZXh0KTtcclxuICBhcHBUZXh0LnRleHRDb250ZW50ID0gXCJBcHBldGl6ZXJzXCI7XHJcblxyXG4gIC8vIG1haW4gY291cnNlXHJcbiAgY29uc3QgbWFpbkNvdXJzZUNvbnRhaW5lciA9IGNyZWF0ZURpdi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgbWFpbkNvdXJzZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY291cnNlLWNvbnRhaW5lclwiKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db3Vyc2VDb250YWluZXIpO1xyXG4gIGNvbnN0IG1haW5OYW1lID0gY3JlYXRlRGl2LmNsb25lTm9kZSh0cnVlKTtcclxuICBtYWluTmFtZS5pZCA9IFwibWFpblwiO1xyXG4gIG1haW5Db3Vyc2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk5hbWUpO1xyXG4gIGNvbnN0IG1haW5UZXh0ID0gaDIuY2xvbmVOb2RlKHRydWUpO1xyXG4gIG1haW5OYW1lLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcclxuICBtYWluVGV4dC50ZXh0Q29udGVudCA9IFwiTWFpbiBDb3Vyc2VcIjtcclxuXHJcbiAgLy8gZGVzc2VydHNcclxuICBjb25zdCBkZXNzZXJ0c0NvbnRhaW5lciA9IGNyZWF0ZURpdi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgZGVzc2VydHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzLWNvbnRhaW5lclwiKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRzQ29udGFpbmVyKTtcclxuICBjb25zdCBkZXNzZXJ0TmFtZSA9IGNyZWF0ZURpdi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgZGVzc2VydE5hbWUuaWQgPSBcImRlc3NlcnRcIjtcclxuICBkZXNzZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0TmFtZSk7XHJcbiAgY29uc3QgZGVzc2VydFRleHQgPSBoMi5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgZGVzc2VydE5hbWUuYXBwZW5kQ2hpbGQoZGVzc2VydFRleHQpO1xyXG4gIGRlc3NlcnRUZXh0LnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xyXG5cclxuICAvLyBhcHBldGl6ZXJzIGxpc3RcclxuICBjb25zdCBhcHBldGl6ZXIxID0gbmV3IE1lbnUoXHJcbiAgICBcIkFwcGV0aXplclwiLFxyXG4gICAgXCJDYWxhbWFyZXNcIixcclxuICAgIFwiQ2FsYW1hcmVzIGlzIHRoZSBGaWxpcGlubyB2ZXJzaW9uIG9mIHRoZSBNZWRpdGVycmFuZWFuIGJyZWFkZWQgZnJpZWQgc3F1aWQgZGlzaCwgQ2FsYW1hcmkuXCJcclxuICApO1xyXG4gIGFwcGV0aXplcjEubmV3TWVudShDYWxhbWFyZXMpO1xyXG5cclxuICAvLyBtYWluIGNvdXJzZSBsaXN0XHJcbiAgY29uc3QgbWFpbjEgPSBuZXcgTWVudShcclxuICAgIFwiTWFpbiBDb3Vyc2VcIixcclxuICAgIFwiU2luaWdhbmcgbmEgQmFib3lcIixcclxuICAgIFwiU2luaWdhbmcgbmEgYmFib3kgd2l0aCBHYWJpIGlzIGEgRmlsaXBpbm8gcG9yayBzb3VwIHdpdGggdGFybyBjb29rZWQgaW4gYSBzb3VyIGJyb3RoLlwiXHJcbiAgKTtcclxuICBtYWluMS5uZXdNZW51KFNpbmlnYW5nbmFCYWJveSk7XHJcblxyXG4gIC8vIGRlc3NlcnRzIGxpc3RcclxuICBjb25zdCBkZXNzZXJ0MSA9IG5ldyBNZW51KFxyXG4gICAgXCJEZXNzZXJ0c1wiLFxyXG4gICAgXCJUdXJvblwiLFxyXG4gICAgXCJUdXJvbiBhcmUgZGVlcCBmcmllZCBiYW5hbmFzIHdyYXBwZWQgaW4gc3ByaW5nIHJvbGwgd3JhcHBlcnMuXCJcclxuICApO1xyXG4gIGRlc3NlcnQxLm5ld01lbnUoVHVyb24pO1xyXG5cclxuICBjb25zdCBkZXNzZXJ0MiA9IG5ldyBNZW51KFxyXG4gICAgXCJEZXNzZXJ0c1wiLFxyXG4gICAgXCJCYW5hbmEgQ3VlXCIsXHJcbiAgICBcIkEgcG9wdWxhciBGaWxpcGlubyBzbmFjayBvciBzdHJlZXQgZm9vZCBtYWRlIG9mIGZyaWVkIGJhbmFuYXMgY29hdGVkIGluIGNhcmFtZWxpemVkIGJyb3duIHN1Z2FyIGFuZCBzZXJ2ZWQgb24gc2tld2Vycy5cIlxyXG4gICk7XHJcbiAgZGVzc2VydDIubmV3TWVudShCYW5hbmFDdWUpO1xyXG59XHJcblxyXG5NZW51KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/assets/bananacue.jpg":
/*!**********************************!*\
  !*** ./src/assets/bananacue.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2d4fb098e5d174d014c.jpg";

/***/ }),

/***/ "./src/assets/calamares.jpg":
/*!**********************************!*\
  !*** ./src/assets/calamares.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "964783626da6f336d075.jpg";

/***/ }),

/***/ "./src/assets/sinigangnababoy.jpg":
/*!****************************************!*\
  !*** ./src/assets/sinigangnababoy.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d3e1bbcf3648be6082c.jpg";

/***/ }),

/***/ "./src/assets/turon.jpg":
/*!******************************!*\
  !*** ./src/assets/turon.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eb76c8c94e4b7e9b2d7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;