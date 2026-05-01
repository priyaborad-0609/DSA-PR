// ⁠Find the next greater element for each element in an array.

function nextGreaterElement(arr) {
    let result = new Array(arr.length).fill(-1);
    let stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }

    return result;
}

// Example
console.log(nextGreaterElement([4, 5, 2, 10])); // [5, 10, 10, -1]