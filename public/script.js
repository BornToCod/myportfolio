const menuButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navMenuSmall = document.getElementById('nav-menu-small');

menuButton.addEventListener('click', () => {
    navMenuSmall.classList.toggle('hidden');
    navMenuSmall.classList.toggle('flex');
    navMenuSmall.classList.toggle('flex-row');
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { 
        navMenuSmall.classList.add('hidden');
        navMenuSmall.classList.remove('flex', 'flex-row');
    }
});

// ===========================
// const phrases = ["Hi my name is abdelali elhaddad","I am a fullstack developer.", "I am a game developer.", "I am a designer."];
// const introText = document.getElementById('intro-text');

// let index = 0;
// let textIndex = 0;

// function typeText() {
//     if (textIndex < phrases[index].length) {
//         introText.textContent += phrases[index][textIndex];
//         textIndex++;
//         setTimeout(typeText, 50); // Adjust typing speed here (in milliseconds)
//     } else {
//         // After typing the phrase, move to the next one or start over
//         textIndex = 0;
//         index = (index + 1) % phrases.length;
//         introText.textContent = '';
//         setTimeout(typeText, 2000); // Delay before typing the next phrase
//     }
// }

// Start the typing animation when the page loads
// window.addEventListener('load', typeText);

// =========================


// document.addEventListener('DOMContentLoaded', function () {
// const introText = document.getElementById('intro-text');

// // Configure Typed.js
// const options = {
//     strings: ["I am a fullstack developer.", "I am a game developer.", "I am a designer."],
//     typeSpeed: 50, // Typing speed (adjust as needed)
//     backSpeed: 25, // Backspacing speed (adjust as needed)
//     backDelay: 1000, // Delay after finishing typing a phrase (adjust as needed)
//     loop: true // Loop through the phrases
// };

// // Initialize Typed.js
// const typed = new Typed(introText, options);
// });

// const navLinks = document.querySelectorAll('.nav-link');
// const line = document.querySelector('.line');

// navLinks.forEach((link) => {
//     link.addEventListener('mouseover', () => {
//         const linkWidth = link.offsetWidth;
//         const linkLeft = link.offsetLeft;
//         line.style.width = `${linkWidth}px`;
//         line.style.left = `${linkLeft}px`;
//     });

//     link.addEventListener('mouseout', () => {
//         line.style.width = '0';
//         line.style.left = '0';
//     });
// });
