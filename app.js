const rover = {
    direction: "W",
    x: 1,
    y: 1
};

function turnLeft(rover) {
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
}
  
function turnRight(rover) {
    console.log("turnRight was called!");
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "W":
            rover.direction = "N";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "E":
            rover.direction = "S";
            break;
    }
}
  
function moveForward(rover) {
    console.log("moveForward was called")
    switch (rover.direction) {
        case "N":
            rover.x -= 1;
            break;
        case "W":
            rover.y -= 1;
            break;
        case "S":
            rover.x += 1;
            break;
        case "E":
            rover.y += 1;
            break;
    }
    console.log(`Rover's position is ${rover.x}, ${rover.y}`);
}

console.log(`Rover is facing ${rover.direction}`);
turnRight(rover);
console.log(`Rover is facing ${rover.direction}`);
moveForward(rover);