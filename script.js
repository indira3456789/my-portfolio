// Smooth Scrolling

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(e.target.getAttribute('href').slice(1));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Enhance Portfolio Grid (Example with image overlay)

const projectGrid = document.querySelector('.project-grid');
const projects = projectGrid.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('project-overlay');
    project.appendChild(overlay);
  });

  project.addEventListener('mouseleave', () => {
    const overlay = project.querySelector('.project-overlay');
    if (overlay) {
      project.removeChild(overlay);
    }
  });
});

// Contact Form Validation (Basic Example)

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  let isValid = true;

  if (nameInput.value === '') {
    nameInput.classList.add('error');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value === '' || !validateEmail(emailInput.value)) {
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
  }

  if (messageInput.value === '') {
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
  }

  if (isValid) {
    // Submit the form (implementation depends on your backend setup)
    // For example, you could use a service like Formspree or fetch API
    console.log('Form submitted successfully!');
    contactForm.reset();
  }
});

// Function to validate email format (basic check)
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
