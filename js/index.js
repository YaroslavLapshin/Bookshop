document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const cartButton = document.querySelector('.cart');
    const wishlistButton = document.querySelector('.wishlist');
    const loginRegisterButton = document.querySelector('.login-register');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            window.location.href = `/search?query=${query}`;
        }
    });

    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    cartButton.addEventListener('click', () => {
        window.location.href = '/cart';
    });

    wishlistButton.addEventListener('click', () => {
        window.location.href = '/wishlist';
    });

    loginRegisterButton.addEventListener('click', () => {
        window.location.href = '/login';
    });
});