document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed"); // test - załadowanie drzewa DOM

  var apiPath = "https://gwo.pl/booksApi/v1/search?query=";
  var submit = document.getElementById("submit"); // Wyszukiwanie przycisku submit w DOM-ie
  var userInput = document.getElementById("searchBook");

  var bookContainer = document.getElementById("showData");
  console.log(bookContainer);
  var pageCounter = 1;

  submit.addEventListener ("click", function(event) {  // dodanie eventu na przycisk submit
    this.url =  apiPath + encodeURI(userInput.value);

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
      pageCounter++;
      var htmlString = "";

      var line = document.createElement("div");
      for (i = 0; i < data.length; i++) {

        htmlString +=
        "<div class='book'>" +
        "<div class='bookImage'>" + '<img src='+data[i].cover+' + height="250">'  + "</div>" +
        "<div class='bookInfo'>" +
        "<div class='title'>" + "<h2>" + (data[i].title).replace(/\./g,'<br>') + "</h2>"+ "</div>" +
        "<div class='author'>" + data[i].author + "</div>" +
        "<div class='isbn'>" + data[i].isbn + "</div>" +
        "<div class='men'>" + data[i].men + "</div>" +
        "<div class='pages_count'>" + data[i].pages_count + "</div>" +
        "<div class='levels'>" + JSON.stringify(data[i].levels).replace(/:|"|school|class|}|{|]|[[]/g,' ') + "</div>" + // JSON.stringify zwraca mi ciąg zawierający tekst
        "<div class='subject'>" + data[i].subject + "</div>" +
        "<div class='type'>"  + data[i].type + "</div>" +
        "<div class='btnBook'>" + "sprawdź"  + "</div>" +
        "</div>" + "</div>";
      }


      document.getElementById("showData").innerHTML = htmlString; // wykorzystałem atrybut innerHTML który zwraca kod HTML.
    }
  });
});
