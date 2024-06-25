var navLinks = document.getElementById("navLinks");

function showMenu(){
     navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

const typed = new Typed('.multiple-text', {
    strings: ['located in Houma, LA.', 'Friends.', 'Family.'],
    typedSpeed: 50000,
    backSpeed: 100,
    backDelay: 1500,
    loop: true,

});