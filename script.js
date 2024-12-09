// Carrossel de Plantas de Interior
const interiorCarousel = document.getElementById('interior-carousel');
const interiorItems = interiorCarousel.getElementsByClassName('carousel-item');
let interiorCurrentIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    interiorItems[interiorCurrentIndex].classList.remove('active');
    interiorCurrentIndex = (interiorCurrentIndex - 1 + interiorItems.length) % interiorItems.length;
    interiorItems[interiorCurrentIndex].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
    interiorItems[interiorCurrentIndex].classList.remove('active');
    interiorCurrentIndex = (interiorCurrentIndex + 1) % interiorItems.length;
    interiorItems[interiorCurrentIndex].classList.add('active');
});
// Função para adicionar o produto ao carrinho e exibir mensagem de feedback
function addToCart(productName, productPrice, quantity) {
    // Calcula o valor total
    const totalValue = (productPrice * quantity).toFixed(2);

    // Exibe a mensagem de feedback
    const feedback = document.getElementById('cart-feedback');
    feedback.innerHTML = `${quantity} x ${productName} adicionados ao carrinho. Total: R$ ${totalValue}`;
    feedback.style.display = 'block';

    // Ocultar a mensagem após 3 segundos
    setTimeout(function() {
        feedback.style.display = 'none';
    }, 3000);
}
