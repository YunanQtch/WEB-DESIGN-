const emailForm = document.getElementById("emailForm");

const emailInput = document.getElementById("emailInput");

const message = document.getElementById("message");

emailForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    message.textContent = "Thank you. We will notify you when we launch.";

    emailInput.value = "";
});