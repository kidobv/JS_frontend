//Get elements
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

//Add listeners
draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
});

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        //clientY is the position of the mouse in the Y axis
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        container.appendChild(draggable);
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging')];

    //We need the initial value of the accumulator to alway be larger than the Y position of the mouse
    draggableElements.reduce((closest, child) => {
        //child is the individual draggable and box is the rectangle of the draggable with x and y position
        const box = child.getBoundingClientRect()
        
    }, { offset: Number.POSITIVE_INFINITY })

}