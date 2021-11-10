let selectedCategory = loginType();

function loginType() {
  let selectedTag = document.querySelectorAll(".category--active");
  selectedTag.forEach(item => {
    let prevItem = selectedTag[0];
    item.addEventListener("click",() => {
      if(!item.classList.contains('category-selected')) {
        if(item === selectedTag[0]) {
          prevItem = selectedTag[1];
          console.log(prevItem);
        }
        if(item === selectedTag[1]) {
          prevItem = selectedTag[0];
          console.log(prevItem);
        }
        prevItem.classList.remove('category-selected');
        item.className += " category-selected";
      }
    });
  });
}