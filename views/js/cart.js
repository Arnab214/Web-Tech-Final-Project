// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let total = 0;
// let tbody = document.getElementById("cartItems");



// cart.forEach(item => {
//     let subtotal = item.price * item.qty;
//     total += subtotal;

//     tbody.innerHTML += `
//         <tr>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td>${item.qty}</td>
//             <td>${subtotal}</td>
//         </tr>
//     `;
// });


// document.getElementById("totalPrice").innerText =
//     "Total Price: ৳ " + total;

document.addEventListener("DOMContentLoaded", function () {
    renderCart();
});

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems || !totalPrice) {
        console.error("Cart elements not found");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">Your cart is empty</td>
            </tr>
        `;
        totalPrice.innerText = "Total: ৳ 0";
        return;
    }

    cart.forEach((item, index) => {
        let subtotal = item.price * item.qty;
        total += subtotal;

        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button onclick="decreaseQty(${index})">−</button>
                    ${item.qty}
                    <button onclick="increaseQty(${index})">+</button>
                </td>
                <td>${subtotal}</td>
                <td>
                    <button onclick="removeItem(${index})">❌</button>
                </td>
            </tr>
        `;
    });

    totalPrice.innerText = "Total: ৳ " + total;
}

// ➕ Increase
function increaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].qty += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ➖ Decrease
function decreaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart[index].qty > 1) {
        cart[index].qty -= 1;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ❌ Remove
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ✅ Checkout
function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("✅ Your order is confirmed!");

    // Clear cart
    localStorage.removeItem("cart");

    renderCart();
}
