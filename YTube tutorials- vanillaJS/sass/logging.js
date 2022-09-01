

// Console logging
let foo = { name: "hello", lastname: "Peo" };
let bar = { name: "hi", lastname: "Teo" };
let baz = { name: "Alo", lastname: "Kido" };

console.log('%c My Objects', 'color: orange');
console.log({ foo, bar, baz });
//If they are the same object, say you want to print out an array of objects with the same properties
console.table([foo, bar, baz]);

//we can add console.trace to a function to get details on where it was called
const deleteMe = () => console.trace('bye bye');

deleteMe();
deleteMe();