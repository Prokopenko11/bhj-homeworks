const decreases = document.querySelectorAll('.product__quantity-control_dec');
const increases = document.querySelectorAll('.product__quantity-control_inc');
const productQuantityValues = document.querySelectorAll('.product__quantity-value');
let counter = 1;

for (let i = 0; i < decreases.length; i++) {
  decreases[i].addEventListener('click', () => {
    counter = productQuantityValues[i].textContent;
    if (counter > 1) {
      counter--;
      productQuantityValues[i].innerText = counter;
    }
  })
}

for (let i = 0; i < increases.length; i++) {
  increases[i].addEventListener('click', () => {
    counter = productQuantityValues[i].textContent;
    counter++;
    productQuantityValues[i].innerText = counter;
  })
}

const cart = document.querySelector('.cart');
const cartProductsWrapper = document.querySelector('.cart__products')
const productAdd = document.querySelectorAll('.product__add');
productAdd.forEach(element => {
  element.addEventListener('click', () => {   
    cart.classList.add('cart__active');
    const productId = element.closest('.product').dataset.id;
    const cartProducts = document.querySelectorAll('.cart__product');
    const existingProduct = Array.from(cartProducts).find(cartProduct => cartProduct.dataset.id === productId);

    if (existingProduct) {
      const existingProductCount = existingProduct.querySelector('.cart__product-count');
      existingProductCount.textContent = Number(existingProductCount.textContent) + Number(productQuantityValues[productId - 1].textContent);
      productQuantityValues[productId- 1].textContent = 1;
    } else {
      const product = document.createElement('div');
      product.classList.add('cart__product');
      product.dataset.id = productId;
  
      const productImage = document.createElement('img');
      productImage.classList.add('cart__product-image');
      productImage.setAttribute('src', element.closest('.product').querySelector('img').getAttribute('src'))
  
      const productCount = document.createElement('div');
      productCount.classList.add('cart__product-count');
      productCount.textContent = Number(productQuantityValues[productId- 1].textContent);
      productQuantityValues[productId- 1].textContent = 1;

      const deleteProduct = document.createElement('div');
      deleteProduct.classList.add('delete__product');
      deleteProduct.textContent = 'Удалить'
      deleteProduct.addEventListener('click', () => {
        product.remove();

        if (cartProducts.length < 1) {
          cart.classList.remove('cart__active');
        }
      })
  
      product.appendChild(productImage);
      product.appendChild(productCount);
      product.appendChild(deleteProduct);
      cartProductsWrapper.appendChild(product);
    }
  })
})