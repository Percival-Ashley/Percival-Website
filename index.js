const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  toggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update the icon
  toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});