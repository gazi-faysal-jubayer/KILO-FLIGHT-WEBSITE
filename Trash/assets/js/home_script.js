document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
  
    scrollDown.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
    });
  });
  