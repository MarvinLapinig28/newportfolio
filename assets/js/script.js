(function () {
    emailjs.init({
        publicKey: "02_61DPAT2tXKBzFg",
    });
})();

document.getElementById("contact-form")
.addEventListener("submit", function (event) {

    event.preventDefault();

    const button = document.getElementById("submit-btn");
    const status = document.getElementById("form-status");

    button.disabled = true;
    button.innerText = "Sending...";

    emailjs.sendForm(
        "service_1y4k0ue",
        "template_o767bug",
        this
    )
    .then(function () {

        status.innerHTML =
            "Your message has been sent successfully!";

        status.style.color = "green";

        document.getElementById("contact-form").reset();

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        status.innerHTML =
            "Failed to send message. Please try again.";

        status.style.color = "red";

    })
    .finally(function () {

        button.disabled = false;
        button.innerText = "Send Message";

    });

});