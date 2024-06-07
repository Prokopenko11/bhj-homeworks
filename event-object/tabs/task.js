const tabs = document.querySelectorAll('.tab');
const tabsArr = Array.from(tabs);
const tabContent = document.querySelectorAll('.tab__content');
const tabContentArr = Array.from(tabContent);

function onClick() {
  tabsArr.forEach(tab => {
    tab.classList.remove('tab_active');
  })

  tabContentArr.forEach(content => {
    content.classList.remove('tab__content_active');
  })
  
  tabContentArr[tabsArr.indexOf(this)].classList.add('tab__content_active');
  this.classList.add('tab_active');
}

tabsArr.forEach(tab => {
  tab.addEventListener('click', onClick)
})