var countDownDate = new Date("April 7, 2020 23:40:25").getTime();

var oneSec = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var secondsPlural = seconds === 1 ? ' Second' : ' Seconds'

  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds + secondsPlural



  

if (minutes == 1 || 0) {
  document.getElementById("wordmin").innerText = " Minute";

} else {
    document.getElementById("wordmin").innerText = " Minutes";
}
if (hours == 1 || 0) {
  document.getElementById("wordhour").innerText = " Hour";

} else {
    document.getElementById("wordhour").innerText = " Hours";
}
if (days == 1 || 0) {
  document.getElementById("wordday").innerText = " Day";

} else {
    document.getElementById("wordday").innerText = " Days";
}
  
  



})