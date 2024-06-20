const toolTips = document.querySelectorAll('.has-tooltip');

function setNewTipPosition(tip) {
  const positions = ['top', 'left', 'right', 'bottom'];
  const randomPosition = positions[Math.floor(Math.random() * 4)];
  tip.setAttribute('data-position', randomPosition);
}

toolTips.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const tips = document.querySelectorAll('.tooltip');
    tips.forEach(tip => tip.remove());

    element.insertAdjacentHTML('afterEnd', `<div class="tooltip">${element.getAttribute('title')}</div>`);

    const newTip = element.nextElementSibling;
    newTip.classList.add('tooltip_active');
    newTip.style.position = 'absolute';

    const elementPosition = element.getBoundingClientRect();
    const tipPosition = newTip.getBoundingClientRect();

    setNewTipPosition(newTip);
    const position = newTip.dataset.position;
    switch(position) {
      case 'top':
        newTip.style.left = `${elementPosition.left}px`;
        newTip.style.top = `${elementPosition.top + window.scrollY - tipPosition.height}px`;
        break;
      case 'bottom':
        newTip.style.left = `${elementPosition.left}px`;
        newTip.style.top = `${elementPosition.top + window.scrollY + elementPosition.height}px`;
        break;
      case 'left':
        newTip.style.left = `${elementPosition.left - tipPosition.width}px`;
        newTip.style.top = `${elementPosition.top + window.scrollY}px`;
        break;
      case 'right':
        newTip.style.left = `${elementPosition.left + elementPosition.width}px`;
        newTip.style.top = `${elementPosition.top + window.scrollY}px`;
        break;
      default:
        newTip.style.left = `${elementPosition.left}px`;
        newTip.style.top = `${elementPosition.top + window.scrollY + elementPosition.height}px`;
        break;
    }
  })
})