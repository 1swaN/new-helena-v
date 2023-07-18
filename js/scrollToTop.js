document.addEventListener("DOMContentLoaded", function () {

    var scrollToTopButton = document.getElementById("scroll-to-top");
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  });
  