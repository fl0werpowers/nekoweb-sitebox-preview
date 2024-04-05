// CONFIGURATION

const username = "dimden";

// THE MAGIC SAUCE
// (be careful when touching)

function fetchSiteTitle() {
  // const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
  var siteInfoJson;
  const url = "https://nekoweb.org/api/site/info/" + username;
  const request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open("GET", url);
  console.log(request.responseText);
  request.onload = function () {
    console.log("pong");
    siteInfoJson = JSON.parse(request.responseText);
    if (document.getElementById("NOTUSEDONNEKOWEBsitetitle")) {
      document.getElementById(
        "NOTUSEDONNEKOWEBsitetitle"
      ).innerHTML = `${siteInfoJson.title}`;
    }
  };
  // Try ES6 fallback
  if (request.responseText == false) {
    const es6Req = async function () {
      const request = await fetch(
        `https://nekoweb.org/api/site/info/${username}`
      );
      const siteInfoJson = await request.json();

      if (document.getElementById("NOTUSEDONNEKOWEBsitetitle")) {
        document.getElementById(
          "NOTUSEDONNEKOWEBsitetitle"
        ).innerHTML = `${siteInfoJson.title}`;
      }
    };
    es6Req();
  }
}

function fillUserSiteboxData() {
  document.getElementById("NOTUSEDONNEKOWEBsitelink").innerHTML =
    username +
    '.nekoweb.org <span style="position: relative !important" class="follow">[+]</span>';
  document.getElementById("NOTUSEDONNEKOWEBanchor").href =
    "https://" + username + ".nekoweb.org/";
  document.getElementById("NOTUSEDONNEKOWEBsitescreenshot").src =
    "https://nekoweb.org/screenshots/" + username + "/index_large.jpg";
}

function fillSiteboxCSS() {
  const stylesheet = "https://" + username + ".nekoweb.org/elements.css";

  const cssId = "userCss";

  if (!document.getElementById(cssId)) {
    const link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.href = stylesheet;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
}

fetchSiteTitle();
fillUserSiteboxData();
fillSiteboxCSS();
