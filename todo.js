// api url
// const api_url =
// 	"https://jsonplaceholder.typicode.com/todos";

// Defining async function
// async function getapi(url) {
	
// 	// Storing response
// 	const response = await fetch(url);
	
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		 <th>id</th>
// 		<th>title</th>
// 		<th><input type="checkbox" id="status" name="status" >status</th>
// 	    </tr>`;
	
// 	// Loop to access all rows
// 	for (let r of data) {
// 		tab += `<tr>
//     <td>${r.id} </td>
// 	<td>${r.title}</td>
// 	<td><input type="checkbox" id="status" name="status" value=${r.completed}"> </td>	
// </tr>`;
// 	}
// 	document.getElementById("todo").innerHTML = tab;
// }
// document.getElementById('select').onclick = function() {
//   var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//   if(checkboxes.length==5){
//     alert("mission success");
//   }
 
// }

const URL = "https://jsonplaceholder.typicode.com/todos";
const main = document.getElementById("main");
// main.innerHTML = "<p>Loading...";
fetch(URL)
  .then((response) => response.json())
  .then((tasks) => main.innerHTML = getListOfTasks(tasks));
const getListOfTasks = (tasks) => {
  const names = tasks
    .map((task) => `<li class="tbln"><input type="checkbox" onclick=countcheck() id=${task.id} ${chkchk(task.completed)} class="tasktask" value=${task.title}>${task.title}</li>`)
    .join("\n");
return `<ul>${names}</ul>`;
};
function chkchk(val){
console.log(val)  ;
if(val){return "checked"} else {return null ;}
}
 function countcheck(){

    function myDisplayer() {
        alert("You have successfully completed 5 tasks")
    }
    
    let Count = new Promise(function(myResolve, myReject) {
        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        x=markedCheckbox.length;
        console.log(x);
   
        if (x == 5) {
        myResolve("OK");
        } 
    });
    
    Count.then(
        function() {myDisplayer();}
    );
}