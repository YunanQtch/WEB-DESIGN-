const emailForm = document.getElementById("emailForm");

const emailInput = document.getElementById("emailInput");

const message = document.getElementById("message");

const aboutButton = document.getElementById("aboutButton");

const collectionAboutButton = document.getElementById("collectionAboutButton");

const aboutOverlay = document.getElementById("aboutOverlay");

const closeAbout = document.getElementById("closeAbout");

const homePage = document.getElementById("homePage");

const collectionPage = document.getElementById("collectionPage");

const collectionButton = document.getElementById("collectionButton");

const homeButton = document.getElementById("homeButton");

const logoButton = document.getElementById("logoButton");

const collectionHomeButton = document.getElementById("collectionHomeButton");

const collectionLogoButton = document.getElementById("collectionLogoButton");

const collectionTopButton = document.getElementById("collectionTopButton");

const backgroundMusic = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

function showHomePage() {

    homePage.classList.add("active-page");

    collectionPage.classList.remove("active-page");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showCollectionPage() {

    collectionPage.classList.add("active-page");

    homePage.classList.remove("active-page");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openAboutBox() {

    aboutOverlay.classList.add("active");
}

function closeAboutBox() {

    aboutOverlay.classList.remove("active");
}

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

collectionButton.addEventListener("click", function(event) {

    event.preventDefault();

    showCollectionPage();
});

collectionTopButton.addEventListener("click", function(event) {

    event.preventDefault();

    showCollectionPage();
});

homeButton.addEventListener("click", function(event) {

    event.preventDefault();

    showHomePage();
});

logoButton.addEventListener("click", function(event) {

    event.preventDefault();

    showHomePage();
});

collectionHomeButton.addEventListener("click", function(event) {

    event.preventDefault();

    showHomePage();
});

collectionLogoButton.addEventListener("click", function(event) {

    event.preventDefault();

    showHomePage();
});

aboutButton.addEventListener("click", function(event) {

    event.preventDefault();

    openAboutBox();
});

collectionAboutButton.addEventListener("click", function(event) {

    event.preventDefault();

    openAboutBox();
});

closeAbout.addEventListener("click", function() {

    closeAboutBox();
});

aboutOverlay.addEventListener("click", function(event) {

    if (event.target === aboutOverlay) {
        closeAboutBox();
    }
});

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