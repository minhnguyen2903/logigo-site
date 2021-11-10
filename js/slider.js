let card = document.querySelectorAll('.slider-card');
let sliderCount = 0;
let selectedNews = document.querySelector('.selected-news');
let categoryNews = document.querySelectorAll('.category-news');

categoryNews.forEach(item => {
  item.addEventListener('click',() => {
    selectedNews.classList.remove('selected-news');
    item.className += ' selected-news';
    selectedNews = item;
  });
});

function slideNext() {
  if(sliderCount < card.length - 4) {
    sliderCount++;
    card.forEach(item => {
      item.style.transform =`translateX(-${100*sliderCount}%)`;
    });
    console.log(sliderCount);
  }
}

function slidePrev() {
  if(sliderCount > 0) {
    sliderCount--;
    card.forEach(item => {
      item.style.transform =`translateX(-${100*sliderCount}%)`;
    });
    console.log(sliderCount);
  }
}

