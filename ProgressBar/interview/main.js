//Build a progress bar that goes from 0 to 100% in 3 seconds and increments 1% at a time.
//The progressbar is displayed in a container with 500px width and 30px height.

//Step 1: build a progress bar and make it go to 100%

// const p1 = document.getElementById('progress1');
// pAmount = 0;
// let intervalId = setInterval(() => {
// 	p1.style.width = `${++pAmount}%`;
// 	if (pAmount == 100) {
// 		clearInterval(intervalId)
// 	}
// }, 30)

//Step 2: Add 2 more progress bar and make all go to 100% with the same interval

// const p1 = document.getElementById('progress1');
// const p2 = document.getElementById('progress2');
// pAmount = 0;
// let intervalId = setInterval(() => {
// 	pAmount++;
// 	p1.style.width = `${pAmount}%`;
// 	p2.style.width = `${pAmount}%`;
// 	if (pAmount == 100) {
// 		clearInterval(intervalId)
// 	}
// }, 30)

//Step 3: Start them at diff intervals one a 3sec, another at 5sec, and the last at 3sec

// let intervalId;
// const progressList = document.querySelectorAll('.progress')

// let durations = [30,50,20]
// let intervals = new Map();

// for(let i=0; i<progressList.length; i++){
// 	//set time interval
// 	let pAmount = 0;
// 	intervalId = setInterval(() => tick(i), durations[i]);
// 	intervals.set(i, { "interval": intervalId, "pAmount": pAmount });
// }

// function tick(index){	
// 	let pAmount = intervals.get(index).pAmount++
// 	progressList[index].style.width = `${pAmount}%`;

// 	if (pAmount == 100)
// 		clearInterval(intervals.get(index).interval);
// }

//Step 4: Start them one after the other

let intervalId;
const progressList = document.querySelectorAll('.progress')

let durations = [30,50,20]
let intervals = new Map();
let currIndex = 0;

//set time interval
startProgress(currIndex)

function tick(index){	
	let pAmount = intervals.get(index).pAmount++
	progressList[index].style.width = `${pAmount}%`;

	if (pAmount == 100){
		clearInterval(intervals.get(index).interval);
		if(currIndex < progressList.length)
			startProgress(currIndex)
	}
}

function startProgress(idx){
	console.log("idx", idx)
	let pAmount = 0;
	intervalId = setInterval(() => tick(idx), durations[idx]);
	intervals.set(idx, { "interval": intervalId, "pAmount": pAmount });
	currIndex++;
}