/**
 * Portfolio cursor-following image effect
 * Makes .company-image follow cursor on hover for devices wider than 820px
 */

function initPortfolioCursor() {
  // Only run on devices wider than 820px
  if (window.innerWidth <= 820) return;

  const listItems = document.querySelectorAll('.company-list-item');
  
  listItems.forEach(item => {
    const image = item.querySelector('.company-image');
    if (!image) return;

    // Set initial image styles
    image.style.position = 'fixed';
    image.style.pointerEvents = 'none';
    image.style.opacity = '0';
    image.style.transition = 'opacity 0.3s ease';
    image.style.zIndex = '100';

    item.addEventListener('mouseenter', () => {
      image.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
      image.style.opacity = '0';
    });

    item.addEventListener('mousemove', (e) => {
      // Offset the image slightly from cursor
      const offsetX = 20;
      const offsetY = 20;
      
      image.style.left = `${e.clientX + offsetX}px`;
      image.style.top = `${e.clientY + offsetY}px`;
    });
  });
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioCursor);
} else {
  initPortfolioCursor();
}

// Reinitialize on Astro page transitions
document.addEventListener('astro:page-load', initPortfolioCursor);

// Reinitialize on window resize if crossing the 820px threshold
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  const crossedThreshold = (lastWidth <= 820 && currentWidth > 820) || 
                          (lastWidth > 820 && currentWidth <= 820);
  
  if (crossedThreshold) {
    initPortfolioCursor();
  }
  lastWidth = currentWidth;
});
