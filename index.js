const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    animationDuration: 1500, 
    
}).mount();


let lastScrollLeft = 0;
        window.addEventListener('scroll', () => {
            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

            if (scrollLeft > lastScrollLeft) {
                // Scrolled right
                glide.go('>>');
            } else if (scrollLeft < lastScrollLeft) {
                // Scrolled left
                glide.go('<<');
            }

            lastScrollLeft = scrollLeft <= 0 ? 0 : scrollLeft; // For Mobile or negative scrolling
        });