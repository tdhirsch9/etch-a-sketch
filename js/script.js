const sketcher = document.querySelector('#container');
const defaultSize = 16;

const resetBtn = document.getElementById("reset")

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];







const newGrid = () => {

    const size = prompt("How large would you like the grid to be?")
    if (size >= 1 && size <= 100){
        resetSketch()
        createNewGrid(size)
    } else{
        alert("Please input a number between 1 and 100")
    }
}

function resetSketch() {
    let squares = sketcher.lastElementChild
    while (squares){
        sketcher.removeChild(squares)
        squares = sketcher.lastElementChild
    }
}

resetBtn.addEventListener("click", newGrid)

function createNewGrid(size){

    const gridSize = 960 / size;


    for (let i = 0; i < size * size; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add('grid-item');
        newDiv.style['height'] = `${gridSize}px`;
        newDiv.style['width'] = `${gridSize}px`;
        newDiv.style.backgroundColor = "lightgrey"
        
        sketcher.appendChild(newDiv);

    newDiv.addEventListener("mouseover", function(){
        let a = "#"

        for(i = 0; i < 6; i++){
          a += array[randomNumber()]
        }
        
       
          
            
            
        
        newDiv.style.backgroundColor = a
    });
    
        
    }

    



}

function randomNumber(){
return random = Math.floor(Math.random() * array.length)
}

window.addEventListener("load", () => {
    createNewGrid(defaultSize);
  });