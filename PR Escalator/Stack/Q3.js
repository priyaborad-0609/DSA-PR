// Check if parentheses are balanced in a string.

function isBalanced(str) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of str) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else if (ch === ')' || ch === '}' || ch === ']') {
            if (stack.pop() !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example
console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false