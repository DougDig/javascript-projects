//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  
  function numericalSortArray (inputArrayToSort) {
    let tempArray = [];
    let manipArray = inputArrayToSort.slice(0)
    while (0 < manipArray.length) {
    tempArray.push(findMinValue(manipArray));
    manipArray.splice(manipArray.indexOf(findMinValue(manipArray)),1);
    }
  return tempArray;
  }
  
console.log(nums1)
//Sort each array in ascending order.
console.log(numericalSortArray(nums1))
console.log(numericalSortArray(nums2))
console.log(numericalSortArray(nums3))
//Sort each array in descending order.

function descendingNumericalArraySort (inputArrayToSort2) {
    return numericalSortArray(inputArrayToSort2).reverse();
}

console.log(descendingNumericalArraySort(nums1));
console.log(descendingNumericalArraySort(nums2));
console.log(descendingNumericalArraySort(nums3));
