
//slider and image variables
const slider = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
// button variables
const leftButton = document.querySelector('.scroll-left');
const rightButton = document.querySelector('.scroll-right');

let counter = 0;
const size = images[0].clientWidth;



// event lister click

rightButton.addEventListener('click', () => {
    slider.style.trasition = 'transform 0.4 ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
})
leftButton.addEventListener('click', () => {
    slider.style.trasition = 'transform 0.4 ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

// carouselSlide.addEventListener('transitionend', () => {
//     if(images[counter].id === 'lastClone'){
//     slider.style.trasition = 'none';
//     counter = images.length - 2;
//     slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

        
//     }
// })

