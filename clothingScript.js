const emailForm = document.getElementById("emailForm");

const emailInput = document.getElementById("emailInput");

const message = document.getElementById("message");

const aboutButton = document.getElementById("aboutButton");

const aboutOverlay = document.getElementById("aboutOverlay");

const closeAbout = document.getElementById("closeAbout");

const backgroundMusic = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

if (emailForm) {

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
}

if (aboutButton) {

    aboutButton.addEventListener("click", function(event) {

        event.preventDefault();

        aboutOverlay.classList.add("active");
    });
}

if (closeAbout) {

    closeAbout.addEventListener("click", function() {

        aboutOverlay.classList.remove("active");
    });
}

if (aboutOverlay) {

    aboutOverlay.addEventListener("click", function(event) {

        if (event.target === aboutOverlay) {
            aboutOverlay.classList.remove("active");
        }
    });
}

if (musicButton) {

    musicButton.addEventListener("click", function() {

        if (musicPlaying === false) {

            backgroundMusic.play();

            backgroundMusic.volume = 0.35;

            musicButton.textContent = "🔊";

            musicPlaying = true;

        } else {

            backgroundMusic.pause();

            musicButton.textContent = "🔇";

            musicPlaying = false;
        }
    });
}