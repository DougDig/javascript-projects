//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel;
let astronautCount;
let shuttleAltitude;
const input = require('readline-sync');
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  startingFuel = input.question('Please enter a positive number between 5000 and 30000:');
  startingFuel = Number(startingFuel);
  
  while (((startingFuel <= 5000)||(startingFuel >= 30000)) ) {
     startingFuel = input.question('Invalid input. Please enter a number between 5000 and 30000:');
     startingFuel = Number(startingFuel);
  }




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronautCount = input.question('Please tell me how many astronauts you got:');
astronautCount = Number(astronautCount);

while (astronautCount<1||astronautCount>7){
  astronautCount = input.question('Invalid Input. You need more than 0 or less than 8:');
  astronautCount = Number(astronautCount);
}  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
shuttleAltitude = 0
while (startingFuel>0) {
shuttleAltitude = shuttleAltitude + 50;
startingFuel = startingFuel - (100* astronautCount);
}

console.log (`The shuttle gained an altitude of ${shuttleAltitude} km.`)
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude> 2000) {
  console.log ("Orbit achieved");
} else {
  console.log ("Failed to reach orbit")
}