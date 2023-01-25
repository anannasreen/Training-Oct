const search = document.querySelector(".search-bar");
const button = document.querySelector(".button");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
