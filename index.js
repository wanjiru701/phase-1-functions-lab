const hq=42
function distanceFromHqInBlocks(block) {
if (block >= 42) {
return (block-hq) ;
} else if (block <=42 ) {
return (hq-block) ;
}
}

function distanceFromHqInFeet(block) {
if (block >=42) {
return ((block-hq)*264)
} else if (block<=42) {
return ((hq-block)*264)
}
}

function distanceTravelledInFeet(value) {
return (distanceTravelledInFeet(value)*264)
}
function distanceTravelledInFeet(start,destination) {
return Math.abs((destination-start)*264)
}

function calculatesFarePrice (start, destination) {
const distance = distanceTravelledInFeet(start, destination);
if (distance <= 400) {
return 0;
} else if (distance > 400 && distance <= 2000) {
return  ((distance - 400)*.02);
} else if (distance > 2000 && distance <= 2500) {
return 25;
} else {
return 'cannot travel that far';
}
}


  