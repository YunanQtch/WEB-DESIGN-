const emailForm = document.getElementById("emailForm");

const emailInput = document.getElementById("emailInput");

const message = document.getElementById("message");

const aboutButton = document.getElementById("aboutButton");

const aboutOverlay = document.getElementById("aboutOverlay");

const closeAbout = document.getElementById("closeAbout");

const backgroundMusic = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

/* EMAIL FORM */
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

/* ABOUT BUTTON */
if (aboutButton && aboutOverlay) {

    aboutButton.addEventListener("click", function(event) {

        event.preventDefault();

        aboutOverlay.classList.add("active");
    });
}

/* CLOSE ABOUT BUTTON */
if (closeAbout && aboutOverlay) {

    closeAbout.addEventListener("click", function() {

        aboutOverlay.classList.remove("active");
    });
}

/* CLOSE ABOUT WHEN CLICKING OUTSIDE THE BOX */
if (aboutOverlay) {

    aboutOverlay.addEventListener("click", function(event) {

        if (event.target === aboutOverlay) {
            aboutOverlay.classList.remove("active");
        }
    });
}

/* MUSIC BUTTON */
if (musicButton && backgroundMusic) {

    backgroundMusic.volume = 0.35;

    musicButton.addEventListener("click", function() {

        if (musicPlaying === false) {

            backgroundMusic.muted = false;

            backgroundMusic.play()
                .then(function() {

                    musicButton.textContent = "🔊";

                    musicPlaying = true;
                })
                .catch(function(error) {

                    console.log("Music could not play:", error);

                    alert("Music could not play. Please check that music.mp3 is uploaded correctly.");
                });

        } else {

            backgroundMusic.pause();

            musicButton.textContent = "🔇";

            musicPlaying = false;
        }
    });
}