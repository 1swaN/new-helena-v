const btn = document.querySelectorAll('.section__btn');
const additionalSection = document.querySelectorAll('.section__additional');


btn.forEach(el => {
  el.addEventListener('click', () => {
    additionalSection.forEach(element => {
      element.classList.toggle('show');
    });
  });
});

