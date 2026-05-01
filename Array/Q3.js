// Remove duplicates from a sorted array in-place.

function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1; 
}

// Example
let arr1 = [1, 1, 2, 2, 3, 4, 4];
let len = removeDuplicates(arr1);

console.log(len);              
console.log(arr1.slice(0, len)); // [1, 2, 3, 4]