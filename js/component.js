console.log(' world!');

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  var formattedBody = "Witam, \n\n Tereść wiadomości...";

  var gitHub = document.createElement('a');
  var portfolio = document.createElement('a');
  var contactToMail = document.createElement('a');

  document.getElementById("linkGitHubId").appendChild(gitHub);
  document.getElementById("linkPortfolioId").appendChild(portfolio);
  document.getElementById("contactMailId").appendChild(contactToMail);

  var footerTextFirst = document.createTextNode("GitHub");
  var footerTextSecond = document.createTextNode("Portfolio");
  var emailText = document.createTextNode("Kontakt");

  var footerLinkFirst = "https://github.com/Vongriffe";
  var footerLinkSecond = "http://capalgerie.org/portfolio/";
  var mailToLink = "mailto:kamelboukoffa.mac@gmail.com?";

  function mailConcat(link, tag) {

    var content = "Subject=Zadanie rekrutacyjne frontend&";

    link+= "";

    if (link.indexOf("@") >=0 ) {
      content += "body=" + encodeURIComponent(formattedBody);
      tag.appendChild(emailText);
      tag.title = "napisz maila";
      tag.href = link + content;
      return tag;

    } else if (link.indexOf("github") >=0 ) {
      tag.appendChild(footerTextFirst);
      tag.href = link;
      tag.target = '_blank';
      return tag;

    } else if (link.indexOf("portfolio") >=0 ) {
      tag.appendChild(footerTextSecond);
      tag.href = link;
      tag.target = '_blank';
      return tag;
    }
  }
  mailConcat(mailToLink, contactToMail);
  mailConcat(footerLinkFirst, gitHub);
  mailConcat(footerLinkSecond, portfolio);
});
