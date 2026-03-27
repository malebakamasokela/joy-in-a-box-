// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add smooth opacity initially
scrollTopBtn.style.transition = 'opacity 0.3s, visibility 0.3s';
scrollTopBtn.style.opacity = '0';
scrollTopBtn.style.visibility = 'hidden';