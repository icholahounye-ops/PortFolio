 const buttons = document.querySelectorAll('.domaine');
  const descriptions = document.querySelectorAll('.description');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const isActive = btn.classList.contains('active');
      buttons.forEach(b => b.classList.remove('active'));
      descriptions.forEach(d => d.classList.remove('visible'));
      if (!isActive) {
        btn.classList.add('active');
        document.getElementById(targetId).classList.add('visible');
      }
    });
  });


const formContact = document.getElementById('form-contact');
if (formContact) {
  formContact.addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'thankyou.html';
  });
}

  document.querySelectorAll('.photo img').forEach(function (img) {
      img.addEventListener('click', function () {
        window.open(img.src, '_blank');
      });
    });
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('header nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
