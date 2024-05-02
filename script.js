<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #0000FF;
        }
        header {
            background-color: #FFA500;
            color: #fff;
            padding: 1rem;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        .product {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            margin-bottom: 1rem;
        }
        button {
            background-color: #333;
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bears Shop</h1>
    </header>
    <div class="container">
        <div class="product">
            <h2>Item #1</h2>
            <p>Description: This is our first item.</p>
            <p>Price: $10.99</p>
            <button onclick="addToCart('Product 1', 10.99)">Add to Cart</button>
        </div>
        <div class="product">
            <h2>Item #2</h2>
            <p>Description: This our second item.</p>
            <p>Price: $19.99</p>
            <button onclick="addToCart('Product 2', 19.99)">Add to Cart</button>
        </div>
        <div id="cart"></div>
    </div>

    <script>
        let cartItems = [];

        // Function to add items to the cart
        function addToCart(productName, price) {
            cartItems.push({ productName, price });
            updateCart();
        }

        // Function to update the cart display
        function updateCart() {
            const cartContainer = document.getElementById('cart');
            cartContainer.innerHTML = '';
            let totalPrice = 0;
            cartItems.forEach(item => {
                cartContainer.innerHTML += `<div>${item.productName} - $${item.price}</div>`;
                totalPrice += item.price;
            });
            cartContainer.innerHTML += `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
        }
    </script>
</body>
</html>
