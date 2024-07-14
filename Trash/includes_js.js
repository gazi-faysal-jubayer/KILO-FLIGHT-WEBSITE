document.addEventListener("DOMContentLoaded", () => {
  // Add the basic CSS file dynamically
  const link1 = document.createElement('link');
  link1.rel = 'stylesheet';
  link1.href = '../assets/css/basic_style.css';
  document.head.appendChild(link1);

  // Add the Header & Footer CSS file dynamically
  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = '../includes/includes_styles.css';
  document.head.appendChild(link2);

  // Create header div dynamically
  const headerDiv = document.createElement('div');
  headerDiv.id = 'header';
  document.body.insertBefore(headerDiv, document.querySelector('main'));

  // Create footer div dynamically
  const footerDiv = document.createElement('div');
  footerDiv.id = 'footer';
  document.body.appendChild(footerDiv);

  // Fetch and insert header content
  fetch('../includes/headernav.html')
    .then(response => response.text())
    .then(data => {
      headerDiv.innerHTML = data;
      addMenuToggle();
    })
    .catch(error => console.error('Error loading header:', error));

  // Fetch and insert footer content
  fetch('../includes/footer.html')
    .then(response => response.text())
    .then(data => footerDiv.innerHTML = data)
    .catch(error => console.error('Error loading footer:', error));

  function addMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const lines = toggleButton.querySelectorAll('.line');

    toggleButton.addEventListener('click', () => {
      nav.classList.toggle('active');
      lines.forEach(line => line.classList.toggle('open'));
    });
  }
});
