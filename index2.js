// Given a non-empty array of integers and a non-zero integer k, return an array of the k most frequent elements.
// Example:
// Input: nums = [4,4,7,7,7,3], k = 2
// Output: [7,4] because 7 appears the most times(3x), 4 appears 2nd most times (2x)

function sortedArray(arr, int) {
    
    const mostFreq = {};

    for (let i = 0; i < arr.length; i++) {
        if (mostFreq[arr[i]]){
            mostFreq[arr[i]]++;
        } else {
            mostFreq[arr[i]] = 1;
            // console.log(mostFreq);
        }
    }

    let sortedArray = Object.entries(mostFreq).sort((a, b) => b[1] - a[1]);
    // console.log(sortedArray);

    let result = [];
    for (let i = 0; i < int; i++) {
        result.push(parseInt(sortedArray[i][0]));
    }
    return result;
}

const nums = [4,4,7,7,7,3] 
const k = 2

console.log(sortedArray(nums, k));