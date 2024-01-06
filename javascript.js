document.addEventListener("DOMContentLoaded", function () {
    var contactLink = document.getElementById("contact-link");

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Scroll smoothly to the contact section
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var contactLink = document.getElementById("contact-link");

    contactLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Scroll smoothly to the contact section
        document.querySelector('#Discount').scrollIntoView({
            behavior: 'smooth'
        });
    });
});