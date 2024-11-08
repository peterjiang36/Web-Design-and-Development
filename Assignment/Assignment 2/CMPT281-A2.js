// Set the CMPT281 final exam date counting down to
let finalExamDate = new Date("Dec 23, 2024 14:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();

    let timeDifference = finalExamDate - now;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 *24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds
})