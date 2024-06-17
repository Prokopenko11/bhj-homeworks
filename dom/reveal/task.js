const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveal.forEach((element) => {
    const top = element.getBoundingClientRect().top;
  
    if ((top < window.innerHeight)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  })
})

