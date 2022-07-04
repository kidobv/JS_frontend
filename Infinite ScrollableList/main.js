//reference - https://codepen.io/kalpanagupta/pen/PoKzwaP

// document.addEventListener('DOMContentLoaded', function(){
// 	let counter = document.querySelectorAll('.listItem').length;   
// 	const list = document.querySelector('ul');

// 	list.addEventListener('scroll', debounce((event) => {
// 		    //100 because of the 100px which is the height of list item
// 		    console.log(list.scrollHeight ,list.clientHeight ,list.scrollTop)
// 		    if(list.scrollHeight - list.clientHeight - list.scrollTop > 0) return
// 		    let li = document.createElement('li');
// 		    	counter++;
// 		    	li.classList.add('listItem');      
// 		    	li.innerText = `Item ${counter}`;       
// 		    	list.append(li); 
// 		}, 70));
// })



function debounce(cb, wait) {
	let timer = null;

	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(() => {
			cb.call(this, ...args);
		}, wait);
	}
}


let handleScroll = (list) => {
	let counter = document.querySelectorAll('.listItem').length; 
	console.log(list.scrollHeight, list.clientHeight, list.scrollTop)
	if(list.scrollHeight - list.clientHeight - list.scrollTop > 0) return
	
	let li = document.createElement('li');
	counter++;
	li.classList.add('listItem');      
	li.textContent = `Item ${counter}`;       
	list.append(li); 
}

// we can avoid having to pass the counter and list to the handleScroll function if we defer the load of the script so that we can have a global variable
document.addEventListener('DOMContentLoaded', function(){	  
	const list = document.querySelector('ul');

	list.addEventListener('scroll', debounce(() => handleScroll(list), 70))		    
})


