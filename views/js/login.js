const form = document.getElementById('form');
const username= document.getElementById('username');
const password= document.getElementById('password');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    Validate();
});

let registeredUser = {
    username: "arnab123",
    password: "12345"
};

const sendData = (successRate, count) =>{
        if(successRate === count){
            alert('Login Successful');
            swal("Welcome! " ,"Now you are able to shopping");
        }
}

//data validation
    const successMsg = () =>{
        let formCon = document.getElementsByClassName('login-control');

        let count = formCon.length -1;
        for(let i=0; i<formCon.length; i++){
            if(formCon[i].className === "login-control success"){
                let successRate = 0 + i;
                console.log(successRate);
                sendData(successRate, count);
            } else {
                return false;
            }
        }
    }


const Validate = () =>{

    const usernameval = username.value.trim();
    const passwordval = password.value.trim();

    if(usernameval === ""){
        setErrorMsg(username, 'Username must be fill');
    } else if(usernameval !== registeredUser.username){
         setErrorMsg(username, 'Username is not registered');
    }else{
        setSuccessMsg(username);
    }

    if(passwordval === ""){
        setErrorMsg(password, 'You have to provide your password');
    }else if(passwordval !== registeredUser.password){
        setErrorMsg(password, 'Password is not matching');
    }else{
        setSuccessMsg(password);
    }

    successMsg();
}

function forgotPassword() {
    
    let enteredUsername = prompt("Enter your username:");

    if (enteredUsername === null || enteredUsername === "") {
        alert("Username is required");
        return;
    }

 
    if (enteredUsername !== registeredUser.username) {
        alert("Username not registered");
        return;
    }


    let newPassword = prompt("Enter new password:");
    if (newPassword === null || newPassword === "") {
        alert("Password cannot be empty");
        return;
    }


    let confirmPassword = prompt("Confirm new password:");
    if (confirmPassword === null || confirmPassword === "") {
        alert("Confirm password is required");
        return;
    }

 
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }


    registeredUser.password = newPassword;
    alert("Password reset successful");
}


function setErrorMsg( input, errormsgs){
    const loginControl = input.parentElement;
    const small= loginControl.querySelector('small');
    loginControl.className= "login-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const loginControl = input.parentElement;
    loginControl.className= "login-control success";
}