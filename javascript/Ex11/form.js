document.getElementById("registerForm").addEventListener("submit",
function(event){

event.preventDefault();

const name =this.elements["name"].value;

const email =this.elements["email"].value;

if(name==="" ||email===""){

document.getElementById("error").innerHTML ="Fill all fields";
}

});