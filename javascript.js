document.addEventListener("DOMContentLoaded", function () {
    var discountLink = document.getElementById("discount-link");

    discountLink.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector('#Discount').scrollIntoView({
            behavior: 'smooth'
        });
    });

    var contactButton = document.getElementById("contact-link");

    contactButton.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelector('#Contact Us').scrollIntoView({
            behavior: 'smooth'
        });
    });

});