// Given a non-empty array of integers and a non-zero integer k, return an array of the k most frequent elements.
// Example:
// Input: nums = [4,4,7,7,7,3], k = 2
// Output: [7,4] because 7 appears the most times(3x), 4 appears 2nd most times (2x)


function twoMostFrequent(arr, int) {
    
    const mostFreq= {};

    for(let i = 0; i < arr.length; i++){
        if (mostFreq[arr[i]]){
             mostFreq[arr[i]]++;
        } else {
            mostFreq[arr[i]] = 1;
        }
    }

    let sortedArray = Object.entries(mostFreq).sort((a, b) => b[1] - a[1]);

    let result = [];

    for(let i = 0; i < int; i++) {
        result.push(parseInt(sortedArray[i][0]));
    }

    return result;

}

const  nums = [4,4,7,7,7,3];
const  k = 2;
console.log(twoMostFrequent(nums, k));

//For example, consider your array nums = [4,4,7,7,7,3]. The mostFreq object, after processing this array, would look like this:
// mostFreq = {
//   '4': 2,
//   '7': 3,
//   '3': 1
// }

// Then Object.entries(mostFreq) would convert it into this array:
// [
//     ['4', 2],
//     ['7', 3],
//     ['3', 1]
// ]

//Each sub-array represents a [key, value] pair from the mostFreq object. 
//Note that the keys in the array are strings because JavaScript converts all object keys to strings. 
//The numbers in the original array are therefore represented as strings in this array of pairs. 
//That's why we later use parseInt to convert them back to integers.

//The array of pairs is later sorted by the count (the second element of each pair) in descending order, 
//so for this example, after sorting, the array would look like this:

//
// [
//     ['7', 3],
//     ['4', 2],
//     ['3', 1]
// ]

// Sorting array starts like this:

// [
//     ['4', 2],
//     ['7', 3],
//     ['3', 1]
// ]
  
//The sort algorithm could start by comparing the first two pairs, ['4', 2] and ['7', 3]. 
//since you're sorting with b[1] - a[1] (descending order), ['7', 3] would come before ['4', 2], so the array would now look like this:

// [
//     ['7', 3],
//     ['4', 2],
//     ['3', 1]
// ]

//Next, it could compare the next pair of elements, which are ['4', 2] and ['3', 1]. 
//Since ['4', 2] has a higher count than ['3', 1], it comes before ['3', 1] in the sorted array:

// [
//     ['7', 3],
//     ['4', 2],
//     ['3', 1]
// ]
  