  AOS.init({
    duration: 800,
    once: false,       // allows re-triggering
    mirror: true       // animates on scroll up
  });



  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  