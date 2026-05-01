// ⁠Rotate an array to the right by k steps.

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;

    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);

    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// [5, 6, 7, 1, 2, 3, 4]