document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider__list');
  const prevBtn = document.querySelector('.slider__btn--left');
  const nextBtn = document.querySelector('.slider__btn--right');
  const items = document.querySelectorAll('.slider__item');
  const sliderWrapper = document.querySelector('.slider__wrapper');

  let index = 0;
  const totalSlides = items.length;
  const itemWidth = items[0].clientWidth;
  let autoSlideInterval;

  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('slider__dots');
  sliderWrapper.appendChild(dotsContainer);

  items.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('slider__dot');
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider__dot');

  function updateSlider() {
    track.style.transform = `translateX(${-index * itemWidth}px)`;
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

  dotsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('slider__dot')) {
      index = parseInt(e.target.dataset.index);
      updateSlider();
      resetAutoSlide();
    }
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
