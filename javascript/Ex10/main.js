const eventName =
"Music Festival";

let seats = 25;

/* Default Parameter */

function register(name = "Guest"){
console.log(name);
}

register();

/* Destructuring */

const event = {

name:"Workshop",

date:"20-08-2026"

};

const {name,date}= event;

console.log(name);
console.log(date);

/* Spread Operator */

const events =["Music","Workshop"];

const clone =[...events];

console.log(clone)