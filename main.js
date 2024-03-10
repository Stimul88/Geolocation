/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/AddTicket.js":
/*!*****************************!*\
  !*** ./src/js/AddTicket.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddTicket; }
/* harmony export */ });
class AddTicket {
  constructor() {
    this.container = document.querySelector('.container');
  }

  init() {
    const chatWindow = this.container.querySelector('.chat-window');
    chatWindow.addEventListener('submit', this.addTickets)
  }

  addTickets (e) {
    e.preventDefault()
    const container = document.querySelector('.container');
    const formName = container.querySelector('.form-name');
    const messageInput = container.querySelector('.message-input');
    const chatArea = container.querySelector('.chat-area');

    if(messageInput.value === '') return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (data) {

        const { latitude, longitude } = data.coords;

        const newElement = `<div class="message-container">
                      <div class="message-box">
                      <div class="message-mark"></div>
                    <div class="title">
                      <span class="title-text">${messageInput.value}</span>
                    </div>
                    <div class="geo-and-eye">
                      <span class="geo">[${latitude}, ${longitude}]</span>
                      <span class="eye">👁</span>
                    </div>
                    <span class="date">${new Date().toLocaleString()}</span>
                    </div>
                    </div>`

        chatArea.insertAdjacentHTML('afterbegin', newElement)

        messageInput.value = ''
        chatArea.scrollTop = chatArea.scrollHeight;

        }, function(error) {
        formName.classList.remove('hidden');

        formName.addEventListener('submit', AddTicket.addGeolocation)

          console.log(error);
        }, { enableHighAccuracy: true}
      )
    }
  }

  static addGeolocation(e) {
    e.preventDefault()
    const container = document.querySelector('.container');
    const chatArea = container.querySelector('.chat-area');
    const messageInput = container.querySelector('.message-input');
    const formName = container.querySelector('.form-name');
    const geolocationInput = container.querySelector('.geolocation-input');

    if(AddTicket.geolocationValidate(geolocationInput.value)) {

      const newElement = AddTicket.reformatGeolocation(geolocationInput.value)

      chatArea.insertAdjacentHTML('afterbegin', newElement)

      messageInput.value = '';
      geolocationInput.value = '';

      formName.classList.add('hidden');
      chatArea.scrollTop = chatArea.scrollHeight;
      return
    }
    alert('Неправильно введены данные!')
  }

  static geolocationValidate (latitude, longitude) {

    const str = `${latitude}, ${longitude}`

    const regex = /^\d+\D\d+,\s-?\d+\D\d+/gm;

    return regex.test(str);
  }

  static reformatGeolocation(geo) {

    const container = document.querySelector('.container');
    const messageInput = container.querySelector('.message-input');
    const date = geo.split(' ')

    const latitude = parseFloat(date[0]);
    const longitude = parseFloat(date[1]);

    if(AddTicket.geolocationValidate(latitude, longitude)) {

      return `<div class="message-container">
                      <div class="message-box">
                      <div class="message-mark"></div>
                    <div class="title">
                      <span class="title-text">${messageInput.value}</span>
                    </div>
                    <div class="geo-and-eye">
                      <span class="geo">[${latitude} ${longitude}]</span>
                      <span class="eye">👁</span>
                    </div>
                    <span class="date">${new Date().toLocaleString()}</span>
                    </div>
                    </div>`
    }
  }
}


/***/ }),

/***/ "./src/js/BindToDom.js":
/*!*****************************!*\
  !*** ./src/js/BindToDom.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BindToDom; }
/* harmony export */ });
class BindToDom{
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup () {
    return `
          <form class="form-name hidden" name="form">
    <div class="form-container">
      <label for="name-input" class="name-label"></label>
      <span class="error-title">Что то пошло не так</span>
       <span class="error-message">
       К сожалению, нам не удалось определить ваше 
       местоположение, пожалуйста, дайте разрешение на
        использование геолокации, либо введите координаты
        в ручную.
       </span>
      <span class="geolocation-info">Широта и долгота через запятую (Пример: 51.50851, -0.12572)</span>
      <input  class="geolocation-input" id="name-input" name="name-input"  minlength="4" maxlength="40" size="10"/>
    </div>
    <div class="btn">
      <button class="escape" >Отмена</button>
      <button class="ок" >Ок</button>
    </div>
  </form>
  <div class="container-chat">
    <form class="chat-window">
      <div class="scroll-box"></div>
      <div class="chat-area"></div>
      <div class="user-input">
        <label for="message-input"></label>
        <input type="text" id="message-input" class="message-input" placeholder="">
        <div class="microphone">🎤</div>
        <div class="phone">&#9742;</div>
      </div>
    </form>
  </div>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = BindToDom.markup
  }
}



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddTicket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTicket */ "./src/js/AddTicket.js");
/* harmony import */ var _BindToDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BindToDom */ "./src/js/BindToDom.js");



const container = document.querySelector('.container');
const bindToDom = new _BindToDom__WEBPACK_IMPORTED_MODULE_1__["default"](container)

const addTicket = new _AddTicket__WEBPACK_IMPORTED_MODULE_0__["default"]();

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()

  bindToDom.bindToDOM()
  addTicket.init()
})




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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");



// Точка входа webpack
// Не пишите код в данном файле

}();
/******/ })()
;
//# sourceMappingURL=main.js.map