// Fade-in effect
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

// Language switcher
const esFlag = document.getElementById('es-flag');
const enFlag = document.getElementById('en-flag');
const description = document.getElementById('description');
const title = document.querySelector('h2');

function setLanguage(lang) {
  if (lang === 'es') {
    title.textContent = title.dataset.es;
    description.textContent = description.dataset.es;
    esFlag.classList.add('active');
    enFlag.classList.remove('active');
  } else {
    title.textContent = title.dataset.en;
    description.textContent = description.dataset.en;
    enFlag.classList.add('active');
    esFlag.classList.remove('active');
  }
}

esFlag.addEventListener('click', () => setLanguage('es'));
enFlag.addEventListener('click', () => setLanguage('en'));
