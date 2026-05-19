const emailForm = document.getElementById("emailForm");

const emailInput = document.getElementById("emailInput");

const message = document.getElementById("message");

const aboutButton = document.getElementById("aboutButton");

const aboutOverlay = document.getElementById("aboutOverlay");

const closeAbout = document.getElementById("closeAbout");

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

aboutButton.addEventListener("click", function(event) {

    event.preventDefault();

    aboutOverlay.classList.add("active");
});

closeAbout.addEventListener("click", function() {

    aboutOverlay.classList.remove("active");
});

aboutOverlay.addEventListener("click", function(event) {

    if (event.target === aboutOverlay) {
        aboutOverlay.classList.remove("active");
    }
});