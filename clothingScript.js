const emailForm = document.getElementById("emailForm");//gets the email form

const emailInput = document.getElementById("emailInput");//gets the email input

const message = document.getElementById("message");//gets the message area

const aboutButton = document.getElementById("aboutButton");//gets the about button

const aboutOverlay = document.getElementById("aboutOverlay");//gets the about pop up overlay

const closeAbout = document.getElementById("closeAbout");//gets the about close button

const contactButton = document.getElementById("contactButton");//gets the contact button

const contactOverlay = document.getElementById("contactOverlay");//gets the contact pop up overlay

const closeContact = document.getElementById("closeContact");//gets the contant close button

const backgroundMusic = document.getElementById("backgroundMusic");//gets the background music

const musicButton = document.getElementById("musicButton");//gets the music button

let musicPlaying = false;//tracks if music is playing

//email form validation
if (emailForm && emailInput && message) {

    //the email form is submitted and run
    emailForm.addEventListener("submit", function(event) {

        //stops the page from refreshing
        event.preventDefault();

        //gets the typed email
        const email = emailInput.value.trim();

        //checks if the email is empty
        if (email === "") {

            //checks if the email is empty
            message.textContent = "Please enter your email address.";

            //stops the function
            return;
        }

        message.textContent = "Thank you. We will notify you when we launch.";

        //clears the email input
        emailInput.value = "";
    });
}

//checks if the about elements exists
if (aboutButton && aboutOverlay) {

    //runs when about is pressed
    aboutButton.addEventListener("click", function(event) {

        //stops the default link action
        event.preventDefault();

        //shows the about pop up
        aboutOverlay.classList.add("active");
    });
}

//checks if about close button exists
if (closeAbout && aboutOverlay) {

    //runs when about x is clicked
    closeAbout.addEventListener("click", function() {

        //about pop up hides
        aboutOverlay.classList.remove("active");
    });
}

//checks if the about overlay exists
if (aboutOverlay) {

    //runs when about overlay is clicked
    aboutOverlay.addEventListener("click", function(event) {

        //runs when about x is clicked
        if (event.target === aboutOverlay) {

            //hides about pop up
            aboutOverlay.classList.remove("active");
        }
    });
}

//checks if contact elements exits
if (contactButton && contactOverlay) {

    //runs when contact is clicked
    contactButton.addEventListener("click", function(event) {

        //stops default link action
        event.preventDefault();

        //shows contact pop up 
        contactOverlay.classList.add("active");
    });
}

//checks if contact close button exists
if (closeContact && contactOverlay) {

    //runs when the contact x is clicked
    closeContact.addEventListener("click", function() {

        //hides the contact pop up
        contactOverlay.classList.remove("active");
    });
}

//checks if the contact overlay exists
if (contactOverlay) {

    //runs when contact overlay is clicked
    contactOverlay.addEventListener("click", function(event) {

        //checks if the outside box is clicked
        if (event.target === contactOverlay) {

            //hides the contact pop up
            contactOverlay.classList.remove("active");
        }
    });
}

//checks if the music elements exists
if (musicButton && backgroundMusic) {

    //sets the music volume
    backgroundMusic.volume = 0.35;

    //runs when the music button is clicked
    musicButton.addEventListener("click", function() {

        //checks if the music is stopped or no
        if (musicPlaying === false) {

            //checks if the music is not muted
            backgroundMusic.muted = false;

            //starts the music
            backgroundMusic.play()
                .then(function() {

                    musicButton.textContent = "🔊";

                    musicPlaying = true;
                })
                //runs if the music fails
                .catch(function(error) {

                    //shows error in console
                    console.log("Music could not play:", error);

                    //shows alert message
                    alert("Music could not play. Please check that music.mp3 is uploaded correctly.");
                });

        } else {

            //pauses music
            backgroundMusic.pause();

            //shows muted icons
            musicButton.textContent = "🔇";

            //updates the music state
            musicPlaying = false;
        }
    });
}