const username1 = document.getElementById("Usernameid");
const password1 = document.getElementById("Passwordid");
const validationElement = document.getElementById("Formvalidation")
const passwordErr = document.getElementById("miscrtpassword");
function Check(username,pwd,calb){
    if(username.value === "admin"){
        if(pwd.value ==="12345"){
            return(calb(true))
            
        }
    }
    return(calb(false))
    
}
function redirect(result){
    if(result){
       // console.log("Next page please")
        passwordErr.hidden = true;
        validationElement.setAttribute("action","todo.html")
        return true
    }else{
       // console.log("dont go to next page.")
        passwordErr.hidden = false;
        passwordErr.innerHTML = "Invalid username/password"
        return false 
    }
}
function validate(){
   // console.log("I am in validate")
   // console.log(username.value,password.value)
 return(Check(username1,password1,redirect))
 

}

