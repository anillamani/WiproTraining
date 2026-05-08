const jsonData = `[
    {"item": "Laptop", "price": 60000},
    {"item": "Mouse", "price": 500},
    {"item": "Keyboard", "price": 700},
    {"item": "Speaker", "price": 5000}
]`;

const productData = JSON.parse(jsonData);
const list = document.getElementById('productlist');

productData.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `Item: ${product.item} - Price: ₹${product.price}`;
    list.append(li);
});

const total = productData.reduce((sum, p) => sum + p.price, 0);
document.getElementById('totalPrice').textContent = `Total Price: ₹${total}`;
