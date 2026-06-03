function register(){

    alert("Registration Successful");

}

document.getElementById("category").onchange = function(){
console.log(this.value);
};

document.getElementById("searchBox").addEventListener("keydown",
function(){

console.log("Searching...");

});