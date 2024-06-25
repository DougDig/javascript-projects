/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
for (let i=0; i<21; i++){
  console.log (i);
}
console.log("new loop");
for (let i=3; i<30; i=(i+2)) {
  console.log (i);
}
console.log("new loop");
for (let i=0; i<27; i=(i+2)) {
  console.log(12-i);
}
let startNum = 50
let endNum = 20
for (let i=startNum; i>endNum; i--) {
  if (i%3 === 0){
    console.log(i);
  }
}
console.log("new loop");
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let launchCode = "LaunchCode";
let bestArray = [1, 5, "LC101", "blue", 42];

for (i=bestArray.length; i>0; i--) {
  console.log(bestArray[bestArray.length - i]);
}
console.log("mischeif managed")

for (i=(launchCode.length-1); i>-1; i--) {
  console.log(launchCode[i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let okArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let okEven = [];
  let okOdd = [];

  for (i=0; i<okArray.length; i++){
    if (okArray[i]%2 === 0) {
      okEven.push(okArray[i]);
    } else {
      okOdd.push(okArray[i]);
    }
  }
  console.log (okArray)
  console.log (okEven)
  console.log (okOdd)