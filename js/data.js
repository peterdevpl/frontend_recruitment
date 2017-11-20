document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed"); // test - załadowanie drzewa DOM

  var apiPath = "https://gwo.pl/booksApi/v1/search?query=";
  var submitButton = document.getElementById("submit"); // Wyszukiwanie przycisku submit w DOM-ie
  var userInput = document.getElementById("searchBook");
  var userInput2 = document.querySelector('#searchBook')

  var bookContainer = document.getElementById("showData");
  console.log(bookContainer);
  var pageCounter = 1;

  submitButton.addEventListener("click", function(event) { // dodanie eventu na przycisk submit
    this.url = apiPath + encodeURI(userInput.value);

    console.log(this.url); // sprawdzam w konsoli czy link jest dynamicznie zmieniany

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", this.url); // używam metody "GET" aby pobrać dane
    ourRequest.onload = function() {

      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData); // przekazuję zmienną zawierającą parsowane dane do funkcji renderHTML().

        if (ourData.length === 0) {
          var ourData = "<div class='note'>Brak pozycji, spróbuj ponownie.</div>";
          document.getElementById("showData").innerHTML = ourData;
        }

      } else {
        console.log("We connected to the server, but it returned an error.");
      }

    };

    ourRequest.onerror = function() {
      console.log("Connection error");
      var webConnection = "<div class='note'>Brak połączenia z serwerem</div>";
      document.getElementById("showData").innerHTML = webConnection;

    };
    ourRequest.send();

    function renderHTML(data) { // funkcja wrapująca div-y zawierające dane API do bookContainer
      pageCounter++;
      var htmlString = "";

      var line = document.createElement("div");
      for (i = 0; i < data.length; i++) {

        console.log((data[i].title));

        htmlString +=
          "<div class='book'>" +
          "<div class='bookContent'>" +
          "<div class='bookImage'>" + '<img src=' + data[i].cover + ' + height="250">' + "</div>" +
          "<div class='bookInfo'>" +
          "<div class='title'>" + "<ul>" + "<li>" + (data[i].title).replace(/\./g, '</li><li>') + "</li>" + "</ul>" + "</div>" +
          "<div class='author'>" + "autorzy: " + (data[i].author) + "</div>" +
          "<div class='isbn'>" + "ISBN: " + data[i].isbn + "</div>" +
          "<div class='men'>" + "numer dopuszczenia MEN: " + data[i].men + "</div>" +
          "<div class='pages_count'>" + "liczba stron: " + data[i].pages_count + "</div>" +
          "<div class='levels'>" + "poziomy nauczania: " + JSON.stringify(data[i].levels).replace(/:|"|school|class|}|{|]|[[]/g, ' ') + "</div>" + // JSON.stringify zwraca mi ciąg zawierający tekst
          "<div class='subject'>" + "przedmiot: " + data[i].subject + "</div>" +
          "<div class='type'>" + "rodzaj publikacji: " + data[i].type + "</div>" + "</div>" + "</div>"
          + "<div class='btnDiv'>" + '<a href=' + data[i].url + ' class="btnBook" >' + "Przejdź do księgarni" + "</a>" + "</div>" + "</div>";
      }
      document.getElementById("showData").innerHTML = htmlString; // wykorzystałem atrybut innerHTML który zwraca kod HTML.
    }
  });
});
