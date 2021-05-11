

// /////////////////////////////////////////////////////////////////

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
        passwordErr.hidden = true;
        validationElement.setAttribute("action","todo.html")
        return true
    }else{
        passwordErr.hidden = false;
        passwordErr.innerHTML = "Invalid username/password"
        return false 
    }
}
function validate(){
  
 return(Check(username1,password1,redirect))
 

}


///////////////////////////////////////////////
// date

var todayContainer = document.querySelector(".today");


var d = new Date();


var weekday = new Array(7);
weekday[0] = "Sunday 🖖";
weekday[1] = "Monday 💪😀";
weekday[2] = "Tuesday 😜";
weekday[3] = "Wednesday 😌☕️";
weekday[4] = "Thursday 🤗";
weekday[5] = "Friday 🍻";
weekday[6] = "Saturday 😴";


var n = weekday[d.getDay()];
var randomWordArray = Array(
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
);

var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

todayContainer.innerHTML = randomWord + n;

