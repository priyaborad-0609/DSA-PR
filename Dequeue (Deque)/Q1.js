// ⁠Implement a deque using an array.

class DequeArray {
    constructor() {
        this.items = [];
    }

    addFront(value) {
        this.items.unshift(value);
    }

    addRear(value) {
        this.items.push(value);
    }

    removeFront() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    removeRear() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    rear() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example
let dq1 = new DequeArray();
dq1.addRear(10);
dq1.addRear(20);
dq1.addFront(5);

console.log(dq1.removeRear());  // 20
console.log(dq1.front());       // 5