// Coursera exercises

// Create a text input element, add an event listener and create a debounce function
// Implement typeahead in vanilla JS

const dictionary = ["arroz", "apple", "aji", "arina","banana", "batata", "bola", "carne", "crab", "camarones", "donas", "egg", "farina","guayaba","helado","iguana","jalea"]

const input = document.getElementById("typeahead");
const list = document.getElementById('typeahead-list')

let timeoutID;
input.addEventListener('input', onType)

let debouncedFetch = debounce(createAndAppendSuggestion)

function onType(){
	//this should be refering to input
	if(this.value.length === 0){
		clearSuggestions();
		return
	}
	debouncedFetch()
}

function createAndAppendSuggestion () {
	const suggestions = dictionary.filter(word => word.startsWith(input.value.toLowerCase()))
	const fragment =  document.createDocumentFragment()
	suggestions.forEach(suggestion => {
		const li = document.createElement('li');
		li.textContent = suggestion;
		fragment.appendChild(li);
	})
	
	list.replaceChildren(fragment)
}

function clearSuggestions(){
	clearTimeout(timeoutID)
	list.innerHTML = '';
}

function debounce(func){	
	return function(...args){
		clearTimeout(timeoutID)
		timeoutID = setTimeout(() => func.call(this,...args), 500)
	}	
}

// What will the console output with a setTimeout of 0
// let x = () => {
// 	setTimeout(()=>console.log("timeout"),0)
// 	console.log("no timeout")
// }
// x()

// JsonTo Dictionary, DictionaryToJson - Json parser- both serialize as well deserialize.
const myMap = new Map([
	["fruit", "apple"],
	["veggie", "brocoli"]
]);

//We need to convert the Map into Object because the Map object don't have native support for serialization or parsing 
let obj = Object.fromEntries(myMap);
//serialize
const jsonString = JSON.stringify(obj);
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj)
//deserialize
const mapAgain = new Map(Object.entries(jsonObj))
console.log(mapAgain)