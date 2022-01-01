/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact(){\r\n    const mainDiv = document.createElement(\"div\");\r\n    mainDiv.id = \"main\";\r\n    \r\n    let p = document.createElement(\"p\");\r\n    p.innerHTML = \"this is my contact\";\r\n\r\n    mainDiv.appendChild(p);\r\n\r\n    return mainDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\r\n\r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu(){\r\n    const mainDiv = document.createElement(\"div\");\r\n    mainDiv.id = \"main\";\r\n\r\n    const menuDiv = document.createElement(\"div\");\r\n    menuDiv.id = \"menu\";\r\n\r\n    const items = [\"buuz\", \"huushuur\", \"tsuivan\", \"banshtai tsai\"];\r\n\r\n    for (let i = 0; i < items.length; i++){\r\n        const item = document.createElement(\"div\");\r\n        item.classList.add(\"dish\");\r\n        item.innerHTML = items[i].toUpperCase();\r\n        menuDiv.appendChild(item);\r\n    }\r\n    mainDiv.appendChild(menuDiv);\r\n\r\n    return mainDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\nfunction navbar(){\r\n    const navDiv = document.createElement(\"div\");\r\n    // give id of nav\r\n    navDiv.setAttribute(\"id\", \"nav\");\r\n\r\n    const header = document.createElement(\"div\");\r\n    header.setAttribute(\"id\", \"header\");\r\n    const h1 = document.createElement(\"h1\");\r\n    h1.innerHTML = \"Buuz & Huushuur\";\r\n    header.appendChild(h1);\r\n\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    const li1 = document.createElement(\"li\");\r\n    const li2 = document.createElement(\"li\");\r\n    const li3 = document.createElement(\"li\");\r\n\r\n    const a1 = document.createElement(\"a\");\r\n    const a2 = document.createElement(\"a\");\r\n    const a3 = document.createElement(\"a\");\r\n\r\n    a1.setAttribute(\"href\", \"#\");\r\n    a2.setAttribute(\"href\", \"#\");\r\n    a3.setAttribute(\"href\", \"#\");\r\n\r\n    a1.innerHTML = \"home\";\r\n    a2.innerHTML = \"menu\";\r\n    a3.innerHTML = \"contact\";\r\n\r\n    li1.appendChild(a1);\r\n    li2.appendChild(a2);\r\n    li3.appendChild(a3);\r\n\r\n    li1.classList.add(\"button-nav\", \"active\");\r\n    li2.classList.add(\"button-nav\");\r\n    li3.classList.add(\"button-nav\");\r\n\r\n    li1.id = \"homeLi\";\r\n    li2.id = \"menuLi\";\r\n    li3.id = \"contactLi\";\r\n\r\n    ul.appendChild(li1)\r\n    ul.appendChild(li2);\r\n    ul.appendChild(li3);\r\n    nav.appendChild(ul);\r\n\r\n    navDiv.appendChild(header);\r\n    navDiv.appendChild(nav);\r\n\r\n    return navDiv;\r\n}\r\nfunction mainSection(){\r\n    const mainDiv = document.createElement(\"div\");\r\n    mainDiv.id = \"main\";\r\n    const homeDiv = document.createElement(\"div\");\r\n    homeDiv.id = \"home\";\r\n    \r\n    const p1 = document.createElement(\"p\");\r\n    const p2 = document.createElement(\"p\");\r\n    const p3 = document.createElement(\"p\");\r\n    const img = document.createElement(\"img\");\r\n    const p4 = document.createElement(\"p\");\r\n    const footer = document.createElement(\"footer\");\r\n\r\n    p1.innerHTML = \"Best Buuz & Huushuur in Mongolia\";\r\n    p2.innerHTML = \"Order now or Choi (our professional floor sweeper) will get you!\";\r\n    p3.innerHTML = \"Our Experienced Head Chef Mr.Telmuun\";\r\n    img.setAttribute(\"src\", \"images/headcheftelmuun.jpg\");\r\n    img.setAttribute(\"alt\", \"head chef\");\r\n    p4.innerHTML = \"Choi lickin' good!\";\r\n    footer.innerHTML = \"made by Tseku\";\r\n\r\n\r\n    homeDiv.appendChild(p1);\r\n    homeDiv.appendChild(p2);\r\n    homeDiv.appendChild(p3);\r\n    homeDiv.appendChild(img);\r\n    homeDiv.appendChild(p4);\r\n    homeDiv.appendChild(footer);\r\n\r\n    mainDiv.appendChild(homeDiv);\r\n\r\n    return mainDiv;\r\n}\r\nfunction loadPage(){\r\n    let content = document.querySelector(\"#content\");\r\n\r\n    content.appendChild(navbar());\r\n    content.appendChild(mainSection());\r\n\r\n    let lis = document.querySelectorAll(\".button-nav\");\r\n    lis.forEach(li => {\r\n        li.addEventListener(\"click\", () => {\r\n            content.removeChild(content.lastChild);\r\n            let menuLi = document.querySelector(\"#menuLi\");\r\n            let contactLi = document.querySelector(\"#contactLi\");\r\n            let homeLi = document.querySelector(\"#homeLi\")\r\n\r\n            if (li.firstChild.innerHTML == \"home\"){\r\n                homeLi.classList.remove(\"active\");\r\n                homeLi.classList.add(\"active\");\r\n                menuLi.classList.remove(\"active\");\r\n                contactLi.classList.remove(\"active\");\r\n                content.appendChild(mainSection());\r\n            } else if (li.firstChild.innerHTML == \"menu\"){\r\n                homeLi.classList.remove(\"active\");\r\n                menuLi.classList.add(\"active\");\r\n                contactLi.classList.remove(\"active\");\r\n                content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n            } else if (li.firstChild.innerHTML == \"contact\"){\r\n                homeLi.classList.remove(\"active\");\r\n                menuLi.classList.remove(\"active\");\r\n                contactLi.classList.add(\"active\");\r\n                content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n            }\r\n        })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant_page/./src/page-load.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;