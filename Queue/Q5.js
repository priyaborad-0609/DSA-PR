// ⁠Generate binary numbers from 1 to n using a queue.

function generateBinaryNumbers(n) {
    let queue = ["1"];
    let result = [];

    for (let i = 0; i < n; i++) {
        let current = queue.shift();
        result.push(current);

        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

// Example
console.log(generateBinaryNumbers(5)); 
// ["1", "10", "11", "100", "101"]