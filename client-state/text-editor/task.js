const textarea = document.getElementById('editor');

const savedText = localStorage.getItem('text');
if (savedText) {
  textarea.value = savedText;
}

const button = document.querySelector('.clear__button');
button.addEventListener('click', () => {
  textarea.value = '';
  localStorage.removeItem('text');
})

textarea.addEventListener('input', () => {
  localStorage.setItem('text', textarea.value)
})

