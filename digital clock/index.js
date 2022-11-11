function currentTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var ampm = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //var time = h + ":" + m + ":" + s + " " + ampm;

  var time = `${h} : ${m} : ${s}  ${ampm}`;

  document.getElementById("digitalclock").innerText = time;
  document.getElementById("digitalclock").innerContent = time;
  setTimeout(currentTime, 1000);
}
currentTime();
