

    // api url
const api_url =
	"https://jsonplaceholder.typicode.com/todos";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		 <th>id</th>
		<th>title</th>
		<th><input type="checkbox" id="status" name="status" >status</th>
		
	    </tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
    <td>${r.id} </td>
	<td>${r.title}</td>
	<td><input type="checkbox" onclick=countcheck() id=${r.id} ${checkval(r.completed)} class="tasktask" value=${r.title}>${r.title}	 </td>
	
</tr>`;

	}
	// Setting innerHTML as tab variable
document.getElementById("todo").innerHTML = tab;
	console.log(tab);
}
	function checkval(stat){
console.log(stat)  ;
if(stat){
	return "checked";
}
 else {
	 return null ;
	}
}
 function countcheck(){

    function myDisplayer() {
        alert("Congrats , You have successfully completed 5 Tasks")
    }
    
    let Count = new Promise(function(myResolve, myReject) {
        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        x=markedCheckbox.length;
        console.log(x);
   
        if (x == 95) {
        myResolve("OK");
        } 
    });
    
    Count.then(
        function() {myDisplayer();}
    );
}




 




