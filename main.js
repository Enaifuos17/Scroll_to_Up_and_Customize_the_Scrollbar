// Scroll to Up

let mySpan = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    mySpan.classList.add("show");
  } else {
    mySpan.classList.remove("show");
  }
  // another way to write this code
  //   this.scrollY >= 1000
  //     ? mySpan.classList.add("show")
  //     : mySpan.classList.remove("show");
};

mySpan.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ---------------------------------------------------------
