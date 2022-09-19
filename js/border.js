function preLoad() {
  a1 = new Image; a1.src = 'borders/Squared.png';
  a2 = new Image; a2.src = 'borders/Rounded.png';
  a3 = new Image; a3.src = 'borders/Diamond.png';
}
function im(image) {
  document.getElementById(image[0]).src = eval(image + ".src")
}
function square() {
  document.getElementById("pfp").style.top = "2%";
  document.getElementById("name").style.top = "43%";
  document.getElementById("rankcss").style.top = "10%";
  document.getElementById("rankcss").style.left = "20px";
  document.getElementById("Acccss").style.top = "18%";
  document.getElementById("Acccss").style.left = "-100px";
  document.getElementById("flag").style.top = "100px";
}
function round() {
  document.getElementById("pfp").style.top = "2%";
  document.getElementById("name").style.top = "43%";
  document.getElementById("rankcss").style.top = "10%";
  document.getElementById("rankcss").style.left = "20px";
  document.getElementById("Acccss").style.top = "18%";
  document.getElementById("Acccss").style.left = "-100px";
  document.getElementById("flag").style.top = "100px";
}
function diamond() {
  document.getElementById("pfp").style.top = "12%";
  document.getElementById("name").style.top = "50%";
  document.getElementById("rankcss").style.top = "20%";
  document.getElementById("rankcss").style.left = "0px";
  document.getElementById("Acccss").style.top = "22%";
  document.getElementById("Acccss").style.left = "0px";
  document.getElementById("flag").style.top = "160px";
}
