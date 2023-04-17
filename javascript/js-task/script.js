const navList = document.querySelectorAll(".nav");
const pages = document.querySelector(".pages");

function removeClass() {
  navList.forEach((nav) => {
    nav.classList.remove("show");
    const arr = [].slice.call(pages.children);
    arr.forEach((page) => {
      page.classList.remove("active");
    });
  });
}

navList.forEach((element) => {
  element.addEventListener("click", (e) => {
    removeClass();
    element.classList.add("show");
    element.focus();

    console.log(e.target.innerHTML);
    const val = e.target.innerHTML;

    const arr = [].slice.call(pages.children);
    arr.forEach((page) => {
      if (val === page.getAttribute("id")) {
        console.log(page);
        page.classList.add("active");
      }
    });
  });
});
