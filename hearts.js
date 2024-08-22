document.getElementById('heartbutton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default button behavior
    
    const overlay = document.getElementById('hearts-overlay');
    overlay.style.display = 'block'; // Show the overlay

    const buttonRect = e.target.getBoundingClientRect(); // Get the button's position

    for (let i = 0; i < 30; i++) { // Generate 30 hearts
        const heart = document.createElement('div');
        heart.className = 'heart-animation';
        
        // Set initial position based on the button's location
        heart.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
        heart.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

        overlay.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 5000); // Matches the duration of the animation
    }

    // Hide overlay after 5 seconds
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 5000);
});
