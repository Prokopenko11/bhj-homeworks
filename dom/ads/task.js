function startRotator(rotatorElement) {
  const rotatorCases = rotatorElement.querySelectorAll('.rotator__case');
  let currentIndex = 0;

  setInterval(() => {
    rotatorCases[currentIndex].classList.remove('rotator__case_active');
  
    if (currentIndex < rotatorCases.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    rotatorCases[currentIndex].classList.add('rotator__case_active');
  }, 1000);
}

const rotators = document.querySelectorAll('.rotator');
rotators.forEach(startRotator)

