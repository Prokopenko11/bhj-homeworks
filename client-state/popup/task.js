const popup = document.querySelector('.modal');

if (getCookie('popupClosed') !== 'true') {
  popup.classList.add('modal_active');
}

const closeButton = document.querySelector('.modal__close');
closeButton.addEventListener('click', () => {
  popup.classList.remove('modal_active');
  setCookie('popupClosed', 'true');
})

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const cookieValue = document.cookie.substring(name.length + 1);
  return cookieValue;
}