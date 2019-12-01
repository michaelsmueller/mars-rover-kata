const rover = {
    direction: "N",
    x: 0,
    y: 0
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
}

console.log(`Rover is facing ${rover.direction}`);
turnLeft(rover);
console.log(`Rover is facing ${rover.direction}`);