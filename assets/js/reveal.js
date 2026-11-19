// Fade sections in as they scroll into view. Skipped for reduced-motion users.
document.addEventListener("DOMContentLoaded", function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var targets = document.querySelectorAll(
    ".post article > h2, .news, .publications ol.bibliography > li, .projects .card, .cv > .card, .post .row"
  );
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  targets.forEach(function (el) {
    // Anything already on screen at load shows immediately (no flash).
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) { el.classList.add("is-visible"); }
    el.classList.add("reveal");
    if (!el.classList.contains("is-visible")) observer.observe(el);
  });
});
