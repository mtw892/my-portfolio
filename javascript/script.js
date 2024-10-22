  // Typewriter Effect with Bubble Animation
document.addEventListener('DOMContentLoaded', function () {
  const typewriterText = document.querySelector('.typewriter-text');
  
  if (!typewriterText) {
      console.error("The element '.typewriter-text' is not found.");
      return; // Exit if the element is missing
  }

  const textArray = ['Web Developer', 'Web Designer', 'Digital Artist', 'E-commerce Specialist']; // Your dynamic texts
  let textIndex = 0;
  let charIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
      if (textIndex < textArray.length) {
          if (!isDeleting && charIndex < textArray[textIndex].length) {
              currentText = textArray[textIndex].slice(0, ++charIndex);
              typewriterText.innerHTML = currentText;
              createBubble(); // Create a bubble with each typed character
              setTimeout(type, 150); // Typing speed
          } else if (isDeleting && charIndex > 0) {
              currentText = textArray[textIndex].slice(0, --charIndex);
              typewriterText.innerHTML = currentText;
              setTimeout(type, 100); // Deleting speed
          } else {
              isDeleting = !isDeleting;
              if (!isDeleting) {
                  textIndex++;
              }
              setTimeout(type, 1000); // Pause before switching to the next text
          }
      } else {
          textIndex = 0;
          setTimeout(type, 1500); // Loop back to the first text after finishing
      }
  }

  function createBubble() {
      const bubble = document.createElement('span');
      bubble.classList.add('bubble');
      document.body.appendChild(bubble);

      // Randomize bubble's position and size
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight / 1.5;
      const size = Math.random() * 50 + 10;

      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Remove the bubble after animation ends
      setTimeout(() => {
          bubble.remove();
      }, 3000); // Adjust timing to control bubble life span
  }

  // Initialize the typewriter effect
  type();
});
