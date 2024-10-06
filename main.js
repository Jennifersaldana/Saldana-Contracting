document.addEventListener('DOMContentLoaded', function () {
    // Your code goes here

    var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-200px";
    }

    const typed = new Typed('.multiple-text', {
        strings: ['Located in Houma, LA.', 'Friends.', 'Family.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1500,
        loop: true
    });

    document.querySelector('.footer-iconTop a').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });




});



document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});