document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('emailInput');

    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = emailInput.value.trim(); // Trim whitespace

            if (!email) {
                alert('Please enter your email address.');
                return; // Stop if email is empty
            }

            fetch('https://script.google.com/macros/s/AKfycbw66neEc90zwDqxM04fgfNJ-gO3BJaex7DNXf94iNtP1B5tLva8_ADcrddGwu62AY9s/exec', {
                method: 'POST',
                body: new URLSearchParams({
                    email: email
                })
            })
            .then(response => {
                if (!response.ok) {
                    // Handle non-2xx status codes
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                alert('Thanks for subscribing!');
                newsletterForm.reset(); // Clear the form after success
            })
            .catch(err => {
                console.error('Fetch error:', err); // Log error for debugging
                alert('Error, please try again.');
            });
        });
    }
});
