// ⁠Evaluate a postfix expression.

function evaluatePostfix(expr) {
    let stack = [];

    for (let ch of expr) {
        if (!isNaN(ch)) {
            stack.push(Number(ch));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            switch (ch) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.floor(a / b));
                    break;
            }
        }
    }

    return stack.pop();
}

// Example
console.log(evaluatePostfix("23*5+")); // 11