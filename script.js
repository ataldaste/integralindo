// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Carrossel
    const slides = document.querySelectorAll('.carousel-container img');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    // Carrinho
    const cart = [];
    const cartCount = document.getElementById('cart-count');

    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const product = button.parentElement;
            const name = product.getAttribute('data-name');
            const price = product.getAttribute('data-price');

            cart.push({ name, price });
            cartCount.textContent = cart.length;
            alert(`${name} foi adicionado ao carrinho!`);
        });
    });

    // Produtos clicáveis
    document.querySelectorAll('.product-item').forEach((product) => {
        product.addEventListener('click', () => {
            const name = product.getAttribute('data-name');
            alert(`Você clicou no ${name}.`);
        });
    });
});
