<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PCSTATION</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<!-- HEADER -->
<header class="top-header">
    <div class="logo">PC<span>STATION</span></div>

    <div class="search-box">
        <select>
            <option>All Category</option>
            <option>Laptop</option>
            <option>Desktop</option>
            <option>Accessories</option>
        </select>
        <input type="text" placeholder="Search for products...">
        <button><i class="fas fa-search"></i></button>
    </div>

<div class="user-area">
    <i class="fa-solid fa-cart-shopping" onclick="goToCart()"></i>
    <i class="fa-regular fa-user user-icon" onclick="toggleLoginMenu()"></i>

    <div class="login-dropdown" id="loginDropdown">
        <a href="login.html" class="login-btn">Sign In</a>
        <a href="registration-form.html" class="create-account">Create An Account</a>
    </div>
</div>
</header>



<!-- LOGIN DROPDOWN -->
<div class="login-box" id="loginBox">
    <button>Click to Login</button>
    <a href="#">Create An Account</a>
</div>

<!-- NAV -->
<nav class="menu">
    <a href="#">Laptop</a>
    <a href="#">Desktop</a>
    <a href="#">Components</a>
    <a href="#">Accessories</a>
    <a href="#">Smartphone</a>
    <a href="#">Monitor</a>
    <a href="#">Networking</a>
    <a href="#">Gadgets</a>
</nav>



<!-- CATEGORY GRID -->
<section class="categories">
    <div class="cat-card"><img src="images/motherboard.webp" alt="" width="60" height="50"><p>Mother Board</p></div>
    <div class="cat-card"><img src="images/laptop.webp" alt="" width="60" height="50"><p>Laptop</p></div>
    <div class="cat-card"><img src="images/monitor.webp" alt="" width="60" height="50"><p>Monitor</p></div>
    <div class="cat-card"><img src="images/processor.webp" alt="" width="60" height="50"><p>Processor</p></div>
    <div class="cat-card"><img src="images/ram.webp" alt="" width="60" height="50"><p>RAM</p></div>
    <div class="cat-card"><img src="images/ssd.webp" alt="" width="60" height="50"><p>SSD</p></div>
    <div class="cat-card"><img src="images/graphics-card.webp" alt="" width="60" height="50"><p>Graphics Card</p></div>
    <div class="cat-card"><img src="images/printer.webp" alt="" width="60" height="50"></i><p>Printer</p></div>
</section>


<script>

    function toggleLoginMenu() {
    const dropdown = document.getElementById("loginDropdown");
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
}

/* Close when clicking outside */
document.addEventListener("click", function (e) {
    const userArea = document.querySelector(".user-area");
    if (!userArea.contains(e.target)) {
        document.getElementById("loginDropdown").style.display = "none";
    }
});

function goToCart() {
    window.location.href = "cart.html";
}
</script>

</body>
</html>
