let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
let tbody = document.getElementById("cartItems");



cart.forEach(item => {
    let subtotal = item.price * item.qty;
    total += subtotal;

    tbody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${subtotal}</td>
        </tr>
    `;
});


document.getElementById("totalPrice").innerText =
    "Total Price: ৳ " + total;

