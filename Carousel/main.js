const BASE_URL = "https://api.unsplash.com";
const AUTH = 'Client-ID eca10f34d3ac8c233aa95b8aae59d936a1e002ca2a4698d3e73c73681ff4de1c';
//const reqAPI = "https://api.unsplash.com/search/photos/?query=dogs&client_id=eca10f34d3ac8c233aa95b8aae59d936a1e002ca2a4698d3e73c73681ff4de1c";
const url = new URL(BASE_URL)
url.pathname = '/search/photos';
url.searchParams.set("query", "dogs")

const btn = document.getElementById('btn');
//btn.addEventListener('click', clickHandler);

const carousel = document.getElementById('carousel')
const display = document.getElementById('display');
const selection = document.getElementById('selection');
const body = document.querySelector('body');

let imgList;
let currentIdx;
let displayImg;

async function callAPI(){
    //const response = await fetch(reqAPI);
    const response = await fetch(url, {
        headers: {
            Authorization: AUTH
        }
    })    
    return await response.json();
}


//function clickHandler() {
    callAPI().then(res => {        
        const fragment = document.createDocumentFragment();
        imgList = res.results;

        if(imgList.length > 0){            
            createButtons();
        }

        const first = res.results[0];
        const img = document.createElement('img');
        img.setAttribute("src", first.urls.regular);
        img.setAttribute("id", "display-img");
        displayImg = img;
        display.appendChild(img);
        currentIdx = 0;

        for(let i=0; i<imgList.length; i++) {
            const image = imgList[i];
            const source = image.urls.thumb;
            const img = document.createElement('img');
            img.setAttribute("src", source);
            img.setAttribute("id", i);
            img.classList.add("selection-img");
            img.addEventListener('click', selectPicture)
            if(i!=0){
                img.classList.add("inactive");
            }
            fragment.appendChild(img);
        }  
        selection.appendChild(fragment);
    })
    .catch((reason)=>{
        console.log(`Error while fetching pictures reason: ${reason}`);
    })

function createButtons() {
    const rightBtn = document.createElement("button")
    const leftBtn = document.createElement("button")
    const debouncedChangePic = debounce(changePicture, 500);
    rightBtn.addEventListener('click', () => { debouncedChangePic("right")});
    leftBtn.addEventListener('click', () => { changePicture("left") });
    rightBtn.classList.add("rightBtn");
    leftBtn.setAttribute("id", "leftBtn");
    rightBtn.textContent = ">";
    leftBtn.textContent = "<";
    body.appendChild(rightBtn);
    body.appendChild(leftBtn);
}

function changePicture(direction){
    //Get currently selected imageNode
    applyInactiveStyle(true);

    if(direction == "right"){
        //check that we are not out of bounds
        currentIdx = (currentIdx + 1 == imgList.length) ? 0 : currentIdx + 1; 
    }
    else{
        currentIdx = (currentIdx - 1 < 0) ? imgList.length-1 : currentIdx - 1;
    }
    console.log(currentIdx)
    let newSrc = imgList[currentIdx].urls.regular;
    displayImg.setAttribute("src", newSrc);

    //change selected image
    applyInactiveStyle(false);
}

function selectPicture() {
    const selectedIdx = parseInt(this.getAttribute("id"));
    const newDisplaySrc = imgList[selectedIdx];
    displayImg.setAttribute("src", newDisplaySrc.urls.regular);
    //set currently selected image as inactive
    applyInactiveStyle(true);
    currentIdx = selectedIdx;       
    applyInactiveStyle(false); 
}

//probably better to pass the idx as a param for readability/self documenting
function applyInactiveStyle(setTrue) {
    const selectionList = document.querySelectorAll('.selection-img');
    console.log(currentIdx)
    const currentlySelected = selectionList[currentIdx];
    if (setTrue) {
        currentlySelected.classList.add('inactive');
    }
    else {
        currentlySelected.classList.remove('inactive');
    }
}

function debounce(cb, wait){
    let timerId;
    return function(...args){
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            cb.apply(this, args);
        }, wait);
    }    
}
//}
