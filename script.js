let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})
function addToCart(productName, price, quantityId) {
    const quantityInput = document.getElementById(quantityId);
    const quantity = parseInt(quantityInput.value);
    const total = price * quantity;
    
    const cart = document.getElementById('cart');
    const cartItem = document.createElement('p');
    cartItem.innerHTML = `${quantity}x ${productName} - Total: R$${total}`;
    cart.appendChild(cartItem);
    
    quantityInput.value = 1;
  }

function finalizarPedido() {
    window.location.href = 'https://wa.me/qr/TL334QYXM4A5K1';
}

document.getElementById('finalizarPedido').addEventListener('click', finalizarPedido);