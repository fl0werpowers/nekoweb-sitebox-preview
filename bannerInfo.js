// CONFIGURATION

const username = "dimden";

// THE MAGIC SAUCE
// (be careful when touching)

async function fetchSiteTitle() {
  const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
  const siteInfoJson = await request.json();

  if (document.getElementById("NOTUSEDONNEKOWEBsitelink")) {
    document.getElementById(
      "NOTUSEDONNEKOWEBsitelink"
    ).innerHTML = `${username}.nekoweb.org`;
  }
  if (document.getElementById("NOTUSEDONNEKOWEBsitetitle")) {
    document.getElementById(
      "NOTUSEDONNEKOWEBsitetitle"
    ).innerHTML = `${siteInfoJson.title}`;
  }
}

fetchSiteTitle();

function fetchSiteCSS() {
  const stylesheet = `https://${username}.nekoweb.org/elements.css`;

  const cssId = "userCss";

  if (!document.getElementById(cssId)) {
    const head = document.getElementsByTagName("head")[0];
  }
}
