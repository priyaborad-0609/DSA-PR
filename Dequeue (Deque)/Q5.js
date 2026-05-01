//  ⁠Design a sliding window minimum problem using deque.

function minSlidingWindow(arr, k) {
    let deque = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        while (deque.length && arr[deque[deque.length - 1]] > arr[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}

// Example
console.log(minSlidingWindow([4,2,12,3,-1,6], 3));
// [2,2,-1,-1]