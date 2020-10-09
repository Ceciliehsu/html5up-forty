var selection = [];
var number = 0;
var tmpselection = [];

tmpselection = JSON.parse(localStorage.getItem("selection"));
console.log(selection);
for(var i = 0;i < 30;i++){
    selection[i] = 0;
  }

function allowDrop(ev) {
  ev.preventDefault();
  }
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  }
  
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  selection[data] = 1;
  number++;
  //console.log(data);
  //console.log(selection);
  //console.log(number);
  ev.target.appendChild(document.getElementById(data));
  var tmp = document.getElementById(data);
  tmp.style.display = "none";
  }

function dochart(){
  localStorage.setItem('number',number);
  localStorage.setItem('selection',JSON.stringify(selection));
  window.location.href = 'favorite_chart.html' ;
  }

  