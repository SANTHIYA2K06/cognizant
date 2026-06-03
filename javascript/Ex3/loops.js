const events = [
{ name:"Music Festival", seats:20 },
{ name:"Workshop", seats:0 },
{ name:"Sports Day", seats:15 }
];

events.forEach(event => {

    if(event.seats > 0){
        console.log(event.name + " Available");
    }
    else{
        console.log(event.name + " Full");
    }
});

function register(seats){

    try{
        if(seats <= 0){
            throw "No Seats Available";
        }
        console.log("Registration Success");
    }
    catch(error){
        console.log(error);
    }
}

register(0);