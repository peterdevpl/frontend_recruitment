
var formattedBody = "Witam, \n\n W związku z przesłaną aplikacją, chcielibyśmy zaprosić Pana na rozmowę kwalifikacyjną";

var a = document.createElement('a');
var linkText = document.createTextNode("Kontakt");
a.class = "contact";
a.innerHTML = linkText;

var mailToLink = "mailto:kamelboukoffa.mac@gmail.com?";
var mailContent = "Subject=Rozmowa kwalifikacjna&";
mailContent += "cc=vongriffe.mac@gmail.com&";
mailContent += "body=" + encodeURIComponent(formattedBody);

a.href = mailToLink + mailContent;
document.getElementById("ex").appendChild(a);
