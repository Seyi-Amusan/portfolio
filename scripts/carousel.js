const glideLandingPages = new Glide('.glide-landing-pages', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  animationDuration: 700,
  animationTimingFunc: 'ease-in-out'
});

glideLandingPages.mount();

const glideReact = new Glide('.glide-react', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  animationDuration: 700,
  animationTimingFunc: 'ease-in-out'
});

glideReact.mount();