//  ⁠Implement Bubble Sort. 

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Example
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]