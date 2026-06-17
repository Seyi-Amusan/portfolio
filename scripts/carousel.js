const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
const carouselSelectors = [".glide-react", ".glide-landing-pages"];
const mountedCarousels = new Map();

document.addEventListener("DOMContentLoaded", () => {
  updateCarousels();
  desktopMediaQuery.addEventListener("change", updateCarousels);
});

function updateCarousels() {
  carouselSelectors.forEach((selector) => {
    const carouselEl = document.querySelector(selector);

    if (!carouselEl) return;

    if (desktopMediaQuery.matches) {
      destroyCarousel(selector);
      return;
    }

    mountCarousel(selector);
  });
}

function mountCarousel(selector) {
  if (mountedCarousels.has(selector)) return;

  const glide = new Glide(selector, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    animationDuration: 700,
    animationTimingFunc: "ease-in-out",
  });

  glide.mount();
  mountedCarousels.set(selector, glide);
}

function destroyCarousel(selector) {
  const glide = mountedCarousels.get(selector);

  if (!glide) return;

  glide.destroy();
  mountedCarousels.delete(selector);
}
