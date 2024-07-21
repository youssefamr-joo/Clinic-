const toggleNav = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

toggleNav.addEventListener("click", () => {
  const nav = document.querySelector(".nav-right");
  nav.style.right = "-40%";
});

closeBtn.addEventListener("click", () => {
  const nav = document.querySelector(".nav-right");
  nav.style.right = "-500%";
});
