function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thanks, ${name}! Your message has been received.`);
    document.querySelector("form").reset();
    return false;
  }
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
// Theme toggle with local storage
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
}

// Load saved theme
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thanks, ${name}! Your message has been received.`);
  document.querySelector("form").reset();
}
