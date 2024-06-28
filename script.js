document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector('.main-image');

    mainImage.addEventListener('mouseover', () => {
        mainImage.style.transform = 'scale(1.05)';
    });

    mainImage.addEventListener('mouseout', () => {
        mainImage.style.transform = 'scale(1)';
    });
});
