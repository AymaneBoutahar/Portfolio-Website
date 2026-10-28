
const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        // Prevent the default Formspree redirect
        event.preventDefault();

        const submitButton = contactForm.querySelector(".contact-submit");
        const originalButtonText = submitButton.innerHTML;

        // Remove an old error message
        const oldError = contactForm.querySelector(".contact-form-error");

        if (oldError) {
            oldError.remove();
        }

        // Disable the button while sending
        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        try {

            // Send the form to Formspree
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                // Replace the form with the success message
                contactForm.classList.add("is-success");

                contactForm.innerHTML = `
                    <p class="contact-success-label">
                        MESSAGE SENT SUCCESSFULLY
                    </p>

                    <h2 class="contact-success-title">
                        Thank you<span>.</span>
                    </h2>

                    <p class="contact-success-subtitle">
                        Your message is on its way.
                    </p>

                    <p class="contact-success-text">
                        Thanks for reaching out!
                        I've received your message and will
                        get back to you as soon as possible.
                    </p>

                    <a href="index.html" class="contact-success-link">
                        Back to homepage ↗
                    </a>
                `;

            } else {

                throw new Error("Form submission failed.");

            }

        } catch (error) {

            // Show an error if something goes wrong
            const errorMessage = document.createElement("p");

            errorMessage.className = "contact-form-error";
            errorMessage.textContent =
                "Something went wrong. Please try again.";

            contactForm.appendChild(errorMessage);

            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;

        }

    });

}
