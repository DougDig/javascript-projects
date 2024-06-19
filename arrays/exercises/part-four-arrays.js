let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.
let testArray = ["dogs","hogs","bogs","cogs","pollywogs","trogs","agogs","pogs","flogs","clogs"]
let bestArray = [52,23,47,89]
//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(testArray.concat(bestArray));
console.log(testArray);
console.log(bestArray);
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(testArray.slice(3,5))
console.log(bestArray.slice(0,1))
console.log(testArray)
console.log(bestArray)
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(testArray.reverse())
console.log(testArray)
console.log(bestArray.sort())
console.log(bestArray)