document.addEventListener('DOMContentLoaded', () => {
    // --- PART 1: Navigation Dropdown Logic ---
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        // Toggle the 'active' class when the bars icon is clicked
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents immediate closing from the document click listener
            navMenu.classList.toggle('active');
        });

        // Close the menu if the user clicks anywhere else on the screen
        document.addEventListener('click', (event) => {
            if (!menuBtn.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    // --- PART 2: Card Cycling Logic ---
    const grid = document.getElementById('servicesGrid');
    const arrow = document.getElementById('cycleArrow');
    const scrollAmount = 310; 
    let isTransitioning = false;

    if (grid && arrow) {
        arrow.addEventListener('click', () => {
            // Only allow sliding if the screen is wider than 768px (Desktop mode)
            if (window.innerWidth <= 768) return;

            if (isTransitioning) return;
            isTransitioning = true;

            grid.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            grid.style.transform = `translateX(-${scrollAmount}px)`;

            setTimeout(() => {
                grid.style.transition = 'none';
                grid.appendChild(grid.firstElementChild);
                grid.style.transform = 'translateX(0)';
                isTransitioning = false;
            }, 600);
        });
    }

    // --- PART 3: Resolution Watcher ---
    window.addEventListener('resize', () => {
        // Automatically close the mobile menu if the screen is resized to Desktop
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
        }
        
        // Ensure the card grid is reset to position 0 when changing resolutions
        if (grid) {
            grid.style.transform = 'translateX(0)';
        }
    });
});