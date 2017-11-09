document.addEventListener("DOMContentLoaded", function () {

  var apiPath = "https://gwo.pl/booksApi/v1/search?query=";
  var submit = document.getElementById("submit"); // Wyszukiwanie przycisku submit w DOM-ie
  var userInput = document.getElementById("searchBook");

  console.log(submit);


  submit.addEventListener ("click", function(event) {  // dodanie eventu na przycisk submit
    this.url =  apiPath +  encodeURI(userInput.value);
    console.log(this.url); // sprawdzam w konsoli czy link jest dynamicznie zmieniany

  });

  console.log("DOM fully loaded and parsed"); // test - załadowanie drzewa DOM

});
