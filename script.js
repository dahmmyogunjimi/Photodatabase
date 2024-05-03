// Sample data for shoes (replace with actual data from your database)
const shoes = [
    { id: 1, name: 'Nike Air Max Dn', category: 'Sneakers', price: 160, image_url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6cfb4ce5-2da4-4a6d-b79d-4ae520ae5e77/air-max-dn-shoes-27XkSQ.png' },
    { id: 2, name: 'SUPERSTAR SHOES', category: 'Sneakers', price: 110, image_url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f55efb99d6ea4948827b79c18a453168_9366/Superstar_Shoes_White_IF3637_01_standard.jpg' },
    { id: 3, name: 'MELLOW LUXE RECOVERY SLIDE', category: 'Sandals', price: 64.99, image_url: 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/209413_2DT_ALT100/crocs' },
    { id: 4, name: 'Capitola Cross Slide', category: 'Sandals', price: 120, image_url: 'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:eeeeee/w_483/v1700510492/catalog/images/transparent/1153076-COG_1.png?_s=RAABAB0' },
    { id: 5, name: 'SAMBA OG SHOES', category: 'Sneakers', price: 100, image_url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9de2e3254f5a425f8482fb4afd6632be_9366/Samba_OG_Shoes_White_IF6513_01_standard.jpg' },
    { id: 6, name: 'CLASSIC WARPED LOGO CLOG', category: 'Clogs', price: 54.99, image_url: 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/210805_100_ALT100/crocs' },
    { id: 7, name: 'Nike Air Force 1 07', category: 'Sneakers', price: 115, image_url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png' },
    { id: 8, name: 'Mens Tasman Slipper', category: 'Slippers', price: 110, image_url: 'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:eeeeee/w_483/v1637633033/catalog/images/transparent/5950-CHE_01.png?_s=RAABAB0' },
    { id: 9, name: 'Nike Dunk Low Retro', category: 'Sneakers', price: 115, image_url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30ed2748-cf6a-4697-a59f-105bbc4de8dc/dunk-low-retro-mens-shoes-5FQWGR.png' },
    { id: 10, name: 'GAZELLE SHOES', category: 'Sneakers', price: 120, image_url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e745acb29cd248e8994a6820a4ac6a29_9366/Gazelle_Shoes_Yellow_IF5937_01_standard.jpg' },
    { id: 11, name: 'ECHO MARBLED CLOG', category: 'Clogs', price: 74.99, image_url: 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208454_2Y3_ALT100/crocs' },
    { id: 12, name: 'Neumel', category: 'Boots', price: 140, image_url: 'https://dms.deckers.com/ugg/image/upload/f_auto,q_40,dpr_2/b_rgb:eeeeee/w_483/v1637600175/catalog/images/transparent/3236-BLK_1.png?_s=RAABAB0' },
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
