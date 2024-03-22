// CONFIGURATION

const username = "dimden";

// THE MAGIC SAUCE
// (be careful when touching)

async function fetchSiteTitle() {
  const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
  const siteInfoJson = await request.json();

  if (document.getElementById("NOTUSEDONNEKOWEBsitetitle")) {
    document.getElementById(
      "NOTUSEDONNEKOWEBsitetitle"
    ).innerHTML = `${siteInfoJson.title}`;
  }
}

function fillUserSiteboxData() {
  document.getElementById(
    "NOTUSEDONNEKOWEBsitelink"
  ).innerHTML = `${username}.nekoweb.org <span
  style="position: relative !important"
  class="follow"
  >[+]</span
>`;
  document.getElementById(
    "NOTUSEDONNEKOWEBanchor"
  ).href = `https://${username}.nekoweb.org/`;
  document.getElementById(
    "NOTUSEDONNEKOWEBsitescreenshot"
  ).src = `https://nekoweb.org/screenshots/${username}/index_large.jpg`;
}

function fillSiteboxCSS() {
  const stylesheet = `https://${username}.nekoweb.org/elements.css`;

  const cssId = "userCss";

  if (!document.getElementById(cssId)) {
    const link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.href = `https://${username}.nekoweb.org/elements.css`;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
}

fetchSiteTitle();
fillUserSiteboxData();
fillSiteboxCSS();
