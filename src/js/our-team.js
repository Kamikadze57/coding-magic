document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.slider__list');
  const prevBtn = document.querySelector('.slider__btn--left');
  const nextBtn = document.querySelector('.slider__btn--right');
  const items = document.querySelectorAll('.slider__item');
  const dots = document.querySelectorAll('.slider__dot');

  let index = 0;
  const totalSlides = items.length;
  const itemWidth = items[0].clientWidth;
  let autoSlideInterval;

  function updateSlider() {
    list.style.transform = `translateX(${-index * itemWidth}px)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlider();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
    resetAutoSlide();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      index = parseInt(e.target.dataset.index);
      updateSlider();
      resetAutoSlide();
    });
  });

  function autoSlide() {
    autoSlideInterval = setInterval(() => {
      index = (index + 1) % totalSlides;
      updateSlider();
    }, 3000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
  }

  autoSlide();
});
