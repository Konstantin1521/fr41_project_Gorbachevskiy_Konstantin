/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fr_project_n_two/./style/style.css?");

/***/ }),

/***/ "./scripts/getBools.js":
/*!*****************************!*\
  !*** ./scripts/getBools.js ***!
  \*****************************/
/***/ (() => {

eval("const container = document.querySelector('.main_element_book-list')\r\nconst listCategory = document.querySelectorAll('.aside_container-li')\r\nconst categoryList = document.querySelector('.aside_container-ul')\r\nconst btnFooter = document.querySelector('.footer-btn')\r\n\r\nconst apiKey = `AIzaSyCusl7IG5u49vROD01UcD0lnz5Pcyl8gjE`\r\nconst urlApi = `https://www.googleapis.com/books/v1/`\r\n\r\nlistCategory.forEach(list =>{\r\n    list.dataset.id = list.getAttribute('value')\r\n})\r\n\r\ncategoryList.addEventListener('click', getCategoryBook)\r\n\r\n\r\nfunction getCategoryBook(e){\r\n    e.preventDefault()\r\n\r\n  if (e.target.dataset.id){\r\n    getCategoryInfoHTTP(e.target.dataset.id, renderBooks)\r\n    i = 12\r\n  }\r\n}\r\n\r\nfunction getCategoryInfoHTTP(id, cb, n = 12){\r\n    const xhr = new XMLHttpRequest()\r\n    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=\"subject:${id}\"&key${apiKey}&printType=books&startIndex=0&maxResults=${n}&langRestrict=en`)\r\n\r\n    xhr.addEventListener('load', () => {\r\n        const response = JSON.parse(xhr.response);\r\n        cb(response);\r\n      });\r\n\r\n      xhr.addEventListener('error', () => {\r\n        console.log('error');\r\n      });\r\n    \r\n    xhr.send();\r\n}\r\n\r\n\r\nfunction getBooks(cb){\r\n    const xhr = new XMLHttpRequest()\r\n    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=\"subject:Architecture\"&key${apiKey}&printType=books&startIndex=0&maxResults=12&langRestrict=en`)\r\n\r\n    xhr.addEventListener('load', () => {\r\n        const response = JSON.parse(xhr.response);\r\n        cb(response);\r\n      });\r\n\r\n      xhr.addEventListener('error', () => {\r\n        console.log('error');\r\n      });\r\n    \r\n    xhr.send();\r\n}\r\n\r\nfunction renderBooks(response){\r\n    container.textContent = ''\r\n    console.log(response);\r\n    let fragment = ''\r\n    response.items.forEach( book => {\r\n        const card = cardTemplate(book)\r\n        fragment += card\r\n    })\r\n\r\n    container.insertAdjacentHTML('afterbegin', fragment);\r\n}\r\n\r\nfunction cardTemplate(book){\r\n  let arrId = [];\r\n  let btn =  `<button class=\"buy_btn\" data-id=\"${book.id}\">buy now</button>`\r\n  if(localStorage.getItem('in_the_cart')){\r\n    arrId = JSON.parse(localStorage.getItem('in_the_cart'));\r\n    arrId.forEach(el => {\r\n      if( el == book.id){\r\n        btn = `<button class=\"buy_btn clickBtn\" data-id=\"${book.id}\">in the cart</button>`;\r\n      }\r\n    })\r\n  }\r\n    return `\r\n    <div class=\"main_books-element\">\r\n        <img class=\"main_books_img\" src=\"${book.volumeInfo.imageLinks?.thumbnail || 'https://www.raumplus.ru/upload/iblock/3db/Skoro-zdes-budet-foto.jpg'}\">\r\n        <div class=\"main_books-element_info\">\r\n          <p class='books-element_info-authors'>${book.volumeInfo.authors}</p>\r\n            <h3 class=\"books-element_info-head\">${book.volumeInfo.title}</h3>\r\n        \r\n\r\n            <div class=\"grade\">\r\n                <div class=\"stars\"></div>\r\n                <p class=\"number_and_text\"> ${ratingsTemplate(book.volumeInfo?.averageRating, book.volumeInfo?.ratingsCount) || ''}</p>\r\n            </div>\r\n\r\n            <p class=\"discription\">\r\n            ${truncateString(book.volumeInfo.description, 70)}\r\n            </p>\r\n\r\n            <p class=\"price\">${ book.saleInfo.retailPrice?.amount || ''} ${ book.saleInfo.retailPrice?.currencyCode || ''}</p>\r\n\r\n            ${btn}\r\n\r\n            </div>\r\n        </div>\r\n    `\r\n}\r\n\r\nfunction truncateString(str, maxLength) {\r\n\r\n    str = String(str)\r\n    if (str.length > maxLength && str) {\r\n      str = str.substring(0, maxLength - 1) + \"...\";\r\n      return str;\r\n    }else{\r\n      return 'скоро будет описание'\r\n    }\r\n\r\n    \r\n  }\r\n\r\n  function ratingsTemplate(num, str){\r\n    if(num == 1){\r\n      return `\r\n      <div class='img_stars-container'>\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <p>${str} review</p>\r\n      </div>\r\n      `\r\n    }else if(num == 2){\r\n      return `\r\n      <div class='img_stars-container'>\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <p>${str} review</p>\r\n      </div>\r\n      `\r\n    }else if(num == 3){\r\n      return `\r\n      <div class='img_stars-container'>\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <p>${str} review</p>\r\n      </div>\r\n      `\r\n    }else if(num == 4){\r\n      return `\r\n      <div class='img_stars-container'>\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_emptiness.svg\">\r\n        <p>${str} review</p>\r\n      </div>\r\n      `\r\n    }else if(num == 5){\r\n      return `\r\n      <div class='img_stars-container'>\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <img class=\"img_stars\" src=\"../img/star_full.svg\">\r\n        <p>${str} review</p>\r\n      </div>\r\n      `\r\n    }\r\n  }\r\n\r\ngetBooks(renderBooks)\r\n\r\nbtnFooter.addEventListener('click', getMoreBook)\r\nlet i = 12\r\nfunction getMoreBook(){\r\n  \r\n  i += 6\r\n  listCategory.forEach(btn => {\r\n    if(btn.classList.contains('active_li')){\r\n      getCategoryInfoHTTP(btn.dataset.id, renderBooks, i);\r\n    }\r\n});\r\n}\r\n\r\nwindow.addEventListener('beforeunload', function(event) {\r\n  localStorage.clear();\r\n  event.preventDefault();\r\n  event.returnValue = ''; \r\n});\r\n\r\n\n\n//# sourceURL=webpack://fr_project_n_two/./scripts/getBools.js?");

/***/ }),

/***/ "./scripts/slider.js":
/*!***************************!*\
  !*** ./scripts/slider.js ***!
  \***************************/
/***/ (() => {

eval("let images = [{\r\n    url: \"../img/banner.svg\",\r\n  }, {\r\n    url: \"../img/banner2.svg\",\r\n  }, {\r\n    url: \"../img/banner3.svg\",\r\n  },\r\n];\r\n\r\nfunction initSlider () {\r\n    if (!images || !images.length) return\r\n\r\n    let sliderImages = document.querySelector('.container_slider-img')\r\n    let sliderDots = document.querySelector('.con_slid_dot')\r\n\r\n    initImages()\r\n    initDots()\r\n\r\n    function initImages(){\r\n        images.forEach((image, index) => {\r\n            let imageDiv = `<div class=\"image n${index} ${index === 0? \"active\" : \"\"}\" style=\"background-image:url(${images[index].url});\" data-index=\"${index}\"></div>`\r\n            sliderImages.innerHTML += imageDiv;\r\n        }) \r\n    }\r\n\r\n    function initDots () {\r\n        images.forEach((image, index) => {\r\n            let dot = `<circle cx=\"${index === 0? 12: coord(index)}\" cy=\"6\" r=\"6\" fill=\"${index === 0? '#9E98DC' : '#EFEEF6'}\" class=\"slider__dots-item n${index} ${index === 0? \"active\" : \"\"}\" data-index=\"${index}\"></circle>`;\r\n            sliderDots.innerHTML += dot;\r\n          });\r\n        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {\r\n            dot.addEventListener('click', function(){\r\n                moveSlider(this.dataset.index)\r\n            })\r\n        })\r\n    }\r\n\r\n    function moveSlider(num) {\r\n        sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n        sliderImages.querySelector(\".n\" + num).classList.add(\"active\");\r\n\r\n        sliderDots.querySelector(\".active\").classList.remove(\"active\");\r\n        sliderDots.querySelector(\".n\" + num).classList.add(\"active\");\r\n\r\n        let circle = document.getElementsByTagName('circle')\r\n\r\n        for (let i = 0; i < circle.length; i++){\r\n          if (circle[i].classList.contains('active')){\r\n            circle[i].setAttribute('fill', '#9E98DC')\r\n          }else{\r\n            circle[i].setAttribute('fill', '#EFEEF6')\r\n          }\r\n        }\r\n      \r\n      }\r\n\r\n      function coord(ind){\r\n        let circle = sliderDots.lastChild\r\n        let x = circle.getAttribute('x')\r\n        let arr = []\r\n        images.forEach((images, index) => {\r\n            x += 13\r\n            arr.push(x)\r\n        })\r\n        \r\n        return arr[ind]\r\n        \r\n      }\r\n\r\n      function initAutoplay() {\r\n        setInterval(() => {\r\n          let curNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n          let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;\r\n          moveSlider(nextNumber);\r\n        }, 5000);\r\n      }\r\n\r\n      initAutoplay()\r\n\r\n}\r\n\r\ninitSlider()\n\n//# sourceURL=webpack://fr_project_n_two/./scripts/slider.js?");

/***/ }),

/***/ "./scripts/visuakEffects.js":
/*!**********************************!*\
  !*** ./scripts/visuakEffects.js ***!
  \**********************************/
/***/ (() => {

eval("const container = document.querySelector('.main_element_book-list')\r\nconst listCategory = document.querySelectorAll('.aside_container-li')\r\nconst categoryList = document.querySelector('.aside_container-ul')\r\nconst navEl = document.querySelector('.container_header-nav_icons')\r\nconst p = document.querySelector('.red')\r\n\r\nlet count = 0\r\n\r\ncategoryList.addEventListener('click', getCategoryBook)\r\n\r\nfunction getCategoryBook(e){\r\n    e.preventDefault()\r\n  if (e.target.dataset.id){\r\n    let el = e.target\r\n    activeClass(el)\r\n  }\r\n}\r\n\r\nfunction getBuyBtn(e){\r\n  e.preventDefault()\r\n\r\n  const target = e.target\r\n\r\n  let arrId = [];\r\n\r\n  if(localStorage.getItem('in_the_cart')){\r\n    arrId = JSON.parse(localStorage.getItem('in_the_cart'));\r\n  }\r\n\r\n  if(target.tagName === 'BUTTON'){\r\n    arrId.push(e.target.dataset.id);\r\n    localStorage.setItem(\"in_the_cart\", JSON.stringify(arrId));\r\n    newClass(target);\r\n  }\r\n}\r\n\r\nfunction activeClass(el){\r\n    listCategory.forEach(btn => {\r\n        if(btn.classList.contains('active_li')){\r\n            btn.classList.remove('active_li')        }\r\n    });\r\n    el.classList.add('active_li')\r\n\r\n}\r\n\r\ncontainer.addEventListener('click', getBuyBtn)\r\n\r\nfunction newClass(el){\r\n  if (el.classList.contains('clickBtn')){\r\n    el.textContent = 'buy now'\r\n    el.classList.remove('clickBtn')\r\n    count -= 1\r\n    p.textContent = count\r\n    if(count == 0){\r\n      p.classList.remove('circleRed')\r\n      p.textContent = ''\r\n    }\r\n  }else{\r\n    el.textContent = 'in the cart'\r\n    el.classList.add('clickBtn')\r\n    \r\n    count += 1\r\n    \r\n    p.classList.add('circleRed')\r\n    p.textContent = count\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fr_project_n_two/./scripts/visuakEffects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/slider */ \"./scripts/slider.js\");\n/* harmony import */ var _scripts_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.css */ \"./style/style.css\");\n/* harmony import */ var _scripts_getBools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/getBools */ \"./scripts/getBools.js\");\n/* harmony import */ var _scripts_getBools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_getBools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_visuakEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/visuakEffects */ \"./scripts/visuakEffects.js\");\n/* harmony import */ var _scripts_visuakEffects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_visuakEffects__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fr_project_n_two/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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