// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function validate( user,pwd,callback)
{
      var username = document.getElementById("username").value ;
      var password = document.getElementById("password").value ;

    if(   document.getElementById("username").value == "admin"
       && document.getElementById("password").value == "12345" )
    {
     // alert(`validation success.`);
      callback();
    }
    else
    {
        alert( "validation failed" );
        location.href="login.html";
    }
}

function alertFinished(){
  window.location.href = 'index.html';
}

 validate( user,pwd,alertFinished);