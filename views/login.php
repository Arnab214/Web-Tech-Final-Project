<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="css/Login.css">
    
</head>
<body>

     <?php include 'header.php'; ?> 


         <br><br><br><br><br><br><br>

    <main class="login-page">
            <div class="container">
        <div class="header"> <br><br><br><br><br><br><br><br><br><br><br>
            <h1>Login</h1>
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
    <br><br><br><br><br><br><br>
    </main>
    



    <?php include 'footer.php'; ?>
    
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="js/login.js"></script>
    
</body>
</html>