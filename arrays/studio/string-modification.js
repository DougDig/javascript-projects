const input = require('readline-sync');
let str = "LaunchCode";
let tempString = "";
let displacemnetNumber = 0;



str = input.question("Enter a string please:");
displacemnetNumber = input.question("How many letters to move?:");
displacemnetNumber = Number(displacemnetNumber);
if (displacemnetNumber>str.length) {
    displacemnetNumber=3
    console.log("You absolute donkey, that's more letters than the source word")
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
tempString = str.slice(displacemnetNumber)+str.slice(0,displacemnetNumber)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`I lost everything gambling on those horses, from ${str} to ${tempString} bucko!`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
displacemnetNumber = Number(input.question('How many letters to move?: '));
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
