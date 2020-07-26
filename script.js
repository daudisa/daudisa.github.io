// window.onload = function sayHi(){ alert("Hello World of Javascript!");}

function htmlChange() {
    document.getElementById("change").innerHTML = "JavaScript";
  }

function myButton() {
    document.getElementById("button").innerHTML = "Published: July 23, 2020";
  }

  function myColor() {
    document.getElementById("change").style.color = "maroon";
  }

 function myAlert() {
     alert("Submitted")
 }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}