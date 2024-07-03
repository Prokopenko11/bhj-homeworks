const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active')

    const valuteObject = JSON.parse(xhr.responseText).response.Valute
    for(let key in valuteObject) {
      if (valuteObject.hasOwnProperty(key)) {
        const itemCode = key;
        const itemValue = valuteObject[key].Value;
        items.insertAdjacentHTML('afterbegin', `
          <div class="item">
            <div class="item__code">
              ${itemCode}
            </div>
            <div class="item__value">
              ${itemValue}
            </div>
            <div class="item__currency">
              руб.
            </div>
          </div>
        `);
      }
    }
  }
})