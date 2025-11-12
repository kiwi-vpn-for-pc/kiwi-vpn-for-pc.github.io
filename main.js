// Smooth scroll & mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const scrollBtn = document.createElement("button");
  scrollBtn.className = "scroll-top";
  scrollBtn.textContent = "↑";
  document.body.appendChild(scrollBtn);

  scrollBtn.style.display = "none";
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
