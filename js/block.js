const btn = document.querySelector('.section__btn');
const additionalSection = document.querySelector('.section__additional');

btn.addEventListener('click', () => {
  additionalSection.classList.toggle('show');
});
