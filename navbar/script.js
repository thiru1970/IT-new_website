//lg screen product pop-up
document.addEventListener('DOMContentLoaded', function() {
    const productButton = document.getElementById('productButton');
    const productMenu = document.getElementById('productMenu');

    productButton.addEventListener('click', function() {
        const expanded = productButton.getAttribute('aria-expanded') === 'true' || false;
        productButton.setAttribute('aria-expanded', !expanded);
        productMenu.classList.toggle('hidden');
    });
    });

    // Mobile Product Pop-up
    const mobileProductButton = document.getElementById('mobileProductButton');
    const mobileDisclosure = document.getElementById('mobileDisclosure');
    mobileProductButton.addEventListener('click', function() {
    mobileDisclosure.classList.toggle('hidden');
    });

    //mobile hamburger and close button
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeMobileMenuButton = document.getElementById('closeMobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    mobileMenuButton.classList.add('hidden');
    closeMobileMenuButton.classList.remove('hidden');
    });
    closeMobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
    mobileMenuButton.classList.remove('hidden');
    closeMobileMenuButton.classList.add('hidden');
    });

    
    