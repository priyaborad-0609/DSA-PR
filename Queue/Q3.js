// ⁠Find the first non-repeating character in a stream.

function firstNonRepeating(stream) {
    let queue = [];
    let freq = {};
    let result = "";

    for (let ch of stream) {
        freq[ch] = (freq[ch] || 0) + 1;
        queue.push(ch);

        while (queue.length && freq[queue[0]] > 1) {
            queue.shift();
        }

        result += queue.length ? queue[0] : "#";
    }

    return result;
}

// Example
console.log(firstNonRepeating("aabc")); // "a#bb"