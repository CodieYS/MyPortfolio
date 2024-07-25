// JavaScript to show image when cursor moves to center of screen and hide text
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // You can adjust the scroll amount as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// JavaScript to handle home-img effect and scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const homeSection = document.querySelector('.home');
    const homeImg = document.querySelector('.home-img');
    const overlay = document.querySelector('.overlay');
    const homeContent = document.querySelector('.home-content');
    const homeHeading = document.querySelector('.home-heading');

    // Calculate center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Function to check if the screen is mobile size
    function isMobile() {
        return window.innerWidth <= 1024; // Adjust this value as needed for your mobile breakpoint
    }


    // Track mouse movement for home-img and home-heading effects
    document.addEventListener('mousemove', function(event) {

        if (isMobile()) return; // Disable effect on mobile screens

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate distance from mouse to center
        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

        // Show/hide home-img and home-heading based on mouse distance from center
        if (distance < 75 && !header.classList.contains('scrolled')) { // Adjust this distance as needed
            homeImg.style.opacity = '1';
            homeImg.style.transform = 'translate(-50%, -50%) scale(1.1)';
            overlay.style.opacity = '0';
            homeContent.style.opacity = '0';
            homeHeading.style.transform = 'translateY(0)';
            homeHeading.classList.add('animate-heading'); // Add the class to start animation
            homeHeading.style.visibility = 'visible';
        } else {
            homeImg.style.opacity = '0';
            homeImg.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.opacity = '1';
            homeContent.style.opacity = '1';
            homeHeading.style.transform = 'translateY(100%)';
            homeHeading.classList.remove('animate-heading'); // Remove the class to stop animation
            homeHeading.style.visibility = 'hidden'; // Hide home-heading
        }


    // Ensure the home image is visible on page load for mobile
    if (isMobile()) {
        homeImg.style.opacity = '1';
        homeImg.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    });

    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > homeSection.offsetHeight * 0.5) { // Adjust scroll amount as needed
            header.classList.add('scrolled');
            // Remove home-img, home-heading effect when scrolled beyond 50% of homeSection height
            homeImg.style.opacity = '0';
            homeImg.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.opacity = '1';
            homeContent.style.opacity = '1';
            homeHeading.style.transform = 'translateY(100%)';
            homeHeading.classList.remove('animate-heading'); // Ensure animation stops when scrolled
            homeHeading.style.visibility = 'hidden'; // Hide home-heading
        } else {
            header.classList.remove('scrolled');
        }
    });
});


// Function to replace text on logo hover
function replaceText(show) {
    const portfolioText = document.getElementById('portfolio-text');
    const yashSukhijaText = document.getElementById('yash-sukhija-text');

    if (show) {
        portfolioText.style.opacity = '0';
        yashSukhijaText.style.opacity = '1';
    } else {
        portfolioText.style.opacity = '1';
        yashSukhijaText.style.opacity = '0';
    }
}
// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Function to navigate to the home page
function goToHome() {
    window.location.href = '#home';
}


document.addEventListener("DOMContentLoaded", function() {
    const circle = document.querySelector(".circle");

    circle.addEventListener("mouseenter", function() {
        circle.style.width = "110px"; // Adjusted size on hover
        circle.style.height = "110px"; // Adjusted size on hover
    });

    circle.addEventListener("mouseleave", function() {
        circle.style.width = "100px"; // Original size on mouse leave
        circle.style.height = "100px"; // Original size on mouse leave
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const circle = document.querySelector(".circle");
    const photo = document.querySelector(".about-photo img");

    circle.addEventListener("mouseenter", function() {
        photo.classList.add("glow");
    });

    circle.addEventListener("mouseleave", function() {
        photo.classList.remove("glow");
    });
});

// project section js code
const projectCards = document.querySelector('.project-cards');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
let currentSlide = 0;

prevArrow.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? 1 : 0;
    updateProjectCards();
});

nextArrow.addEventListener('click', () => {
    currentSlide = (currentSlide === 1) ? 0 : 1;
    updateProjectCards();
});

function updateProjectCards() {
    const slideWidth = document.querySelector('.project-card').clientWidth;
    projectCards.style.transform = `translateX(-${currentSlide * slideWidth * 3}px)`;
}

document.getElementById('prev-arrow').addEventListener('click', function() {
    document.querySelector('.project-cards').scrollBy({
        left: -300, // Adjust this value based on card width
        behavior: 'smooth'
    });
});

document.getElementById('next-arrow').addEventListener('click', function() {
    document.querySelector('.project-cards').scrollBy({
        left: 300, // Adjust this value based on card width
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const workCards = document.querySelectorAll('.work-card');

    // Add animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    });

    workCards.forEach(card => observer.observe(card));
});

