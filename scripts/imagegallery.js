document.addEventListener('DOMContentLoaded', function() {
    const imageGallery = document.getElementById('img-gallery');

    imageGallery.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('gallery-img')) {
            event.target.style.border = "solid blue 5px";
            event.target.style.filter = "none";
        }
    });

    imageGallery.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('gallery-img')) {
            event.target.style.border = "none";
            event.target.style.filter = "grayscale(100%) blur(2px)";
        }
    });
});
