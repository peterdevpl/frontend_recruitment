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
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./data.js */ 1);\n__webpack_require__(/*! ./component.js */ 2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FwcC5qcz9jOTllIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCIuL2RhdGEuanNcIik7XG5yZXF1aXJlKFwiLi9jb21wb25lbnQuanNcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\n  console.log(\"DOM fully loaded and parsed\"); // test - załadowanie drzewa DOM\n\n  var apiPath = \"https://gwo.pl/booksApi/v1/search?query=\";\n  var submitButton = document.getElementById(\"submit\"); // Wyszukiwanie przycisku submit w DOM-ie\n  var userInput = document.getElementById(\"searchBook\");\n  var userInput2 = document.querySelector('#searchBook')\n\n  var bookContainer = document.getElementById(\"showData\");\n  console.log(bookContainer);\n  var pageCounter = 1;\n\n  submitButton.addEventListener(\"click\", function(event) { // dodanie eventu na przycisk submit\n    this.url = apiPath + encodeURI(userInput.value);\n\n    console.log(this.url); // sprawdzam w konsoli czy link jest dynamicznie zmieniany\n\n    var ourRequest = new XMLHttpRequest();\n\n    ourRequest.open(\"GET\", this.url); // używam metody \"GET\" aby pobrać dane\n    ourRequest.onload = function() {\n\n      if (ourRequest.status >= 200 && ourRequest.status < 400) {\n        var ourData = JSON.parse(ourRequest.responseText);\n        renderHTML(ourData); // przekazuję zmienną zawierającą parsowane dane do funkcji renderHTML().\n\n        if (ourData.length === 0) {\n          var ourData = \"<div class='note'>Brak pozycji, spróbuj ponownie.</div>\";\n          document.getElementById(\"showData\").innerHTML = ourData;\n        }\n\n      } else {\n        console.log(\"We connected to the server, but it returned an error.\");\n      }\n\n    };\n\n    ourRequest.onerror = function() {\n      console.log(\"Connection error\");\n      var webConnection = \"<div class='note'>Brak połączenia z serwerem</div>\";\n      document.getElementById(\"showData\").innerHTML = webConnection;\n\n    };\n    ourRequest.send();\n\n    function renderHTML(data) { // funkcja wrapująca div-y zawierające dane API do bookContainer\n      pageCounter++;\n      var htmlString = \"\";\n\n      var line = document.createElement(\"div\");\n      for (i = 0; i < data.length; i++) {\n\n        console.log((data[i].title));\n\n        htmlString +=\n          \"<div class='book'>\" +\n          \"<div class='bookContent'>\" +\n          \"<div class='bookImage'>\" + '<img src=' + data[i].cover + ' + height=\"250\">' + \"</div>\" +\n          \"<div class='bookInfo'>\" +\n          \"<div class='title'>\" + \"<ul>\" + \"<li>\" + (data[i].title).replace(/\\./g, '</li><li>') + \"</li>\" + \"</ul>\" + \"</div>\" +\n          \"<div class='author'>\" + \"autorzy: \" + (data[i].author) + \"</div>\" +\n          \"<div class='isbn'>\" + \"ISBN: \" + data[i].isbn + \"</div>\" +\n          \"<div class='men'>\" + \"numer dopuszczenia MEN: \" + data[i].men + \"</div>\" +\n          \"<div class='pages_count'>\" + \"liczba stron: \" + data[i].pages_count + \"</div>\" +\n          \"<div class='levels'>\" + \"poziomy nauczania: \" + JSON.stringify(data[i].levels).replace(/:|\"|school|class|}|{|]|[[]/g, ' ') + \"</div>\" + // JSON.stringify zwraca mi ciąg zawierający tekst\n          \"<div class='subject'>\" + \"przedmiot: \" + data[i].subject + \"</div>\" +\n          \"<div class='type'>\" + \"rodzaj publikacji: \" + data[i].type + \"</div>\" + \"</div>\" + \"</div>\"\n          + \"<div class='btnDiv'>\" + '<a href=' + data[i].url + ' class=\"btnBook\" >' + \"Przejdź do księgarni\" + \"</a>\" + \"</div>\" + \"</div>\";\n      }\n      document.getElementById(\"showData\").innerHTML = htmlString; // wykorzystałem atrybut innerHTML który zwraca kod HTML.\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2RhdGEuanM/OWFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWRcIik7IC8vIHRlc3QgLSB6YcWCYWRvd2FuaWUgZHJ6ZXdhIERPTVxuXG4gIHZhciBhcGlQYXRoID0gXCJodHRwczovL2d3by5wbC9ib29rc0FwaS92MS9zZWFyY2g/cXVlcnk9XCI7XG4gIHZhciBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTsgLy8gV3lzenVraXdhbmllIHByenljaXNrdSBzdWJtaXQgdyBET00taWVcbiAgdmFyIHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQm9va1wiKTtcbiAgdmFyIHVzZXJJbnB1dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQm9vaycpXG5cbiAgdmFyIGJvb2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dEYXRhXCIpO1xuICBjb25zb2xlLmxvZyhib29rQ29udGFpbmVyKTtcbiAgdmFyIHBhZ2VDb3VudGVyID0gMTtcblxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IC8vIGRvZGFuaWUgZXZlbnR1IG5hIHByenljaXNrIHN1Ym1pdFxuICAgIHRoaXMudXJsID0gYXBpUGF0aCArIGVuY29kZVVSSSh1c2VySW5wdXQudmFsdWUpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy51cmwpOyAvLyBzcHJhd2R6YW0gdyBrb25zb2xpIGN6eSBsaW5rIGplc3QgZHluYW1pY3puaWUgem1pZW5pYW55XG5cbiAgICB2YXIgb3VyUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgb3VyUmVxdWVzdC5vcGVuKFwiR0VUXCIsIHRoaXMudXJsKTsgLy8gdcW8eXdhbSBtZXRvZHkgXCJHRVRcIiBhYnkgcG9icmFjzIEgZGFuZVxuICAgIG91clJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChvdXJSZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgb3VyUmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgdmFyIG91ckRhdGEgPSBKU09OLnBhcnNlKG91clJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgcmVuZGVySFRNTChvdXJEYXRhKTsgLy8gcHJ6ZWthenVqxJkgem1pZW5uxIUgemF3aWVyYWrEhWPEhSBwYXJzb3dhbmUgZGFuZSBkbyBmdW5rY2ppIHJlbmRlckhUTUwoKS5cblxuICAgICAgICBpZiAob3VyRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB2YXIgb3VyRGF0YSA9IFwiPGRpdiBjbGFzcz0nbm90ZSc+QnJhayBwb3p5Y2ppLCBzcHLDs2J1aiBwb25vd25pZS48L2Rpdj5cIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dEYXRhXCIpLmlubmVySFRNTCA9IG91ckRhdGE7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZSBjb25uZWN0ZWQgdG8gdGhlIHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yLlwiKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICBvdXJSZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBlcnJvclwiKTtcbiAgICAgIHZhciB3ZWJDb25uZWN0aW9uID0gXCI8ZGl2IGNsYXNzPSdub3RlJz5CcmFrIHBvxYLEhWN6ZW5pYSB6IHNlcndlcmVtPC9kaXY+XCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dEYXRhXCIpLmlubmVySFRNTCA9IHdlYkNvbm5lY3Rpb247XG5cbiAgICB9O1xuICAgIG91clJlcXVlc3Quc2VuZCgpO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVySFRNTChkYXRhKSB7IC8vIGZ1bmtjamEgd3JhcHVqxIVjYSBkaXYteSB6YXdpZXJhasSFY2UgZGFuZSBBUEkgZG8gYm9va0NvbnRhaW5lclxuICAgICAgcGFnZUNvdW50ZXIrKztcbiAgICAgIHZhciBodG1sU3RyaW5nID0gXCJcIjtcblxuICAgICAgdmFyIGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zb2xlLmxvZygoZGF0YVtpXS50aXRsZSkpO1xuXG4gICAgICAgIGh0bWxTdHJpbmcgKz1cbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J2Jvb2snPlwiICtcbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J2Jvb2tDb250ZW50Jz5cIiArXG4gICAgICAgICAgXCI8ZGl2IGNsYXNzPSdib29rSW1hZ2UnPlwiICsgJzxpbWcgc3JjPScgKyBkYXRhW2ldLmNvdmVyICsgJyArIGhlaWdodD1cIjI1MFwiPicgKyBcIjwvZGl2PlwiICtcbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J2Jvb2tJbmZvJz5cIiArXG4gICAgICAgICAgXCI8ZGl2IGNsYXNzPSd0aXRsZSc+XCIgKyBcIjx1bD5cIiArIFwiPGxpPlwiICsgKGRhdGFbaV0udGl0bGUpLnJlcGxhY2UoL1xcLi9nLCAnPC9saT48bGk+JykgKyBcIjwvbGk+XCIgKyBcIjwvdWw+XCIgKyBcIjwvZGl2PlwiICtcbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J2F1dGhvcic+XCIgKyBcImF1dG9yenk6IFwiICsgKGRhdGFbaV0uYXV0aG9yKSArIFwiPC9kaXY+XCIgK1xuICAgICAgICAgIFwiPGRpdiBjbGFzcz0naXNibic+XCIgKyBcIklTQk46IFwiICsgZGF0YVtpXS5pc2JuICsgXCI8L2Rpdj5cIiArXG4gICAgICAgICAgXCI8ZGl2IGNsYXNzPSdtZW4nPlwiICsgXCJudW1lciBkb3B1c3pjemVuaWEgTUVOOiBcIiArIGRhdGFbaV0ubWVuICsgXCI8L2Rpdj5cIiArXG4gICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwYWdlc19jb3VudCc+XCIgKyBcImxpY3piYSBzdHJvbjogXCIgKyBkYXRhW2ldLnBhZ2VzX2NvdW50ICsgXCI8L2Rpdj5cIiArXG4gICAgICAgICAgXCI8ZGl2IGNsYXNzPSdsZXZlbHMnPlwiICsgXCJwb3ppb215IG5hdWN6YW5pYTogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW2ldLmxldmVscykucmVwbGFjZSgvOnxcInxzY2hvb2x8Y2xhc3N8fXx7fF18W1tdL2csICcgJykgKyBcIjwvZGl2PlwiICsgLy8gSlNPTi5zdHJpbmdpZnkgendyYWNhIG1pIGNpxIVnIHphd2llcmFqxIVjeSB0ZWtzdFxuICAgICAgICAgIFwiPGRpdiBjbGFzcz0nc3ViamVjdCc+XCIgKyBcInByemVkbWlvdDogXCIgKyBkYXRhW2ldLnN1YmplY3QgKyBcIjwvZGl2PlwiICtcbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J3R5cGUnPlwiICsgXCJyb2R6YWogcHVibGlrYWNqaTogXCIgKyBkYXRhW2ldLnR5cGUgKyBcIjwvZGl2PlwiICsgXCI8L2Rpdj5cIiArIFwiPC9kaXY+XCJcbiAgICAgICAgICArIFwiPGRpdiBjbGFzcz0nYnRuRGl2Jz5cIiArICc8YSBocmVmPScgKyBkYXRhW2ldLnVybCArICcgY2xhc3M9XCJidG5Cb29rXCIgPicgKyBcIlByemVqZMW6IGRvIGtzacSZZ2FybmlcIiArIFwiPC9hPlwiICsgXCI8L2Rpdj5cIiArIFwiPC9kaXY+XCI7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dEYXRhXCIpLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7IC8vIHd5a29yenlzdGHFgmVtIGF0cnlidXQgaW5uZXJIVE1MIGt0w7NyeSB6d3JhY2Ega29kIEhUTUwuXG4gICAgfVxuICB9KTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9kYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*************************!*\
  !*** ./js/component.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\n  console.log(\"DOM fully loaded and parsed\");\n\n  var formattedBody = \"Witam, \\n\\n Tereść wiadomości...\";\n\n  var gitHub = document.createElement('a');\n  var portfolio = document.createElement('a');\n  var contactToMail = document.createElement('a');\n\n  document.getElementById(\"linkGitHubId\").appendChild(gitHub);\n  document.getElementById(\"linkPortfolioId\").appendChild(portfolio);\n  document.getElementById(\"contactMailId\").appendChild(contactToMail);\n\n  var footerTextFirst = document.createTextNode(\"GitHub\");\n  var footerTextSecond = document.createTextNode(\"Portfolio\");\n  var emailText = document.createTextNode(\"Kontakt\");\n\n  var footerLinkFirst = \"https://github.com/Vongriffe\";\n  var footerLinkSecond = \"http://capalgerie.org/portfolio/\";\n  var mailToLink = \"mailto:kamelboukoffa.mac@gmail.com?\";\n\n\n  console.log();\n\n  function mailConcat(link, tag) {\n    var content = \"Subject=Zadanie rekrutacyjne frontend&\";\n    link+= \"\";\n    if (link.indexOf(\"@\") >=0 ) {\n      content += \"body=\" + encodeURIComponent(formattedBody);\n      tag.appendChild(emailText);\n      tag.title = \"napisz maila\";\n      tag.href = link + content;\n    } else if (link.indexOf(\"github\") >=0 ) {\n      tag.appendChild(footerTextFirst);\n      tag.href = link;\n      tag.target = '_blank';\n    } else if (link.indexOf(\"portfolio\") >=0 ) {\n      tag.appendChild(footerTextSecond);\n      tag.href = link;\n      tag.target = '_blank';\n    }\n  }\n  mailConcat(mailToLink, contactToMail);\n  mailConcat(footerLinkFirst, gitHub);\n  mailConcat(footerLinkSecond, portfolio);\n\n\n\n\n\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2NvbXBvbmVudC5qcz9hMDZhIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhcIkRPTSBmdWxseSBsb2FkZWQgYW5kIHBhcnNlZFwiKTtcblxuICB2YXIgZm9ybWF0dGVkQm9keSA9IFwiV2l0YW0sIFxcblxcbiBUZXJlxZvEhyB3aWFkb21vxZtjaS4uLlwiO1xuXG4gIHZhciBnaXRIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBwb3J0Zm9saW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHZhciBjb250YWN0VG9NYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua0dpdEh1YklkXCIpLmFwcGVuZENoaWxkKGdpdEh1Yik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1BvcnRmb2xpb0lkXCIpLmFwcGVuZENoaWxkKHBvcnRmb2xpbyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdE1haWxJZFwiKS5hcHBlbmRDaGlsZChjb250YWN0VG9NYWlsKTtcblxuICB2YXIgZm9vdGVyVGV4dEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHaXRIdWJcIik7XG4gIHZhciBmb290ZXJUZXh0U2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQb3J0Zm9saW9cIik7XG4gIHZhciBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIktvbnRha3RcIik7XG5cbiAgdmFyIGZvb3RlckxpbmtGaXJzdCA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1ZvbmdyaWZmZVwiO1xuICB2YXIgZm9vdGVyTGlua1NlY29uZCA9IFwiaHR0cDovL2NhcGFsZ2VyaWUub3JnL3BvcnRmb2xpby9cIjtcbiAgdmFyIG1haWxUb0xpbmsgPSBcIm1haWx0bzprYW1lbGJvdWtvZmZhLm1hY0BnbWFpbC5jb20/XCI7XG5cblxuICBjb25zb2xlLmxvZygpO1xuXG4gIGZ1bmN0aW9uIG1haWxDb25jYXQobGluaywgdGFnKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBcIlN1YmplY3Q9WmFkYW5pZSByZWtydXRhY3lqbmUgZnJvbnRlbmQmXCI7XG4gICAgbGluays9IFwiXCI7XG4gICAgaWYgKGxpbmsuaW5kZXhPZihcIkBcIikgPj0wICkge1xuICAgICAgY29udGVudCArPSBcImJvZHk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybWF0dGVkQm9keSk7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcbiAgICAgIHRhZy50aXRsZSA9IFwibmFwaXN6IG1haWxhXCI7XG4gICAgICB0YWcuaHJlZiA9IGxpbmsgKyBjb250ZW50O1xuICAgIH0gZWxzZSBpZiAobGluay5pbmRleE9mKFwiZ2l0aHViXCIpID49MCApIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChmb290ZXJUZXh0Rmlyc3QpO1xuICAgICAgdGFnLmhyZWYgPSBsaW5rO1xuICAgICAgdGFnLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIH0gZWxzZSBpZiAobGluay5pbmRleE9mKFwicG9ydGZvbGlvXCIpID49MCApIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChmb290ZXJUZXh0U2Vjb25kKTtcbiAgICAgIHRhZy5ocmVmID0gbGluaztcbiAgICAgIHRhZy50YXJnZXQgPSAnX2JsYW5rJztcbiAgICB9XG4gIH1cbiAgbWFpbENvbmNhdChtYWlsVG9MaW5rLCBjb250YWN0VG9NYWlsKTtcbiAgbWFpbENvbmNhdChmb290ZXJMaW5rRmlyc3QsIGdpdEh1Yik7XG4gIG1haWxDb25jYXQoZm9vdGVyTGlua1NlY29uZCwgcG9ydGZvbGlvKTtcblxuXG5cblxuXG5cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);