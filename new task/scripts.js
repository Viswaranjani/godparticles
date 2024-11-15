// Countdown Timer Logic
const countdownElement = document.getElementById("countdown");

// Set the date we're counting down to
let countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
let countdownInterval = setInterval(function () {
  // Get current time
  let now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  let distance = countdownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result
  countdownElement.innerHTML = "Time left: " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // If the countdown ends, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "EXPIRED";
  }
}, 1000);
