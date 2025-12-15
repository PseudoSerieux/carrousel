const images = document.querySelectorAll('.carrousel img');
let index = 0;

setInterval(() => {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}, 1000); // 1 seconde
