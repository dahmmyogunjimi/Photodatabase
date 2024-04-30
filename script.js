// Sample data for shoes (replace with actual data from your database)
const shoes = [
    { id: 1, name: 'Nike Air Max', category: 'Sneakers', price: 120.99, image_url: 'https://example.com/nike_air_max.jpg' },
    { id: 2, name: 'Adidas Superstar', category: 'Sneakers', price: 99.99, image_url: 'https://example.com/adidas_superstar.jpg' },
    // Add more shoes here
];

// Function to display shoes on the webpage
function displayShoes() {
    const shoeList = document.getElementById('shoeList');
    shoeList.innerHTML = '';
    shoes.forEach(shoe => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${shoe.image_url}" alt="${shoe.name}">
            <h3>${shoe.name}</h3>
            <p>${shoe.category}</p>
            <p>$${shoe.price.toFixed(2)}</p>
            <button onclick="addToCart(${shoe.id})">Add to Cart</button>
        `;
        shoeList.appendChild(card);
    });
}

// Function to add shoe to cart
function addToCart(shoeId) {
    const shoe = shoes.find(s => s.id === shoeId);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(shoe);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to view cart
function viewCart() {
    window.location.href = 'cart.html';
}

// Display shoes when the page loads
window.onload = () => {
    displayShoes();
};

// Function to checkout
function checkout() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems.length > 0) {
        // Redirect to checkout page only if items are in the cart
        window.location.href = 'checkout.html'; // Ensure correct path to checkout page
    } else {
        // Display a message if the cart is empty
        alert('Your cart is empty. Please add items before checkout.');
    }
}

// Function to handle checkout form submission
function handleCheckoutForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    // Perform validation (e.g., check if name and address are not empty)

    // Display thank you message
    const message = `Thank you, ${name}! Your shoes have been shipped to ${address}.`;
    alert(message);

    // Clear cart after checkout (optional)
    localStorage.removeItem('cartItems');

    // Redirect or perform other actions as needed
    // window.location.href = 'thankyou.html'; // Redirect to thank you page
}

// Attach event listener to the checkout form
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutForm);
}

