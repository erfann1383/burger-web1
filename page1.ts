const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn!.style.display = "block";
scrollTopBtn!.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
