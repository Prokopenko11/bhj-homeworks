const form = document.getElementById('signin__form');
const signing = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const welcomeId = document.getElementById('user_id');

if (localStorage.id) {
  signing.classList.remove('signin_active');

  welcome.classList.add('welcome_active');
  welcomeId.innerText = `${localStorage.id}`
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const authObject = JSON.parse(xhr.responseText);
      if (authObject.success) {
        signing.classList.remove('signin_active');

        localStorage.setItem('id', authObject.user_id)

        welcome.classList.add('welcome_active');
        welcomeId.innerText = `${authObject.user_id}`
      } else {
        alert('Неверный логин/пароль');
      }
    }
  })

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);
})