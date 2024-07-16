const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const animationElements = document.querySelectorAll('.animate-on-scroll');

animationElements.forEach(el => {
    observer.observe(el);
});

