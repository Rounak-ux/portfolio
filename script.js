document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const name = form.name.value.trim();

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert(`Thanks, ${name || 'friend'}! I'll get back to you soon.`);
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  }).catch(error => {
    console.error(error);
    alert('There was a problem submitting the form.');
  });
});
