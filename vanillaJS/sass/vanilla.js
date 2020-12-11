
//Event delegation 
document.querySelector("button").addEventListener("click", eventHandler);

let label = document.getElementById("counter")
let counter = 0;

function eventHandler() {
    counter++;
    label.innerText = counter;
}

