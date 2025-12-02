document.addEventListener("DOMContentLoaded", () => {
  // Small delay to ensure all elements are rendered
  setTimeout(() => {
    initializeGlide();
  }, 100);
});

function initializeGlide() {
  const glideReactEl = document.querySelector('.glide-react');
  const glideLandingPagesEl = document.querySelector('.glide-landing-pages');
  
  console.log('Glide React element:', glideReactEl);
  console.log('Glide Landing Pages element:', glideLandingPagesEl);
  
  if (glideReactEl) {
    new Glide('.glide-react', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      animationDuration: 700,
      animationTimingFunc: 'ease-in-out'
    }).mount();
    console.log('Glide React initialized');
  }
  
  if (glideLandingPagesEl) {
    new Glide('.glide-landing-pages', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      animationDuration: 700,
      animationTimingFunc: 'ease-in-out'
    }).mount();
    console.log('Glide Landing Pages initialized');
  }
}