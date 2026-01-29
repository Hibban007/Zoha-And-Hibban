const siteContent = document.getElementById("site-content");
const passwordScreen = document.getElementById("password-screen");
siteContent.style.display = "none";

const password = "hibbanloveszoha";

const input = document.getElementById("password-input");
const button = document.getElementById("password-btn");
const errorMsg = document.getElementById("error-msg");

function checkPassword() {
  if (input.value === password) {
    passwordScreen.style.display = "none";
    siteContent.style.display = "block";
  } else {
    errorMsg.textContent = "Access Denied!";
    input.value = "";
    input.focus();
  }
}

button.addEventListener("click", checkPassword);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkPassword();
  }
});
