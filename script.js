// Toggle light and dark theme

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
})


// Scroll animation
window.addEventListener('scroll', () => {
    document.getElementById('scroll-arrow').style.visibility = "hidden";
}
)
