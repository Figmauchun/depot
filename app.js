let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");
moon.addEventListener("click", () => {
  document.querySelector("body").classList.add("dark");
  sun.style.display = "block";
  moon.style.display = "none";
});
sun.addEventListener("click", () => {
  document.querySelector("body").classList.remove("dark");
  sun.style.display = "none";
  moon.style.display = "block";
});
