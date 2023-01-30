// Toggle light and dark theme

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
})

