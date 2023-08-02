// დავალება 1:

function displayTime () {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);

//-------------------------------------------------------------------

// დავალება 2:
function first () {
  document.getElementById("slideImage").src="img/2.jpg";
}

function second () {
  document.getElementById("slideImage").src="img/3.jpg";
}

function fourth () {
  document.getElementById("slideImage").src="img/4.jpg";
}
setInterval(first,5000);
setInterval(second,10000);
setInterval(fourth,15000);

document.getElementById("slideImage").addEventListener("mouseenter", MouseEnter);
document.getElementById("slideImage").addEventListener("mouseleave", MouseLeave);
	
function 
    //-------------------------------------------------

let countDownDate = new Date("Aug 2, 2023 20:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("clock2").innerHTML = "მომდევნო ლექციამდე დარჩენილია " + days + " დღე " + hours + " საათი და "
  + minutes + " წუთი ";

}, 1000);