let events = [

"Music Festival",

"Workshop"

];

/* Push */

events.push(
"Sports Day"
);

console.log(events);

/* Filter */

const musicEvents = [

{name:"Music Festival",
category:"Music"},

{name:"Workshop",
category:"Workshop"}

].filter(event =>event.category === "Music");

console.log(musicEvents);

/* Map */

const displayCards =events.map(event =>`Workshop on ${event}`);
console.log(displayCards);