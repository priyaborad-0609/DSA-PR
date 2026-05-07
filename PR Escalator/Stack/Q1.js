// ⁠⁠Implement a stack using an array.


class StackArray {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example
let stack1 = new StackArray();
stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log(stack1.pop());   // 30
console.log(stack1.peek());  // 20
