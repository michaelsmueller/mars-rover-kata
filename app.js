const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
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
    console.log("moveForward was called");

    let position = {x: rover.x, y: rover.y};
    rover.travelLog.push(position);

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

function command(rover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                break;
        }
    }
    console.log(`Rover has traveled over the following positions: 
        ${JSON.stringify(rover.travelLog, null, "  ")}`
    );
    console.log(`Rover is now at position ${rover.x}, ${rover.y} facing ${rover.direction}.`);
}

command(rover, "rffrfflfrff");