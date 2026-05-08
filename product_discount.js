document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (isNaN(productPrice) || productPrice < 0) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger">Please enter a valid price.</div>';
        return;
    }

    let discount = 0;
    if (productPrice > 1000) {
        discount = productPrice * 0.10;
    }

    const finalPrice = productPrice - discount;

    document.getElementById('result').innerHTML = `
        <div class="alert alert-success">
            <strong>Product:</strong> ${productName}<br>
            <strong>Original Price:</strong> ₹${productPrice.toFixed(2)}<br>
            <strong>Discount:</strong> ₹${discount.toFixed(2)}<br>
            <strong>Final Price:</strong> ₹${finalPrice.toFixed(2)}
        </div>
    `;
});