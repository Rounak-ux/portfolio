
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  alert(`Thanks, ${name || 'friend'}! I'll get back to you soon.`);
  this.reset();
});
