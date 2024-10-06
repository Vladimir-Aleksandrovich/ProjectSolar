/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/cards.js":
/*!******************************!*\
  !*** ./src/modules/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards(parentTagSelector) {
  let parentTag = document.querySelector(parentTagSelector);
  class TabItem {
    constructor(header, text, img, parent) {
      this.header = header;
      this.text = text;
      this.img = img;
      this.parent = parent;
    }
    render() {
      let div = document.createElement("div");
      div.classList.add("card__wrapper");
      div.style.background = this.img;
      div.style.backgroundSize = "cover";
      div.innerHTML = `<p class="card__header">${this.header}</p>
      <p class="card__text">${this.text}</p>`;
      this.parent.append(div);
    }
  }

  fetch("http://localhost:3000/tabs")
    .then((data) => data.json())
    .then((data) =>
      data.forEach(({ title, text, img }) => {
        new TabItem(title, text, img, parentTag).render();
      })
    );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/services/services.js");





function form(formSelector, nameSelector, phoneSelector, crossSelector2, modalSelector) {
  const modalForm = document.querySelector(formSelector),
        nameInput = document.querySelector(nameSelector),
        phoneInput = document.querySelector(phoneSelector),
         modalBg = document.querySelector(modalSelector),
    
      message = {
      loading: "Загрузка",
      done: `Спасибо! <br> Мы скоро с вами свяжемся!`,
      error: "Ошибка",
    };

  function checkInput(input, regexp, warningMessage) {
    input.addEventListener("input", () => {
      //  доделать ввод
      if (input.value.match(regexp)) {
        input.value = "";
        input.style.background = "black";
        input.placeholder = warningMessage;
      } else input.style.background = "";
    });
  }

  checkInput(nameInput, /[0-9]/gi, "Введите имя!");
  checkInput(phoneInput, /[A-Za-zА-яа-я]/gi, "Введите телефон!");

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(modalForm);
    // const req = new XMLHttpRequest();
    console.log(formData);
    let messageBox = document.createElement("div");
    messageBox.classList.add("modal");
    let messageText = message.done;
    messageBox.innerHTML = `
  <div class="modal__window">
  <p>${messageText}</p>
  <div class="modal__cross">
    <img class="modal__cross-img" src="img/Krestik.svg">
  </div>
  </div>`;
    document.body.append(messageBox);
    const cross2 = messageBox.querySelector(crossSelector2);

    let p = messageBox.querySelector("p");

    p.style.fontSize = "30px";

    let obj = {};
    formData.forEach((value, i) => {
      obj[i] = value;
    });

    //fetch
  

    (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/customers", JSON.stringify(obj))
      .then(() => {
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.hideModalWindow)(modalBg);
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModalWindow)(messageBox);
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.hideModal)(messageBox, cross2);
      })
      .catch((messageText = message.error))
      .finally(() => {
        modalForm.reset();
      });

    // data form

    //   fetch("js/BD.json", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //      body : data1
    //   }).then(data => data.json())
    //     .then(data => {
    //      data.customers.push(data1)
    //         console.log(data)
    //         hideModalWindow(modalBg)
    //         showModalWindow(messageBox)
    //         hideModal(messageBox, cross2)
    //       })
    // .catch(messageText = message.error)
    //   .finally(() => {
    //       modalForm.reset()
    // })

    // XMLLHttp
    // req.open("POST", "server.php");
    // req.setRequestHeader("Content-type", "application/json");
    // let obj = {};
    // formData.forEach((value, key) => {
    //   obj[key] = value;
    // });
    // let json = JSON.stringify(obj);
    // req.send(json);
    // console.log(json);
    // req.addEventListener("load", function () {
    //   if (req.status == 200) {

    //     hideModalWindow(modalBg);
    //     showModalWindow(messageBox);
    //     hideModal(messageBox, cross2);

    //   } else messageBox.textContent = message.error;
    // });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hideModal: () => (/* binding */ hideModal),
/* harmony export */   hideModalWindow: () => (/* binding */ hideModalWindow),
/* harmony export */   showModalWindow: () => (/* binding */ showModalWindow)
/* harmony export */ });

function hideModalWindow(element) {
  document.body.style.overflowY = "scroll";
  element.classList.add("hide");
  element.classList.remove("show");
}

function hideModal(elem, elem2) {
  elem.addEventListener("click", (e) => {
    if (e.target == elem || e.target == elem2) {
      hideModalWindow(elem);
    }
  });
}

function showModalWindow(elem) {
  document.body.style.overflowY = "hidden";
  elem.classList.add("show");
  elem.classList.remove("hide");
}

function modal(formBtnSelector, modalSelector, crossSelector) {
   const contactUsBtn = document.querySelector(formBtnSelector),
         modalBg = document.querySelector(modalSelector),
         crossBtn = document.querySelector(crossSelector);
  let i = 0;

  // function showModalWindow(selector) {
  //   body.style.overflowY = "hidden";
  //   selector.classList.add("show");
  //   selector.classList.remove("hide");
  // }

  // let hideModalWindow = (selector) => {
  //   body.style.overflowY = "scroll";
  //   selector.classList.add("hide");
  //   selector.classList.remove("show");
  // };

  contactUsBtn.addEventListener("click", () => {
    showModalWindow(".modal");
  });

  // function hideModal(selector, selector2) {
  //   selector.addEventListener("click", (e) => {
  //     if (e.target == selector || e.target == selector2) {
  //       hideModalWindow(selector);
  //     }
  //   });
  // }
  hideModal(modalBg, crossBtn);

  window.addEventListener("scroll", () => {
    if (
      document.documentElement.clientHeight +
        document.documentElement.scrollTop ==
        document.documentElement.scrollHeight &&
      i != 1
    ) {
      i = 1;
      showModalWindow(modalBg);
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);







/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, bodySelector, btnSelector, activeClassSelector) {
    // const tabs = document.querySelectorAll(".tab"),
    // body = document.querySelector("body"),
    // readMoreBtn = document.querySelector(".read-more-btn");
    const tabs = document.querySelectorAll(tabsSelector),
    body = document.querySelector(bodySelector),
    readMoreBtn = document.querySelector(btnSelector);

  const addActiveClass = (i) => {
    tabs[i].classList.add(activeClassSelector);
  };

  function removeActiveClass(list, activeClass) {
    list.forEach((el) => {
      el.classList.remove(activeClass);
    });
  }

  tabs.forEach((el, j) => {
    el.addEventListener("click", () => {
      removeActiveClass(tabs, activeClassSelector);
      addActiveClass(j);
    });
  });

  readMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(secondsSelector, minutesSelector, hoursSelector, daysSelector) {
  let deadLine = new Date("2024-09-01");
  const secondsDiv = document.querySelector(secondsSelector),
    minutesDiv = document.querySelector(minutesSelector),
    hoursDiv = document.querySelector(hoursSelector),
    daysDiv = document.querySelector(daysSelector);

  setInterval(() => {
    let minutesLeft, secondsLeft, hoursLeft, daysLeft;
    let now = new Date();

    checkDate();

    secondsLeft = Math.floor(((deadLine - now) / 1000) % 60);
    minutesLeft = Math.floor(((deadLine - now) / (1000 * 60)) % 60);
    hoursLeft = Math.floor(((deadLine - now) / (1000 * 60 * 60)) % 24) - 3;
    daysLeft = Math.floor((deadLine - now) / (1000 * 60 * 60 * 24));

    secondsDiv.innerHTML = `${secondsLeft}`;
    minutesDiv.innerHTML = `${minutesLeft}`;
    hoursDiv.innerHTML = `${hoursLeft}`;
    daysDiv.innerHTML = `${daysLeft}`;

    function checkNumber(number, container) {
      if (number < 10) {
        container.innerHTML = `0${number}`;
      }
    }

    function checkDate() {
      while (deadLine < now) {
        deadLine = new Date(Date.parse(deadLine) + 86400000);
      }
      return deadLine;
    }

    checkNumber(daysLeft, daysDiv);
    checkNumber(hoursLeft, hoursDiv);
    checkNumber(minutesLeft, minutesDiv);
    checkNumber(secondsLeft, secondsDiv);
  }, 1000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./src/services/services.js":
/*!**********************************!*\
  !*** ./src/services/services.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
let postData = async (url, data) => {
    let res = await fetch(url, {
      //"js/BD.json"
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./src/modules/cards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/modules/form.js");
 




document.addEventListener("DOMContentLoaded", () => {
    
 (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tab", "body", ".read-more-btn", "active-tab");
 (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])(".seconds", ".minutes", ".hours", ".days", "2024-09-01");
 (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])(".contact-us-btn", ".modal", ".modal__cross-img");
 (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])(".our-experience-section .cards");
 (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])(".modal__form", ".modal__form #name", ".modal__form #phone", ".modal__cross-img", ".modal");

  
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map