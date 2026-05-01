//  ⁠Check if a string is a palindrome using deque.

function isPalindrome(str) {
    let deque = str.split("");

    while (deque.length > 1) {
        if (deque.shift() !== deque.pop()) {
            return false;
        }
    }

    return true;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false