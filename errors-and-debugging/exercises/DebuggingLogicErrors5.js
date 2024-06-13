// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';
let fuelReady = false
let crewComputerReady = false

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;
}

console.log("FuelReady = ", fuelReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewComputerReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewComputerReady = false;
}
if (crewComputerReady && fuelReady){
   launchReady = true
} else {
   launchReady = false
}
console.log("CrewComputer ready = ", crewComputerReady)
console.log("launchReady = ", launchReady);

if (launchReady === true) {
   console.log(10)
   console.log(9)
   console.log(8)
   console.log(7)
   console.log(6)
   console.log(5)
   console.log(4)
   console.log(3)
   console.log(2)
   console.log(1)
   console.log("Liftoff")
} else {
   console.log("You gronked it up again you total donkey")
}