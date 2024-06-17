const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    animationDuration: 1500, 
    
}).mount();

const glideTwo = new Glide('.glide-2', {
    type: 'carousel',
    perView: 1,
    animationDuration: 1500, 
    
}).mount();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        // } else {
        //     entry.target.classList.remove('show');
        // }
    });
});


const animationElements = document.querySelectorAll('.animate-on-scroll');

animationElements.forEach(el => {
    observer.observe(el);
});


console.log(animationElements);