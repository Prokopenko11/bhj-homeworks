const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const progressBar = document.getElementById('progress');

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', e => {
    if (e.lengthComputable) {
      const percentComplete = (e.loaded / e.total) * 100;
      progressBar.value = percentComplete;
    }
  })

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
})