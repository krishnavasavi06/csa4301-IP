// Regular expressions for Voter ID and OTP validation
const voterIDPattern = /^[A-Za-z0-9]{6,}$/; // Example pattern for Voter ID (alphanumeric, at least 6 characters)
const otpPattern = /^[0-9]{5}$/; // Example pattern for OTP (exactly 5 digits)

// Function to generate OTP (mock function for demonstration)
function generateOTP() {
    const voterID = document.getElementById('voterID').value;
    if (voterIDPattern.test(voterID)) {
        // Normally, you'd generate and send OTP here. For demo, just show an alert.
        alert('OTP has been sent to your registered mobile number.');
    } else {
        alert('Invalid Voter ID. Please enter a valid Voter ID.');
    }
}

// Function to verify OTP (mock function for demonstration)
function verifyOTP() {
    const otp = document.getElementById('otp').value;
    if (otpPattern.test(otp)) {
        // Normally, you'd verify OTP here. For demo, just show an alert.
        alert('OTP verified successfully! Proceeding to vote.');
        // Hide login section and show vote section
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('voteSection').style.display = 'block';
    } else {
        alert('Invalid OTP. Please enter a valid OTP.');
    }
}

// Function to submit vote
function submitVote() {
    const selectedCandidate = document.querySelector('.candidate-list input[type="radio"]:checked');

    if (selectedCandidate) {
        const candidateName = selectedCandidate.value;
        vote(candidateName); // Call the new vote function with the selected candidate
        // Show thank-you message and hide vote section
        document.getElementById('voteSection').style.display = 'none';
        document.getElementById('thankYouSection').style.display = 'block';
    } else {
        alert('Please select a candidate to vote.');
    }
}

// Function to handle voting
function vote(candidateName) {
    alert(`You voted for ${candidateName}`);
    // Note: No need to handle redirection since thank you message is shown on the same page
}
