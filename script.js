/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello World!");

var x = document.getElementById("UBW");

var Font = "x";

var div = document.getElementById("Assignment");

const btn = document.querySelector(".btn-toggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

/* function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }*/

function changeBackground1() {
  document.body.style.background =
    "url(https://cdn.glitch.me/56855dbd-c685-47e7-8866-0983db1c6655%2F2-UBW16-06-006.jpg?v=1636645458517)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  let theme = "light";
  if (currentTheme == "light") {
    document.body.classList.add("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      theme = "dark";
    }
  } else {
  }
}
function changeBackground2() {
  document.body.style.background =
    "url(https://cdn.glitch.me/56855dbd-c685-47e7-8866-0983db1c6655%2F8b3edade839e90fb3b83062eb504291b82330e0b.jpg?v=1636645462989)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}
function changeBackground3() {
  document.body.style.background =
    "url(https://cdn.glitch.me/56855dbd-c685-47e7-8866-0983db1c6655%2F74-UBW16-06-148.jpg?v=1636645465177)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.classList.toggle("dark-theme");
}

function changeBackground4() {
  document.body.style.background =
    "url(https://cdn.glitch.me/56855dbd-c685-47e7-8866-0983db1c6655%2F83-UBW16-06-161.jpg?v=1636582973374)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}

function playAudio() {
  x.play();
}

function changeFont() {
  document.getElementById("FontBtn").value = Font;

  if (Font == "x") {
    (document.getElementById("header").style.fontFamily = "Unown"),
      "Sans Serif";
    (document.getElementById("paragraph").style.fontFamily = "Unown"),
      "Sans Serif";
    /*(document.getElementById("paragraph2").style.fontFamily = "Unown"),
      "Sans Serif";
    (document.getElementById("paragraph3").style.fontFamily = "Unown"),
      "Sans Serif";
    (document.getElementById("paragraph4").style.fontFamily = "Unown"),
      "Sans Serif";
    (document.getElementById("paragraph5").style.fontFamily = "Unown"),
      "Sans Serif";*/
    Font = "y";
  } else {
    (document.getElementById("header").style.fontFamily = "SegaArcadeFont"),
      "Sans Serif";
    (document.getElementById("paragraph").style.fontFamily = "SegaArcadeFont"),
      "Sans Serif";
   /* (document.getElementById("paragraph2").style.fontFamily = "SegaArcadeFont"),
      "Sans Serif";
    (document.getElementById("paragraph3").style.fontFamily = "SegaArcadeFont"),
      "Sans Serif";
    (document.getElementById("paragraph4").style.fontFamily = "SegaArcadeFont"),
      "Sans Serif";
    (document.getElementById("paragraph5").style.fontFamily = "SegaArcadeFont"),
      "Sans Serif";*/
    Font = "x";
  }
}

function toggleAssignment() {
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("sidemenu").style.width = "250px";
 // document.getElementById("main").style.marginLeft = "250px";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
 // document.getElementById("main").style.marginLeft = "0";
  //document.body.style.backgroundColor = "white";
}
