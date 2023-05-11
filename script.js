const container = document.querySelector('.container')
const brickColor = [ '#ffffff', '#00ffff', '#ffff00', '#ff0000', '#0000ff', '#00ff00', '#ff00ff' ]
const bricks = 2108



//creating and diplaying the bricks using a forloop 
for(let i=0; i < bricks; i++){

    //creating a div element
    const brick = document.createElement('div')

    //adding "brick" class to the div element (brick)
    brick.classList.add('brick')

    //inserting the div element into the container
    container.appendChild(brick)

    //adding function very time the brick is hovered
    brick.addEventListener('mouseover', () => addBrickColor(brick))
    function addBrickColor(element){
        const color = randomColor()
        function randomColor(){
            return brickColor[Math.floor(Math.random() * brickColor.length)]
        }
    
        element.style.background = color
        element.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
    }

    //removing color when the cursor leaves the brick
    brick.addEventListener('mouseout', () => removeBrickColor(brick))
    function removeBrickColor(element){

        element.style.background = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #1d1d1d`
    }
    
}