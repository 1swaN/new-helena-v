const btn = document.querySelectorAll('.section__btn');

btn.forEach(el => {
  el.addEventListener('click', () => {
    const section = el.closest('section');
    const additionalSection = section.querySelector('.section__additional');
    additionalSection.classList.toggle('show');
  });
});
