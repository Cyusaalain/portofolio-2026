document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const messageInput = document.getElementById('userMessage');
    const submitBtn = document.getElementById('submitBtn');
    const toast = document.getElementById('toast');

    /**
     * 1. Toast Notification Logic
     * Displays a brief message at the bottom of the screen
     */
    function showToast(message, isError = false) {
        toast.innerText = message;
        
        // Change color based on success or error
        if (isError) {
            toast.style.backgroundColor = "#F6C2C2"; // Error Pink/Red
            toast.style.color = "#000000";
        } else {
            toast.style.backgroundColor = "#3BF686"; // Success Green
            toast.style.color = "#000000";
        }
        
        // Add the 'show' class to trigger CSS animation
        toast.className = "toast show";
        
        // Remove the class after 3 seconds to hide it
        setTimeout(() => { 
            toast.className = toast.className.replace("show", ""); 
        }, 3000);
    }

    /**
     * 2. Form Validation Logic
     * Enables the button only when all fields have text
     */
    function checkForm() {
        const isFilled = nameInput.value.trim() !== "" && 
                         emailInput.value.trim() !== "" && 
                         messageInput.value.trim() !== "";
        
        submitBtn.disabled = !isFilled;
        
        if (isFilled) {
            submitBtn.classList.add('ready');
        } else {
            submitBtn.classList.remove('ready');
        }
    }

    // Listen for typing in all inputs
    nameInput.addEventListener('input', checkForm);
    emailInput.addEventListener('input', checkForm);
    messageInput.addEventListener('input', checkForm);

    /**
     * 3. AJAX Form Submission
     * Sends the data to Formspree/Gmail without reloading the page
     */
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const data = new FormData(form);
        
        // Update button UI to show "Sending" state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Success
                showToast("Message Sent! I'll get back to you soon.");
                form.reset();
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.classList.remove('ready');
                submitBtn.disabled = true; // Disable until new input
            } else {
                // Server Error
                showToast("Oops! There was a problem. Please try again.", true);
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.disabled = false;
            }
        } catch (error) {
            // Network Error
            showToast("Error connecting to the server.", true);
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            submitBtn.disabled = false;
        }
    });
});