// Initialize Feather icons
feather.replace();

// Handle newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Here you would typically send this to your backend
  console.log('Newsletter subscription:', email);
  
  // Clear the input and show success message
  e.target.reset();
  alert('Thanks for subscribing!');
});