// This function takes input values and finds the acute angle from the time on the clock face.
function clock_angles(hour, minute) {
    var hand1 = hour * 30;
    console.log(hand1);
    var hand2 = ((minute / 5) * 30) + ((minute % 5) * 6); // This takes the minutes, for every 5 minute interval, adds 30 deg, and for every min adds (30/5) 6 deg 
    // The test output is not being shown so I'm not sure what to make of the error
    if (hand1 > hand2){
        angle = hand1 - hand2;
    }
    else { angle = hand2 - hand1; }
    console.log(angle);
    if (angle > 180) {        
        angle = 180 - angle;
        complement = 180 - angle;
        angle = complement;
        console.log(angle);
                       }
    // if (hand2 > 180) { hand2 = hand2 - 180; }
    return angle;


}
clock_angles(4, 10);
clock_angles(5, 45);
clock_angles(2, 23);
