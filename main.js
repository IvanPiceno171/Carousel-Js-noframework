
//slider and image variables
const slider = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
// button variables
const leftButton = document.querySelector('.scroll-left');
const rightButton = document.querySelector('.scroll-right');

let position = 0;
// grab width of element.  depends on viewport
const size = images[0].clientWidth;

// event lister click
rightButton.addEventListener('click', () => {
    // if(position < 0 && position < 5)
    if(position < 6)
    {
        position++;
        slider.style.transform = 'translateX(' + (-size* position) + 'px)';
    }
    else if(position === 6){
       return position = 0 - 1
    }
    
})
leftButton.addEventListener('click', () => {
    if(position === 0){
        alert('cant scroll left')
    }
    else 
        position--;
        slider.style.transform = 'translateX(' + (-size * position) + 'px)';
})



