var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.querySelector(".container");

open.addEventListener("click", function () {
  //   console.log("vdfv");
  container.classList.add("show-nav");
});

close.addEventListener("click", function () {
  //   console.log("tttv");
  container.classList.remove("show-nav");
});
