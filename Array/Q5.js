// ⁠Merge two sorted arrays without using extra space.

function mergeSortedArrays(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    function nextGap(gap) {
        if (gap <= 1) return 0;
        return Math.ceil(gap / 2);
    }

    let gap = nextGap(n + m);

    while (gap > 0) {
        let i = 0;
        let j = gap;

        while (j < n + m) {
            let a, b;

            // get values
            if (i < n) a = arr1[i];
            else a = arr2[i - n];

            if (j < n) b = arr1[j];
            else b = arr2[j - n];

            // swap if needed
            if (a > b) {
                if (i < n && j < n) {
                    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
                } else if (i < n && j >= n) {
                    [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
                } else {
                    [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
                }
            }

            i++;
            j++;
        }

        gap = nextGap(gap);
    }
}

// Example
let arr2 = [1, 4, 7, 8, 10];
let arr3 = [2, 3, 9];

mergeSortedArrays(arr2, arr3);

console.log(arr2); // [1, 2, 3, 4, 7]
console.log(arr3); // [8, 9, 10]