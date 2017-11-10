/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed"); // test - załadowanie drzewa DOM

  var apiPath = "https://gwo.pl/booksApi/v1/search?query=";
  var submit = document.getElementById("submit"); // Wyszukiwanie przycisku submit w DOM-ie
  var userInput = document.getElementById("searchBook");

  var bookContainer = document.getElementById("show-data");
  var pageCounter = 1;

  submit.addEventListener ("click", function(event) {  // dodanie eventu na przycisk submit
    this.url =  apiPath +  encodeURI(userInput.value);
    console.log(this.url); // sprawdzam w konsoli czy link jest dynamicznie zmieniany

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", this.url);  // używam metody "GET" aby pobrać dane
    ourRequest.onload = function() {

      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData); // przekazuję zmienną zawierającą parsowane dane do funkcji renderHTML().

      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest.onerror = function() {
      console.log("Connection error");
    };
    ourRequest.send();



    function renderHTML(data) { // funkcja wrapująca div-y zawierające dane API do bookContainer
      pageCounter ++

      var htmlString = "";

      console.log(pageCounter);

      for (i = 0; i < data.length; i++) {
        htmlString +=
        "<div class='book'>" +
        "<div class='bookImage'>" + '<img src='+data[i].cover+' + height="250">'  + "</div>" +
        "<div class='bookInfo'>" +
        "<div class='title'>" + data[i].title + "</div>" +
        "<div class='author'>" + data[i].author + "</div>" +
        "<div class='isbn'>" + data[i].isbn + "</div>" +
        "<div class='men'>" + data[i].men + "</div>" +
        "<div class='pages_count'>" + data[i].pages_count + "</div>" +
        "<div class='levels'>" + JSON.stringify(data[i].levels) + "</div>" + // JSON.stringify zwraca mi ciąg zawierający tekst - do poprawy
        "<div class='subject'>" + data[i].subject + "</div>" +
        "<div class='type'>"  + data[i].type + "</div>" +
        "<div class='btnBook'>" + "sprawdź"  + "</div>" +
        "</div>" + "</div>";

      }

      if ( pageCounter > 2 ) {

        console.log("jak usunąć bookContainer przed przekazaniem parametru do API ? ");
        bookContainer.insertAdjacentHTML("afterbegin", htmlString);
      }
      if ( pageCounter = 1 ) {
        bookContainer.insertAdjacentHTML("beforeend", htmlString);
      }
    }

  });

});


/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);