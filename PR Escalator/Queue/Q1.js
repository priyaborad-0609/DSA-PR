//  ⁠Implement a queue using an array.

class QueueArray {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example
let q1 = new QueueArray();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);

console.log(q1.dequeue()); // 10
console.log(q1.front());   // 20