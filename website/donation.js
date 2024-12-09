// Initialize donation counters from localStorage or defaults
let donorCount = parseInt(localStorage.getItem('donorCount')) || 0;
let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;

// DOM elements
const donationForm = document.getElementById('donation-form');
const donationAmountInput = document.getElementById('donation-amount');
const donorCounter = document.getElementById('donor-counter');
const moneyCounter = document.getElementById('money-counter');
const predefinedButtons = document.querySelectorAll('.predefined-amount'); // Predefined donation buttons
const thankYouMessage = document.getElementById('thank-you-message'); // Thank you message container

// Update counters on page load
function initializeCounters() {
    donorCounter.textContent = donorCount;
    moneyCounter.textContent = totalAmount.toFixed(2);
}

// Function to add the spinning effect
function triggerSpin() {
    donorCounter.classList.add('spinning');
    moneyCounter.classList.add('spinning');
    
    setTimeout(() => {
        donorCounter.classList.remove('spinning');
        moneyCounter.classList.remove('spinning');
    }, 1000); // Duration matches the spin animation
}

// Function to update the donation counters
function updateCounters(amount) {
    triggerSpin();
    donorCount++;
    totalAmount += amount;

    // Store updated values in localStorage
    localStorage.setItem('donorCount', donorCount);
    localStorage.setItem('totalAmount', totalAmount);

    setTimeout(() => {
        donorCounter.textContent = donorCount;
        moneyCounter.textContent = totalAmount.toFixed(2);
    }, 1000); // Update after spin animation completes
}

// Function to show the thank you message
function showThankYouMessage() {
    thankYouMessage.style.display = 'block'; // Show the thank you message
    setTimeout(() => {
        thankYouMessage.style.display = 'none'; // Hide after a few seconds
    }, 3000); // Message stays visible for 3 seconds
}

// Function to confirm donation
function confirmDonation(amount) {
    // Ask the user for confirmation before proceeding with the donation
    const confirm = window.confirm(`Are you sure you want to donate $${amount.toFixed(2)}?`);
    if (confirm) {
        updateCounters(amount);
        showThankYouMessage(); // Show thank you message after donation
    }
}

// Event listener for donation form submission
donationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const donationAmount = parseFloat(donationAmountInput.value);

    if (donationAmount > 0) {
        // Ask for confirmation before proceeding
        confirmDonation(donationAmount);
        donationAmountInput.value = ''; // Clear input field
    }
});

// Event listeners for predefined donation buttons
predefinedButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amount = parseFloat(button.dataset.amount);
        if (amount > 0) {
            // Ask for confirmation before proceeding
            confirmDonation(amount);
        }
    });
});

// Clicking the logo to go back
document.getElementById('logo').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Initialize the counters on page load
initializeCounters();
