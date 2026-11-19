// Open external links and files (PDFs, videos, etc.) in a new tab.
// Pages on this site (projects, CV, publications) open in the same tab.
document.addEventListener("DOMContentLoaded", function () {
  var fileExt = /\.(pdf|docx?|pptx?|xlsx?|zip|mp4|mov|png|jpe?g|gif|svg)(\?|#|$)/i;
  document.querySelectorAll("a[href]").forEach(function (a) {
    var href = a.getAttribute("href").trim();
    if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) return;
    var url;
    try { url = new URL(href, window.location.href); } catch (e) { return; }
    var external = url.origin !== window.location.origin;
    if (external || fileExt.test(url.pathname)) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    } else if (a.getAttribute("target") === "_blank") {
      a.removeAttribute("target");
    }
  });
});
