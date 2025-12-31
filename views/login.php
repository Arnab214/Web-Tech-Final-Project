<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="home.css">
</head>
<body>
    
    <div class="container">
        <div class="header">
            <h1>Login Form</h1>
        </div>
        <form action="" class="form" id="form">
            <div class="login-control">
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="Give your username" >
                <small>err msg</small>
                <br><br>
            </div>
            <div class="login-control">
                <label for="password">Password :</label>
                <input type="password" id="password" placeholder="Give your valid password" autocomplete="off">
                <small>err msg</small>
                <br><br>
            </div>
            <input type="submit" value="submit" class="btn">

            <button type="button" onclick="forgotPassword()" class="fpass">Forgot Password?</button>
        </form>
    </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="login.js"></script>
    
</body>
</html>