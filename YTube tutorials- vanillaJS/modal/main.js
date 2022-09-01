//Get modal element
const modal = document.getElementById("simpleModal");
//Get open modal button
const modalBtn = document.getElementById("modalBtn");
//Get close button; this returns a collection of the elements that use the class so we need to select the first one
const closeBtn = document.getElementsByClassName("closeBtn")[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//function to open modal
function openModal () {
    modal.style.display="block";
    let me ="hello";
}

//function to close modal
function closeModal() {
    modal.style.display = "none";
}

//function to close if clicked outside
function outsideClick(e) {
    if(e.target == modal)
    modal.style.display = "none";
}