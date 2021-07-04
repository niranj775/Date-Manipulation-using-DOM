document.body.style.width = "25%";
document.body.style.paddingTop = "10%";
document.body.style.margin = "auto";

var date = document.createElement("input");
date.setAttribute("type", "date");

var button = document.createElement("button");
button.addEventListener("click", calculate);
button.innerHTML = "Calculate!";

document.body.append(date, button);

function calculate() {
  var currentDate = new Date();
  var enteredDate = new Date(document.querySelector("input").value);
  let data = [];

  var years = currentDate.getFullYear() - enteredDate.getFullYear();
  data.push(years);

  var months =
    currentDate.getMonth() +
    12 * currentDate.getFullYear() -
    (enteredDate.getMonth() + 12 * enteredDate.getFullYear());
  data.push(months);

  var days =
    (currentDate.getTime() - enteredDate.getTime()) / (24 * 3600 * 1000);
  data.push(Math.floor(days));

  var hours = (currentDate.getTime() - enteredDate.getTime()) / (1000 * 3600);
  data.push(Math.round(hours));

  var mins = (currentDate.getTime() - enteredDate.getTime()) / (1000 * 60);
  data.push(Math.round(mins));

  var secs = (currentDate.getTime() - enteredDate.getTime()) / 1000;
  data.push(Math.round(secs));

  var millsec = currentDate.getTime() - enteredDate.getTime();
  data.push(Math.round(millsec));

  for (let e of data) {
    var newEle = document.createElement("div");
    newEle.innerHTML = e;
    newEle.style.textAlign = "center";
    document.body.append(newEle);
  }
}
