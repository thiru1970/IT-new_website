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



    

    // Wrap the code in a function to execute when the page loads
window.onload = function() {
    var text = "Software Solutions";
    var index = 0;
  
    // Clear existing text content
    document.getElementById('typing-animation').innerText = '';
  
    // Start typing animation
    function type() {
      if (index < text.length) {
        // Append next character
        document.getElementById('typing-animation').innerText += text.charAt(index);
        index++;
        // Call type function recursively after a delay
        setTimeout(type, 100); // Adjust typing speed by changing delay (in milliseconds)
      }
    }
  
    // Start typing animation when the page loads
    type();
  }

  








  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("animation-text").classList.add("animation-start");
  });
  