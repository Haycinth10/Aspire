document.getElementById('logo').addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.querySelector('a[href="#about-us"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#about-us').scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Align the section at the top
    });
});

document.querySelector('a[href="#contact-us"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#contact-us').scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Align the section at the top
    });
});

// Function to show loading screen before redirect
function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'flex'; // Show the loading screen
    document.querySelector('.rocket-wrapper .rocket').classList.add('rocket-launch'); // Add launch animation
}

// Add event listener to the link to show the loading screen
document.getElementById('help-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent immediate page redirect
    showLoadingScreen();

    // Redirect after a short delay to simulate loading
    setTimeout(function() {
        window.location.href = 'donation.html'; // Replace with your destination URL
    }, 3000); // Delay of 3 seconds (to match the rocket launch animation)
});

// Add event listener to the link to show the loading screen
document.getElementById('donation-nav').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent immediate page redirect
    showLoadingScreen();

    // Redirect after a short delay to simulate loading
    setTimeout(function() {
        window.location.href = 'donation.html'; // Replace with your destination URL
    }, 3000); // Delay of 3 seconds (to match the rocket launch animation)
});

// Add event listener to the link to show the loading screen
document.getElementById('mission-nav').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent immediate page redirect
    showLoadingScreen();

    // Redirect after a short delay to simulate loading
    setTimeout(function() {
        window.location.href = 'mission.html'; // Replace with your destination URL
    }, 3000); // Delay of 3 seconds (to match the rocket launch animation)
});



