const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');



//event

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    Validate();
});

const sendData = (successRate, count) =>{
        if(successRate === count){
            alert('Registration Successful');
            swal("Welcome! " , "Registration Successful","success");
        }
}

//data validation
    const successMsg = () =>{
        let formCon = document.getElementsByClassName('form-control');

        let count = formCon.length -1;
        for(let i=0; i<formCon.length; i++){
            if(formCon[i].className === "form-control success"){
                let successRate = 0 + i;
                console.log(successRate);
                sendData(successRate, count);
            } else {
                return false;
            }
        }
    }
//email all validation
const isEmail = (emailval) => {
    let atSymbol = emailval.indexOf("@");
    if( atSymbol< 1) return false;
    let dot = emailval.lastIndexOf('.');
    if(dot <= atSymbol + 1) return false;
    if(dot === emailval.length - 1);
    return true;
}

const Validate = () => {

        const usernameval = username.value.trim();
        const emailval = email.value.trim();
        const phoneval = phone.value.trim();
        const passwordval = password.value.trim();
        const cpasswordval = cpassword.value.trim();

        //user validation
        if(usernameval === ""){
            setErrorMsg(username, 'User name can not be blank');    
        } else if(usernameval.length <= 3){
            setErrorMsg(username, 'User name can not less then 3 character'); 
        }else{
            setSuccessMsg(username);
        }

        //email validation
        if(emailval === ""){
            setErrorMsg(email, 'email can not be blank');    
        } else if(!isEmail(emailval)){
            setErrorMsg(email, 'not a valid email'); 
        }else{
            setSuccessMsg(email);
        }

        //phone number validation
        if(phoneval === ""){
            setErrorMsg(phone, 'Phone Number can not be blank');    
        } else if(phoneval.length != 11){
            setErrorMsg(phone, 'Not a valid phone number'); 
        }else{
            setSuccessMsg(phone);
        }

        //password validation
        if(passwordval === ""){
            setErrorMsg(password, 'Blank Password is not accepted');    
        } else if(passwordval.length < 8){
            setErrorMsg(password, 'Not a valid password give minimum 8 character'); 
        }else{
            setSuccessMsg(password);
        }

        //confirm password validation
        if(cpasswordval === ""){
            setErrorMsg(cpassword, 'Confirm Your password ');    
        } else if(cpasswordval != passwordval){
            setErrorMsg(cpassword, 'Password is not matching'); 
        }else{
            setSuccessMsg(cpassword);
        }

        successMsg();

}

function setErrorMsg( input, errormsgs){
    const formControl = input.parentElement;
    const small= formControl.querySelector('small');
    formControl.className= "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className= "form-control success";
}

