window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

/*/*//*/*/
document.querySelector(".container").addEventListener("click", () => {
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  document.querySelector("body").classList.toggle("dark");
})

/*/*//*/*/
let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/light.svg";
  }
  document.body.classList.toggle("light");
});

/*/*//*/*/
function openNavbar() {
  document.getElementById("navbar-responsive").style.right = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.right = "-100%";  
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);




/* Open when someone clicks on the span element */
function opennav() {
  document.getElementById("myNav").style.display = "flex";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
