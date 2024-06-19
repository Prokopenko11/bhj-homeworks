const fontSizes = document.querySelectorAll('.font-size');
const colors = document.querySelectorAll('.book__control_color .color');
const backgroundColors = document.querySelectorAll('.book__control_background .color');
const book = document.querySelector('.book');

function changeSize(e) {
  e.preventDefault();

  fontSizes.forEach(element =>{
    element.classList.remove('font-size_active');
  });
  this.classList.add('font-size_active');

  book.classList.remove('book_fs-small', 'book_fs-big');
  book.classList.add(`book_fs-${this.dataset.size}`)
}

function changeColor(e) {
  e.preventDefault();
  
  colors.forEach(element =>{
    element.classList.remove('color_active');
  });
  this.classList.add('color_active');

  book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
  book.classList.add(`book_color-${this.dataset.textColor}`)
}

function changeBackground(e) {
  e.preventDefault();
  
  backgroundColors.forEach(element =>{
    element.classList.remove('color_active');
  });
  this.classList.add('color_active');

  book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
  book.classList.add(`book_bg-${this.dataset.bgColor}`)
}

fontSizes.forEach(element =>{
  element.addEventListener('click', changeSize)
})

colors.forEach(element =>{
  element.addEventListener('click', changeColor)
})

backgroundColors.forEach(element =>{
  element.addEventListener('click', changeBackground)
})