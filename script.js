function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function button1 () {
  window.location.href = "https://replit.com/@hpadala20/CodeToGive#secondpage.html";
}


//services column

document.getElementById("services").style.display = "none";
document.getElementById("schedule").style.display = "none";
document.getElementById("progress").style.display = "none";


function switchPage() {
  var x = document.getElementById("services");
  document.getElementById("home").style.display = "none";
  document.getElementById("progress").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("services").className = "ontop";
  x.style.display = "block";
}

//schedule column
function switchPage1() {
  var x = document.getElementById("schedule");
  document.getElementById("services").style.display = "none";
  document.getElementById("progress").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("schedule").className = "ontop";
  x.style.display = "block";
  console.log("hello world!");
}

//progress column
function switchPage2() {
  var x = document.getElementById("progress");
  document.getElementById("services").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("progress").className = "ontop";
  x.style.display = "block";
}

//back to main page
function switchPage3() {
  var x = document.getElementById("home");
  document.getElementById("services").style.display = "none";
  document.getElementById("schedule").style.display = "none";
  document.getElementById("progress").style.display = "none";
  x.style.display = "block";
}
