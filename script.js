// --- Theme Toggle Logic ---
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  toggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// --- Scroll Animation Logic ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { 
  threshold: 0.1 // Triggers when 10% of the section is visible
});

// Apply observer to all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});