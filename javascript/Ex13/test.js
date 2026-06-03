console.log("Form Submission Started");

const name = "John";

console.log("User:",name);

console.log("Sending Data...");

fetch("https://jsonplaceholder.typicode.com/posts")

.then(response =>response.json()).then(data => {

console.log("Response:",data);

});