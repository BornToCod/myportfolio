const menuButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navMenuSmall = document.getElementById('nav-menu-small');


document.addEventListener("DOMContentLoaded", function () {
  // Get all project cards
  const projectCards = document.querySelectorAll(".animate-on-scroll");

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  // Observe each project card
  projectCards.forEach((card) => {
    observer.observe(card);
  });
});

// ScrollReveal().reveal('.project-card', { delay: 200, duration: 500, easing: 'ease-in-out' });

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



// const token='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';
// // Your GitHub API fetch code (as shown in the previous response)
// const apiUrl = `https://api.github.com/users/${'BornToCod'}/repos`;

// fetch(apiUrl, {
//   headers: {
//     Authorization: `token ${token}`,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Reference to the project section container
//     const projectSection = document.getElementById('projects');

//     // Loop through your GitHub projects and create a card for each
//     data.forEach((project) => {
//       const card = document.createElement('div');
//       card.classList.add('bg-white', 'p-4','mx-auto', 'container', 'shadow-lg');
       
//       const title = document.createElement('h2');
//       title.textContent = project.name;
//       title.classList.add('text-xl', 'font-semibold', 'mb-2');

//       const description = document.createElement('p');
//       description.textContent = project.description;
//       description.classList.add('text-gray-700');

//       const link = document.createElement('a');
//       link.href = project.html_url;
//       link.textContent = 'View on GitHub';
//       link.classList.add('text-blue-600', 'hover:underline', 'block');

//       card.appendChild(title);
//       card.appendChild(description);
//       card.appendChild(link);

//       // Append the card to the project section container
//       projectSection.appendChild(card);
//     });
//   })
//   .catch((error) => console.error(error));



const token = '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';
const apiUrl = `https://api.github.com/users/${'BornToCod'}/repos`;

fetch(apiUrl, {
  headers: {
    Authorization: `token ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Log the data to the console to inspect its structure
    // console.log(data);

    // Reference to the project section container
    const projectSection = document.getElementById('projects');

    // Check if data is an array before using forEach
    if (Array.isArray(data)) {
      // Loop through your GitHub projects and create a card for each
      data.forEach((project) => {
        const card = document.createElement('div');
        card.classList.add('project-card','animate-on-scroll','max-w-sm', 'mx-3', 'my-3', 'h-auto', 'rounded-xl', 'shadow-md', 'overflow-hidden', 'hover:shadow-lg', 'hover:transform' ,'hover:scale-105' );
        card.setAttribute('data-aos','fade-up');

        const title = document.createElement('h2');
        title.textContent = project.name;
        title.classList.add('project-title');

        const description = document.createElement('p');
        description.textContent = project.description;
        description.classList.add('project-description');

        const link = document.createElement('a');
        link.href = project.html_url;
        link.textContent = 'View on GitHub';
        link.classList.add('project-link');

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        // Append the card to the project section container
        projectSection.appendChild(card);
      });
    } else {
      console.error('Data is not an array:', data);
    }
  })
  .catch((error) => console.error(error));

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
