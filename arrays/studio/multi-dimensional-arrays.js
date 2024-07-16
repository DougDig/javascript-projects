let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
console.log(equipmentArray);
let petArray = pets.split(',').sort();
let sleepAidsArray = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray,equipmentArray,petArray,sleepAidsArray];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let inputNum = input.question('Pick an integer 0-3 inclusive:  ');
while (inputNum<0 || inputNum > 3){
    inputNum = input.question('bad input try again:  ');
}
let item = input.question('Name an item:  ');
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`the contents of that are ${cargoHold[inputNum]}, good luck space cowboy!`);
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let doesDoesNot = 'does not';
if (cargoHold[inputNum].includes(item)){
    doesDoesNot = 'does';
};
console.log(`Cabinet number ${inputNum} ${doesDoesNot} contain ${item}`)