// Set the CMPT281 final exam date and time to count down to
let finalExamDate = new Date("Dec 23, 2024 14:00:00").getTime();

// Set a timer to update the countdown every second
let x = setInterval(function() {
    
    // Get the current date and time in milliseconds
    let now = new Date().getTime();
    
    // Calculate the difference between the final exam date and the current time
    let timeDifference = finalExamDate - now;

    // Calculate the remaining days, hours, minutes, and seconds
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Remaining seconds

    // Display the calculated values in the respective HTML elements
    document.getElementById('days').innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Optional: Stop the countdown when the exam date is reached
    if (timeDifference < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Exam Time!";
    }
}, 1000); // Update interval set to 1 second (1000 milliseconds)
