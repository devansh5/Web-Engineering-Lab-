// Write a program to test the first character of a string is uppercase or not

function uppercase(){
    let a=prompt("write the text to check");
    regexp = /^[A-Z]/;
    if (regexp.test(a)){
        console.log("the first character of the string is uppercase");
    }else{
        console.log("No,the first character is not uppercase");
    }
}

// Write a program that matches email-addresses
let inputText=prompt("Enter your email");
ValidateEmail(inputText);
function ValidateEmail(inputText){
    let mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if (inputText.match(mailFormat))
    {
        alert("it's valid email");
    }
    else{
        alert("it's invalid email address");
    }

}

