// Hide the site content initially
const siteContent = document.getElementById("site-content");
const passwordScreen = document.getElementById("password-screen");
siteContent.style.display = "none";

// Set your password
const password = "hibbanloveszoha";

// Grab input elements
const input = document.getElementById("password-input");
const button = document.getElementById("password-btn");
const errorMsg = document.getElementById("error-msg");

// Function to check password
function checkPassword() {
  if(input.value === password){
    passwordScreen.style.display = "none"; // hide password screen
    siteContent.style.display = "block";   // show website
  } else {
    errorMsg.textContent = "Incorrect password! Try again.";
    input.value = "";
    input.focus();
  }
}

// Check password when button is clicked
button.addEventListener("click", checkPassword);

// Allow pressing Enter to submit
input.addEventListener("keyup", (e) => {
  if(e.key === "Enter"){
    checkPassword();
  }
});
