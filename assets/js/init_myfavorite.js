var all_company_name = ["AAPL","AXP","BA","CAT","CSCO","CVX","DIS","DD","GS","HD","IBM","INTC","JNJ","JPM","KO","MCD","MMM","MRK","MSFT","NKE","PFE","PG","TRV","UNH","UTX","V","VZ","WBA","WMT","XOM"];
var selection = [];
var number = 0;

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

  