<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation</title>
    <link rel="stylesheet" href="css/registration-form.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
</head>
<body>
     <?php include 'header.php'; ?>

    <main class="registration-page">
            <div class="container">

        <div class="header">
            <h1>Registrstion Form</h1>
        </div>
        <form class="form" id="form">
            <div class="form-control">
        <label for="username">Username</label><br>
        <input type="text" id="username" placeholder="enter your full name" autocomplete="off">
        <i class="fa-solid fa-circle-check"></i>
        <i class="fa-solid fa-circle-exclamation"></i>
        <small>error message</small> <br> <br>
             </div>

             <div class="form-control">
                 <label for="email">Email</label><br>
        <input type="email" id="email" placeholder="enter your email" autocomplete="off" >
        <i class="fa-solid fa-circle-check"></i>
        <i class="fa-solid fa-circle-exclamation"></i>
        <small>error message</small> <br><br>

             </div>
             <div class="form-control">
                            <label for="phone number">Phone Number</label><br>
        <input type="number" name="" id="phone" placeholder="enter your phone nunber" autocomplete="off">
        <i class="fa-solid fa-circle-check"></i>
        <i class="fa-solid fa-circle-exclamation"></i>
        <small>error message</small> <br><br>
             </div>
             <div class="form-control">
                    
        <label for="password">password</label><br>
        <input type="password" id="password" placeholder="enter your password" autocomplete="off">
        <i class="fa-solid fa-circle-check"></i>
        <i class="fa-solid fa-circle-exclamation"></i>
        <small>error message</small> <br><br>
             </div>
             <div class="form-control">
                            <label for="cpassword">Confirm Password</label><br>
        <input type="password" id="cpassword" placeholder="enter password again to confirm" autocomplete="off"> 
        <i class="fa-solid fa-circle-check"></i>
        <i class="fa-solid fa-circle-exclamation"></i>
        <small>error message</small>
        <BR><BR>
             </div>
            
        <input type="submit" value="submit" class="btn">
    </form>
    </div>
    </main>

    <?php include 'footer.php'; ?>


<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="js/registration-form.js"></script>
    
</body>
</html>