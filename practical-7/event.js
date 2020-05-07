// Write a program to demonstrate Event handling 
// ...{a} Validation of Registration Form 
function validateForm(){
    console.log("working");
    let name=document.myform.name.value;
    let password=document.myform.password.value;

    if(name==null || name=="")
    {
        alert("Name can't be blank");
    }else if(password.length<8){
        alert("Password must be greater than 8");
    }
}
 