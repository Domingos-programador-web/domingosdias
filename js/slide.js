const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = dots.length;

function updateSlider() {
  // Move o trilho baseado no índice atual
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // Atualiza os pontos (dots)
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Clique nos pontos
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateSlider();
  });
});

// Suporte a deslize (Touch) simples
let touchStartX = 0;
track.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
track.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) nextBtn.click();
  if (touchStartX - touchEndX < -50) prevBtn.click();
});