function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id,error){
    // sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    // perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']['fname'].value;
    if(name.length < 5){
        seterror("name","*Length of name is too short !");
        returnval = false;
    }

    var email = document.forms['myForm']['femail'].value;
    if(email.length > 30){
        seterror("email","*Length of email too long !");
        returnval = false;
    }

    var password = document.forms['myForm']['fpassword'].value;
    if(password.length < 6){
        seterror("pass","*Password should atleast have 6 characters !");
        returnval = false;
    }

    var cpassword = document.forms['myForm']['fcpassword'].value;
    if(cpassword != password){
        seterror("cpass","*Password did not match !");
        returnval = false;
    }

    return returnval;
}