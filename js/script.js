const gridContainer = document.querySelector(".grid-container")
const newGridButton = document.querySelector(".new-grid-button")

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.addEventListener("DOMContentLoaded", function(){
    makeGrid(16)
})


function getRandomColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }



function gridReset(){
    let squares = gridContainer.querySelectorAll(".row")
    squares.forEach(squares => {
        gridContainer.removeChild(squares);
    })
}

newGridButton.addEventListener("click", function(){
   let gridSizeRequest = prompt("What size grid would you like?")

    if(gridSizeRequest > 0 && gridSizeRequest < 101){
        gridReset()
        makeGrid(gridSizeRequest)
    } else{
        alert("Please select a number from 1 to 100")
    }

   
})

function makeGrid(e){

    for (i = 0; i < e; i++){
 
        let row = document.createElement("div")
        gridContainer.appendChild(row)
        row.classList.add("row")
        for(let a = 0; a < e; a++){
            let square = document.createElement("div")
            row.appendChild(square)
            square.classList.add("grid-square")

        square.addEventListener("mouseover", function(){
            let newColor = "#"
            for(let i = 0; i < 6; i++){
              
               newColor += getRandomColor()
                
                console.log(newColor)
            }
        square.style.backgroundColor = newColor
    })
        }
        

    }


}
