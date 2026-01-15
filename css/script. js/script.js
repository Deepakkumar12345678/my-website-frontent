// Mobile menu toggle
const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const navBar = document.querySelector('.nav-bar');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
  burger.classList.toggle('active');
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      burger.classList.remove('active');
    });
  });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields: Name, Email, and Message');
      return;
    }
    
    // In a real application, you would send this data to a server
    // For now, just show a success message
    alert(`Thank you ${name}! Your message has been sent. We'll contact you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
  });
}

// Search functionality
const searchBtn = document.querySelector('.btn-sm');
const searchInput = document.getElementById('search');

if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}\n\nThis is a demo search function. In a real application, this would search the website content.`);
      searchInput.value = '';
    } else {
      alert('Please enter a search term');
    }
  });
  
  // Allow pressing Enter to search
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky navigation background
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    navBar.style.backgroundColor = '';
  }
});
