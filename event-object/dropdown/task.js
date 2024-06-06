const dropdown = document.querySelectorAll('.dropdown');
const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownItems = document.querySelectorAll('.dropdown__link');

function buttonOnClick(e) {
  const dropdownClosest = this.closest('.dropdown');
  const dropdownClosestList = dropdownClosest.querySelector('.dropdown__list');
  dropdownClosestList.classList.toggle('dropdown__list_active');
}

function itemOnClick(e) {
  e.preventDefault();
  const dropdownClosest = this.closest('.dropdown');
  const dropdownValue = dropdownClosest.querySelector('.dropdown__value');
  dropdownValue.textContent = this.textContent;
}

dropdownValue.forEach(item => {
  item.addEventListener('click', buttonOnClick);
});  

dropdownItems.forEach(item => {
  item.addEventListener('click', itemOnClick);
});

