function addEvent(name){
    console.log(name + " Added");
}

function registerUser(name){
    console.log(name + " Registered");

}

function filterEventsByCategory(category,callback){
    callback(category);
}

filterEventsByCategory("Music",function(category){
console.log("Filtering " + category);
}
);

/* Closure */

function registrationCounter(){

    let count = 0;

    return function(){

        count++;

        console.log("Total Registrations: "+ count);
    };
}

const counter = registrationCounter();
counter();
counter();