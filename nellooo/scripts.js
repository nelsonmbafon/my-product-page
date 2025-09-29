let track = document.getElementById('track');
let scrollAmount = 0;

function slide(direction) {
  const cardWidth = track.querySelector('.product-card').offsetWidth + 20; // card + margin
  if(direction === 'left') {
    scrollAmount -= cardWidth;
    if(scrollAmount < 0) scrollAmount = 0;
  } else {
    scrollAmount += cardWidth;
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
    if(scrollAmount > maxScroll) scrollAmount = maxScroll;
  }
  track.style.transform = `translateX(-${scrollAmount}px)`;
}