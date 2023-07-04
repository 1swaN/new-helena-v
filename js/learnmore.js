// let learnMoreButtons = document.querySelectorAll('.section__btn')

const healthBtn = document.querySelector(".health-btn");
const lifeBtn = document.querySelector(".life-btn");
const astroBtn = document.querySelector(".astro-btn");
const guaranteeBtn = document.querySelector(".guarantee-btn");

// learnMoreButtons.forEach(function(btn){
//     btn.addEventListener('click', function(el){
//         if (document.getElementsByClassName('.section__additional').style.display == 'block') {
//             document.getElementsByClassName('.section__additional').style.display = "none";
//         }
//           else {
//             document.getElementsByClassName('.section__additional').style.display = "block";
//         }
//     })
// })

healthBtn.addEventListener("click", () => {
  if (document.getElementById("health").style.opacity == "1") {
    document.getElementById("health").style.opacity = "0";
  } else {
    document.getElementById("health").style.opacity = "1";
  }
});

lifeBtn.addEventListener("click", () => {
  if (document.getElementById("life").style.opacity == "1") {
    document.getElementById("life").style.opacity = "0";
  } else {
    document.getElementById("life").style.opacity = "1";
  }
});

astroBtn.addEventListener("click", () => {
  if (document.getElementById("astro").style.opacity == "1") {
    document.getElementById("astro").style.opacity = "0";
  } else {
    document.getElementById("astro").style.opacity = "1";
  }
});

guaranteeBtn.addEventListener("click", () => {
  if (document.getElementById("guarantee").style.opacity == "1") {
    document.getElementById("guarantee").style.opacity = "0";
  } else {
    document.getElementById("guarantee").style.opacity = "1";
  }
});
